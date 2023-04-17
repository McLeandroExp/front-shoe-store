import dotenv from "dotenv";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import replace from "@rollup/plugin-replace";

dotenv.config();

export default defineConfig({
  plugins: [
    react(),
    replace({
      "process.env.REACT_APP_URL": JSON.stringify(process.env.REACT_APP_URL),
    }),
  ],
});
