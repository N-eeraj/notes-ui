import { useNavigate } from 'react-router-dom'

import Text from '@components/UI/text'

import '@styles/components/note/card.scss'

const NotesCard = ({ id, title, preview, deleteEvent }) => {
    const navigate = useNavigate()

    const handleView = () => navigate(`/note/${id}`)

    const handleEdit = event => {
        event.stopPropagation()
        navigate(`/note/edit/${id}`)
    }

    const handleDelete = event => {
        event.stopPropagation()
        deleteEvent(id)
    }

    return (
        <div
            className="note-card"
            onClick={ handleView }>

            <div className="title">
                <Text
                    type='sub-title'
                    content={ title } />

                <div className="action-container">
                    <button
                        className='note-action edit'
                        onClick={ handleEdit } />
                    <button
                        className='note-action delete'
                        onClick={ handleDelete } />
                </div>

            </div>

            <div className="body">
                <Text
                    type='text'
                    content={ preview } />
            </div>            
        </div>
    )
}

export default NotesCard