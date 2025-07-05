import "./style.css";

const Button = ({ text }: { text: string }) => {
  return <button className="submitButton">{text}</button>;
};

export default Button;
