import React from "react";

function WorkExperience({ data }) {
  return (
    <section className="WorkExperience">
      <h2>Work Experience</h2>
      <div className="company">{data.company}</div>
      <div className="position">{data.position}</div>
      <div className="duration">{data.duration}</div>
      <div>
      <ul>
        {data.responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
      </div>
    </section>
  );
}

export default WorkExperience;
