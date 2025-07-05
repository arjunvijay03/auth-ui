import "./style.css";
import { ButtonAtom, InputAtom } from "../../atoms";
import { Link } from "react-router-dom";
import { REGISTER } from "../../../constants/router.constant";

type LoginFormProps = {
  email: string;
  password: string;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
};

const LoginForm = ({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSubmit,
}: LoginFormProps) => {
  return (
    <div className="loginWrapper">
      <form className="loginCard" onSubmit={onSubmit}>
        <h2>Welcome Back 👋</h2>
        <p>Please login to your account</p>

        <InputAtom
          label="Email"
          type="email"
          value={email}
          onChange={onEmailChange}
          placeholder="example@mail.com"
        />

        <InputAtom
          label="Password"
          type="password"
          value={password}
          onChange={onPasswordChange}
          placeholder=""
        />

        <ButtonAtom text="Login" />

        <div className="footer">
          <Link to={REGISTER}>Doesn't have an account?</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
