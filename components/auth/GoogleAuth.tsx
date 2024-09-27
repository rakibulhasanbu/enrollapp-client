"use client";

import { FcGoogle } from "react-icons/fc";
import AppButton from "../ui/AppButton";
import { useGoogleAuthRegisterMutation } from "@/redux/features/auth/authApi";
import { authWithGoogle } from "../shared/firebase";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";
import { useAppDispatch } from "@/redux/hook";
import { setAccessToken, setUser } from "@/redux/features/auth/authSlice";

const GoogleAuth = () => {
  const searchParams = useSearchParams();
  const from = searchParams.get("from");

  const dispatch = useAppDispatch();
  const router = useRouter();
  const [registerGoogleAuth] = useGoogleAuthRegisterMutation();

  const handleGoogleLogin = () => {
    authWithGoogle()
      .then((user: any) => {
        registerGoogleAuth({ accessToken: user?.accessToken })
          .unwrap()
          .then((res: any) => {
            toast.success(res?.message || "Successfully registered.");
            dispatch(setAccessToken(res?.data?.accessToken));
            dispatch(setUser(res?.data?.user));

            if (from) {
              router.push(from);
            } else {
              router.push("/");
            }
          })
          .catch((res: any) => {
            toast.error(res?.data?.message || "something went wrong");
          });
      })
      .catch((err) => {
        toast.error("Trouble login through Google Account.");
        return console.log(err);
      });
  };
  return (
    <div className="flex items-center justify-center">
      <AppButton
        label="Continue With Google"
        variant="outlined"
        icon={<FcGoogle className="text-xl" />}
        iconPosition="left"
        onClick={handleGoogleLogin}
      />
    </div>
  );
};

export default GoogleAuth;
