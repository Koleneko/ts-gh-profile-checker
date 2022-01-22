import React, { forwardRef } from "react";
import { InputProps } from "../../types/Form.types";

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <input ref={ref} {...props} />
));

export default Input;
