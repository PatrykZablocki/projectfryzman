import React from "react"

import '../../styles/scroll-down-button.scss'

const ScrollDownButton = ({children})  => (
    <div className='scroll-down-button'>
        <div className='children'>{children}</div>
        <span className='arrow-box'>
            <span className='arrow' />
        </span>
    </div>
)

export default ScrollDownButton