import React from "react";
import { Navigate } from "react-router-dom";
const Home = React.lazy(() => import("@/views/home"))
const Search = React.lazy(() => import("@/views/search"))

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
        element: <Search />
    },
]
export default route