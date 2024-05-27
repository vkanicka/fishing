import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: "0px 0px 18px .4px rgba(160, 221, 227, 0.1)",
        fog: "0px 0px 18px .4px rgba(0, 0, 0, 0.1)",
      },
      dropShadow: {
        glow: [
          "0 0px 5px #aad5b6",
          "0 0px 65px rgba(255, 255, 255, 0.2)",
          "0 0px 2px rgba(0, 0, 0, 1)"
        ],
        fog: [
          "0 0px 10px #000000",
          "0 0px 2px rgba(0, 0, 0, 1)"
        ]
      }
    },
  },
  plugins: [],
};
export default config;
