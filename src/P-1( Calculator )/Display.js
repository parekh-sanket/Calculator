import React from 'react'
import './Display.css'
export default function Display(props) {
    return (
        <div className="display">
            {/* <input type="text" value={props.data}/> */}
            {props.data}
        </div>
    )
}
