import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    globals: true,
    include: ['./src/**/*.test.ts'],
    exclude: ['./esm', './exercises'],
    passWithNoTests: true,
    typecheck: {
      include: ['./src/**/*.test.ts'],
      exclude: ['./esm', './exercises'],
      enabled: true,
    },
  },
});
