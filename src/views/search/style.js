import styled from "styled-components";

export const SearchWrapper = styled.div`
padding: 16px;
font-weight: 700;
>.title{
    font-size:32px;
    margin: 32px 0 16px 0;
}
>.search{
    margin: 20px 0;
    >.searchbox{
        padding: 0 16px;
        background: #fff;
        border-radius:4px;
        height: 45px;
        text-align: center;
        display: flex;
        align-items: center;
        .icon{
            width: 24px;
            height: 24px;
        }
        .text{
            font-weight: 500;
            margin-left: 8px;
            color: #000;
        }
    }
}
>.borwse{
    >.title{
        margin: 30px 0;
    }
    >.cardlist{
        display: flex;
        flex-wrap:wrap;
        justify-content:space-between;
    }
}
`