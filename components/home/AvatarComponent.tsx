import { TOrganizer, TUser } from "@/types";
import Image from "next/image";

type TAvatar = {
  organizer?: TOrganizer | null;
  user?: TUser | null;
  withName?: boolean;
  size?: "large";
};

const AvatarComponent = ({ organizer, user, withName, size }: TAvatar) => {
  return withName ? (
    <div className="flex items-center gap-1 pt-1 md:pt-2">
      <Image
        width={40}
        height={40}
        src={organizer?.orgLogo || (user?.avatar as string)}
        className={`rounded-full ${size === "large" ? "size-8" : "size-5"}`}
        alt="avatar image"
      />
      <p
        className={`text-textBlack ${
          size === "large"
            ? "text-sm md:text-base font-medium"
            : "text-xs md:text-sm"
        }`}
      >
        {organizer?.name || user?.name}
      </p>
    </div>
  ) : (
    <Image
      width={40}
      height={40}
      className="block size-7 md:size-10 rounded-full"
      src={organizer?.orgLogo || (user?.avatar as string)}
      alt="avatar icon"
    />
  );
};

export default AvatarComponent;
