import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'

import { HomeWrapper } from './style'
import Album from '@/cpns/album'
import IconSet from "@/assets/svg/Icon-set.jsx"
import IconClose from "@/assets/svg/Icon-close.jsx"
import ScrollView from '@/base-ui/scroll-view'

const Home = memo((props) => {
    const [isShowSettingMenu, setIsShowSet] = useState(false)
    const setClickHandle = useCallback((value) => {
        setIsShowSet(value)
    }, [])
    return (
        <HomeWrapper>
            <div className="top" >
                <span>Good eveving</span>
                <div className="btn">
                    <div className="icon" onClick={e => setClickHandle(true)}>
                        <IconSet />
                    </div>
                </div>
            </div>
            {isShowSettingMenu && <SettingMenu setClickHandle={setClickHandle} />}
            {/* <h2>Your top mixes</h2> */}
            <div className="content">
                <ScrollView title={"Your top mixes"}>
                    {[1, 2, 3].map(item => {
                        return <Album albumPic={"https://i.scdn.co/image/ab67616d00001e027f73af33f2b3848776728d2f"}
                            albumName={"I'm OK (Reimagined)"} />
                    })}
                </ScrollView>
            </div>

        </HomeWrapper>
    )
})

Home.propTypes = {}


const SettingMenu = memo((props) => {
    const { setClickHandle } = props;
    function closeCLickHandle() {
        setClickHandle(false)
    }
    return (
        <div className="setting-menu">
            <div className="top" onClick={closeCLickHandle}>
                <IconClose />
            </div>
            <div className="main">
                <div className="top">
                    <div className="viewaccount">
                        <a href="">View Account</a>
                    </div>
                    <div className="profile">
                        <a href="">Profile</a>
                    </div>
                    <div className="logout">
                        <a href="">Log Out</a>
                    </div>
                </div>
                <div className="bottom">
                    <div className="premium">
                        <a href="">Premium</a>
                    </div>
                    <div className="support">
                        <a href="">Support</a>
                    </div>
                    <div className="download">
                        <a href="">Download</a>
                    </div>
                    <div className="privacy">
                        <a href="">Privacy</a>
                    </div>
                    <div className="terms">
                        <a href="">Terms</a>
                    </div>
                </div>
            </div>
        </div>
    )
})


export default Home

