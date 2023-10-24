import { combineReducers, createStore } from "redux";
import CommonReducer from "./CommonReducer";
import personalInfoReducer from "../Components/PersonalInfo/personalInfoReducer";
import workExperienceReducer from "../Components/WorkExperience/workExperienceReducer";
import keySkillsReducer from "../Components/KeySkills/keySkillsReducer";
import educationDetailsReducer from "../Components/Education/educationDetailsReducer";

export const store = createStore(
  combineReducers({
    CommonReducer,
    personalInfoReducer,
    workExperienceReducer,
    keySkillsReducer,
    educationDetailsReducer,
  })
);
