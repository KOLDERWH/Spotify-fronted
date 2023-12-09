import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import { PlayerWrapper } from './style'

import IconPlay from "@/assets/svg/Icon-play.jsx"
import IconLove from "@/assets/svg/Icon-love.jsx"
import IconLoved from "@/assets/svg/Icon-loved.jsx"
import IconDown from "@/assets/svg/Icon-down.jsx"
import IconMore from "@/assets/svg/Icon-more.jsx"
import IconPause from "@/assets/svg/Icon-pause.jsx"
import IconNext from "@/assets/svg/Icon-next.jsx"
import IconRandom from "@/assets/svg/Icon-random.jsx"
import IconCycle from "@/assets/svg/Icon-cycle.jsx"
import IconPhone from "@/assets/svg/Icon-phone.jsx"
import IconShareV1 from "@/assets/svg/Icon-share-1.jsx"
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { changeIsLove, changeIsPlay, fetchMainDataAction } from '@/store/modules/main'

import throttle from "@/hook/throttle.js"
import formatTime from '@/hook/useFormatTime'

//player
const Player = memo((props) => {
    const [isShowfullplayer, setIsshowfullplayer] = useState(false)

    const [process, setProcess] = useState(0)
    const [maxvalue, setMaxvalue] = useState(100)
    //播放器
    const musicEle = useRef()
    const seekbarEle = useRef()

    //音乐的时间
    const [currenttime, setCurrenttime] = useState("0:0")
    const [totalTime, setTotalTime] = useState("1:0")

    // 轨道信息，是否显示全屏播放器
    const { isPlaying, isLoved, tractInfo, isShowPlayer } = useSelector((state) => ({
        isPlaying: state.main.isPlaying,
        isLoved: state.main.isLoved,
        tractInfo: state.main.tractInfo,
        isShowPlayer: state.main.isShowPlayer,
    }), shallowEqual)

    // 关闭全屏显示
    const downClick = useCallback(() => {
        setIsshowfullplayer(false)
    }, [])

    const dispatch = useDispatch()
    // 播放信息
    useEffect(() => {
        dispatch(fetchMainDataAction())
    }, [dispatch])

    // 进度条和播放时间
    useEffect(() => {
        // 当音乐当前播放时间更新时
        musicEle.current && (musicEle.current.addEventListener("timeupdate", throttle(() => {
            setProcess(musicEle.current.currentTime)
        }, 500)))

        musicEle.current && musicEle.current.addEventListener('timeupdate', throttle(() => {
            // 将音乐当前播放时间格式化为分钟和秒，并在HTML中显示出来
            setCurrenttime(formatTime(musicEle.current.currentTime))
        }, 600), false);
    }, [])

    // 计算音乐总时长和播放结束时的操作
    useEffect(() => {
        musicEle.current && seekbarEle.current && (musicEle.current.onloadeddata = () => {
            // 设置进度条最大值为音乐总时长
            setMaxvalue(musicEle.current.duration)
            setTotalTime(formatTime(musicEle.current.duration))
        })

        //播放结束
        musicEle.current && musicEle.current.addEventListener('ended', () => {
            setProcess(0)
            setCurrenttime("0:0")
            dispatch(changeIsPlay(!isPlaying));
        });
    })

    // 切换喜欢/播放
    const swtichHandle = useCallback((e, type) => {
        e.stopPropagation()
        switch (type) {
            case "love":
                return dispatch(changeIsLove(!isLoved));
            case "play":
                if (musicEle.current.paused) {
                    musicEle.current.play()
                }
                else {
                    musicEle.current.pause();
                }
                return dispatch(changeIsPlay(!isPlaying));
            default:
                return
        }

    }, [isPlaying, isLoved, dispatch])

    const seekChangeHandle = useCallback((e) => {
        musicEle.current.currentTime = e.target.value;
    }, [])

    return (
        <PlayerWrapper>
            {isShowPlayer && tractInfo && <div className='container'>
                <div className="miniplayer" onClick={e => setIsshowfullplayer(true)}>
                    {/* 图片和播放喜欢按钮以及音乐信息 */}
                    <div className="container">
                        <div className="left">
                            <div className="pic">
                                <img src={tractInfo?.album?.images[2].url} alt="" />
                            </div>
                            <div className="info">
                                <div className="container">
                                    <div className="name">{tractInfo?.name}</div>
                                    <div className="author">{tractInfo?.artists?.[0].name}</div>
                                </div>
                            </div>
                        </div>
                        {/* 喜欢和播放图标 */}
                        <div className="icon">
                            <div className="love" onClick={e => swtichHandle(e, "love")}>
                                <SwitchTransition mode='out-in'>
                                    <CSSTransition key={isLoved ? "loved" : "love"} classNames="animaSwitch" timeout={200}>
                                        {isLoved ? <IconLoved /> : <IconLove />}
                                    </CSSTransition>
                                </SwitchTransition>
                            </div>

                            <div className="play-pause" onClick={e => swtichHandle(e, "play")}>
                                <SwitchTransition mode='out-in'>
                                    <CSSTransition key={isPlaying ? "yes" : "no"} classNames="animaSwitch" timeout={200}>
                                        {isPlaying ? <IconPause /> : <IconPlay />}
                                    </CSSTransition>
                                </SwitchTransition>
                            </div>
                        </div>

                    </div>
                    {/* 进度条 */}
                    <div className="control">
                        <audio ref={musicEle} src={tractInfo.album.music}></audio>
                        {/* 进度条 */}
                        <input type="range"
                            ref={seekbarEle}
                            // onChange={e => seekChangeHandle(e)}
                            class="seekbar"
                            step="1" value={process}
                            min="0" max={maxvalue} />
                    </div>
                </div>
                <CSSTransition
                    in={isShowfullplayer}
                    unmountOnExit={true}
                    classNames="fullplayer" timeout={200}>
                    <FullPlayer
                        process={process}
                        currenttime={currenttime}
                        totalTime={totalTime}
                        maxvalue={maxvalue}
                        tractInfo={tractInfo}
                        isPlaying={isPlaying}
                        isLoved={isLoved}
                        downClick={downClick}
                        seekChangeHandle={seekChangeHandle}
                        swtichHandle={swtichHandle} />
                </CSSTransition>

            </div>}
        </PlayerWrapper>
    )
})

const FullPlayer = memo((props) => {
    const { downClick, isPlaying,
        isLoved, swtichHandle,
        currenttime, totalTime,
        tractInfo, maxvalue,
        process, seekChangeHandle } = props;
    // 隐藏滚动条
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        }
    }, [])
    return (
        <div className="player">
            {/* 关闭全屏播放器 */}
            <div className="top">
                <div className="down" onClick={downClick}>
                    <IconDown />
                </div>
                <div className="author">{tractInfo?.name}</div>
                <div className="more">
                    <IconMore />
                </div>
            </div>
            {/* 音乐图片和播放按钮 */}
            <div className="content">
                <div className="pic">
                    <img src={tractInfo?.album?.images[1].url} alt="" />
                </div>
                <div className="container">
                    <div className="top">
                        <div className="name">{tractInfo?.name}</div>
                        <div className="author">{tractInfo?.artists?.[0].name}</div>
                        <div className="icon" onClick={e => swtichHandle(e, "love")}>
                            <SwitchTransition mode='out-in'>
                                <CSSTransition key={isLoved ? "loved" : "love"} classNames="animaSwitch" timeout={200}>
                                    {isLoved ? <IconLoved /> : <IconLove />}
                                </CSSTransition>
                            </SwitchTransition>
                        </div>
                    </div>
                    <div className="control">
                        <input type="range"
                            onChange={e => seekChangeHandle(e)}
                            class="seekbar"
                            step="1" value={process}
                            min="0" max={maxvalue} />
                        <div className="playtime">
                            <span class="current-time">{currenttime}</span>
                            <span class="duration">{totalTime}</span>
                        </div>
                    </div>
                    <div className="button">
                        <div className="random">
                            <IconRandom />
                        </div>
                        <div className="pre">
                            <IconNext />
                        </div>
                        <div className="play-pause" onClick={e => swtichHandle(e, "play")}>
                            <SwitchTransition mode='out-in'>
                                <CSSTransition key={isPlaying ? "yes" : "no"} classNames="animaSwitch" timeout={200}>
                                    {isPlaying ? <IconPause /> : <IconPlay />}
                                </CSSTransition>
                            </SwitchTransition>
                        </div>
                        <div className="next">
                            <IconNext />
                        </div>
                        <div className="cycle">
                            <IconCycle />
                        </div>
                    </div>
                </div>
            </div>
            {/* 分享 */}
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