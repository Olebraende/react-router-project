import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/react-router-project/", // Viktig! Bruk repo-navnet ditt her
});
