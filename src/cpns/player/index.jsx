import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'
import { PlayerWrapper } from './style'

import IconPlay from "@/assets/svg/Icon-play.jsx"
import IconLove from "@/assets/svg/Icon-love.jsx"
import IconDown from "@/assets/svg/Icon-down.jsx"
import IconMore from "@/assets/svg/Icon-more.jsx"
import IconPause from "@/assets/svg/Icon-pause.jsx"
import IconNext from "@/assets/svg/Icon-next.jsx"
import IconRandom from "@/assets/svg/Icon-random.jsx"
import IconCycle from "@/assets/svg/Icon-cycle.jsx"
import IconPhone from "@/assets/svg/Icon-phone.jsx"
import IconShareV1 from "@/assets/svg/Icon-share-1.jsx"

//player
const Player = memo((props) => {
    const [isShowfullplayer, setIsshowfullplayer] = useState(false)
    const downClick = useCallback(() => {
        setIsshowfullplayer(false)
    }, [])
    return (
        <PlayerWrapper>
            <div className="miniplayer" onClick={e => setIsshowfullplayer(true)}>
                <div className="container">
                    <div className="left">
                        <div className="pic">
                            <img src="https://i.scdn.co/image/ab67616d00001e02d1961ecb307c9e05ec8f7e82" alt="" />
                        </div>
                        <div className="info">
                            <div className="container">
                                <div className="name">The Feels</div>
                                <div className="author">TWICE</div>
                            </div>
                        </div>
                    </div>
                    <div className="icon">
                        <div className="love">
                            <IconLove />
                        </div>
                        <div className="play-pause">
                            <IconPlay />
                        </div>
                    </div>

                </div>
            </div>
            {isShowfullplayer && <FullPlayer downClick={downClick} />}
        </PlayerWrapper>
    )
})

Player.propTypes = {}

const FullPlayer = memo((props) => {
    const { downClick } = props;
    function downClickHandle() {
        downClick()
    }
    return (
        <div className="player">
            <div className="top">
                <div className="down" onClick={downClickHandle}>
                    <IconDown />
                </div>
                <div className="author">Los Cuates de</div>
                <div className="more">
                    <IconMore />
                </div>
            </div>
            <div className="content">
                <div className="pic">
                    <img src="https://i.scdn.co/image/ab67616d00001e02075847ca49448728c67ba9c2" alt="" />
                </div>
                <div className="container">
                    <div className="top">
                        <div className="name">name</div>
                        <div className="author">TWICE</div>
                        <div className="icon">
                            <IconLove />
                        </div>
                    </div>
                    <div className="control">
                        -----------------------------------------
                    </div>
                </div>
                <div className="button">
                    <div className="random">
                        <IconRandom />
                    </div>
                    <div className="pre">
                        <IconNext />
                    </div>
                    <div className="play-pause">
                        <IconPlay />
                    </div>
                    <div className="next">
                        <IconNext />
                    </div>
                    <div className="cycle">
                        <IconCycle />
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="phone">
                    < IconPhone />
                </div>
                <div className="share">
                    <IconShareV1 />
                </div>
            </div>
        </div>
    )
})

export default Player