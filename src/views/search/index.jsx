import React, { memo, useEffect } from 'react'

import { SearchWrapper } from './style'

import SearchCard from '@/cpns/search-card'
import IconSearch from "@/assets/svg/Icon-search.jsx"
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchSearchDataAction } from '@/store/modules/search'
import { useNavigate } from 'react-router-dom'

const Search = memo((props) => {
    const dispatch = useDispatch()
    const { pageInfo } = useSelector((state) => ({
        pageInfo: state.search.pageInfo,
    }), shallowEqual)

    useEffect(() => {
        dispatch(fetchSearchDataAction())
    }, [dispatch])
    const navigate = useNavigate()
    return (
        <SearchWrapper>
            <div className="title">Search</div>
            <div className="search">
                <div className="searchbox" onClick={e => navigate("/search/recent")}>
                    <div className="icon">
                        <IconSearch />
                    </div>
                    <div className="text">What do you want to listen to?</div>
                </div>
            </div>
            <div className="borwse">
                {/* {pageInfo.data.title.transformedLabel} */}
                <div className="title">{pageInfo.data?.title.transformedLabel}</div>
                <div className="cardlist">
                    {pageInfo?.sectionItems?.items.map(item => {
                        // console.log(item);
                        const tempCardinfo = item.content.data.data?.cardRepresentation || item.content.data
                        return (<SearchCard
                            key={item.uri}
                            cardname={tempCardinfo.title.transformedLabel}
                            cardcolor={tempCardinfo.backgroundColor.hex}
                            cardurl={tempCardinfo.artwork.sources[0].url} />)
                    })}
                </div>
            </div>
        </SearchWrapper>
    )
})

export default Search