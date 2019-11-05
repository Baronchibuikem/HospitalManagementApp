const initialState = {
  staff: [],
  expense: [],
  department: [],
  payroll: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_STAFF":
      return { ...state, staff: action.payload };
    case "GET_DEPARTMENT":
      return { ...state, department: action.payload };
    case "GET_EXPENSE":
      return { ...state, expense: action.payload };
    case "GET_PAYROLL":
      return { ...state, payroll: action.payload };
    default:
      return state;
  }
};
