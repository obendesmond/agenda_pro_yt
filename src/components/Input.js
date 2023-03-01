import React from "react";

const Input = ({ placeholder }) => {
  return (
    <input
      placeholder={placeholder}
      className="border-2 rounded-md px-3 py-2"
    />
  );
};

export default Input;
