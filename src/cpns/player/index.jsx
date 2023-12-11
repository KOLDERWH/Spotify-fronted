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

import throttle from "@/hook/throttle.ts"
import formatTime from '@/hook/useFormatTime'

//player
const Player = memo((props) => {
    const [isShowfullplayer, setIsshowfullplayer] = useState(false)
    //播放器
    const musicEle = useRef()
    const seekbarEle = useRef()

    //播放时间
    const [musictime, setMusictime] = useState({now:"00:00", total:"01:00"})
    //播放进度
    const [process, setProcess] = useState({process:0, max:100})

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

    // 进度和播放时间
    useEffect(() => {
        // 当音乐当前播放时间更新时
        musicEle.current && musicEle.current.addEventListener('timeupdate', throttle(() => {
            // 将音乐当前播放时间
            const nowdate = {...musictime,now:formatTime(musicEle.current.currentTime)}
            setMusictime(nowdate)
            // 设置播放进度
            const nowProcess = {...process,process:musicEle.current.currentTime}
            setProcess(nowProcess)
        }, 600), false);
    }, [musictime])

    // 计算音乐总时长和播放结束时的操作
    useEffect(() => {
        musicEle.current && seekbarEle.current && (musicEle.current.onloadeddata = () => {
            
            // 设置进度条最大值为音乐总时长
            const maxProcess = {...process,max:musicEle.current.duration}
            setProcess( maxProcess)
            //设置总时长
            const totaldate = {...musictime,total:formatTime(musicEle.current.duration)}
            setMusictime(totaldate)
        })

        //播放结束
        musicEle.current && musicEle.current.addEventListener('ended', () => {
            setProcess(0)
            const nowdate = {...musictime,now:"0:0"}
            setMusictime(nowdate)
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
                            className="seekbar"
                            step="1" value={process.process}
                            min="0" max={process.max} />
                    </div>
                </div>
                <CSSTransition
                    in={isShowfullplayer}
                    unmountOnExit={true}
                    classNames="fullplayer" timeout={200}>
                    <FullPlayer
                        musicInfo={{process,musictime,isPlaying,isLoved,tractInfo}}
                        downClick={downClick}
                        seekChangeHandle={seekChangeHandle}
                        swtichHandle={swtichHandle} />
                </CSSTransition>

            </div>}
        </PlayerWrapper>
    )
})

const FullPlayer = memo(({ downClick,swtichHandle,musicInfo,seekChangeHandle }) => {
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
                <div className="author">{musicInfo.tractInfo?.name}</div>
                <div className="more">
                    <IconMore />
                </div>
            </div>
            {/* 音乐图片和播放按钮 */}
            <div className="content">
                <div className="pic">
                    <img src={musicInfo.tractInfo?.album?.images[1].url} alt="" />
                </div>
                <div className="container">
                    <div className="top">
                        <div className="name">{musicInfo.tractInfo?.name}</div>
                        <div className="author">{musicInfo.tractInfo?.artists?.[0].name}</div>
                        <div className="icon" onClick={e => swtichHandle(e, "love")}>
                            <SwitchTransition mode='out-in'>
                                <CSSTransition key={musicInfo.isLoved ? "loved" : "love"} classNames="animaSwitch" timeout={200}>
                                    {musicInfo.isLoved ? <IconLoved /> : <IconLove />}
                                </CSSTransition>
                            </SwitchTransition>
                        </div>
                    </div>
                    <div className="control">
                        <input type="range"
                            onChange={e => seekChangeHandle(e)}
                            className="seekbar"
                            step="1" value={musicInfo.process.process}
                            min="0" max={musicInfo.process.max} />
                        <div className="playtime">
                            <span className="current-time">{musicInfo.musictime.now}</span>
                            <span className="duration">{musicInfo.musictime.total}</span>
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
                                <CSSTransition key={musicInfo.isPlaying ? "yes" : "no"} classNames="animaSwitch" timeout={200}>
                                    {musicInfo.isPlaying ? <IconPause /> : <IconPlay />}
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