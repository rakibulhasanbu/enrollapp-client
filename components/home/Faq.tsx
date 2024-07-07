import React from "react";
import AppButton from "../ui/AppButton";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export const Faq = () => {
  return (
    <div className="w-full mt-40 p-4 lg:w-[80%] mx-auto flex  flex-col lg:flex-row items-center justify-between gap-[50px]">
      <div className=" text-center lg:text-left flex flex-col gap-6 lg:w-[800px]">
        <div>
          <h1 className="text-[48px] font-bold">Frequently asked Questions</h1>
        </div>
        <div>
          <p className="text-[16px] text-[#64748B]">
            Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum.Cras
            pretium suscipit tellus sit amet aliquet. Vestibulum maximus lacinia
            massa non porttitor.
          </p>
        </div>
        <div>
          <AppButton
            label="Join Us"
            variant="outlined"
            icon={<FaArrowRight />}
          />
        </div>
      </div>
      <div className="w-full  ">
        <hr />
        <div className="text-[24px] py-5 flex  items-center justify-between">
          <p>How does Enroll work?</p>
          <div className="w-[20px]">
            <Image
              src="/assets/Component 116.png"
              alt="#"
              layout="responsive"
              width={20}
              height={20}
            />
          </div>
        </div>
        <hr />
        <div className="text-[24px] py-5 flex  items-center justify-between">
          <p>How do create a new account ?</p>
          <div className="w-[20px]">
            <Image
              src="/assets/Component 116.png"
              alt="#"
              layout="responsive"
              width={20}
              height={20}
            />
          </div>
        </div>
        <hr />
        <div className=" text-[24px] py-5 flex  items-center justify-between">
          <p>How many Event can register ?</p>
          <div className="w-[20px]">
            <Image
              src="/assets/Component 116.png"
              alt="#"
              layout="responsive"
              width={20}
              height={20}
            />
          </div>
        </div>
        <hr />
        <div className=" text-[24px] py-5 flex  items-center justify-between">
          <p>How i find my ticket ?</p>
          <div className="w-[20px]">
            <Image
              src="/assets/Component 116.png"
              alt="#"
              layout="responsive"
              width={20}
              height={20}
            />
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};
