import { useState } from 'react'

import Input from '@components/UI/input'
import Text from '@components/UI/text'
import Button from '@components/UI/button'

import { toast } from '@toast'
import { passwordValidator, newPasswordValidator, confirmPasswordValidator } from '@validators'

import '@styles/components/changePassword.css'

const ChangePassword = ({ closeChangePassword }) => {
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [loading, setLoading] = useState(false)

    const validateInputs = () => {
        try {
            passwordValidator(oldPassword)
            newPasswordValidator(newPassword)
            confirmPasswordValidator(confirmPassword, newPassword)

            setLoading(true)
        }
        catch (err) {
            toast.error(err)
        }
    }

    return (
        <div className='overlay'>
            <div className="modal">

                {
                    !loading &&
                    <button
                        className='close-modal'
                        onClick={ closeChangePassword } />
                }

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