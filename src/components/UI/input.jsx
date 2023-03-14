import '@styles/components/UI/input.css'

const Input = ({ stateChanger, type, placeholder, focus }) => {
    return (
        <input
            type={ type }
            placeholder={ placeholder }
            onInput={ e => stateChanger(e.target.value) }
            autoFocus={ focus } />
    )
}

export default Input