import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import GradientWave from './GradientWave.jsx';

const colors = ['#FFFFFF', '#F8F8F6', '#EFEFED', '#FFFFFF', '#E2E2DE', '#F5F5F2'];
const noiseFrequency = [0.00008, 0.00045];
const deform = { incline: 0.15, noiseAmp: 160, noiseFlow: 2.5, noiseSpeed: 5 };

class WaveFallback extends Component {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? null : this.props.children; }
}

export function mountGradientWave(element) {
  createRoot(element).render(
    <WaveFallback>
      <GradientWave colors={colors} noiseSpeed={0.000004} noiseFrequency={noiseFrequency} deform={deform} shadowPower={0.45} darkenTop={0.04} />
    </WaveFallback>
  );
}
