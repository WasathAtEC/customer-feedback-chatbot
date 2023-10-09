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
  
  const handleFileChange = (e) => {
    const selectFile = e.target.files[0];
    setFile(selectFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(fname);
    console.log(lname);
    console.log(email);
    console.log(issue);
    console.log(subject);
    console.log(details);
    
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-semibold mb-6">Customer Service Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fname" className="block font-semibold">First Name</label>
          <input
            type="text"
            id="fname"
            placeholder='First name'
            onChange={(e) => setFname(e.target.value)}
            value={fname}
            className="w-full border border-gray-300 p-2 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lname" className="block font-semibold">Last Name</label>
          <input
            type="text"
            id="lname"
            placeholder="Last name"
            onChange={(e) => setLname(e.target.value)}
            value={lname}
            className="w-full border border-gray-300 p-2 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold">Email</label>
          <input
            type="email"
            id="email"
            placeholder='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-full border border-gray-300 p-2 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="issue" className="block font-semibold">What's the issue?</label>
          <select
            id="issue"
            onChange={(e) => setIssue(e.target.value)}
            value={issue}
            className="w-full border border-gray-300 p-2 rounded-md"
            required
          >
            <option value="" disabled>Select an issue</option>
            <option value="technical">Technical Issue</option>
            <option value="billing">Billing Inquiry</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block font-semibold">Subject</label>
          <input
            type="text"
            id="subject"
            placeholder='Subject'
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
            className="w-full border border-gray-300 p-2 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="details" className="block font-semibold">Additional Details</label>
          <textarea
            id="details"
            placeholder='Additional details'
            onChange={(e) => setDetails(e.target.value)}
            value={details}
            rows="4"
            className="w-full border border-gray-300 p-2 rounded-md"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="file" className="block font-semibold">File Upload</label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleFileChange}
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomerServiceForm;
