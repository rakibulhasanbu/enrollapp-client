"use client";

import { FcGoogle } from "react-icons/fc";
import AppButton from "../../components/ui/AppButton";
import { useForm, SubmitHandler } from "react-hook-form";
import AppFormInput from "@/app/components/ui/AppFormInput";
import Link from "next/link";
import { METHOD } from "@/redux/api/tagTypesList";
import { toast } from "react-toastify";
import { useOrganizerRegisterMutation } from "@/redux/features/auth/authApi";

type Inputs = {
  name: string;
  password: string;
  orgType: string;
  confirmPassword: string;
  email: string;
};

const OrganizerLogin = () => {
  const [registerOrganizer] = useOrganizerRegisterMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (data.password !== data.confirmPassword) {
      return toast.error("Your new password and confirm password didnt match", {
        toastId: 1,
      });
    }

    await registerOrganizer(data)
      .unwrap()
      .then((res: { success: any; message: any }) => {
        toast.success("Rooms are added successfully!");
      })
      .catch((res: { success: any; message: any }) => {
        toast.error(res.message || "Something went wrong");
      });
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
            name="name"
            label="Organization Name"
            type="text"
            register={register}
            placeholder="Name Of the Organization"
            error={errors.name}
            required
          />

          <AppFormInput
            name="orgType"
            label="Organization type"
            type="text"
            register={register}
            placeholder="Type of The Organization "
            error={errors.orgType}
            required
          />
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
            label="New Password"
            type="password"
            register={register}
            placeholder="Enter your password"
            error={errors.password}
            required
          />
          <AppFormInput
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            register={register}
            placeholder="Enter your confirm password"
            error={errors.confirmPassword}
            required
          />
          <div className="pt-4 w-full">
            <AppButton type="submit" label="Sign up" className="w-full" />
          </div>
        </form>
        {/* form end */}
        <h3>
          Already have an Account?{" "}
          <Link href={"/auth/organizer-login"} className="font-medium">
            Login here
          </Link>{" "}
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
