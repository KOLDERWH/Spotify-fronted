import React, { memo } from 'react'
import { SearchRecentWrapper } from './style'
import IconBack from "@/assets/svg/Icon-back.jsx"
import IconSearch from "@/assets/svg/Icon-search.jsx"
import { useNavigate } from 'react-router-dom'

const SearchRecent = memo((props) => {
    const navigate = useNavigate()
    return (
        <SearchRecentWrapper>
            <div className="top">
                <div className="back" onClick={e => navigate("/search")}>
                    <IconBack />
                </div>
                <div className="input">
                    <div className="icon">
                        <IconSearch />
                    </div>
                    <input type="text" value="What do you want to listen to?" />
                </div>
            </div>
            <div className="content">
                <div className="tip">Play what you love</div>
                <div className="info">Search for artists, song, podcasts and more.</div>
            </div>
        </SearchRecentWrapper>
    )
})


export default SearchRecent