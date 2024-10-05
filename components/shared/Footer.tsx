import Image from "next/image";
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" w-full px-4 lg:px-0 lg:w-[80%] mx-auto flex flex-col mt-20">
      <div className=" lg:flex justify-between items-center mb-3 lg:my-10">
        <div className="flex items-center justify-between">
          <h1 className="">
            <Image src="/assets/logo.png" width={80} height={80} alt="#" />
          </h1>
          <div className="flex lg:hidden justify-center items-center gap-6">
            <FaInstagram />

            <FaFacebookF />

            <FaTwitter />

            <FaGithub />
          </div>
        </div>

        {/* <div className="flex justify-between lg:justify-center items-center lg:gap-10 mt-2 lg:mt-0 ">
          <p>About</p>
          <p>Feature</p>
          <p>Contact Us</p>
          <p>Support</p>
        </div> */}
        <div className="hidden text-xl lg:flex justify-center items-center gap-6">
          <FaInstagram />

          <FaFacebookF />

          <FaTwitter />

          <FaGithub />
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row lg:justify-between items-center lg:items-center-none mb-4 mt-1 lg:mt-0">
        <p className="lg:w-full">© Copyright 2024, All Rights Reserved</p>
        <div className="w-full flex justify-between lg:justify-end  items-center gap-6  ">
          <p>Privacy Policy </p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
