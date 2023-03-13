import { createBrowserRouter } from 'react-router-dom'

import Login from '@pages/login'
import Register from '@pages/register'
import Home from '@pages/home'
import Create from '@pages/note/create'
import View from '@pages/note/view'
import Edit from '@pages/note/edit'

export const routes = createBrowserRouter([
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/note/create',
        element: <Create />
    },
    {
        path: '/note/:id',
        element: <View />
    },
    {
        path: '/note/edit/:id',
        element: <Edit />
    }
])