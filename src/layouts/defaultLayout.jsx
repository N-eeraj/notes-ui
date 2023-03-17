import { Outlet } from 'react-router'

import Navbar from '@components/navbar'

import useRedirect from '@hooks/useRedirect'

import '@styles/layouts/navbar.css'

const DefaultLayout = () => {
    useRedirect()

    const hasAuthToken = localStorage.authToken

    if (hasAuthToken) {
        return (
            <main id='default_layout'>
                <Navbar />
                <Outlet />
            </main>
        )
    }
}

export default DefaultLayout