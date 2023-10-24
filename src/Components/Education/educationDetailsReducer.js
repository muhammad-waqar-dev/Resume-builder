import * as actionTypes from "../../Redux/actionTypes";

const initialEducationState = {
  educationInfo: {
    domain: "",
    university: "",
    degree: "",
    startYear: "",
    endYear: "",
  },
};


const educationDetailsReducer = (
  state = initialEducationState,
  action
) => {
  switch (action.type) {
    case actionTypes.ADDEDUCATION:
      return { ...state, educationInfo: action.payload };
    default:
      return state;
  }
};
export default educationDetailsReducer;
