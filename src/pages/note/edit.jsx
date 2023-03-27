import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import Note from '@components/note'
import Button from '@components/UI/Button'

import { notEmptyValidator } from '@validators'

import { toast } from '@toast'
import useAxios from '@hooks/useAxios'

import '@styles/pages/create.scss'

const Edit = () => {
    const navigate = useNavigate()
    const { id } = useParams()

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [loading, setLoading] = useState(false)

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

    const handleUpdate = ({ message }) => {
        toast.success(message)
        navigate('/')
    }
    
    const validateInputs = () => {
        try {
            notEmptyValidator(title, 'Title')
            notEmptyValidator(body, 'Body')

            useAxios({
                method: 'put',
                url: `/note/update/${id}`,
                body: {
                    title,
                    body
                },
                setLoading,
                successCallBack: handleUpdate
            })
        }
        catch (err) {
            toast.error(err)
        }
    }

    return (
        <Note
            editable={ true }
            title={ title }
            body={ body }
            updateTitle={ setTitle }
            updateBody={ setBody }>

                <Button
                    text='Update'
                    buttonClick={ validateInputs }
                    loading={ loading }
                    className='save-button' />
        </Note>
    )
}

export default Edit