import Text from '@components/UI/text'

import '@styles/components/note/card.css'

const NotesCard = ({ id, title, preview, deleteEvent }) => {
    const handleEdit = id => {
        console.log(id)
    }

    return (
        <div className="note-card">

            <div className="title">
                <Text
                    type='sub-title'
                    content={ title } />

                <div className="action-container">
                    <button
                        className='note-action edit'
                        onClick={ () => handleEdit(id) } />
                    <button
                        className='note-action delete'
                        onClick={ () => deleteEvent(id) } />
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