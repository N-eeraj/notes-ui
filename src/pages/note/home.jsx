import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Text from '@components/UI/text'
import Button from '@components/UI/button'
import NoteCard from '@components/note/card'

import api from '@axios'
import { toast } from '@toast'

import '@styles/pages/home.css'

const Home = () => {
    const [notes, setNotes] = useState([])
    const [notesCount, setNotesCount] = useState(0)
    const [loading, setLoading] = useState(false)

    const fetchNotes = async pageNo => {
        setLoading(true)
        try {
            const { data } = await api.get(`/note/list?page=${pageNo}`)
            setNotes(notes => [...notes, ...data.data.notes])
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
        finally {
            setLoading(false)
        }
    }

    const confirmDelete = id => {
        console.log('Delete', id)
    }

    const loadNotes = () => {
        if (notes.length < notesCount)
            fetchNotes(Math.ceil(notes.length / 5) + 1)
    }

    useEffect(() => {
        fetchNotes(1)
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

            {
                notes.length < notesCount &&
                <Button
                    text='Load More'
                    className='load-notes'
                    loading={ loading }
                    buttonClick={ loadNotes } />
            }
        </div>
    )
}

export default Home