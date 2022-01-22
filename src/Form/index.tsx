import React from "react";
import { FormProps } from "./Form.props";

import { useForm } from "react-hook-form";

const Form = <TFormValues extends Record<string, any> = Record<string, any>>({
  onSubmit,
  children,
  className,
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>();
  return (
    <form className={className} onSubmit={methods.handleSubmit(onSubmit)}>
      {children(methods)}
    </form>
  );
};

export default Form;
