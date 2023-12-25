import { ChangeEvent } from "react";

interface InputProps {
  type: "text" | "number" | "email" | "password";
  label: string;
  value: string | number;
  name: string;
  placeholder: string;
  error: boolean;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Input({
  type,
  label,
  value,
  name,
  placeholder,
  error,
  disabled,
  onChange,
}: InputProps) {
  return (
    <div className="flex flex-col text-white">
      <label htmlFor={label} className="pl-5">
        {label}
      </label>
      <input
        type={type}
        id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        className="text-black px-4 py-3 rounded-full h-[35px]"
      />
      {error && <p className="">Input field can't be empty!</p>}
    </div>
  );
}

export default Input;
