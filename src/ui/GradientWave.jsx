import { useEffect, useRef } from 'react';

const DEFAULT_COLORS = ['#FFFFFF', '#F6F6F4', '#E9E9E6', '#FFFFFF', '#DCDCD8', '#F8F8F6'];
const DEFAULT_FREQUENCY = [0.00008, 0.00045];
const DEFAULT_DEFORM = { incline: 0.15, noiseAmp: 160, noiseFlow: 2.5, noiseSpeed: 5 };

const vertexShader = `
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}`;

const fragmentShader = `
precision mediump float;
varying vec2 vUv;
uniform vec3 uColors[6];
uniform float uTime;
uniform float uShadow;
uniform float uDarkenTop;
uniform float uIncline;
uniform float uNoiseAmp;
uniform float uNoiseFlow;
uniform vec2 uNoiseFrequency;

void main() {
  vec2 p = vUv;
  float drift = uTime * uNoiseFlow * 5.0;
  float waveA = sin((p.x + p.y * uIncline) * (4.0 + uNoiseFrequency.x * 50000.0) + drift);
  float waveB = sin((p.x * 0.72 - p.y) * (3.5 + uNoiseFrequency.y * 12000.0) - drift * 0.68);
  float field = (waveA * 0.56 + waveB * 0.44) * min(uNoiseAmp / 180.0, 1.0);
  float t = clamp(p.x * 0.65 + p.y * 0.35 + field * 0.13, 0.0, 0.9999) * 5.0;
  int index = int(floor(t));
  vec3 color = uColors[0];
  if (index == 0) color = mix(uColors[0], uColors[1], fract(t));
  else if (index == 1) color = mix(uColors[1], uColors[2], fract(t));
  else if (index == 2) color = mix(uColors[2], uColors[3], fract(t));
  else if (index == 3) color = mix(uColors[3], uColors[4], fract(t));
  else color = mix(uColors[4], uColors[5], fract(t));
  float shade = (waveA * waveB) * 0.025 * uShadow;
  color -= vec3(shade + (1.0 - p.y) * uDarkenTop * 0.04);
  gl_FragColor = vec4(color, 1.0);
}`;

function compile(gl, type, source) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function toRgb(hex) {
  const value = hex.replace('#', '');
  return [0, 2, 4].map(index => parseInt(value.slice(index, index + 2), 16) / 255);
}

export default function GradientWave({
  colors = DEFAULT_COLORS,
  className = '',
  isPlaying = true,
  shadowPower = 0.55,
  darkenTop = 0.08,
  noiseSpeed = 0.000004,
  noiseFrequency = DEFAULT_FREQUENCY,
  deform = DEFAULT_DEFORM,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas.parentElement;
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    let gl, vertex, fragment, program, buffer, resizeObserver, visibilityObserver;
    let frame = 0;
    let visible = false;
    let failed = false;
    let elapsed = 0;
    let lastTime = 0;
    let lastDraw = 0;
    const listeners = new AbortController();
    const stop = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      lastTime = 0;
      lastDraw = 0;
    };
    const cleanup = () => {
      stop();
      resizeObserver?.disconnect();
      visibilityObserver?.disconnect();
      listeners.abort();
      if (buffer) gl.deleteBuffer(buffer);
      if (program) gl.deleteProgram(program);
      if (vertex) gl.deleteShader(vertex);
      if (fragment) gl.deleteShader(fragment);
      buffer = program = vertex = fragment = null;
    };
    const fallback = () => {
      failed = true;
      canvas.style.display = 'none';
      cleanup();
    };
    const shouldPlay = () => visible && isPlaying && !motion.matches && !document.hidden && !failed;
    try {
      gl = canvas.getContext('webgl', { alpha: false, antialias: false, powerPreference: 'low-power' });
      if (!gl) { fallback(); return cleanup; }
      vertex = compile(gl, gl.VERTEX_SHADER, vertexShader);
      fragment = compile(gl, gl.FRAGMENT_SHADER, fragmentShader);
      if (!vertex || !fragment) { fallback(); return cleanup; }
      program = gl.createProgram();
      if (!program) { fallback(); return cleanup; }
      gl.attachShader(program, vertex);
      gl.attachShader(program, fragment);
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) { fallback(); return cleanup; }
      buffer = gl.createBuffer();
      if (!buffer) { fallback(); return cleanup; }
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
      gl.useProgram(program);
      const position = gl.getAttribLocation(program, 'position');
      gl.enableVertexAttribArray(position);
      gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
      const palette = colors.slice(0, 6);
      while (palette.length < 6) palette.push(palette.at(-1) || '#FFFFFF');
      palette.forEach((color, index) => gl.uniform3fv(gl.getUniformLocation(program, `uColors[${index}]`), toRgb(color)));
      gl.uniform1f(gl.getUniformLocation(program, 'uShadow'), shadowPower);
      gl.uniform1f(gl.getUniformLocation(program, 'uDarkenTop'), darkenTop);
      gl.uniform1f(gl.getUniformLocation(program, 'uIncline'), deform.incline);
      gl.uniform1f(gl.getUniformLocation(program, 'uNoiseAmp'), deform.noiseAmp);
      gl.uniform1f(gl.getUniformLocation(program, 'uNoiseFlow'), deform.noiseFlow);
      gl.uniform2fv(gl.getUniformLocation(program, 'uNoiseFrequency'), noiseFrequency);
      const timeLocation = gl.getUniformLocation(program, 'uTime');
      const render = () => {
        try {
          gl.uniform1f(timeLocation, elapsed);
          gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        } catch { fallback(); }
      };
      const tick = time => {
        frame = 0;
        if (!shouldPlay()) return;
        if (lastTime) elapsed += Math.min(time - lastTime, 100) * noiseSpeed * (deform.noiseSpeed / 5);
        lastTime = time;
        if (time - lastDraw >= 33) { render(); lastDraw = time; }
        if (shouldPlay()) frame = requestAnimationFrame(tick);
      };
      const start = () => { if (!frame && shouldPlay()) frame = requestAnimationFrame(tick); };
      const resize = () => {
        if (failed) return;
        stop();
        canvas.width = Math.max(1, Math.round(Math.min(parent.clientWidth, 1600)));
        canvas.height = Math.max(1, Math.round(Math.min(parent.clientHeight, 700)));
        gl.viewport(0, 0, canvas.width, canvas.height);
        render();
        start();
      };
      visibilityObserver = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        if (visible) start(); else stop();
      });
      resizeObserver = new ResizeObserver(resize);
      visibilityObserver.observe(parent);
      resizeObserver.observe(parent);
      motion.addEventListener('change', () => {
        stop();
        render();
        start();
      }, { signal: listeners.signal });
      document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); else start(); }, { signal: listeners.signal });
      canvas.addEventListener('webglcontextlost', event => { event.preventDefault(); fallback(); }, { signal: listeners.signal });
      resize();
    } catch {
      fallback();
    }
    return cleanup;
  }, [colors, isPlaying, shadowPower, darkenTop, noiseSpeed, noiseFrequency, deform]);

  return <canvas ref={canvasRef} className={`gradient-wave ${className}`} aria-hidden="true" />;
}
