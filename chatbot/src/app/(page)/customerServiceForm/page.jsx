"use client";

import React, { useState } from "react";
import validateField from "../../../../src/helpers/validationHelperFunctions";
import handleSubmit from "../../../../src/helpers/handleSubmit";

const CustomerServiceForm = () => {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [issue, setIssue] = useState("");
  const [subject, setSubject] = useState("");
  const [details, setDetails] = useState("");
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});

  const handleFileChange = (e) => {
    const selectFile = e.target.files[0];
    setFile(selectFile);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateField({
      fname,
      email,
      subject,
    });

    setErrors(newErrors);

    if(Object.keys(newErrors).length === 0) {
      handleSubmit({
        fname,
        email,
        issue,
        subject,
        details,
        file,
      });
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 shadow-md rounded-xl bg-[#C7EFF8]">
      <div className="bg-gradient-to-r from-[#3054D9] to-[#50ADF2] p-5 mb-2 rounded-t-xl drop-shadow-lg">
        <h1 className="text-center text-white text-[32px] font-extrabold pb-1">
          Support Form
        </h1>
        <p className="text-center text-neutral-300 text-[16px] font-semibold">
          Need Assistance or Have Questions? <br />
          We're Here to Help!
        </p>
      </div>

      <form onSubmit={onSubmit} className="px-10 pt-2 pb-8">
        <div className="mb-4">
          <label
            htmlFor="fname" 
            className="text-stone-950 text-opacity-70 text-[16px] font-extrabold"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fname"
            placeholder="First name"
            onChange={(e) => {
              setFname(e.target.value);
              validateField("fname", e.target.value, errors);
            }}
            value={fname}
            className={`bg-[#EEF9FC] rounded-md border border-[#595656] border-opacity-40 w-full p-2 mt-1 ${
              errors.fname ? "border-red-500" : ""
            }`}
            required
          />
          {errors.fname && <p className="text-red-600 text-sm">{errors.fname} </p>}
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="text-stone-950 text-opacity-70 text-[16px] font-extrabold"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
              validateField("email", e.target.value, errors);
            }}
            value={email}
            className={`bg-[#EEF9FC] rounded-md border border-[#595656] border-opacity-40 w-full p-2 mt-1 ${
              errors.email ? "border-red-500" : ""
            }`}
            required
          />
          {errors.email && <p className="text-red-600 text-sm">{errors.email} </p>}
        </div>
        <div className="mb-4">
          <label
            htmlFor="issue"
            className="text-stone-950 text-opacity-70 text-[16px] font-extrabold"
          >
            What's the issue?
          </label>
          <select
            id="issue"
            onChange={(e) => setIssue(e.target.value)}
            value={issue}
            className="bg-[#EEF9FC] rounded-md border border-[#595656] border-opacity-40 w-full p-2 mt-1"
            required
          >
            <option value="" disabled>
              Select an issue
            </option>
            <option value="technical">Technical Issue</option>
            <option value="billing">Billing Inquiry</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="subject"
            className="text-stone-950 text-opacity-70 text-[16px] font-extrabold"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            placeholder="Subject"
            onChange={(e) => {
              setSubject(e.target.value);
              validateField("subject", e.target.value, errors);
            }}
            value={subject}
            className={`bg-[#EEF9FC] rounded-md border border-[#595656] border-opacity-40 w-full p-2 mt-1 ${
              errors.subject ? "border-red-500" : ""
            }`}
            required
          />
          {errors.subject && <p className="text-red-600 text-sm">{errors.subject} </p>}
        </div>
        <div className="mb-3">
          <label
            htmlFor="details"
            className="text-stone-950 text-opacity-70 text-[16px] font-extrabold"
          >
            Additional Details
          </label>
          <textarea
            id="details"
            placeholder="Additional details"
            onChange={(e) => setDetails(e.target.value)}
            value={details}
            rows="4"
            className="bg-[#EEF9FC] rounded-md border border-[#595656] border-opacity-40 w-full p-2 mt-1"
          ></textarea>
        </div>
        <div className="mb-8">
          <label
            htmlFor="file"
            className="text-stone-950 text-opacity-70 text-[16px] font-extrabold"
          >
            File Upload
          </label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleFileChange}
            className="bg-[#EEF9FC] rounded-md border border-[#595656] border-opacity-40 w-full p-2 mt-1"
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
