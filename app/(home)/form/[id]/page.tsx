"use client";

import AnimationWrapper from "@/components/shared/AnimationWrapper";

interface FormPageProps {
  params: {
    id: string;
  };
}

const Page = ({ params }: FormPageProps) => {
  console.log(params);
  return (
    <AnimationWrapper keyValue="event page">
      <div className="pt-32 2xl:pt-40 space-y-12 w-[80%] mx-auto">
        This is [id] Components
      </div>
      ;
    </AnimationWrapper>
  );
};

export default Page;
