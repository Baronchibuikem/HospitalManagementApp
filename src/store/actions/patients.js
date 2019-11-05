import projectsApi from "./projectsApi";
import { GET_PATIENT } from "./actionTypes";

export const fetchpatients = () => {
  return async dispatch => {
    const response = await projectsApi.get("/patients/getpatient/");
    dispatch({ type: GET_PATIENT, payload: response.data });
  };
};
