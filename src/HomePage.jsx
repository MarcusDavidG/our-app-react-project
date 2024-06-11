import React from "react";
import Button from "./Button";

const HomePage = () => {
  const myname = "Marcus";
  const mystate = "Plateau";
  return (
    <div>
      <p>My name is {myname} </p>
      <p>I am from {mystate} </p>
      <Button />
    </div>
  );
};

export default HomePage;
