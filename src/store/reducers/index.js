import { combineReducers } from "redux";
import auth from "./auth";
import departments from "./departments";
import dashboard from "./dashboard";
import patients from "./patients";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  auth,
  departments,
  form: formReducer,
  dashboard,
  patients
});
