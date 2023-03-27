import { useState } from 'react'

import Note from '@components/note'
import Button from '@components/UI/Button'
export default function() {

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [loading, setLoading] = useState(false)

    const saveNote = () => {
        console.log(title)
        console.log(body)
    }

    return (
        <Note
            editable={ true }
            updateTitle={ setTitle }
            updateBody={ setBody }>

                <Button
                    text='Save'
                    buttonClick={ saveNote }
                    loading={ loading }
                    className='save-button' />
        </Note>
    )
}

export default Create