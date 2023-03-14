const emailPattern = /^[a-zA-Z][\w\.]*@([\w-]+\.)+[\w-]{2,4}/

export const notEmptyValidator = (value, fieldName) => {
    if (!value)
        throw `${fieldName} cannot be empty`
}

export const emailValidator = email => {
    notEmptyValidator(email, 'Email')
    if (!emailPattern.test(email))
        throw 'Invalid Email'
}

export const passwordValidator = password => {
    notEmptyValidator(password, 'Password')
}

export const newPasswordValidator = password => {
    if (password.length < 8)
        throw 'Passwords must be aleast 8 characters long'
}

export const confirmPasswordValidator = (confirmPassword, password) => {
    notEmptyValidator(confirmPassword, 'Confim Password')
    if (confirmPassword !== password)
        throw 'Passwords not matching'
}