import React from "react";

const Button = () => {
  const Handleclick = () => {
    console.log("Congratulations");
  };
  return (
    <div>
      <button
        className="bg-black text-white py-2 px-4 rounded-full"
        onClick={Handleclick}
      >
        Subscribe
      </button>
    </div>
  );
};

export default Button;
