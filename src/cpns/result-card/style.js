import styled from "styled-components";

export const ResultCardWrapper = styled.div`
display: flex;
align-items: center;
margin-bottom: 10px;

>.left{
    width: 48px;
    height: 48px;
    img{
        border-radius:${props => props.resultIsCycle && "50%"};
        /* border-radius:50%; */
        width: 100%;
        height: 100%;
    }
}
>.cardinfo{
    /* display: flex; */
    /* flex-direction:column; */
    justify-content: start;
    padding: 10px;
    box-sizing:border-box;
    >.name{
        display: flex;

        >svg{
            margin-left: 8px;
            width: 16px;
            height: 16px;
        }
    }
    >.source{
        font-size:12px;
        color:#999;
    }
}
`