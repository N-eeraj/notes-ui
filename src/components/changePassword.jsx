import { useState } from 'react'

import Input from '@components/UI/input'
import Text from '@components/UI/text'
import Button from '@components/UI/button'

import { toast } from '@toast'
import api from '@axios'
import { passwordValidator, newPasswordValidator, confirmPasswordValidator } from '@validators'

import '@styles/components/changePassword.css'

const ChangePassword = ({ closeChangePassword }) => {
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [loading, setLoading] = useState(false)

    const updatePasswordAPICall = async () => {
        setLoading(true)
        try {
            const { data } = await api.patch('/change-password', {
                old_password: oldPassword,
                new_password: newPassword,
                confirm_password: confirmPassword
            })
            if (!data.success) throw null
            toast.dismiss()
            toast.success(data.message)
            closeChangePassword()
        }
        catch (err) {
            if (Array.isArray(err?.response?.data?.message)) {
                err.response.data.message
                    .forEach(message => toast.error(message))
            }
            else {
                const message = err?.response?.data?.message || err?.message || 'Oops something went wrong'
                toast.error(message)
            }
        }
        finally {
            setLoading(false)
        }
    }

    const validateInputs = () => {
        try {
            passwordValidator(oldPassword)
            newPasswordValidator(newPassword)
            confirmPasswordValidator(confirmPassword, newPassword)

            updatePasswordAPICall()
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
                        buttonClick={ validateInputs }
                        text='Change Password'
                        loading={ loading }
                        className='modal-action' />
                </div>
            </div>
        </div>
    )
}

export default ChangePassword