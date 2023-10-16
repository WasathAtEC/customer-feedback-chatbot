import axios from "axios";

const handleSubmit = async (formData) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/v1/feedback/create-feedback",
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
