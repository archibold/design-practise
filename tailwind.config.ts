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
                "midnight-purple-hover": "#645D93",
                "midnight-purple-pressed": "#241E47",
                salmon: "#FFDBCB",
                "purple-gray": "#595D7B",
                "midnight-grey": "#4D6475",
                "inactive-border": "#E9EEF2",
                "gray-hover": "#F3F5FE",
                "gray-pressed": "#E8EAF2",
                "info-box": "#F4F8FA",
                "button-hover": "#B2A7F41A",
                "button-pressed": "#B2A7F440",
                "summary-color": "#1E2A32",
                "close-active": "#F2D0C1",
                "just-gray": "##BEBEBE",
            },
            dropShadow: {
                card: "0 16px 32px #1E2A3214",
            },
        },
    },
    plugins: [],
};
export default config;
