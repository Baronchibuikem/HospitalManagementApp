import axios from "axios";

export default axios.create({
  baseURL: "http://purityclinic.herokuapp.com"
  // baseURL: "http://127.0.0.0:8000"
});
