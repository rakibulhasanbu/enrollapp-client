import Image from "next/image";
import img1 from "./profilecardassets/call.png";
import img2 from "./profilecardassets/Frame 1618872999 (1).png";
import img3 from "./profilecardassets/Frame 1618872999 (2).png";
import img4 from "./profilecardassets/Frame 1618872999 (3).png";
import img5 from "./profilecardassets/Frame 1618872999.png";
import img7 from "./profilecardassets/web-design-02.png";

// type AppProfile = {
//   description: string;
//   imgUrl: any;
// };
const ProfileCard = () => {
  return (
    <div className="bg-white w-auto rounded-xl shadow-xl p-5 h-[300px] ">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Image width={40} height={40} src="/assets/elements.png" alt="" />
        <p className="text-[12px] w-full">Contact Details</p>
      </div>
      {profileIcon.map((items) => (
        <div
          key={items.description}
          className="flex items-center justify-center"
        >
          <div className="w-[200px] flex items-center justify-start gap-1 mb-5">
            <Image src={items.imgUrl} alt="Icon" className="w-[20px]" />
            <div className="text-[16px] text-[#64748B]">
              {items.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileCard;

const profileIcon = [
  {
    imgUrl: img1,
    description: "8801629897313",
  },
  {
    imgUrl: img2,
    description: "Mdrak@gmail.com",
  },
  {
    imgUrl: img3,
    description: "Dhaka, Bangladesh",
  },
  {
    imgUrl: img4,
    description: "ui/uxdesigner.com",
  },
  {
    imgUrl: img5,
    description: "Username",
  },
];
