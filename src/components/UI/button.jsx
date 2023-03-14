import '@styles/components/button.css'

const Button = ({ stateChanger, text }) => {
    return (
        <button onClick={ stateChanger }>
            { text }
        </button>
    )
}

export default Button