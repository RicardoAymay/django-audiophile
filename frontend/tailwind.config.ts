import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:{
          "brown-mid": "#D87D4A",
          "beige": "#FBAF85",
          "audio-dark": "#101010",
          "audio-light": "#F1F1F1",
          "audio-lightest": "#FAFAFA"
        }
    },
  },
  plugins: [],
}
};
export default config;
