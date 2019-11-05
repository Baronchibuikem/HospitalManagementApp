import projectsApi from "./projectsApi";
import {
  GET_EXPENSE,
  GET_STAFF,
  GET_DEPARTMENT,
  GET_PAYROLL
} from "./actionTypes";

export const fetchstaff = () => {
  return async dispatch => {
    const response = await projectsApi.get("/dashboard/staff/");
    dispatch({ type: GET_STAFF, payload: response.data });
  };
};

export const fetchexpense = () => {
  return async dispatch => {
    const response = await projectsApi.get("/dashboard/expense/");
    dispatch({ type: GET_EXPENSE, payload: response.data });
  };
};

export const fetchdepartment = () => {
  return async dispatch => {
    const response = await projectsApi.get("/dashboard/department/");
    dispatch({ type: GET_DEPARTMENT, payload: response.data });
  };
};

export const fetchpayroll = () => {
  return async dispatch => {
    const response = await projectsApi.get("/dashboard/payroll/");
    dispatch({ type: GET_PAYROLL, payload: response.data });
  };
};
