import React from 'react';

const CustomerServiceForm = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-semibold mb-6">Customer Service Form</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="fname" className="block font-semibold">First Name</label>
          <input
            type="text"
            id="fname"
            name="fname"
            className="w-full border border-gray-300 p-2 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lname" className="block font-semibold">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lname"
            className="w-full border border-gray-300 p-2 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border border-gray-300 p-2 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="issue" className="block font-semibold">Issue</label>
          <select
            id="issue"
            name="issue"
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
            name="subject"
            className="w-full border border-gray-300 p-2 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="details" className="block font-semibold">Additional Details</label>
          <textarea
            id="details"
            name="details"
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
