import { Link } from 'react-router-dom'

import Text from '@components/UI/text'

import '@styles/components/user-form/invite.css'

const Invite = ({ prompt, route, linkText }) => {
    return (
        <div className='invite'>
            <Text content={ prompt } />

            <Link
                to={ route }
                className='link'>
                { linkText }
            </Link>
        </div>
    )
}

export default Invite