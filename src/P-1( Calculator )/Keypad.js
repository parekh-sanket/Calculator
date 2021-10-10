import React from 'react'
import './Keypad.css'
export default function Keypad(props) {
    return (
        <div className='Keypad'>
            {props.children}
        </div>
    )
}
