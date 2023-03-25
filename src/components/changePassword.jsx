import { useState } from 'react'

import Input from '@components/UI/input'
import Modal from '@components/UI/modal'

import { toast } from '@toast'
import useAxios from '@hooks/useAxios'
import { passwordValidator, newPasswordValidator, confirmPasswordValidator } from '@validators'

import '@styles/components/changePassword.css'

const ChangePassword = ({ closeChangePassword }) => {
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [loading, setLoading] = useState(false)

    const handleChangePassword = ({ message }) => {
        toast.dismiss()
        toast.success(message)
        closeChangePassword()
    }

    const validateInputs = () => {
        try {
            passwordValidator(oldPassword)
            newPasswordValidator(newPassword)
            confirmPasswordValidator(confirmPassword, newPassword)

            useAxios({
                method: 'patch',
                url: '/change-password',
                body: {
                    old_password: oldPassword,
                    new_password: newPassword,
                    confirm_password: confirmPassword
                },
                setLoading,
                successCallBack: handleChangePassword
            })
        }
        catch (err) {
            toast.error(err)
        }
    }

    return (
        <Modal
            title='Change Password'
            loading={ loading }
            closeModal={ closeChangePassword }
            modalAction={ validateInputs }>

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
        </Modal>
    )
}

export default ChangePassword