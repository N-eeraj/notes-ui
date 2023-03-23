import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

import Logo from '@components/logo'

import { toast } from '@toast'
import useAxios from '@hooks/useAxios'
import useSaveToken from '@hooks/useSaveToken'

const Navbar = ({ openChangePassword }) => {
    const navigate = useNavigate()

    const [isOptionsOpen, setIsOptionsOpen] = useState(false)

    const openOptions = (event) => {
        event.stopPropagation()
        setIsOptionsOpen(value => !value)
    }

    const navigateHome = () => navigate('/')

    const handleLogout = () => {
        useAxios({
            method: 'post',
            url: '/logout',
            successCallBack: ({ message }) => {
                useSaveToken(null)
                toast.success(message)
            }
        })
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
                        onClick={ openChangePassword }>
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