import { configureStore } from "@reduxjs/toolkit";

import homeReducer from "./modules/home"
import searchReducer from "./modules/search"

const store = configureStore({
    reducer: {
        home: homeReducer,
        search: searchReducer,
    }
})

export default store