import { defineConfig } from "vite";

let root = __dirname;

export default defineConfig({
  mode: process.env.MODE,
  root,
  build: {
    outDir: "build",
    emptyOutDir: true,
  },
});
