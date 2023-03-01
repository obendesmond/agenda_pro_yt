import React from "react";

const Input = ({ placeholder, value, setValue }) => {
  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type="text"
      placeholder={placeholder}
      className="border-2 rounded-md px-3 py-2"
    />
  );
};

export default Input;
