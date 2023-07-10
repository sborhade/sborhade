import React from "react";

function Skills({ data }) {
  return (
    <section className="skills">
      <h2>Skills</h2>
      {data.map((skill, index) => (
        <p>{skill}</p>
      ))}
    </section>
  );
}

export default Skills;
