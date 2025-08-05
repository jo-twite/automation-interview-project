import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['./exercises/**/*.ts'],
    exclude: ['./esm', './src'],
    passWithNoTests: true,
    typecheck: {
      include: ['./exercises/**/*.ts'],
      exclude: ['./esm', './src'],
      enabled: true,
    },
  },
  plugins: [tsconfigPaths()],
});
