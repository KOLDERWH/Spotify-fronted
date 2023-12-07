import styled from "styled-components";

export const PlayerWrapper = styled.div`
>.container{
    .miniplayer{
        padding: 8px;
        height: 56px;
        box-sizing:border-box;
        background: #222;
        border-radius:6px;
        position: relative;
        >.container{
            display: flex;
            justify-content:space-between;
            .left{
                display: flex;
                .pic{
                    width: 40px;
                    height: 40px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .info{
                    margin-left: 10px;
                    display: flex;
                    align-items: center;
                    >.container{
                        .name{
                            font-size:14px;
                            font-weight: 700;
                        }
                        .author{
                            font-size:12px;
                        }
                    }
                }
    
            }
            .icon{
                height: 40px;
                width: 88px;
                display: flex;
                .love,.play-pause{
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    svg{
                        width: 24px;
                        height: 24px;
                    }
                }
            }
        }
        >.control{
            width: 100%;
            position: absolute;
            bottom: 0;
            height: 2px;
            display: flex;
            align-items: center;
            padding: 0 20px;
            box-sizing:border-box;
            >.seekbar{
                cursor: pointer;
                -webkit-appearance: none !important;
                background: #888;
                box-sizing:border-box;
                width: 100%;
                height: 2px;
                overflow: hidden;
                &::-webkit-slider-thumb{
                    -webkit-appearance: none !important;
                    background: #fff;
                    height: 2px;
                    width: 2px;
                    border-radius: 50%;
                    border-image: linear-gradient(#fff,#fff) 0 fill / 8 20 8 0 / 0px 0px 0 1000px;
                }
                /* 轨道颜色  */
                /* &::-webkit-slider-runnable-track{
                    -webkit-appearance: none !important;
                    background: #888;
                    height: 2px;
                    width: 2px;
                    border-radius: 50%;
                } */

                /* &::-moz-range-thumb {
                    background: #fff;
                    height: 2px;
                    width: 2px;
                    border-radius: 50%;
                }
                &::-ms-thumb {
                    background: #fff;
                    height: 2px;
                    width: 2px;
                    border-radius: 100%;
                } */
            }   
        }
    }
 

    >.player{
        z-index:99;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: #000;
        padding: 12px;
        box-sizing:border-box;
        display: flex;
        flex-direction:column;
        >.top{
            display: flex;
            justify-content: space-between;
            margin-bottom: 40px;
            min-width:48px;
            >.down,>.more{
                width: 48px;
                height: 48px;
                padding: 12px;
                box-sizing:border-box;
            }
            >.author{
                text-align: center;
                display: flex;
                align-items: center;
            }
            >.more{
                transform:rotate(90deg)
            }
        }
        >.content{
            flex:1;
            flex-shrink:1;
            flex-basis:0;
            display: flex;
            flex-direction:column;
            min-height: 0;
            .pic{
                flex:3;
                /* max-height: 469px; */
                width: 366px;
                min-height:0;
                /* min-width:10px; */
                max-width: 100%;

                margin: 0 auto;
                margin-bottom: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
                img{
                    border:1px solid #888;
                    width: 100%;
                    object-fit:cover;
                }
            }
            >.container{
                flex:1;
                padding: 20px 0 30px;
                box-sizing:border-box;
                /* margin: 30px; */
                >.top{
                    position: relative;
                    >.name{
                        font-size:24px;
                        font-weight: 700;
                    }
                    .author{
                        color:#aaa;
                    }
                    .icon{
                        position: absolute;
                        right: 0;
                        width: 48px;
                        height: 48px;
                        box-sizing:border-box;
                        padding: 12px;
                        top: 30%;
                    }
                }
                >.control{
                    display: flex;
                    margin: 20px 0;
                    justify-content: center;
                    padding: 0 30px;
                    position: relative;
                    >.seekbar{
                        cursor: pointer;
                        -webkit-appearance: none !important;
                        border-radius:2px;
                        background: #888;
                        width: 100%;
                        height: 3px;
                        overflow: hidden;
                        &::-webkit-slider-thumb{
                            -webkit-appearance: none;
                            background: #fff;
                            height: 3px;
                            width: 3px;
                            border-radius: 50%;
                            //控制条左边
                            border-image: linear-gradient(#fff,#fff) 0 fill / 8 20 8 0 / 0px 0px 0 1000px;
                        }
                    }
                    >.playtime{
                        position: absolute;
                        width: 100%;
                        margin: 3px 0;
                        display: flex;
                        justify-content: space-between;
                    }
                }
                .button{
                    display: flex;
                    justify-content:space-around;
                    align-items: center;
                    /* margin: 30px 0; */
                    >.random,>.cycle{
                        width: 48px;
                        height: 48px;
                        box-sizing:border-box;
                        padding: 12px;
                    }
                    >.play-pause{
                        width: 56px;
                        height: 56px;
                        border-radius:50%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background: #fff;
                        svg{
                            color:#000;
                            width: 24px;
                            height: 24px;
                        }
                    }
                    >.next,>.pre{
                        width: 56px;
                        height: 56px;
                        box-sizing:border-box;
                        padding: 8px;
                        color: #fff;
                    }
                    >.pre{
                        transform:rotate(180deg);
                        color: #999;
                    }
                }
            }
        }
        >.bottom{
            display: flex;
            justify-content:space-between;
            >.phone{
                width: 48px;
                height: 32px;
                box-sizing:border-box;
                padding: 16px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .share{
                width: 32px;
                height: 32px;
                box-sizing:border-box;
                padding: 8px;
            }
        }
    }

    /* 动画 */
    .fullplayer-enter{
        transform:translateY(100%);
        opacity:0;
    }
    .fullplayer-enter-active{
        transform:translateY(0);
        opacity:1;
        transition:all 200ms ease;
    }
    .fullplayer-exit{
        transform:translateY(0);
        opacity:1;
    }
    .fullplayer-exit-active{
        transform:translateY(100%);
        opacity:0;
        transition:all 200ms ease;
    }
    //切换动画
    .animaSwitch-enter{
        transform:scale(1.3);
        opacity:0;
    }
    .animaSwitch-enter-active{
        transform:scale(1);
        opacity:1;
        transition:all 200ms ease;
    }
    .animaSwitch-leave{
        transform:scale(1);
        opacity:1;
    }
    .animaSwitch-leave-active{
        transform:scale(0.5);
        opacity:0;
        transition:all 200ms ease;
    }
}
`