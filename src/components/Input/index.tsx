import { InputHTMLAttributes } from "react";
import { Container } from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  register?: any;
  name?: string;
  error?: string;
  width?: string;
}

const Input = ({
  placeholder,
  name,
  register,
  error,
  width,
  ...rest
}: InputProps) => {
  return (
    <Container style={{ width: width }}>
      <input
        error={error}
        {...register(name)}
        placeholder={placeholder}
        {...rest}
      />
      <span>{error}</span>
    </Container>
  );
};

export default Input;
