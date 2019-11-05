const initialState = {
  doctors: [],
  nurses: [],
  ict: [],
  humanresource: [],
  technicians: [],
  contractworkers: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_DOCTORS":
      return { ...state, doctors: action.payload };
    case "GET_NURSES":
      return { ...state, nurses: action.payload };
    case "GET_ICT":
      return { ...state, ict: action.payload };
    case "GET_HUMANRESOURCE":
      return { ...state, humanresource: action.payload };
    case "GET_TECHNICIANS":
      return { ...state, technicians: action.payload };
    case "GET_CONTRACTWORKERS":
      return { ...state, contractworkers: action.payload };
    default:
      return state;
  }
};
