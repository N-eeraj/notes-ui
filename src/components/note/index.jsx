import { useNavigate } from 'react-router-dom'

import Input from '@components/UI/input'
import Text from '@components/UI/text'

import '@styles/components/note/main.scss'

const Note = ({ editable, title, body, updateTitle, updateBody, children }) => {
    const navigate = useNavigate()

    const handleBack = () => {
        navigate('/')
    }

    return (
        <div className="note">
            <div className='header'>
                <div>
                    <button
                        className='back'
                        onClick={ handleBack } />

                    {
                        editable ?
                        <Input
                            value={ title }
                            className='note-title'
                            stateChanger={ updateTitle } />
                        :
                        <Text
                            type='sub-title'
                            content={ title }
                            className='note-title' />
                    }
                </div>

                <div className="actions">
                    { children }
                </div>
            </div>


            {
                editable ?
                <textarea
                    value={ body }
                    placeholder='Note Content'
                    className='body'
                    onInput={ e => updateBody(e.target.value) } />
                :
                <p className='body'>
                    { body }
                </p>
            }
        </div>
    )
}

export default Note