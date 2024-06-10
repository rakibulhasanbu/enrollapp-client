// "use client";

import Link from "next/link";
import AppButton from "../ui/AppButton";

const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
      //   icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Event",
      link: "/",
      //   icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About Us",
      link: "/about",
      //   icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact Us",
      link: "/contact",
      //   icon: (
      //     "DF"
      //     // <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      //   ),
    },
  ];
  return (
    <>
      <div className=" fixed  w-full z-50">
        <div className="  w-[80%] mx-auto flex items-center justify-between bg-[#171717] border  rounded-full px-10 py-3  mt-8 ">
          <div>
            <Link href={"/"}>
              <h1 className="text-[32px] font-bold text-[#FFFFFF]">Logo</h1>
            </Link>
          </div>
          <div className="flex justify-center items-center gap-10 text-[#94A3B8] text-[16px]">
            {navItems.map((item) => (
              <Link key={item?.name} href={item?.link}>{item.name}</Link>
            ))}
          </div>
          <div className="flex gap-4 cursor-pointer">
            <AppButton label="Signup" variant="noDesign" href="/auth/sign-up" />
            <AppButton label="Login" variant="outlined" href="/auth/sign-in" />
          </div>
        </div>
      </div>
      {/* <div className="relative  w-full">
        <FloatingNav navItems={navItems} />
      </div> */}
    </>
  );
};

export default Navbar;
