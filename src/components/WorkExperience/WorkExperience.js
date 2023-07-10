import React from "react";

function WorkExperience({ data }) {
  return (
    <section className="WorkExperience">
      <h2>Work Experience</h2>
      <strong>
        {data.position} <br />
        {data.company} - {data.duration} <br />
      </strong>
      <ul>
        {data.responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </section>
  );
}

export default WorkExperience;
