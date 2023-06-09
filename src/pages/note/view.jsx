import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import Note from '@components/note'

import useAxios from '@hooks/useAxios'

import '@styles/pages/view.scss'

const View = () => {
    const navigate = useNavigate()
    const { id } = useParams()

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const handleEdit = () => navigate(`/note/edit/${id}`)

    useEffect(() => {
        useAxios({
            method: 'get',
            url: `/note/view/${id}`,
            successCallBack: (({ data }) => {
                setTitle(data.title)
                setBody(data.body)
            })
        })
    }, [])

    return (
        <Note
            editable={ false }
            title={ title }
            body={ body }
            updateTitle={ setTitle }
            updateBody={ setBody }>
            <button
                className='action edit'
                onClick={ handleEdit } />
        </Note>
    )
}

export default View