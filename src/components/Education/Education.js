import React from "react";

function Education({ data }) {
  return (
    <section>
      <h2>Education</h2>
      {data.map((data) => (
        <li>
          {data.degree} - {data.university}
        </li>
      ))}
    </section>
  );
}

export default Education;
