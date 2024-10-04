import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"; // Add any icons you want
import { IoLogoInstagram } from "react-icons/io5";

interface ProfileCardBottomProps {
  socialMediaLinks: {
    name: string;
    url: string;
  }[];
}

const ProfileCardBottom = ({ socialMediaLinks }: ProfileCardBottomProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg h-auto flex flex-col gap-2 p-4">
      <div className="flex gap-4 items-center">
        <Image
          width={20}
          height={20}
          src="/assets/elements (1).png"
          alt=""
          className="w-5"
        />
        <p className="font-semibold">Social Media</p>
      </div>

      <div className="flex flex-col gap-2 mt-4">
        {socialMediaLinks?.map((link, index) => (
          <div key={index} className="flex gap-4 items-center cursor-pointer">
            {link.name === "Facebook" && <FaFacebook />}
            {link.name === "Instagram" && <IoLogoInstagram />}
            {link.name === "Twitter" && <FaTwitter />}
            {link.name === "LinkedIn" && <FaLinkedin />}
            {link.name === "GitHub" && <FaGithub />}

            <Link href={link.url} target="_blank">
              <p>{link.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCardBottom;
