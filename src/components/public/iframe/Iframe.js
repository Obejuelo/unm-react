import React from 'react';
import Iframe from 'react-iframe'

export default function ({url}) {
    return (
        <Iframe url={url}
            width="100%"
            height="300px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
            allowFullScreen />
    )
}

