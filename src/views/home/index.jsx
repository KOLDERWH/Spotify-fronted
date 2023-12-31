import React, { memo, useCallback, useEffect, useState } from 'react'
import { CSSTransition } from "react-transition-group"

import { HomeWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '@/store/modules/home'

import Album from '@/cpns/album'
import IconSet from "@/assets/svg/Icon-set.jsx"
import IconClose from "@/assets/svg/Icon-close.jsx"
import ScrollView from '@/base-ui/scroll-view'

const Home = memo((props) => {
    const [isShowSettingMenu, setIsShowSet] = useState(false)
    const setClickHandle = useCallback((value) => {
        setIsShowSet(value)
    }, [])

    const { homeInfo } = useSelector((state) => ({
        homeInfo: state.home.homeInfo,
    }), shallowEqual)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchHomeDataAction())
    }, [dispatch])
    return (<HomeWrapper>
        <div className="top" >
            <span>{homeInfo?.greeting?.transformedLabel}</span>
            <div className="btn">
                <div className="icon" onClick={e => setClickHandle(true)}>
                    <IconSet />
                </div>
            </div>
        </div>
        <CSSTransition in={isShowSettingMenu} unmountOnExit={true} classNames="animaSetting" timeout={200}>
            <SettingMenu setClickHandle={setClickHandle} />
        </CSSTransition>
        <div className="content">
            {homeInfo?.sectionContainer?.sections.items.map(item => {
                return (
                    < ScrollView key={item.uri} title={item.data.title?.transformedLabel || null} >
                        {item.sectionItems.items.map(alb => {
                            const albtemp = alb.content.data || null;
                            switch (albtemp?.__typename) {
                                case "Album":
                                    // console.log(albtemp);
                                    // console.log("Album", albtemp?.name);
                                    return (albtemp && < Album key={albtemp.uri} albumPic={albtemp.coverArt?.sources[0].url}
                                        albumName={albtemp?.name} />)
                                case "Playlist":
                                    // console.log(albtemp);
                                    // console.log("Playlist", albtemp?.name);
                                    return (albtemp && < Album key={albtemp.uri} albumPic={albtemp.images?.items[0].sources[0].url}
                                        albumName={albtemp?.name} />)
                                case "Artist":
                                    // console.log(albtemp);
                                    // console.log("Artist", albtemp?.name);
                                    return (albtemp && < Album key={albtemp.uri} albumPic={albtemp.visuals.avatarImage.sources[2].url}
                                        albumName={albtemp?.profile.name} />)
                                case "Episode":
                                    // console.log(albtemp);
                                    // console.log("Episode", albtemp?.name);
                                    return (albtemp && < Album key={albtemp.uri} albumPic={albtemp.coverArt?.sources[1].url}
                                        albumName={albtemp?.name} />)
                                default:
                                    // console.log(albtemp);
                                    // console.log("Other", albtemp?.name);
                                    return null
                            }
                        })
                        }
                    </ScrollView>

                )
            })}
            {/* <ScrollView title={"Your top mixes"}>
                    {[1, 2, 3].map(item => {
                        return <Album albumPic={"https://i.scdn.co/image/ab67616d00001e027f73af33f2b3848776728d2f"}
                            albumName={"I'm OK (Reimagined)"} />
                    })}
                </ScrollView> */}
        </div>
    </HomeWrapper >)
})


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
                        <a href="#">View Account</a>
                    </div>
                    <div className="profile">
                        <a href="#">Profile</a>
                    </div>
                    <div className="logout">
                        <a href="#">Log Out</a>
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

