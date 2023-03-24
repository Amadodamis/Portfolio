import React from 'react'
import ReactPlayer from 'react-player'

export default function VideoComponent() {

    let url = "https://youtu.be/zkKm5XtDtOs"

    return (
        <ReactPlayer url={url}
            muted={false} controls={true}
            className="react__player"
             />
    )
}
