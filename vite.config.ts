import { defineConfig, lazyPlugins } from "vite-plus";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  fmt: {},
  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: { "vite-plus/prefer-vite-plus-imports": "error" },
    options: { typeAware: true, typeCheck: true },
  },
  plugins: lazyPlugins(() => [react()]),
  build: {
    rolldownOptions: {
      output: {
        manualChunks(id) {
          if (/[\\/]node_modules[\\/](react|react-dom)[\\/]/.test(id)) {
            return "react-vendor";
          }
        },
        minify: {
          compress: {
            dropConsole: true,
            dropDebugger: true,
          },
        },
      },
    },
  },
});
