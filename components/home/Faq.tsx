"use client";

import React, { useState } from "react";
import AppButton from "../ui/AppButton";
import { FaArrowRight } from "react-icons/fa";
import { LuPlus, LuMinus } from "react-icons/lu";

export const Faq = () => {
  // Set the default state to null so no questions are open initially
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(
    null
  );

  // Toggle function to open or close questions
  const toggleQuestion = (index: number) => {
    if (openQuestionIndex === index) {
      setOpenQuestionIndex(null); // Close if it's the same question
    } else {
      setOpenQuestionIndex(index); // Open the clicked question
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
    <div className="w-full p-4 lg:w-[80%] mx-auto md:flex gap-[50px] space-y-8 md:space-y-0">
      {/* Static Frequently Asked Questions Section */}
      <div className="text-center lg:text-left flex flex-col gap-4 lg:w-[800px]">
        <div>
          <h1 className="text-[32px] md:text-[40px] font-bold text-gray-900">
            Frequently Asked Questions
          </h1>
        </div>
        <div>
          <p className="text-[#64748B] lg:text-xl lg:font-medium text-justify leading-relaxed">
            Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Cras
            pretium suscipit tellus sit amet aliquet. Vestibulum maximus lacinia
            massa non porttitor.
          </p>
        </div>
        <div className="mt-2">
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
            <hr className="border-gray-300" />
            <div
              className="lg:text-[20px] xl:text-[24px] py-5 flex items-center justify-between cursor-pointer hover:text-primary transition-colors duration-300"
              onClick={() => toggleQuestion(index)}
            >
              <p>{faq.question}</p>
              <div className="w-5">
                {openQuestionIndex === index ? <LuMinus /> : <LuPlus />}
              </div>
            </div>
            {/* FAQ Answer with smooth transition */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openQuestionIndex === index
                  ? "max-h-[200px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
              style={{ transitionProperty: "max-height, opacity" }}
            >
              <div className="text-[#64748B] text-[14px] lg:text-lg lg:font-medium text-justify">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
        <hr className="border-gray-300" />
      </div>
    </div>
  );
};
