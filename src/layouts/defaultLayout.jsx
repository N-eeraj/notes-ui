import { useState } from 'react'
import { Outlet } from 'react-router'

import Navbar from '@components/navbar'
import ChangePassword from '@components/changePassword'

import useRedirect from '@hooks/useRedirect'

import '@styles/layouts/navbar.scss'

const DefaultLayout = () => {
    const [showPassword, setShowPassword] = useState(false)

    useRedirect()

    const toggleChangePassword = () => setShowPassword(value => !value)

    const hasAuthToken = localStorage.authToken

    if (hasAuthToken) {
        return (
            <main id='default_layout'>
                <Navbar openChangePassword={ toggleChangePassword } />

                <Outlet />

                {
                    showPassword &&
                    <ChangePassword closeChangePassword={ toggleChangePassword } />
                }
            </main>
        )
    }
}

export default DefaultLayout