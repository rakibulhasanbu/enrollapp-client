"use client";

import React, { useState } from "react";
import AppButton from "../ui/AppButton";
import { FaArrowRight } from "react-icons/fa";
import { LuPlus, LuMinus } from "react-icons/lu";

export const Faq = () => {
  // State to track which questions are open
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  // Toggle function to open or close questions
  const toggleQuestion = (index) => {
    if (openQuestionIndex === index) {
      setOpenQuestionIndex(null);
    } else {
      setOpenQuestionIndex(index);
    }
  };

  const faqData = [
    {
      question: "What types of opportunities can I find on Enroll?",
      answer:
        "Enroll offers a wide range of opportunities, including competitions, scholarships, fellowships, skill development training, webinars, workshops, campus ambassador programs, and more. Whether you're looking to enhance your skills, gain experience, or further your education, Enroll has something for you.",
    },
    {
      question: "How can I register for an event or opportunity on Enroll?",
      answer:
        "To register for an event or opportunity, simply browse through the opportunities listed on our website, select the one you're interested in, and follow the instructions for registration. You'll be guided through an easy, step-by-step process to secure your spot.",
    },
    {
      question: "Is Enroll free to use?",
      answer:
        "Yes, Enroll is completely free for users. You can explore, register, and participate in all listed opportunities without any cost. Additionally, organizations and clubs can use our Enroll Toolbox to manage their events at no charge.",
    },
    {
      question: "Can I create and promote my own event on Enroll?",
      answer:
        "Yes! If you're part of a youth development organization or club, you can use our free Enroll Toolbox to create, promote, and manage your events. It's an all-in-one solution for handling registrations, tracking participants, and boosting event visibility.",
    },
  ];

  return (
    <div className="w-full p-4 lg:w-[80%] mx-auto md:flex gap-[50px]">
      {/* Static Frequently Asked Questions Section */}
      <div className=" text-center lg:text-left flex flex-col gap-6 lg:w-[800px]">
        <div>
          <h1 className="text-[40px] md:font-bold font-bold ">
            Frequently asked Questions
          </h1>
        </div>
        <div>
          <p className=" text-[#64748B]">
            Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Cras
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

      {/* FAQ Section */}
      <div className="w-full relative">
        {faqData.map((faq, index) => (
          <div key={index}>
            <hr />
            <div className="md:text-[24px] py-5 flex items-center justify-between">
              <p>{faq.question}</p>
              <div
                className="w-5 cursor-pointer"
                onClick={() => toggleQuestion(index)}
              >
                {openQuestionIndex === index ? <LuMinus /> : <LuPlus />}
              </div>
            </div>
            {/* FAQ Answer with smooth transition */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openQuestionIndex === index ? "max-h-[200px]" : "max-h-0"
              }`}
              style={{ transitionProperty: "max-height, opacity" }}
            >
              <div
                className={`text-[#64748B] text-[14px] text-justify transition-opacity duration-500 ease-in-out ${
                  openQuestionIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
        <hr />
      </div>
    </div>
  );
};
