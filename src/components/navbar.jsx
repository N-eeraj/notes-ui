import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

import Logo from '@components/logo'

import { toast } from '@toast'
import api from '@axios'
import saveToken from '@utils/saveToken'

const Navbar = () => {
    const navigate = useNavigate()

    const [isOptionsOpen, setIsOptionsOpen] = useState(false)

    const openOptions = (event) => {
        event.stopPropagation()
        setIsOptionsOpen(value => !value)
    }

    const handleChangePassword = () => {
        console.log('handleChangePassword')
    }

    const navigateHome = () => navigate('/')

    const handleLogout = async () => {
        try {
            const { data } = await api.post('/logout')
            if (!data.success) throw null
            saveToken(null)
            toast.success(data.message)
        }
        catch (err) {
            const message = err?.response?.data?.message || err?.message || 'Oops something went wrong'
            toast.error(message)
        }
    }

    useEffect(() => {
        document.addEventListener('click', () => setIsOptionsOpen(false))
        return () => {
            document.removeEventListener('click', null)
        }
    }, [])
    

    return (
        <nav>
            <Logo
                className='logo'
                stateChanger={ navigateHome } />

            <button
                className='profile-icon'
                onClick={ openOptions } />
            
            {
                isOptionsOpen &&
                <ul className="options">
                    <li
                        className='option'
                        onClick={ handleChangePassword }>
                        Change Password
                    </li>
                    <li
                        className='option'
                        onClick={ handleLogout }>
                        Logout
                    </li>
                </ul>
            }
        </nav>
    )
}

export default Navbar