import '@styles/components/UI/text.css'

const Text = ({ type, content }) => {
    let text
    switch (type) {
        case 'title':
            text = <h1>{ content }</h1>
            break
        case 'sub-title':
            text = <strong>{ content }</strong>
            break
        default:
            text = <span>{ content }</span>
    }
    return text
}

export default Text