import { configureStore } from "@reduxjs/toolkit";

import homeReducer from "./modules/home"
import searchReducer from "./modules/search"
import searchResultReducer from "./modules/search-result"
import mainReducer from "./modules/main"

const store = configureStore({
    reducer: {
        home: homeReducer,
        search: searchReducer,
        searchresult: searchResultReducer,
        main: mainReducer,
    }
})

export default store