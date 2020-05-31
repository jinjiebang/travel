import Axios from "axios";

const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://www.potato865.cn/api/travel"
    : "http://localhost:8080/api/travel/";
const instance = Axios.create({
  baseURL,
  timeout: 5000
});

export default instance;
