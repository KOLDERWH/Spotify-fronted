import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SearchWrapper } from './style'

const Search = memo((props) => {
    return (
        <SearchWrapper>
            <div className="title">
                search
            </div>
            <div className="search">
                <input type="text" />
            </div>
            <div className="borwse">
                <div className="title">Browse all</div>

            </div>
        </SearchWrapper>
    )
})

Search.propTypes = {}

export default Search