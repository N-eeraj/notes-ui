import { useNavigate } from 'react-router-dom'

import Input from '@components/UI/input'

import '@styles/components/note/main.scss'

const Note = ({ editable=false, title='', body='', updateTitle, updateBody, children }) => {
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
                            className='title'
                            stateChanger={ updateTitle } />
                        :
                        <span className='title'>
                            { title }
                        </span>
                    }
                </div>

                <div className="actions">
                    { children }
                </div>
            </div>


            {
                editable ?
                <textarea
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