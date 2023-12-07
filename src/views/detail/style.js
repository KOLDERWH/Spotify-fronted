import styled from "styled-components";

export const DetailWrapper = styled.div`
/* overflow: auto; */
>.top{
    >.back{
        padding: 20px;
        width: 24px;
        height: 48px;
        color:#fff;
        .dwsrwM{
                fill: currentcolor;
            }
    }
}
>.content{
    padding: 16px;
    >.avatar{
        width: 156px;
        height: 156px;
        margin: 10px auto;
        img{
            width: 100%;
            height: 100%;
            object-fit:cover;
            border-radius:50%;
        }
    }
    >.author{
        margin: 10px 0;
        font-size:32px;
        font-weight: 700;
    }
    .listeners{
        font-size:14px;
        color:#aaa;
    }
    .action{
        display: flex;
        justify-content:space-between;
        margin: 20px -10px 20px 0;
        .left{
            display: flex;
        }
        .follow,.share,.more,.play{
            display: flex;
            align-items: center;
            margin: 10px;
        }
        button{
            background-color: rgba(0,0,0,0);
            border:none;
            color:#aaa;
        }
        .follow{
            button{
                display: flex;
                align-items: center;
                color:#fff;
                font-size:12px;
                font-weight: 700;
                padding: 16px;
                height: 32px;
                border-radius:20px;
                border:1px solid #888;
            }
        }
        .share{
            button{
                width: 24px;
                height: 24px;
                border:none;
                color:#aaa;
            }
        }
        .more{
            button{
                width: 24px;
                height: 24px;
            }
        }
        .play{
            width: 56px;
            height: 56px;
            justify-content: center;
            border-radius:50%;
            background: #1ed760;
            button{
                color:#000;
                width: 24px;
                height: 24px;
            }
        }
    }
    .info{
        text-align: center;
    }
    .popular{
        margin: 10px 0;
        font-size:20px;
        font-weight: 700;
    }
}
`