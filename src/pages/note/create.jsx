import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Note from '@components/note'
import Button from '@components/UI/Button'

import { notEmptyValidator } from '@validators'

import { toast } from '@toast'
import useAxios from '@hooks/useAxios'

import '@styles/pages/create.scss'

const Create = () => {
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSavedNote = ({ message }) => {
        toast.success(message)
        navigate('/')
    }
    
    const validateInputs = () => {
        try {
            notEmptyValidator(title, 'Title')
            notEmptyValidator(body, 'Body')

            useAxios({
                method: 'post',
                url: '/note/create',
                body: {
                    title,
                    body
                },
                setLoading,
                successCallBack: handleSavedNote
            })
        }
        catch (err) {
            toast.error(err)
        }
    }

    return (
        <Note
            editable={ true }
            updateTitle={ setTitle }
            updateBody={ setBody }>

                <Button
                    text='Save'
                    buttonClick={ validateInputs }
                    loading={ loading }
                    className='save-button' />
        </Note>
    )
}

export default Create