import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'

import Navbar from '@components/navbar'

import useRedirect from '@hooks/useRedirect'

import '@styles/layouts/navbar.css'

const DefaultLayout = () => {
    const navigate = useNavigate()

    useRedirect()

    return (
        <main id='default_layout'>
            <Navbar />

            <Outlet />
        </main>
    )
}

export default DefaultLayout