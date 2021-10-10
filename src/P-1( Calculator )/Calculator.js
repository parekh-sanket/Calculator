/* please write this code inside App.js:

import React from 'react'
import Calculator from './P-1( Calculator )/Calculator'
export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Wellcome Back, my user</h1>
                <Calculator/>
            </div>
        )
    }
}
*/

import React, { useState } from 'react'
import Button from './Button';
import Display from './Display'
import Keypad from './Keypad';
import './calculator.css'

export default function Calculator() {
    const [data,setData] = useState("");

    const calculate = ()=>{
        try{
            const result = eval(data);
            setData(result);
        }catch(e){
            setData("error");
        }
    }
    const handleClick = e => {
        const value = e.target.value;
        if(value === 'clear'){
            setData('');
        }else if(value === '='){
            calculate();
        }else{
            setData(data+value);
        } 
    }
    return (
        <div className='calculator'>
            <Display data={data}/>
            <Keypad>
                <Button onClick={handleClick} label="(" value="("/>
                <Button onClick={handleClick} label=")" value=")"/>
                <Button onClick={handleClick} label="C" value="clear"/>
                <Button onClick={handleClick} label="%" value="%"/>

                <Button onClick={handleClick} label="7" value="7"/>
                <Button onClick={handleClick} label="8" value="8"/>
                <Button onClick={handleClick} label="9" value="9"/>
                <Button onClick={handleClick} label="X" value="*"/>

                <Button onClick={handleClick} label="1" value="1"/>
                <Button onClick={handleClick} label="2" value="2"/>
                <Button onClick={handleClick} label="3" value="3"/>
                <Button onClick={handleClick} label="+" value="+"/>

                <Button onClick={handleClick} label="0" value="0"/>
                <Button onClick={handleClick} label="." value="."/>
                <Button onClick={handleClick} label="/" value="/"/>
                <Button onClick={handleClick} label="=" value="="/>

            </Keypad>
        </div>
    )
}
