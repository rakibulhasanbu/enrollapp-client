"use client";

import { FcGoogle } from "react-icons/fc";
import AppButton from "../../components/ui/AppButton";
import { useForm, SubmitHandler } from "react-hook-form";
import AppFormInput from "@/app/components/ui/AppFormInput";

type Inputs = {
  name: string;
  password: string;
  orgType: string;
  confirmPassword: string;
  email: string;
};

const OrganizerLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };
  return (
    <div className="min-h-[80vh] flex pt-40 justify-center items-center mx-auto text-center ">
      <div className="bg-white p-16  flex flex-col gap-5 rounded-3xl shadow-2xl">
        <div>
          <h1 className="font-bold text-[32px]">Explore New Opportunities</h1>
          <p className="text-sm font-medium">It&apos;s Free</p>
        </div>
        {/* form start */}
        <form onSubmit={handleSubmit(onSubmit)} className=" space-y-3 ">
          <AppFormInput
            name="email"
            label="Email"
            type="email"
            register={register}
            placeholder="Enter your email"
            error={errors.email}
            required
          />
          <AppFormInput
            name="password"
            label="Password"
            type="password"
            register={register}
            placeholder="Enter your password"
            error={errors.password}
            required
          />

          <div className="pt-4 w-full">
            <AppButton type="submit" label="Sign In" className="w-full" />
          </div>
        </form>
        {/* form end */}
        <h3>
          Already have an Account? <span>Login here</span>{" "}
        </h3>
        <p className={`mt-3 text-sm text-gray-600`}>
          By continuing, you agree to Terms of Service and have Read our Privacy
          Policy.
        </p>
      </div>
    </div>
  );
};

export default OrganizerLogin;
