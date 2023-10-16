"use client";

import React, { useState } from "react";
import validateField from "../../../../src/helpers/validationHelperFunctions";
import handleSubmit from "../../../../src/helpers/handleSubmit";
import uploadFileAndGetUrl from "../../../../src/helpers/fileUpload";
import { useRouter } from 'next/navigation'

const CustomerServiceForm = () => {
  const router = useRouter()
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [issueCategory, setissueCategory] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setmessage] = useState("");
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [uploadUrl, setUploadUrl] = useState(null);

  const handleFileChange = (e) => {
    const selectFile = e.target.files[0];
    setFile(selectFile);
  };

  const handleConfirmUpload = async () => {
    if (file) {
      try {
        const uploadUrl = await uploadFileAndGetUrl(file);
        setUploadUrl(uploadUrl);

        if (uploadUrl) {
          alert("File uploaded successfully. URL: " + uploadUrl);
        } else {
          alert("File upload failed.");
        }
      } catch (error) {
        console.error("Error during file upload:", error);
        alert("File upload failed.");
      }
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateField({
      name,
      email,
      subject,
      message,
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const formData = new FormData();
      formData.append("company", "Company1");
      formData.append("name", name);
      formData.append("email", email);
      formData.append("issueCategory", issueCategory);
      formData.append("subject", subject);
      formData.append("message", message);
      formData.append("file", uploadUrl);

      const submissionResult = await handleSubmit(formData);

      if (submissionResult === "Form submitted successfully!") {
        alert("Form submitted successfully!");
        router.push('/');
      } else {
        alert("Form submission failed.");
      }
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

      <form
        onSubmit={onSubmit}
        className="px-10 pt-2 pb-8"
        encType="multipart/form-data"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="text-stone-950 text-opacity-70 text-[16px] font-extrabold"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="First name"
            onChange={(e) => {
              setname(e.target.value);
              const newErrors = validateField("name", e.target.value, errors);
              setErrors(newErrors);
            }}
            value={name}
            className={`bg-[#EEF9FC] rounded-md border border-[#595656] border-opacity-40 w-full p-2 mt-1 ${
              errors.name ? "border-red-500" : ""
            }`}
            required
          />
          {errors.name && (
            <p className="text-red-600 text-sm">{errors.name} </p>
          )}
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
              const newErrors = validateField("email", e.target.value, errors);
              setErrors(newErrors);
            }}
            value={email}
            className={`bg-[#EEF9FC] rounded-md border border-[#595656] border-opacity-40 w-full p-2 mt-1 ${
              errors.email ? "border-red-500" : ""
            }`}
            required
          />
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email} </p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="issueCategory"
            className="text-stone-950 text-opacity-70 text-[16px] font-extrabold"
          >
            What's the issueCategory?
          </label>
          <select
            id="issueCategory"
            onChange={(e) => setissueCategory(e.target.value)}
            value={issueCategory}
            className="bg-[#EEF9FC] rounded-md border border-[#595656] border-opacity-40 w-full p-2 mt-1"
            required
          >
            <option value="" disabled>
              Select an issueCategory
            </option>
            <option value="Issue 1">Technical issueCategory</option>
            <option value="Issue 2">Billing Inquiry</option>
            <option value="Issue 3">Other</option>
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
              const newErrors = validateField(
                "subject",
                e.target.value,
                errors
              );
              setErrors(newErrors);
            }}
            value={subject}
            className={`bg-[#EEF9FC] rounded-md border border-[#595656] border-opacity-40 w-full p-2 mt-1 ${
              errors.subject ? "border-red-500" : ""
            }`}
            required
          />
          {errors.subject && (
            <p className="text-red-600 text-sm">{errors.subject} </p>
          )}
        </div>
        <div className="mb-3">
          <label
            htmlFor="message"
            className="text-stone-950 text-opacity-70 text-[16px] font-extrabold"
          >
            Additional message
          </label>
          <textarea
            id="message"
            placeholder="Additional message"
            onChange={(e) => {
              setmessage(e.target.value);
              const newErrors = validateField(
                "message",
                e.target.value,
                errors
              );
              setErrors(newErrors);
            }}
            value={message}
            rows="4"
            className={`bg-[#EEF9FC] rounded-md border border-[#595656] border-opacity-40 w-full p-2 mt-1 ${
              errors.subject ? "border-red-500" : ""
            }`}
            required
          ></textarea>
        </div>
        <div className="mb-3">
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
          <button
            type="button"
            onClick={handleConfirmUpload}
            className="w-[120px] h-7 bg-green-600 rounded-md border border-stone-600 border-opacity-20 text-white text-sm font-semibold px-2 hover:bg-green-500 hover:text-white mt-1 mb-6"
          >
            Upload
          </button>
        </div>
        
        <div className="text-center">
          <button
            type="submit"
            className="w-[134px] h-11 bg-gradient-to-r from-blue-700 to-blue-400 rounded-md border border-stone-600 border-opacity-20 text-white text-lg font-semibold px-4 py-2 hover:from-cyan-600 hover:to-cyan-400"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomerServiceForm;
