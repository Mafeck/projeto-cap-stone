import { InputHTMLAttributes } from "react";
import { Container } from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

const Input = ({ placeholder, ...rest }: InputProps) => {
  return <Container {...rest} placeholder={placeholder} />;
};

export default Input;
