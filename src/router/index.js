import React from "react";
import { Navigate } from "react-router-dom";
const Home = React.lazy(() => import("@/views/home"))
const Search = React.lazy(() => import("@/views/search"))
const SearchRecent = React.lazy(() => import("@/views/search/cpns/search-recent"))

const route = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/home",
        element: <Navigate to="/" />
    },
    {
        path: "/search",
        element: <Search />,
    },
    {
        path: "/search/recent",
        element: <SearchRecent />,
    },
]
export default route