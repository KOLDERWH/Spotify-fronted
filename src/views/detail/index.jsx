import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { DetailWrapper } from './style'

import Release from "@/cpns/release"

import IconBack from "@/assets/svg/Icon-back.jsx"
import IconShare from "@/assets/svg/Icon-share.jsx"
import IconMore from "@/assets/svg/Icon-more.jsx"
import IconPlay from "@/assets/svg/Icon-play.jsx"

const Detail = memo((props) => {
    return (
        <DetailWrapper>
            <div className="top">
                <div className="back">
                    <IconBack />
                </div>
            </div>
            <div className="content">
                <div className="avatar">
                    <img src="https://i.scdn.co/image/ab676161000051748944c8aec8db82f35980b191" alt="" />
                </div>
                <div className="author">Twice</div>
                <div className="listeners">9,865,815 monthly listeners</div>
                <div className="action">
                    <div className="left">
                        <div className="follow">
                            <button>Follow</button>
                        </div>
                        <div className="share">
                            <button >
                                <IconShare />
                            </button>
                        </div>
                        <div className="more">
                            <button >
                                <IconMore />
                            </button>
                        </div>
                    </div>
                    <div className="right">
                        <div className="play">
                            <button>
                                <IconPlay />
                            </button>
                        </div>

                    </div>
                </div>
                <div className="info">
                    <span>TWICE The FeelsTWICE MOONLIGHT SUNRISETWICE What is LoveTWICE Talk that TalkTWICE SET ME FREE</span>
                </div>
                <div className="popular">
                    <div className="title">Popular release</div>
                    <div className="album">
                        <Release relpic="https://i.scdn.co/image/ab67616d0000485185567802f7f91610875b2669"
                            relname="THE REMIXES"
                            reltime="Latest Relaase Album"
                        />
                        <Release relpic="https://i.scdn.co/image/ab67616d0000485185567802f7f91610875b2669"
                            relname="THE REMIXES"
                            reltime="Latest Relaase Album"
                        />
                        <Release relpic="https://i.scdn.co/image/ab67616d0000485185567802f7f91610875b2669"
                            relname="THE REMIXES"
                            reltime="Latest Relaase Album"
                        />
                    </div>
                </div>
                <div className="albums">

                </div>
                <div className="songlist">

                </div>
                <div className="link">

                </div>
            </div>

        </DetailWrapper>
    )
})

Detail.propTypes = {}

export default Detail