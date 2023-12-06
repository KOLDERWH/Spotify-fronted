import styled from "styled-components";

export const AppBarWrapper = styled.div`
display: flex;
height: 70px;
background: #000;
/* height: 100%; */
/* justify-content:center; */
text-align: center;
.home,.search,.library,.app{
    flex:1;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    position: relative;
    color:#b3b3b3;
    margin: 10px;
    .text{
        position: absolute;
        bottom: 0;
    }
    .icon{
        width: 24px;
        .iYxpxA{
            fill: currentcolor;
        }
    }
    &.active{
        color:#fff;
    }
}

`