import React from "react";
import type { InputProps } from "../../types/input";

const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return <input {...props} className={className} />;
};

export default Input;
