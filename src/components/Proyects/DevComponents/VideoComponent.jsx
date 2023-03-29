import React from 'react'
import ReactPlayer from 'react-player'

export default function VideoComponent({ url }) {


    return (
        <ReactPlayer url={url}
            muted={false} controls={true}
            className="react__player"
        />
    )
}
