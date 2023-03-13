import { useState } from "react"

const input = ({ stateChanger, ...props }) => {
    return (
        <input
            type={ props.type }
            placeholder={ props.placeholder }
            onInput={ e => stateChanger(e.target.value) } />
    )
}

export default input