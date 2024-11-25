import { defineConfig } from "tsup";

export default defineConfig({
    entry: ['src/index.ts'], // Explicit entry point
    format: ["cjs", "esm"], // Build both CommonJS and ESM
    dts: true, // Generate TypeScript declarations
    sourcemap: true, // Generate source maps
    outDir: 'dist', // Output directory
    target: 'es2020',
    splitting: false, // Disable splitting for libraries
    clean: true,
    minify: true, // Optional: Minify the output
});
