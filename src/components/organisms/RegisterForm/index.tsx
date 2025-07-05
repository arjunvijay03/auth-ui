import { Link } from "react-router";
import { ButtonAtom, InputAtom } from "../../atoms";
import { LOGIN } from "../../../constants/router.constant";

type UserRegisterFormProps = {
  name: string;
  email: string;
  password: string;
  onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const UserRegisterForm = ({
  name,
  email,
  password,
  onNameChange,
  onEmailChange,
  onPasswordChange,
  onSubmit,
}: UserRegisterFormProps) => {
  return (
    <div className="loginWrapper">
      <form className="loginCard" onSubmit={onSubmit}>
        <h2>Register</h2>
        <p>Please fill in the details to create an account</p>

        <InputAtom
          label="Name"
          type="text"
          value={name}
          onChange={onNameChange}
          placeholder="Arjun"
        />
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

        <ButtonAtom text="Register" />

        <div className="footer">
          <Link to={LOGIN}>Already have an account?</Link>
        </div>
      </form>
    </div>
  );
};

export default UserRegisterForm;
