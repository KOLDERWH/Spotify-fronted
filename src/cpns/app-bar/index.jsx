import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppBarWrapper } from './style'

import IconHome from "@/assets/svg/Icon-home.jsx"
import IconSearch from "@/assets/svg/Icon-search.jsx"
import IconLibrary from "@/assets/svg/Icon-library.jsx"
import IconApp from "@/assets/svg/Icon-app.jsx"

const AppBar = memo(() => {
    const navigate = useNavigate()
    return (
        <AppBarWrapper>
            <div className="home" onClick={e => navigate("/")}>
                <div className="icon">
                    <IconHome />
                </div>
                <div className="text">home</div>
            </div>
            <div className="search" onClick={e => navigate("/search")}>
                <div className="icon">
                    <IconSearch />
                </div>
                <div className="text">search</div>
            </div>
            <div className="library">
                <div className="icon">
                    <IconLibrary />
                </div>
                <div className="text">lib</div>
            </div>
            <div className="app">
                <div className="icon">
                    <IconApp />
                </div>
                <div className="text">app</div>
            </div>
        </AppBarWrapper>
    )
})

export default AppBar