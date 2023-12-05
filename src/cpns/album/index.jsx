import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { AlbumWrapper } from './style'

const Album = memo((props) => {
    const { albumPic, albumName } = props;
    return (
        <AlbumWrapper>
            <div className='picture'>
                <img src={albumPic} alt="" />
            </div>
            <div className="text">
                <a href="">{albumName}</a>
            </div>
        </AlbumWrapper>
    )
})

Album.propTypes = {
    albumPic: PropTypes.string,
    albumName: PropTypes.string,
}

export default Album