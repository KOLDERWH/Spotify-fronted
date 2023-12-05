import styled from "styled-components";

export const AlbumWrapper = styled.div`
display: inline-block;
box-sizing:border-box;
padding: 8px;
.picture{
    img{
        user-select:none;
        border-radius:4px;
        width: 152px;
    }
}
.text{
    text-align: center;
    color:#fff;
    font-weight:500;
    /* font-size:16px; */
    margin-top: 10px;
}
`