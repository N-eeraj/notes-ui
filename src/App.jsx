import { RouterProvider  } from 'react-router-dom'

import router from '@/router'

import '@styles/app.css'

const App = () => {
    return (
        <RouterProvider router={ router } />
    )
}

export default App