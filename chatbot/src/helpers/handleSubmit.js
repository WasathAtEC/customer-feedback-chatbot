import axios from "axios";
const handleSubmit = async (formData) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/api/v1/feedback/create-feedback/", formData);

      if (response.status === 200) {
        alert("Form submitted successfully!");
      } else {
        alert("Form submission failed.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  export default handleSubmit;