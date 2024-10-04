import Image from "next/image";
import img1 from "./profilecardassets/call.png";
import img2 from "./profilecardassets/Frame 1618872999 (1).png";
import img3 from "./profilecardassets/Frame 1618872999 (2).png";
import img4 from "./profilecardassets/Frame 1618872999 (3).png";
import img5 from "./profilecardassets/Frame 1618872999.png";

type ProfileCardProps = {
  phoneNumber: string;
  email: string;
  location: string;
  username: string;
  website: string;
};

const ProfileCard = ({
  phoneNumber,
  email,
  location,
  username,
  website,
}: ProfileCardProps) => {
  const profileIcon = [
    {
      imgUrl: img1,
      description: phoneNumber,
    },
    {
      imgUrl: img2,
      description: email,
    },
    {
      imgUrl: img3,
      description: location,
    },
    {
      imgUrl: img4,
      description: website,
    },
    {
      imgUrl: img5,
      description: username,
    },
  ];

  return (
    <div className="bg-white w-full rounded-xl shadow-xl p-4  h-auto ">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Image width={40} height={40} src="/assets/elements.png" alt="" />
        <p className=" w-full">Contact Details</p>
      </div>
      {profileIcon.map((items) => (
        <div
          key={items.description}
          className="flex items-center justify-center"
        >
          <div className="w-full flex justify-start gap-1 mb-5">
            <Image src={items.imgUrl} alt="Icon" className="w-[20px]" />
            <div className="text-[16px] text-[#64748B] break-all">
              {items.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileCard;
