import '@styles/components/UI/text.scss'

const Text = ({ type, content, className }) => {
    let text
    switch (type) {
        case 'title':
            text = <h1 className={ `text ${className} title` }>{ content }</h1>
            break
        case 'sub-title':
            text = <strong className={ `text ${className} sub-title` }>{ content }</strong>
            break
        default:
            text = <span className={ `text ${className}` }>{ content }</span>
    }
    return text
}

export default Text