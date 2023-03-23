import '@styles/components/UI/text.scss'

const Text = ({ type, content, ...props }) => {
    let text
    switch (type) {
        case 'title':
            text = <h1 className={ `text ${props.className} title` }>{ content }</h1>
            break
        case 'sub-title':
            text = <strong className={ `text ${props.className} sub-title` }>{ content }</strong>
            break
        default:
            text = <span className={ `text ${props.className}` }>{ content }</span>
    }
    return text
}

export default Text