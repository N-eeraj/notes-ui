import '@styles/components/UI/button.css'

const Button = ({ buttonClick, text, loading, disabled, className }) => {
    return (
        <button
            className={`primary-button ${className}`}
            disabled={ disabled || loading }
            onClick={ buttonClick }>
            { loading ? 'Loading...' : text }
        </button>
    )
}

export default Button