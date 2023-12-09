import React, { Fragment, memo, useEffect, useState } from 'react'
import { SearchRecentWrapper } from './style'
import IconBack from "@/assets/svg/Icon-back.jsx"
import IconSearch from "@/assets/svg/Icon-search.jsx"
import { useNavigate } from 'react-router-dom'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchSearchResultAction } from '@/store/modules/search-result'
import ResultCard from '@/cpns/result-card'

const SearchRecent = memo((props) => {
    const navigate = useNavigate()
    const [searchvalue, setSearchValue] = useState("")
    function changeSearch(e) {
        setSearchValue("")
        setSearchValue(e.target.value)
    }
    const { searchResultInfo } = useSelector((state) => ({
        searchResultInfo: state.searchresult.searchResultInfo,
    }), shallowEqual)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchSearchResultAction("ajr"))
    }, [dispatch])
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
                    <input type="text" value={searchvalue} placeholder='What do you want to listen to?' onChange={e => { changeSearch(e) }} />
                </div>
            </div>
            <div className="content">
                {!searchResultInfo.searchV2 && <><div className="tip">Play what you love</div>
                    <div className="info">Search for artists, song, podcasts and more.</div></>}
                {searchResultInfo.searchV2 && Object.keys(searchResultInfo.searchV2).slice(2).map(item => {
                    return <>{
                        searchResultInfo.searchV2[item].items && searchResultInfo.searchV2[item].items.map(cardinfo => {
                            // console.log(cardinfo.data?.__typename, cardinfo.data);
                            switch (cardinfo.data?.__typename) {
                                case "Album":
                                    // console.log("Album", cardinfo.data);
                                    return (<ResultCard key={cardinfo.data.id}
                                        resultcardurl={cardinfo.data.coverArt.sources[0].url}
                                        resultcardname={cardinfo.data.name}
                                        resultcardsource={cardinfo.data.__typename}
                                        resultIsVerfied={cardinfo.data.artists.items[0].profile.verified} />
                                    )
                                case "Artist":
                                    // console.log("Artist", cardinfo.data);
                                    return (<ResultCard key={cardinfo.data.id}
                                        resultcardurl={cardinfo.data.visuals.avatarImage.sources[2].url}
                                        resultcardname={cardinfo.data.profile.name}
                                        resultcardsource={cardinfo.data.__typename}
                                        resultIsVerfied={cardinfo.data.profile.verified}
                                        resultIsCycle={true} />
                                    )
                                case "Playlist":
                                    // console.log("Playlist", cardinfo.data);
                                    return (<ResultCard key={cardinfo.data.id}
                                        resultcardurl={cardinfo.data.images.items[0].sources[0].url}
                                        resultcardname={cardinfo.data.name}
                                        resultcardsource={cardinfo.data.__typename} />
                                    )
                                case "Episode" || "Podcast":
                                    // console.log("Episode", cardinfo.data);
                                    return (<ResultCard key={cardinfo.data.id}
                                        resultcardurl={cardinfo.data.coverArt.sources[1].url}
                                        resultcardname={cardinfo.data.name}
                                        resultcardsource={cardinfo.data.__typename} />
                                    )
                                case "Podcast":
                                    // console.log("Podcast", cardinfo.data);
                                    return (<ResultCard key={cardinfo.data.id}
                                        resultcardurl={cardinfo.data.coverArt.sources[1].url}
                                        resultcardname={cardinfo.data.name}
                                        resultcardsource={cardinfo.data.__typename} />
                                    )
                                case "User":
                                    // console.log("User", cardinfo.data);
                                    return (<ResultCard key={cardinfo.data.id}
                                        resultcardurl={cardinfo.data.avatar?.sources[1].url}
                                        resultcardname={cardinfo.data.name}
                                        resultcardsource={cardinfo.data.__typename} />
                                    )
                                default:
                                    console.log(cardinfo.data);
                                    return null
                            }
                        })
                    }</>
                })}
            </div>
        </SearchRecentWrapper>
    )
})


export default SearchRecent