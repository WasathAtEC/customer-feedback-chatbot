const validateField = (name, value, errors) => {
    const newErrors = {...errors};

    if (name === 'fname') {
        if (!value.trim()) {
            newErrors.fname = 'Full Name is required';
        } else {
            delete newErrors.fname;
        }
    }

    if (name === 'email') {
        if (!value.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(value)) {
            newErrors.email = 'Invalid email format';
        } else {
            delete newErrors.email;
        }
    }

    if (name === 'subject') {
        if (!value.trim()) {
            newErrors.subject = 'Subject is required';
        } else {
            delete newErrors.subject;
        }
    }

    return newErrors;
}
 
export default validateField;