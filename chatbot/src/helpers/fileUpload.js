import axios from "axios";

const uploadFileAndGetUrl = async (file) => {

  try {
    const formData = new FormData();
    formData.append("file", file);

    // Send the file to get the URL
    const response = await axios.post(
      "http://ec-api.czduhsdfatdud7bz.eastus.azurecontainer.io/api/v1/file-service/upload-file",
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
    } else if(response.status === 400 ) {
      return null;
    }else {
      throw new Error("Failed to upload file and get URL from the first API");
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default uploadFileAndGetUrl;