import '@styles/components/user-form/decoration.scss'

const Decoration = ({ imagePath }) => {
    return (
        <div className='decoration-container'>
            <img
                src={ imagePath }
                alt='Decoration Image' />
        </div>
    )
}

export default Decoration