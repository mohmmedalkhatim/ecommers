import { InputHTMLAttributes, ReactElement, useState } from 'react';

type InputProps = {
  label?: string;
  type?: 'text' | 'email' | 'password' | 'number';
  placeholder?: string;
  value?: string;
  error?: string;
  required?: boolean;
  className?: string;
  icon?: ReactElement;
}&InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  label,
  type = 'text',
  placeholder,
  value,
  error,
  required = false,
  icon,
  className = '',
  ...props
}: InputProps) {
  const [touched, setTouched] = useState(false);
  const hasError = error && touched;

  return (
    <div className={`flex flex-col gap-1 ${className}`}{...props}>
      {label && (
        <label className="text-sm font-medium text-white">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <div
        className={`group flex items-center border rounded-md transition-all
          ${hasError ? 'border-red-500' : 'border-stone-400'} 
          focus-within:ring focus-within:ring-[#e2e2e220]`}
      >
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={props.onChange}
          onBlur={() => setTouched(true)}
          className="grow outline-none border-none text-xs rounded-none  bg-transparent placeholder:text-[#ffffff90]"
        />
        <div
          className={`rounded-r-sm pb-1 pt-[4px] pr-2  transition-colors
            ${hasError ? 'text-red-500' : 'group-focus-within:text-white'}`}
        >
          {icon}
        </div>
      </div>

      {hasError && <span className="text-red-500 text-xs">{error}</span>}
    </div>
  );
}
