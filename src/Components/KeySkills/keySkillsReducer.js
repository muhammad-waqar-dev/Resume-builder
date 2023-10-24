import * as actionTypes from "../../Redux/actionTypes";

const initialSkillsState = {
  skills: ["", "", ""],
};

const keySkillsReducer = (state = initialSkillsState, action) => {
  switch (action.type) {
    case actionTypes.ADDNEWSKILLS:
      return { ...state, skills: [...state.skills, ""] };
    case actionTypes.EDITSKILL: {
      return {
        ...state,
        skills: action.payload,
      };
    }
    case actionTypes.DELETESKILL: {
      const newSkills = state.skills.filter(
        (skill, id) => id !== action.payload
      );

      return { ...state, skills: newSkills };
    }
    default:
      return state;
  }
};
export default keySkillsReducer;
