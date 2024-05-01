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
                main: "#F4F8FA",
                "midnight-purple": "#423C66",
            },
        },
        screens: {
            mobile: "360px",
            // => @media (min-width: 360px) { ... }
        },
    },
    plugins: [],
};
export default config;
