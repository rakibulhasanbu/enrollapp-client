import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

const ProfileCardBottom = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg ">
      <div className="flex items-center justify-center gap-4">
        <img src="/assets/elements (1).png" alt="" className="w-5" />
        <p>Social Media</p>
      </div>
      <div className="flex items-center justify-center gap-4">
        <FaFacebook />
        <p>Facebook</p>
      </div>
      <div className="flex items-center justify-center gap-4">
        <IoLogoInstagram />
        <p>Instagram</p>
      </div>
    </div>
  );
};

export default ProfileCardBottom;
