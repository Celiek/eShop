import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Automatycznie otwiera przeglądarkę po uruchomieniu serwera
  },
  build: {
    outDir: "build", // Zmień nazwę folderu wyjściowego na build, aby dopasować do create-react-app
  },
});
