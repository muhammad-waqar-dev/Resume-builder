import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import DetailFillingSidebar from "../Components/DetailFillingSidebar/DetailFillingSidebar";
import EducationComponent from "../Components/Education/Education";
import KeySkillsComponent from "../Components/KeySkills/KeySkills";
import PersonalInfoComponent from "../Components/PersonalInfo/PersonalInfo";
import PreviewComponent from "../Components/Preview/Preview";
import WorkExperienceComponent from "../Components/WorkExperience/WorkExperience";
import "../Styles/DetailsFilling.css";

const DetailsFilling = (props) => {
  const [tab, setTab] = useState(0);

  return (
    <div className="details-filling">
      <Navbar active={""} />
      {tab === 4 ? null : (
        <div className="details-filling-cont">
          <DetailFillingSidebar tab={tab} setTab={setTab} />
          {tab === 0 ? (
            <PersonalInfoComponent setTab={setTab} tab={tab} />
          ) : null}
          {tab === 3 ? <KeySkillsComponent setTab={setTab} tab={tab} /> : null}
          {tab === 1 ? (
            <WorkExperienceComponent setTab={setTab} tab={tab} />
          ) : null}
          {tab === 2 ? <EducationComponent setTab={setTab} tab={tab} /> : null}
        </div>
      )}
      {tab === 4 ? <PreviewComponent setTab={setTab} tab={tab} /> : null}
    </div>
  );
};

export default DetailsFilling;
