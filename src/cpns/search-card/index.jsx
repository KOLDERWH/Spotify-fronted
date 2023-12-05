import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SearchCardWrapper } from './style'

const SearchCard = memo((props) => {
    const { cardname, cardurl, cardcolor } = props;
    return (
        <SearchCardWrapper>
            <div>{cardname}</div>
            <img src={cardurl} alt="" />
        </SearchCardWrapper>
    )
})

SearchCard.propTypes = {
    cardname: PropTypes.string,
    cardurl: PropTypes.string,
    cardcolor: PropTypes.string,
}

export default SearchCard