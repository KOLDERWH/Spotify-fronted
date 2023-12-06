import styled from "styled-components";

export const SearchRecentWrapper = styled.div`
height: 100vh;
background: #111;
padding: 16px;
>.top{
    position: relative;
    >.back{
        color:#fff;
        position: absolute;
        top: 25%;
        left: 0;
        width: 24px;
        height: 24px;
        .dwsrwM{
            fill: currentcolor;
        }
    }
    >.input{
        position: relative;
        margin-left: 30px;
        text-align: center;
        display: flex;
        .icon{
            position: absolute;
            color:#000;
            top: 10px;
            left: 5px;
            height: 24px;
            width: 24px;
            .iYxpxA{
                fill: currentcolor;
            }
        }
        input{
            flex:1;
            padding-left: 30px;
            border-radius:4px;
            height: 38px;
            /* width: 100%; */
            outline:none
        }
    }
}
>.content{
    margin-top: 30px;
    .tip{
        font-weight: 700;
    }
    .info{
        margin-top: 20px;
        font-size:14px;
    }
}
`