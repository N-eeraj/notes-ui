import Text from '@components/UI/text'

import '@styles/components/user-form/welcome.css'

const Welcome = ({ title, text }) => {
    return (
        <div className='welcome'>
            <Text
                type='title'
                content={ title } />

            <Text content={ text } />
        </div>
    )
}

export default Welcome