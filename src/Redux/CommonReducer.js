import * as actionTypes from "./actionTypes";

const initialCommonReducerState = {
  selectedTemplateId: null,
  selectedResumeId: null,
};


const CommonReducer = (
  state = initialCommonReducerState,
  action
) => {
  switch (action.type) {
    case actionTypes.SELECTTEMPLATE:
      return { ...state, selectedTemplateId: action.payload };
    case actionTypes.SELECTRESUME:
      return { ...state, selectedResumeId: action.payload };
    default:
      return state;
  }
};

export default CommonReducer;