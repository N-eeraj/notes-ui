import { useState } from 'react'

const input = ({ stateChanger, type, placeholder }) => {
    return (
        <input
            type={ type }
            placeholder={ placeholder }
            onInput={ e => stateChanger(e.target.value) } />
    )
}

export default input