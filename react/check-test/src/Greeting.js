import React from 'react';
import "./Greeting.css";

const Greeting = ({ name }) => {
  return <h1 className="greeting">Hello, {name}!</h1>;
};

export default Greeting;