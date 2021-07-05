import { createStore } from "vuex";

import moduleApp from "./modules/app";

export default createStore({
    strict: !import.meta.env.PROD,
    modules: {
        app: moduleApp,
    },
});
