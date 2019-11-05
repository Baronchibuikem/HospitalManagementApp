import projectsApi from "./projectsApi";
import {
  GET_DOCTORS,
  GET_NURSES,
  GET_ICT,
  GET_CONTRACTWORKERS,
  GET_HUMANRESOURCE,
  GET_TECHNICIANS
} from "./actionTypes";

export const fetchdoctors = () => {
  return async dispatch => {
    const response = await projectsApi.get("/departments/doctors/");
    dispatch({ type: GET_DOCTORS, payload: response.data });
  };
};

export const fetchnurses = () => {
  return async dispatch => {
    const response = await projectsApi.get("/departments/nurses/");
    dispatch({ type: GET_NURSES, payload: response.data });
  };
};

export const fetchict = () => {
  return async dispatch => {
    const response = await projectsApi.get("/departments/ict/");
    dispatch({ type: GET_ICT, payload: response.data });
  };
};

export const fetchhumanresource = () => {
  return async dispatch => {
    const response = await projectsApi.get("/departments/humanresource/");
    dispatch({ type: GET_HUMANRESOURCE, payload: response.data });
  };
};

export const fetchtechnicians = () => {
  return async dispatch => {
    const response = await projectsApi.get("/departments/technicians/");
    dispatch({ type: GET_TECHNICIANS, payload: response.data });
  };
};

export const fetchcontractworkers = () => {
  return async dispatch => {
    const response = await projectsApi.get("/departments/contractworkers/");
    dispatch({ type: GET_CONTRACTWORKERS, payload: response.data });
  };
};
