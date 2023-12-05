import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { ScrollViewWrapper } from './style'

const ScrollView = memo((props) => {
    const { title } = props;
    return (<ScrollViewWrapper>
        {title && <div className='title'>{title}</div>}
        <div className="content">
            {props.children}
        </div>
    </ScrollViewWrapper>)
})

ScrollView.propTypes = {
    title: PropTypes.string,
}

export default ScrollView