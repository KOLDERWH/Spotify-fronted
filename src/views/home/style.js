import styled from "styled-components";

export const HomeWrapper = styled.div`
color:#fff;
overflow: auto;
>.top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color:#fff;
    font-weight:700;
    padding: 12px;
    font-size:24px;
    .btn{
        width: 48px;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing:border-box;
        padding: 12px;
        .icon{
            width: 24px;
            height: 24px;
        }
    }
}
>.content{
    padding: 0 16px;
    width: 100%;
    div{
        margin-bottom: 10px;
    }
}
.iYxpxA{
    fill: currentcolor;
}
>.setting-menu{
    z-index:3;
    position: fixed;
    top: 0;
    height: 100%;
    width: 100%;
    background: #000;
    >.top{
        position: absolute;
        right: 0;
        width: 24px;
        height: 24px;
        display: flex;
        margin: 10px 10px 0 0 ;
    }
    .main{
        padding: 56px 40px;

        >.top{
            font-size:24px;
            font-weight: 700;
            div{
                margin: 0 0 30px;
            }
        }
        >.bottom{
            font-size:18px;
            font-weight: 700;
            div{
                margin-top: 28px;
            }
        }
    }

}

/* 动画 */
.animaSetting-enter{
    transform:translateX(100%);
    opacity: 0;
}
.animaSetting-enter-active{
    transform:translateX(0);
    opacity: 1;
    transition:all 200ms ease;
}
.animaSetting-exit{
    transform:translateX(0);
    opacity: 1;
}
.animaSetting-exit-active{
    transform:translateX(100%);
    opacity: 0;
    transition:all 200ms ease;
}
`