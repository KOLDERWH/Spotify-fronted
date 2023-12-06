import React, { memo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppBarWrapper } from './style'

import IconHome from "@/assets/svg/Icon-home.jsx"
import IconHomeActive from '@/assets/svg/Icon-home-active'
import IconSearch from "@/assets/svg/Icon-search.jsx"
import IconSearhActive from "@/assets/svg/Icon-search-active.jsx"
import IconLibrary from "@/assets/svg/Icon-library.jsx"
import IconApp from "@/assets/svg/Icon-app.jsx"
import classNames from 'classnames'

const AppBar = memo(() => {
    const navigate = useNavigate()
    const [current, setCurrent] = useState(0)

    const APPBARDATA = [
        { name: "home", classname: "home", icon: <IconHome />, active: <IconHomeActive /> },
        { name: "search", classname: "search", icon: <IconSearch />, active: <IconSearhActive /> },
        { name: "lib", classname: "library", icon: <IconLibrary />, },
        { name: "app", classname: "app", icon: <IconApp /> },
    ]
    function barClickHandle(address, index) {
        navigate(address)
        setCurrent(index)
    }

    return (
        <AppBarWrapper>
            {APPBARDATA.map((item, index) => {
                return (
                    <div key={index}
                        className={classNames(item.classname, { active: current === index })}
                        onClick={e => barClickHandle(item.name, index)} >
                        <div className="icon">
                            {current === index ? item.active || item.icon : item.icon}
                        </div>
                        <div className="text">{item.name}</div>
                    </div>
                )
            })}
        </AppBarWrapper>
    )
})

export default AppBar