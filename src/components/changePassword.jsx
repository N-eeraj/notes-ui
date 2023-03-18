import { useState } from 'react'

import Input from '@components/UI/input'
import Text from '@components/UI/text'
import Button from '@components/UI/button'

import '@styles/components/changePassword.css'

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [loading, setLoading] = useState(false)

    const validateInputs = () => {
        console.log(oldPassword)
        console.log(newPassword)
        console.log(confirmPassword)
    }

    return (
        <div className='overlay'>
            <div className="modal">

                <button
                    className='close-modal' />

                <Text
                    type='sub-title'
                    content='Change Password'
                    className='modal-title' />

                <div className="modal-body">
                    <Input
                        stateChanger={ setOldPassword }
                        type='password'
                        placeholder='Old Password' />

                    <Input
                        stateChanger={ setNewPassword }
                        type='password'
                        placeholder='New Password' />

                    <Input
                        stateChanger={ setConfirmPassword }
                        type='password'
                        placeholder='Confirm Password' />

                    <Button
                        stateChanger={ validateInputs }
                        text='Change Password'
                        loading={ loading }
                        className='modal-action' />
                </div>
            </div>
        </div>
    )
}

export default ChangePassword