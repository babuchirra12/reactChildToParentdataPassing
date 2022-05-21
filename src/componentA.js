import React, { useState } from "react";
import ComponentB from "./componentB";
const ComponentA = () => {
  const [inputValues, setInputValues] = useState([]);

  const tabledata = (data) => {
    setInputValues([...inputValues, data]);
  };

  return (
    <>
      <table style={{width: '400px', margin: 'auto'}}>
        <thead>
          <tr>
            <th>FerstName</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {inputValues.map((items) => {
            return (
              <tr>
                <td>{items.firstName}</td>
                <td>{items.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <br />
      <ComponentB data={tabledata}> add data</ComponentB>
    </>
  );
};

export default ComponentA;
