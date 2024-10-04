import { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

type TAppFormInputProps = {
  label?: string;
  name: string;
  placeholder: string;
  type?: "text" | "email" | "file" | "number" | "password" | "date";
  error: any;
  register: UseFormRegister<any>;
  required?: boolean;
  readOnly?: boolean;
  className?: string;
  validation?: any;
};

const AppFormInput = ({
  name,
  error,
  label,
  placeholder,
  type = "text",
  register,
  required,
  readOnly,
  className,
  validation,
}: TAppFormInputProps) => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative flex flex-col items-start justify-normal gap-2 w-full">
      <label className="text-[20px] text-[#475569]" htmlFor={name}>
        {label}
        {label && required ? "*" : ""}
      </label>
      <input
        id={name}
        disabled={readOnly}
        className={`outline-none border p-3 rounded-lg w-full text-[16px] ${
          error ? "border-red-500" : "border-borderColor"
        } ${className}`}
        {...register(name, {
          ...(required && { required: true }),
          ...(type === "number" && { valueAsNumber: true }),
          ...validation,
        })}
        placeholder={placeholder}
        type={
          type !== "password"
            ? type
            : type === "password" && !show
            ? "password"
            : "text"
        }
      />

      {type === "password" &&
        (show ? (
          <IoEyeOffOutline
            onClick={() => setShow(false)}
            className={`absolute right-4 text-lg 2xl:text-xl cursor-pointer 2xl:right-4  ${
              error ? "top-[48%]" : "top-[60%]"
            }`}
          />
        ) : (
          <IoEyeOutline
            onClick={() => setShow(true)}
            className={`absolute right-4 text-lg 2xl:text-xl cursor-pointer 2xl:right-4  ${
              error ? "top-[48%]" : "top-[60%]"
            }`}
          />
        ))}

      {error && (
        <p className="text-sm text-red-500 text-left">
          {error.message || `${label || name} is required`}
        </p>
      )}
    </div>
  );
};

export default AppFormInput;
