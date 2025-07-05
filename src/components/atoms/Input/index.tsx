import "./style.css";

type InputFieldProps = {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const Input = ({
  label,
  type,
  value,
  onChange,
  placeholder,
}: InputFieldProps) => {
  return (
    <div className="inputGroup">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default Input;
