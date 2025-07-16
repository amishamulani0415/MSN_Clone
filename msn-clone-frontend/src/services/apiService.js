import axios from "axios";

const apiEndpoint =
  import.meta.env.VITE_API_ENDPOINT || "http://localhost:8080/api/v1/msnclone/";

const apiService = {
  postCall: async (apiPath, payload) => {
    try {
      const response = await axios.post(`${apiEndpoint}${apiPath}`, payload);
      return response.data;

      // once started working with form data(like sending files(images, videos, etc.,) and token implementation use this logic)

      /*
      
      let token = Cookies.get("jwt_token");
      let headers = {};

      if (token && apiPath !== "/login") {
        headers.Authorization = "Bearer " + token;
      }

      if (payload instanceof FormData) {
        headers["Content-Type"] = "multipart/form-data";
      }

      const response = await axios.post(`${apiEndpoint}${apiPath}`, payload, {
        headers: headers,
      });
      
      */
    } catch (error) {
      console.error("Error in postCall:", error);
      return false;
    }
  },
};

export default apiService;
