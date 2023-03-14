import '@styles/components/UI/button.css'

const Button = ({ stateChanger, text, loading, disabled }) => {
    return (
        <button
            disabled={ disabled || loading }
            onClick={ stateChanger }>
            { loading ? 'Loading...' : text }
        </button>
    )
}

export default Button