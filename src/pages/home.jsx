import { useEffect } from 'react'

import api from '@axios'
import { toast } from '@toast'

const Home = () => {
    const fetchNotes = async () => {
        try {
            const { data } = await api.get('/note/list')
            console.log(data)
        }
        catch (err) {
            const message = err?.response?.data?.message || err?.message || 'Oops something went wrong'
            toast.error(message)
        }
    }
    
    useEffect(() => {
        fetchNotes()
    }, [])
    

    return (
        <h1>
            Home
        </h1>
    )
}

export default Home