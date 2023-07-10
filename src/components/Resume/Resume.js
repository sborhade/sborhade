import React from 'react';
import '../../style/style.css';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import Education from '../Education/Education';
import WorkExperience from '../WorkExperience/WorkExperience';
import Skills from '../Skills/Skills';
import resumeData from '../../Data/resumeData.json';

function Resume() {
  return (
    <div className="resume">
      <PersonalInfo data={resumeData.personalInfo} />
      <Skills data={resumeData.skills} />
      <Education data={resumeData.education} />
      <WorkExperience data={resumeData.workExperience} />
    </div>
  );
}

export default Resume;
