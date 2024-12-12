import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { readdirSync } from 'fs';

const absolutePathAliases: { [key: string]: string } = {};
// Root resources folder
const srcPath = path.resolve('./src');
const srcRootContent = readdirSync(srcPath, { withFileTypes: true }).map(dirent =>
  dirent.name.replace(/(\.ts|\.js)(x?)/, ''),
);

srcRootContent.forEach(directory => {
  absolutePathAliases[directory] = path.join(srcPath, directory);
});

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      ...absolutePathAliases,
    },
  },
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['legacy-js-api', 'import'],
      },
    },
  },
});
