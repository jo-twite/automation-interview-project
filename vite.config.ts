import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['./src/**/*.test.ts'],
    exclude: ['./esm', './exercises'],
    passWithNoTests: true,
    typecheck: {
      include: ['./src/**/*.test.ts'],
      exclude: ['./esm', './exercises'],
      enabled: true,
    },
  },
  plugins: [tsconfigPaths()],
});
