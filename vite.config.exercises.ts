import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    globals: true,
    include: ['./exercises/**/*.ts'],
    exclude: ['./esm', './src'],
    passWithNoTests: true,
    typecheck: {
      include: ['./exercises/**/*.ts'],
      exclude: ['./esm', './src'],
      enabled: true,
    },
  },
});
