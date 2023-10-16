import axios from "axios";

const handleSubmit = async (formData) => {
  try {
    //send form data with file url(blobName)
    const response = await axios.post(
      "http://ec-api.czduhsdfatdud7bz.eastus.azurecontainer.io/api/v1/feedback/create-feedback",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
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

export default handleSubmit;
