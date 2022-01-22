import { ReactNode } from "react";
import { ChangeHandler, SubmitHandler, UseFormReturn } from "react-hook-form";

export interface FormProps<TFormValues> {
  className?: string;
  onSubmit: SubmitHandler<TFormValues>;
  onChange?: ChangeHandler;
  children: (methods: UseFormReturn<TFormValues>) => ReactNode;
}
