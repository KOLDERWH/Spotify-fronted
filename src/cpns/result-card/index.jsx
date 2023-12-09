import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { ResultCardWrapper } from './style'

import IconVerified from "@/assets/svg/Icon-verified.jsx"

const ResultCard = memo((props) => {
    const { resultcardurl = "", resultcardname, resultcardsource, resultIsVerfied = false, resultIsCycle = false } = props;
    return (
        <ResultCardWrapper resultIsCycle={resultIsCycle}>
            <div className="left">
                <img src={resultcardurl} alt="" />
            </div>
            <div className="cardinfo">
                <div className="name">
                    <p>{resultcardname}</p>
                    {resultIsVerfied && <IconVerified />}
                </div>
                <div className="source">{resultcardsource}</div>
            </div>
        </ResultCardWrapper>
    )
})

ResultCard.propTypes = {
    resultcardurl: PropTypes.string,
    resultcardname: PropTypes.string,
    resultcardsource: PropTypes.string,
    resultIsVerfied: PropTypes.bool,
    resultIsCycle: PropTypes.bool,
}

export default ResultCard