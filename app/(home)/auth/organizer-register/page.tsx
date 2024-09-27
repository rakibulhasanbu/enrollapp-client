"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import AppFormInput from "@/components/ui/AppFormInput";
import Link from "next/link";
import { toast } from "react-toastify";
import { useOrganizerRegisterMutation } from "@/redux/features/auth/authApi";
import AppFormSelect from "@/components/ui/AppFormSelect";
import { OrganizationType } from "@/types";
import { setAccessToken, setOrganizer } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hook";
import { verifyToken } from "@/utils/verifyToken";
import { useRouter } from "next/navigation";
import AppButton from "@/components/ui/AppButton";
import AnimationWrapper from "@/components/shared/AnimationWrapper";

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
    control,
    formState: { errors },
  } = useForm<Inputs>();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (data.password !== data.confirmPassword) {
      return toast.error(
        "Your new password and confirm password didn't match",
        {
          toastId: 1,
        }
      );
    }

    await registerOrganizer(data)
      .unwrap()
      .then((res: any) => {
        toast.success("Organizer registered successfully!", {
          toastId: 1,
        });
        const organizer = verifyToken(res?.data?.accessToken);
        dispatch(setAccessToken(res?.data?.accessToken));
        dispatch(setOrganizer(organizer));
        router.push(`/`);
      })
      .catch((res: any) => {
        toast.error(res.message || "Something went wrong", {
          toastId: 1,
        });
      });
  };

  const organizationTypeOptions = OrganizationType.map((type) => ({
    value: type,
    label: type,
  }));

  return (
    <AnimationWrapper keyValue={"organizer-register"}>
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
              name="email"
              label="Email"
              type="email"
              register={register}
              placeholder="Enter your email"
              error={errors.email}
              required
            />

            <AppFormSelect
              label="Organization type"
              name="orgType"
              placeholder="Type of The Organization "
              required
              control={control}
              options={organizationTypeOptions}
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
            <Link
              href={"/auth/organizer-login"}
              className="font-medium text-primary"
            >
              Login here
            </Link>{" "}
          </h3>
          <p className={`mt-3 text-sm text-gray-600`}>
            By continuing, you agree to Terms of Service and have Read our
            Privacy Policy.
          </p>
        </div>
      </div>
    </AnimationWrapper>
  );
};

export default OrganizerLogin;
