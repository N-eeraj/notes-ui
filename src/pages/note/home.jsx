import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Text from '@components/UI/text'
import NoteCard from '@components/note/card'

import api from '@axios'
import { toast } from '@toast'

import '@styles/pages/home.css'

const Home = () => {
    const [notes, setNotes] = useState([])
    const [notesCount, setNotesCount] = useState(0)

    const fetchNotes = async () => {
        try {
            const { data } = await api.get('/note/list')
            setNotes(data.data.notes)
            setNotesCount(data.data.total_count)
        }
        catch (err) {
            if (Array.isArray(err?.response?.data?.message)) {
                err.response.data.message
                    .forEach(message => toast.error(message))
            }
            else {
                const message = err?.response?.data?.message || err?.message || 'Oops something went wrong'
                toast.error(message)
            }
        }
    }

    const confirmDelete = id => {
        console.log(id)
    }
    
    useEffect(() => {
        fetchNotes()
    }, [])
    

    return (
        <div className='home-container'>

            <Link
                to='/note/create'
                className='new-note'>
                <Text
                    type='sub-title'
                    content='New Note +' />
            </Link>

            <div className='notes-container'>
                {
                    notes.map(({ id, title, body }) => {
                        return <NoteCard
                            id={ id }
                            title={ title }
                            preview={ body }
                            key={ id }
                            deleteEvent={ id => confirmDelete(id) } />
                    })
                }
            </div>

        </div>
    )
}

export default Home