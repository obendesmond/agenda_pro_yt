import React from "react";

const TextArea = ({ placeholder, value, setValue }) => {
  return (
    <textarea
      value={value}
      onChange={e => setValue(e.target.value)}
      rows="3"
      placeholder={placeholder || "Enter text"}
      className="border-2 rounded-md px-3 py-2"
    ></textarea>
  );
};

export default TextArea;
