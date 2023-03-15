import '@styles/components/UI/text.css'

const Text = ({ type, content }) => {
    let text
    switch (type) {
        case 'title':
            text = <h1 className='text title'>{ content }</h1>
            break
        case 'sub-title':
            text = <strong className='text sub-title'>{ content }</strong>
            break
        default:
            text = <span className='text'>{ content }</span>
    }
    return text
}

export default Text