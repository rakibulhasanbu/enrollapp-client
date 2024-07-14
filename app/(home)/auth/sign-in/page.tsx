import AppButton from "@/components/ui/AppButton";
import AnimationWrapper from "@/components/shared/AnimationWrapper";
import GoogleAuth from "@/components/auth/GoogleAuth";
import { Suspense } from "react";
import Loading from "@/components/ui/Loading";

const page = () => {
  return (
    <AnimationWrapper keyValue={"sign-in"}>
      <div className="min-h-[80vh] flex pt-40 justify-center items-center mx-auto text-center ">
        <div className="bg-white p-16  flex flex-col gap-5 rounded-3xl shadow-2xl">
          <div>
            <h1 className="font-bold text-[32px]">Explore New Opportunities</h1>
            <p className="text-sm font-medium">Log in or sign up in seconds</p>
          </div>
          <Suspense fallback={<Loading />}>
            <GoogleAuth />
          </Suspense>

          <p className="text-[#64748B]/50">Or</p>
          <div>
            <p>Do you want to</p>
            <p>
              <span className="font-bold">Create</span> or
              <span className="font-bold"> Share</span> events ?
            </p>
          </div>
          <div className="px-12 w-full">
            <AppButton
              href="/auth/organizer-register"
              label="Join as a Organiser"
              className="w-full text-lg"
            />
          </div>

          <p className={`mt-3 text-sm text-gray-600`}>
            By continuing, you agree to Terms of Service and have Read our
            Privacy Policy.
          </p>
        </div>
      </div>
    </AnimationWrapper>
  );
};

export default page;
