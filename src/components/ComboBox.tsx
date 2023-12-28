import { ChangeEvent } from "react";

interface ComboBoxProps {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  months: string[];
}

function ComboBox({ value, label, onChange, months }: ComboBoxProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={label} className="text-[#DFDCFD] pl-5 font-bold">
        {label}
      </label>
      <select
        value={value}
        onChange={onChange}
        className="h-[35px] px-4 rounded-full bg-[#DFDCFD]"
      >
        {months.map((month, index) => (
          <option key={index + 1} value={index + 1}>
            {month}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ComboBox;
