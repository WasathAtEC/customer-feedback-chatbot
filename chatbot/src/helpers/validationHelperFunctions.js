const validateField = (name, value, errors) => {

    if (name === 'fname') {
        if (!value.trim()) {
            errors.fname = 'Full Name is required';
        } else {
            delete errors.fname;
        }
    }

    if (name === 'email') {
        if (!value.trim()) {
            errors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(value)) {
            errors.email = 'Invalid email format';
        } else {
            delete errors.email;
        }
    }

    if (name === 'subject') {
        if (!value.trim()) {
            errors.subject = 'Subject is required';
        } else {
            delete errors.subject;
        }
    }

    return errors;
}
 
export default validateField;