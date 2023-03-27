import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Text from '@components/UI/text'
import Button from '@components/UI/button'
import NoteCard from '@components/note/card'
import Modal from '@components/UI/modal'

import useAxios from '@hooks/useAxios'
import { toast } from '@toast'

import '@styles/pages/home.scss'

const Home = () => {
    const [notes, setNotes] = useState([])
    const [notesCount, setNotesCount] = useState(0)
    const [loadingNotes, setLoadingNotes] = useState(false)
    
    const [selectedNote, setSelectedNote] = useState(null)
    const [loadingDelete, setLoadingDelete] = useState(false)

    const handleFetchNotes = ({ data }) => {
        setNotes(notes => [...notes, ...data.notes])
        setNotesCount(data.total_count)
    }

    const fetchNotes = pageNo => {
        useAxios({
            method: 'get',
            url: `/note/list?page=${pageNo}`,
            setLoading: setLoadingNotes,
            successCallBack: handleFetchNotes
        })
    }

    const confirmDelete = id => {
        setSelectedNote(id)
    }

    const closeConfirmDelete = () => {
        setSelectedNote(null)
    }

    const hanldleNoteDelete = ({ message }) => {
        toast.success(message)
        setNotes(notes => notes.filter(({ id }) => id !== selectedNote))
        closeConfirmDelete()
    }

    const deleteNote = () => {
        useAxios({
            method: 'delete',
            url: `/note/delete/${selectedNote}`,
            setLoading: setLoadingDelete,
            successCallBack: hanldleNoteDelete
        })
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
                    loading={ loadingNotes }
                    buttonClick={ loadNotes } />
            }

            {
                selectedNote &&
                <Modal
                    title='Confirm Delete'
                    buttonText='Delete Note'
                    loading={ loadingDelete }
                    closeModal={ closeConfirmDelete }
                    modalAction={ deleteNote }>
                        You are about to delete this note, are you sure you want to continue ?
                </Modal>
            }
        </div>
    )
}

export default Home