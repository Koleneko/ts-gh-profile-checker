import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from "react";

export type InputValues = {
  username: string;
};
export type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
