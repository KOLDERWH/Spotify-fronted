import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SearchCardWrapper } from './style'

const SearchCard = memo((props) => {
    const { cardname, cardurl, cardcolor } = props;
    return (
        <SearchCardWrapper cardcolor={cardcolor}>
            <div className="container">
                <div className='name'>{cardname}</div>
                <img className='picture' src={cardurl} alt="" />
            </div>
        </SearchCardWrapper>
    )
})

SearchCard.propTypes = {
    cardname: PropTypes.string,
    cardurl: PropTypes.string,
    cardcolor: PropTypes.string,
}

export default SearchCard