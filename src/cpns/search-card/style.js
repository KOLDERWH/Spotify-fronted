import styled from "styled-components";

export const SearchCardWrapper = styled.div`
display: inline-block;
margin-bottom: 18px;
width: 48%;

.container{
    background: ${props => props.cardcolor};
    /* width: 171px; */
    /* width: 50%; */
    height: 92px;
    border-radius:4px;
    overflow: hidden;
    position: relative;
    box-sizing:border-box;
    padding: 12px;
    .name{
        font-weight: 700;
    }
    .picture{
        height: 64px;
        width: 64px;
        position: absolute;
        top: 25px;
        left:calc(100% - 45px);
        right:calc(100% - 45px);
        transform:rotate(25deg);
    }
}
`