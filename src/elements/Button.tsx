import React, { forwardRef } from "react";
import { ButtonProps } from "../../types/Form.types";

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
  <button ref={ref} {...props}>
    {props.children}
  </button>
));

export default Button;
