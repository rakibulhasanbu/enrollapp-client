import Link from "next/link";
import AnimationWrapper from "@/components/shared/AnimationWrapper";
import { Suspense } from "react";
import Loading from "@/components/ui/Loading";
import OrganizerLoginForm from "@/components/auth/OrganizerLoginForm";

const OrganizerLogin = () => {
  return (
    <AnimationWrapper keyValue={"organizer-login"}>
      <div className="min-h-[80vh] flex pt-40 justify-center items-center mx-auto text-center ">
        <div className="bg-white p-16  flex flex-col gap-5 rounded-3xl shadow-2xl">
          <div>
            <h1 className="font-bold text-[32px]">Explore New Opportunities</h1>
            <p className="text-sm font-medium">It&apos;s Free</p>
          </div>
          <Suspense fallback={<Loading />}>
            <OrganizerLoginForm />
          </Suspense>
          <h3>
            Don&apos;t have an Account?{" "}
            <Link href={"/auth/organizer-register"} className="font-medium">
              Register here
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
