import '@styles/components/UI/button.css'

const Button = ({ buttonClick, text, loading, disabled, ...props }) => {
    return (
        <button
            className={` primary-button ${props.className} `}
            disabled={ disabled || loading }
            onClick={ buttonClick }>
            { loading ? 'Loading...' : text }
        </button>
    )
}

export default Button