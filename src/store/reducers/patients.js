const initialState = {
  patients: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_PATIENT":
      return { ...state, patients: action.payload };

    default:
      return state;
  }
};
