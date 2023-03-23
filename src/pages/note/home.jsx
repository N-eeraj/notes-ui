import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Text from '@components/UI/text'
import Button from '@components/UI/button'
import NoteCard from '@components/note/card'

import useAxios from '@hooks/useAxios'

import '@styles/pages/home.css'

const Home = () => {
    const [notes, setNotes] = useState([])
    const [notesCount, setNotesCount] = useState(0)
    const [loading, setLoading] = useState(false)

    const handleFetchNotes = ({ data }) => {
        setNotes(notes => [...notes, ...data.notes])
        setNotesCount(data.total_count)
    }

    const fetchNotes = pageNo => {
        useAxios({
            method: 'get',
            url: `/note/list?page=${pageNo}`,
            setLoading,
            successCallBack: handleFetchNotes
        })
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