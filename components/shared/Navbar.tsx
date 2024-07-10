"use client";

import Link from "next/link";
import AppButton from "../ui/AppButton";
import { useAppSelector } from "@/redux/hook";
import { selectCurrentOrganizer } from "@/redux/features/auth/authSlice";
import ProfileDetailsPopUp from "../home/ProfileDetailsPopUp";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const organizer = useAppSelector(selectCurrentOrganizer);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    console.log(pathname);
    if (pathname === "/") {
      window.addEventListener("scroll", () => {
        window.scrollY > 500 ? setSticky(true) : setSticky(false);
      });
    } else {
      setSticky(true);
    }
  }, [pathname]);

  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Event",
      link: "/event",
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Contact Us",
      link: "/contact",
    },
  ];

  return (
    <div className="lg:fixed w-full z-50">
      <div
        className={`w-full transition-color px-4  mx-auto flex items-center justify-between lg:border lg:px-10 py-3  lg:rounded-full ${
          sticky
            ? " lg:rounded-none text-white lg:border-none fixed top-0 bg-primary w-full "
            : "bg-[#171717] lg:w-[80%] lg:mt-8 text-[#94A3B8]"
        }`}
      >
        <div>
          <Link href={"/"}>
            {/* <h1 className="text-[32px] font-bold text-[#FFFFFF]">Logo</h1> */}
            <Image
              className="object-cover w-full h-full"
              src={"/assets/logo.png"}
              width={80}
              height={40}
              alt="logo"
            />
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            className="text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <div className="hidden md:flex justify-center items-center gap-10  text-[16px]">
          {navItems.map((item) => (
            <Link key={item?.name} href={item?.link}>
              {item.name}
            </Link>
          ))}
        </div>
        {organizer?.email ? (
          <div className="hidden md:flex items-center gap-4">
            <AppButton label="Log Out" variant="outlined" />
            <ProfileDetailsPopUp />
          </div>
        ) : (
          <div className="hidden md:flex gap-4 cursor-pointer">
            <AppButton label="Signup" variant="noDesign" href="/auth/sign-up" />
            <AppButton label="Login" variant="outlined" href="/auth/sign-in" />
          </div>
        )}
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#171717] py-4">
          {navItems.map((item) => (
            <Link key={item?.name} href={item?.link}>
              <div className="py-2 text-white">{item.name}</div>
            </Link>
          ))}
          {organizer?.email ? (
            <div className="flex flex-col items-center gap-4">
              <AppButton label="Log Out" variant="outlined" />
              <ProfileDetailsPopUp />
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4">
              <AppButton
                label="Signup"
                variant="noDesign"
                href="/auth/sign-up"
              />
              <AppButton
                label="Login"
                variant="outlined"
                href="/auth/sign-in"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
