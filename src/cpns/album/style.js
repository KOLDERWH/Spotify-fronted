import styled from "styled-components";

export const AlbumWrapper = styled.div`
display: inline-block;
box-sizing:border-box;
padding: 8px;
max-width: 168px;
.picture{
    img{
        user-select:none;
        border-radius:4px;
        width: 152px;
        background: #999;
    }
}
.text{
    text-align: center;
    color:#fff;
    font-weight:500;
    /* font-size:16px; */
    margin-top: 10px;

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
`