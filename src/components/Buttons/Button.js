import React from "react"

import '../../styles/button.scss'

export const PrimaryButton = ({children})  => (
    <div className='btn btn--primary'>
        {children}
    </div>
)

export const SecondaryButton = ({children})  => (
    <div className='btn btn--secondary'>
        {children}
    </div>
)



