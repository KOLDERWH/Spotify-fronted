import styled from "styled-components";

export const AppBarWrapper = styled.div`
display: flex;
height: 100%;
/* justify-content:center; */
text-align: center;
.home,.search,.library,.app{
    flex:1;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    position: relative;
    color:#fff;
    margin: 10px;
    .text{
        position: absolute;
        bottom: 0;
    }
    .icon{
        width: 32px;
        .iYxpxA{
            fill: currentcolor;
        }
    }
}

`