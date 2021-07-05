import { createI18n } from "vue-i18n";
import numberFormats from "./format-numbers";
import dateTimeFormats from "./format-datetime";

import en from "./en.json";
const messages = { en };

export default new createI18n({
    locale: "en",
    fallbackLocale: "en",
    messages,
    numberFormats,
    dateTimeFormats,
});
