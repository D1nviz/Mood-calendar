import { FC } from "react";

interface InputProps {

}

const Input: FC<InputProps> = () => {
  return (
    <input
          className="reg-input"
          type="mail"
          name="e-mail"
          placeholder="Enter E-mail"
        />
  );

};

export default Input;