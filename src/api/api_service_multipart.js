// apiServiceMultipart.js
const BASE_URL = "http://localhost:6969/";

const apiServiceMultipart = async (
  endpoint,
  method = "GET",
  formData = null
) => {
  const url = BASE_URL + endpoint;
  const headers = {};

  const options = {
    method,
    headers,
    body: formData,
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export default apiServiceMultipart;