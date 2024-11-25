import { defineConfig } from "tsup";

export default defineConfig({
    entry: ['src/**/*.ts'],
    format: ["cjs", "esm"],
    dts: true,
    splitting: true,
    sourcemap: true,
    outDir: 'dist',
    target: 'es2020',
    clean: true,
});