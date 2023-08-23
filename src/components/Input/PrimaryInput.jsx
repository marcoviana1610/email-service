import { Input } from "@chakra-ui/react";
import React from "react";

import "./PrimaryInput.css";

const PrimaryInput = ({ name, value, placeholder, onChange, label }) => {
  return (
    <div className="input-container">
      <label className="label"> {label} </label>
      <Input
        variant="filled"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default PrimaryInput;
