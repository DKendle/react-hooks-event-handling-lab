import React from 'react'

export default function Keypad() {
    function capture(){
        console.log("Entering password...")
    }

    return (
        <div>
            <input type="password" onChange={capture}></input>
        </div>
    )
}
