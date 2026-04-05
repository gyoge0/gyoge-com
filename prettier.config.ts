import type { Config } from "prettier";

const config: Config = {
    plugins: ["prettier-plugin-tailwindcss"],
    tailwindStylesheet: "./src/style.css",
    htmlWhitespaceSensitivity: "ignore",
};

export default config;
