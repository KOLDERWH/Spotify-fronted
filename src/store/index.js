import { configureStore } from "@reduxjs/toolkit";

import homeReducer from "./modules/home"
import searchReducer from "./modules/search"
import mainReducer from "./modules/main"

const store = configureStore({
    reducer: {
        home: homeReducer,
        search: searchReducer,
        main: mainReducer,
    }
})

export default store