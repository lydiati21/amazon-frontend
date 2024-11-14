import axios from "axios";

const axiosInstance = axios.create({
  // local instance of firebase function
  // baseURL: "http://127.0.0.1:5001/clone-4e810/us-central1/api",

// deployed version of amazon render.com
   baseURL:"https://amazon-api-deploy-t0in.onrender.com"
});

export { axiosInstance };
