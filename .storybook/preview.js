import "../src/main.css"; // Tailwindcss
import { app } from "@storybook/vue3";
import i18n from "../src/lang/i18n.js";

app.use(i18n);

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
