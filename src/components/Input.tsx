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
    <div className="flex flex-col">
      <label htmlFor={label} className="pl-5 text-[#DFDCFD] font-bold">
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
        className="text-black px-4 py-3 rounded-full h-[35px] bg-[#DFDCFD]"
      />
      {error && (
        <p className="text-center text-[#F41BDD]">Prosim vnesi leto.</p>
      )}
    </div>
  );
}

export default Input;
