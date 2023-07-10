import React from "react";

function PersonalInfo({ data }) {
  return (
    <section className="section contact-info">
      <p>
        <strong> {data.name} </strong>
      </p>
      <p>
        <h1>{data.profileName}</h1>
      </p>
      <p>
        <h1>{data.email}</h1>
      </p>
    </section>
  );
}

export default PersonalInfo;
