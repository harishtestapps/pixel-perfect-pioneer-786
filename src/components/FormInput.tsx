import React from 'react';

interface FormInputProps {
  label: string;
  placeholder: string;
  required?: boolean;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  placeholder,
  required = false,
  type = "text",
  value,
  onChange,
  name
}) => {
  return (
    <div className="flex flex-col items-start gap-2 self-stretch relative">
      <label className="self-stretch text-black text-base font-medium leading-5 relative max-sm:text-sm">
        {label}
        {required && <span className="text-[#E11900]">*</span>}
      </label>
      <div className="flex items-center self-stretch rounded relative min-h-12 bg-[#F6F6F6] px-4 py-3 max-sm:min-h-11 max-sm:px-3 max-sm:py-2.5">
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full bg-transparent text-black text-sm font-normal leading-6 outline-none placeholder:text-[#6B6B6B] max-sm:text-[13px]"
          aria-required={required}
        />
      </div>
    </div>
  );
};
