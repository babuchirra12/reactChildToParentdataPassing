import React, { useState } from "react";

const ComponentB = ({ data }) => {
  const [firstName, setFirstName] = useState();
  const [age, setAge] = useState();
  const onSubmit = (e) => {
    e.preventDefault();
    const inputData = { firstName: firstName, age: age };
    data(inputData);
  };

  return (
    <form onSubmit={onSubmit}>
      FirstName:{" "}
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <br />
      Age:{" "}
      <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
      <br /> <br /> <input type="submit" value="submit" />
    </form>
  );
};

export default ComponentB;
