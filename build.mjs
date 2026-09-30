import { build } from 'vite';
import { copyFileSync, cpSync, readFileSync, writeFileSync } from 'node:fs';

await build();
for (const name of ['fonts.css', 'styles.css', 'premium.css', 'script.js']) copyFileSync(name, `dist/${name}`);
cpSync('assets', 'dist/assets', { recursive: true });
const html = readFileSync('index.html', 'utf8')
  .replace('src="/src/enhancements.jsx"', 'src="./enhancements.js"');
writeFileSync('dist/index.html', html);
