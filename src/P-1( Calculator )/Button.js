import React from 'react'
import './Button.css'

export default function Button(props) {
    return (
        <div data-size={props.size} className='button'>
            <button 
                type='button'
                onClick = {props.onClick}
                value = {props.value}
            >{props.label}</button>
        </div>
    )
}
