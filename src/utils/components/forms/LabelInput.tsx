import React, { InputHTMLAttributes } from "react";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {}

export const LabelInput: React.FC<IInput> = ({ ...rest }) => {
  return (
    <span>
      <label htmlFor={rest.name} className="font-semibold">
        {rest.name}
      </label>
      <input
        {...rest}
        className={`h-12 w-full rounded-md border border-solid border-gray-200 pl-3 leading-relaxed
        placeholder:text-[0.85rem] placeholder:font-normal placeholder:text-black
        focus:outline focus:outline-1 focus:outline-gray-500 ${rest.className}`}
      />
    </span>
  );
};
