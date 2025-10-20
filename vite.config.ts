import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    globals: true,
    include: ['./src/**/*.spec.ts'],
    exclude: ['./esm', './exercises'],
    passWithNoTests: true,
    typecheck: {
      include: ['./src/**/*.spec.ts'],
      exclude: ['./esm', './exercises'],
      enabled: true,
    },
  },
});
