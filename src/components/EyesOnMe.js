import React from 'react'

export default function EyesOnMe() {
    function focus(){
        console.log("Good!")
    }

    function blur(){
        console.log("Hey! Eyes on me!")
    }



    return (
        <div>
            <button onFocus={focus} onBlur={blur}>Eyes on me</button>
        </div>
    )
}
