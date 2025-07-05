import { useState } from "react";
import UserRegisterForm from "../../organisms/RegisterForm";
import { useAppDispatch } from "../../../store/store";
import { registerUserAction } from "../../../store/auth/authActions";

const RegisterFormTemplate = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("Please fill in all fields");
      return;
    }
    dispatch(registerUserAction({ name, email, password }));
  };
  return (
    <UserRegisterForm
      email={email}
      name={name}
      password={password}
      onEmailChange={handleEmailChange}
      onNameChange={handleNameChange}
      onPasswordChange={handlePasswordChange}
      onSubmit={handleSubmit}
    />
  );
};

export default RegisterFormTemplate;
