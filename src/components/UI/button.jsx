import '@styles/components/UI/button.css'

const Button = ({ stateChanger, text, loading, disabled, ...props }) => {
    return (
        <button
            className={` primary-button ${props.className} `}
            disabled={ disabled || loading }
            onClick={ stateChanger }>
            { loading ? 'Loading...' : text }
        </button>
    )
}

export default Button