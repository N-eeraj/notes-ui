import Text from '@components/UI/text'
import Button from '@components/UI/button'

import '@styles/components/UI/modal.scss'

const Modal = ({ title, modalAction, loading, closeModal, buttonText, children }) => {

    return (
        <div className='overlay'>
            <div className="modal">

                {
                    !loading &&
                    <button
                        className='close-modal'
                        onClick={ closeModal } />
                }

                <Text
                    type='sub-title'
                    content={ title }
                    className='modal-title' />

                <div className="modal-body">
                    { children }

                    <Button
                        buttonClick={ modalAction }
                        text={ buttonText }
                        loading={ loading }
                        className='modal-action' />
                </div>
            </div>
        </div>
    )
}

export default Modal