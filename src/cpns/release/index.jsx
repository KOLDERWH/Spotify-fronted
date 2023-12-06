import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { ReleaseWrapper } from './style'

const Release = memo((props) => {
    const { relpic, relname, reltime } = props;
    return (
        <ReleaseWrapper>
            <div className="left">

                <img src={relpic} alt="" />
            </div>
            <div className="right">
                <div className="name">{relname}</div>
                <div className="time">{reltime}</div>

            </div>
        </ReleaseWrapper>
    )
})

Release.propTypes = {
    relpic: PropTypes.string,
    relname: PropTypes.string,
    reltime: PropTypes.string,
}

export default Release