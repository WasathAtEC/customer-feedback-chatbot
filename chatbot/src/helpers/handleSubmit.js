import axios from "axios";

const uploadFileAndGetUrl = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    // Send the file to the first API to get the URL
    const response = await axios.post(
      "http://localhost:8000/api/v1/file-service/upload-file",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    

    if (response.status === 201) {
      console.log(response.data.blobName);
      return response.data.blobName;
    } else {
      throw new Error("Failed to upload file and get URL from the first API");
    }
  } catch (error) {
    throw error;
  }
};


const handleSubmit = async (formData) => {
  try {
    const file = formData.get("file");
    const uploadedUrl = await uploadFileAndGetUrl(file);

    // Update the formData with the URL
    formData.set("file", uploadedUrl);

    // Send the updated formData to your target API
    const response = await axios.post(
      "http://localhost:8000/api/v1/feedback/create-feedback",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (response.status === 201) {
      return "Form submitted successfully!";
    } else {
      return "Form submission failed.";
    }
  } catch (error) {
    return "Error: " + error;
  }
};

// const handleSubmit = async (formData) => {
//   try {
//     const file = formData.get("file");
//     const uploadedUrl = await uploadFileAndGetUrl(file);

//     console.log(uploadedUrl);

//     // Update the formData with the URL
//     formData.set("file", uploadedUrl);

//     // Send the updated formData to your target API
//     const response = await axios.post(
//       "http://localhost:8000/api/v1/feedback/create-feedback",
//       formData,
//       {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       }
//     );

//     if (response.status === 201) {
//       return "Form submitted successfully!";
//     } else {
//       return "Form submission failed.";
//     }
//   } catch (error) {
//     return "Error: " + error;
//   }
// };

export default handleSubmit;
