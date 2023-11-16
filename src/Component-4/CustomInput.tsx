import React from "react";

interface CustomInputProps {
  title: string;
  placeholder: string;
  type: "text" | "textarea";
}

const CustomInput: React.FC<CustomInputProps> = ({
  title,
  placeholder,
  type,
}) => {
  return (
    <div>
      <label className="block font-popi font-semibold" htmlFor={title}>
        {title}
      </label>
      {type === "text" && (
        <input
          id={title}
          placeholder={placeholder}
          className="mt-1 w-full rounded-md border-2 py-3"
        />
      )}
      {type === "textarea" && (
        <textarea
          id={title}
          placeholder={placeholder}
          className="mt-1 w-full rounded-md border-2 py-3"
        />
      )}
    </div>
  );
};

export default CustomInput;
