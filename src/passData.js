import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [input, setInput] = useState({});
  const [list, setList] = useState([]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(input.firstname)
    list.push(input)
    console.log("List ", list);
    
  };
  
  const listItem = list.map((post) => (
    <div key={post.firstname}>
      <h3>{post.firstname}</h3>
    </div>
  ));
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstname"
          value={input.firstname || ""}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Btn1</button>{" "}
      </form>
      {listItem}
    </div>
  );
}
