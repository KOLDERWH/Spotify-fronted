import styled from "styled-components";

export const PlayerWrapper = styled.div`
.miniplayer{
    padding: 8px;
    height: 56px;
    box-sizing:border-box;
    background: #888;
    border-radius:6px;
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
}
>.player{
    z-index:10;
    position: fixed;
    top: 0;
    height: 100%;
    width: 100%;
    background: #000;
    padding: 12px;
    box-sizing:border-box;
    >.top{
        display: flex;
        justify-content: space-between;
        margin-bottom: 40px;
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
        .pic{
            height: 469px;
            width: 366px;
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
            margin: 30px;
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
            }
        }
        .button{
            display: flex;
            justify-content:space-around;
            align-items: center;
            margin: 30px 0;
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
`