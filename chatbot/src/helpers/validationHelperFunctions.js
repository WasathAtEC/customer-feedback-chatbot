const validateField = (name, value, errors) => {

    const newErrors = {...errors};

    if (name === 'name') {
        if (!value.trim()) {
            newErrors.name = 'Full Name is required';
        } else {
            delete newErrors.name;
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

    if (name === 'message') {
        if (!value.trim()) {
            newErrors.message = 'Additional message is required';
        } else {
            delete newErrors.message;
        }
    }

    return newErrors;
}
 
export default validateField;