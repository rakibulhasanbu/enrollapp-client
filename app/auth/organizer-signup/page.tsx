import { FcGoogle } from "react-icons/fc";
import AppButton from "../../components/ui/AppButton";

const page = () => {
  return (
    <div className="min-h-[80vh] flex pt-40 justify-center items-center mx-auto text-center ">
      <div className="bg-white p-16  flex flex-col gap-6 rounded-3xl shadow-2xl">
        <div>
          <h1 className="font-bold text-[32px]">Explore New Opportunities</h1>
          <p>Log in or sign up in seconds</p>
        </div>
        <div className="flex items-center justify-center">
          <AppButton
            label="Continue With Google"
            variant="outlined"
            icon={<FcGoogle className="text-xl" />}
            iconPosition="left"
          />
        </div>
        <p>Or</p>
        <p>Do you want to</p>
        <p>
          <span className="font-bold">Create</span> or
          <span className="font-bold"> Share</span> events
        </p>
        <div className="px-12 w-full">
          <AppButton
            href="/auth/organizer-login"
            label="Join as a Organiser"
            className="w-full"
          />
        </div>

        <p className={`mt-5`}>
          By continuing, you agree to Our Terms of Use.Read our Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default page;
