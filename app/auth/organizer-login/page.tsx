"use client";

import { FcGoogle } from "react-icons/fc";
import AppButton from "../../../components/ui/AppButton";
import { useForm, SubmitHandler } from "react-hook-form";
import AppFormInput from "@/components/ui/AppFormInput";
import Link from "next/link";
import { useOrganizerLoginMutation } from "@/redux/features/auth/authApi";
import { toast } from "react-toastify";
import { verifyToken } from "@/utils/verifyToken";
import { setOrganizer } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hook";
import { useRouter } from "next/navigation";
import AnimationWrapper from "@/components/ui/AnimationWrapper";

type Inputs = {
  name: string;
  password: string;
  orgType: string;
  confirmPassword: string;
  email: string;
};

const OrganizerLogin = () => {
  const [organizerLogin] = useOrganizerLoginMutation();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    await organizerLogin(data)
      .unwrap()
      .then((res: any) => {
        toast.success("Organizer log in successful!", {
          toastId: 1,
        });
        const organizer = verifyToken(res?.data?.accessToken);
        dispatch(setOrganizer({ organizer, accessToken: res?.data?.accessToken }))
        router.push(`/`);
      })
      .catch((res: any) => {
        console.log(res);
        toast.error(res?.data?.message || "Something went wrong", {
          toastId: 1,
        });
      });

  };
  return (
    <AnimationWrapper keyValue={"organizer-login"}>
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
            Don&apos;t have an Account? <Link href={"/auth/organizer-register"} className="font-medium">
              Register here
            </Link>{" "}
          </h3>
          <p className={`mt-3 text-sm text-gray-600`}>
            By continuing, you agree to Terms of Service and have Read our Privacy
            Policy.
          </p>
        </div>
      </div>
    </AnimationWrapper>
  );
};

export default OrganizerLogin;
