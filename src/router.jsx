import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

import UserLayout from '@layouts/userLayout'
import DefaultLayout from '@layouts/defaultLayout'

import Login from '@pages/login'
import Register from '@pages/register'
import Home from '@pages/home'
import Create from '@pages/note/create'
import View from '@pages/note/view'
import Edit from '@pages/note/edit'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route element={ <UserLayout /> }>
                <Route path='/login' element={ <Login /> } />
                <Route path='/register' element={ <Register /> } />
            </Route>
            <Route element={ <DefaultLayout /> }>
                <Route path='/' element={ <Home /> } />
                <Route path='/note/'>
                    <Route path='create' element={ <Create /> } />
                    <Route path=':id' element={ <View /> } />
                    <Route path='edit/:id' element={ <Edit /> } />
                </Route>
            </Route>
        </Route>
    )
)

export default router