"use client";

import React, { useState } from 'react'; 


const CustomerServiceForm = () => {

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [issue, setIssue] = useState('');
  const [subject, setSubject] = useState('');
  const [details, setDetails] = useState('');
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  
  const handleFileChange = (e) => {
    const selectFile = e.target.files[0];
    setFile(selectFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  const validateField = (name, value) => {
    const newErrors = { ...errors };

    if (name === 'fname') {
      if (!value.trim()) {
        newErrors.fname = 'First Name is required';
      } else {
        delete newErrors.fname;
      }
    }

    if (name === 'lname') {
      if (!value.trim()) {
        newErrors.lname = 'Last Name is required';
      } else {
        delete newErrors.lname;
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

    setErrors(newErrors);
  };

  return (
    <div className="max-w-md mx-auto my-10 shadow-md rounded-xl bg-[#C7EFF8]">
      <div className='bg-gradient-to-r from-[#3054D9] to-[#50ADF2] p-5 mb-2 rounded-t-xl'>
        <h1 className="text-center text-white text-[32px] font-extrabold pb-1">Support Form</h1>
        <p className='text-center text-neutral-300 text-[16px] font-semibold'>Need Assistance or Have Questions? <br />We're Here to Help!</p>
      </div>

      <form onSubmit={handleSubmit} className='px-6 pt-2 pb-8'>
        <div className="mb-4">
          <label htmlFor="fname" className="text-stone-950 text-opacity-70 text-[16px] font-extrabold">First Name</label>
          <input
            type="text"
            id="fname"
            placeholder='First name'
            onChange={(e) => {setFname(e.target.value); validateField('fname', e.target.value);}}
            value={fname}
            className={`bg-slate-300 rounded-md border border-stone-600 border-opacity-20 w-full p-2 mt-1 ${errors.fname ? 'border-red-500' : ''}`}
            required
          />
          {errors.fname && <p>{errors.fname} </p>}
        </div>
        <div className="mb-4">
          <label htmlFor="lname" className="text-stone-950 text-opacity-70 text-[16px] font-extrabold">Last Name</label>
          <input
            type="text"
            id="lname"
            placeholder="Last name"
            onChange={(e) => {setLname(e.target.value); validateField('lname', e.target.value);}}
            value={lname}
            className={`bg-slate-300 rounded-md border border-stone-600 border-opacity-20 w-full p-2 mt-1 ${errors.lname ? 'border-red-500' : ''}`}
            required
          />
          {errors.lname && <p>{errors.lname} </p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="text-stone-950 text-opacity-70 text-[16px] font-extrabold">Email</label>
          <input
            type="email"
            id="email"
            placeholder='email'
            onChange={(e) => {setEmail(e.target.value); validateField('email', e.target.value);}}
            value={email}
            className={`bg-slate-300 rounded-md border border-stone-600 border-opacity-20 w-full p-2 mt-1 ${errors.email ? 'border-red-500' : ''}`}
            required
          />
          {errors.email && <p>{errors.email} </p>}
        </div>
        <div className="mb-4">
          <label htmlFor="issue" className="text-stone-950 text-opacity-70 text-[16px] font-extrabold">What's the issue?</label>
          <select
            id="issue"
            onChange={(e) => setIssue(e.target.value)}
            value={issue}
            className="bg-slate-300 rounded-md border border-stone-600 border-opacity-20 w-full p-2 mt-1"
            required
          >
            <option value="" disabled>Select an issue</option>
            <option value="technical">Technical Issue</option>
            <option value="billing">Billing Inquiry</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="text-stone-950 text-opacity-70 text-[16px] font-extrabold">Subject</label>
          <input
            type="text"
            id="subject"
            placeholder='Subject'
            onChange={(e) => {setSubject(e.target.value); validateField('subject', e.target.value);}}
            value={subject}
            className={`bg-slate-300 rounded-md border border-stone-600 border-opacity-20 w-full p-2 mt-1 ${errors.subject ? 'border-red-500' : ''}`}
            required
          />
          {errors.subject && <p>{errors.subject} </p>}
        </div>
        <div className="mb-3">
          <label htmlFor="details" className="text-stone-950 text-opacity-70 text-[16px] font-extrabold">Additional Details</label>
          <textarea
            id="details"
            placeholder='Additional details'
            onChange={(e) => setDetails(e.target.value)}
            value={details}
            rows="4"
            className="bg-slate-300 rounded-md border border-stone-600 border-opacity-20 w-full p-2 mt-1"
          ></textarea>
        </div>
        <div className="mb-8">
          <label htmlFor="file" className="text-stone-950 text-opacity-70 text-[16px] font-extrabold">File Upload</label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleFileChange}
            className="bg-slate-300 rounded-md border border-stone-600 border-opacity-20 w-full p-2 mt-1"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="w-[134px] h-11 bg-gradient-to-r from-blue-700 to-blue-400 rounded-md border border-stone-600 border-opacity-20 text-white text-lg font-semibold px-4 py-2 hover:from-blue-800 hover:to-blue-500 hover:text-blue-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomerServiceForm;
