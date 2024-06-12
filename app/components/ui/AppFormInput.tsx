import { UseFormRegister } from "react-hook-form";

type TAppFormInputProps = {
  label: string;
  name: string;
  placeholder: string;
  type?: "text" | "email" | "file" | "number" | "password";
  error: any;
  register: UseFormRegister<any>;
  required?: boolean;
};

const AppFormInput = ({
  name,
  error,
  label,
  placeholder,
  type = "text",
  register,
  required,
}: TAppFormInputProps) => {
  return (
    <>
      <div className="flex flex-col items-start justify-normal gap-2 w-full">
        <label className="text-[20px] text-[#475569]" htmlFor={name}>
          {label}
        </label>
        <input
          className={`outline-none border   p-3 rounded-lg w-full text-[16px] ${
            error ? "border-red-500" : "border-borderColor"
          }`}
          {...register(name, { ...(required && { required: true }) })}
          placeholder={placeholder}
          type={type}
        />
      </div>
      {error && (
        <p className="text-sm text-red-500 text-left">{label} is required</p>
      )}
    </>
  );
};

export default AppFormInput;
