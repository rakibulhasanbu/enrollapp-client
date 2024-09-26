"use client";

import AppQuestion from "@/components/event/form/AppQuestion";
import AnimationWrapper from "@/components/shared/AnimationWrapper";
import AppButton from "@/components/ui/AppButton";
import {
  useGetFormByIdQuery,
  useSubmitFormMutation,
} from "@/redux/features/event/eventApi";
import { FormField } from "@/redux/features/event/eventSlice";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { VscEye } from "react-icons/vsc";
import { toast } from "react-toastify";

interface FormPageProps {
  params: {
    id: string;
  };
}

type Inputs = {};

const Page = ({ params }: FormPageProps) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  console.log(params);
  const { data } = useGetFormByIdQuery(params.id);

  const [submitForm] = useSubmitFormMutation();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log("data :>> ", data);

    // const resultArray = Object.entries(data).map(([key, value]) => ({
    //   label: key,
    //   answer: value,
    // }));

    const submittedData = {
      formId: params.id,
      // responses: resultArray,
      ...data,
    };

    await submitForm(submittedData)
      .unwrap()
      .then((res: any) => {
        toast.success("Form submitted successfully!", {
          toastId: 1,
        });
        router.push(`/event`);
      })
      .catch((res: any) => {
        console.log(res);
        toast.error(res?.data?.message || "Something went wrong", {
          toastId: 1,
        });
      });
  };

  return (
    <AnimationWrapper keyValue="event page">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full lg:w-[60%] mx-auto"
      >
        <div className=" bg-white rounded-md py-5 px-5 mt-28">
          <h2 className="text-4xl font-medium text-[#1E293B] w-full focus:outline-none pb-2">
            {data?.data?.title}
          </h2>
          <p className="text-base font-medium placeholder:font-normal text-[#1E293B] w-full focus:outline-none">
            {data?.data?.description}
          </p>
        </div>

        <div className="space-y-2">
          {data?.data?.fields.map((field: FormField, i: number) => (
            <AnimationWrapper
              key={field.label + i}
              transition={{ delay: i * 0.08 }}
              // className="flex flex-col gap-1"
            >
              <AppQuestion isEditing={false} index={i} field={field} />
              {/* <label className="text-lg font-medium" htmlFor={field.label}>
                {field.label}
              </label>
              <input
                type={field.fieldType || "text"}
                className="w-full border px-4 py-2 rounded-md"
                placeholder={`Enter ${field.label}`}
                {...register(field.label)}
              /> */}
            </AnimationWrapper>
          ))}
        </div>

        <AppButton
          type="submit"
          label="Submit"
          className="mt-8 w-fit"
          iconPosition="right"
        />
      </form>
    </AnimationWrapper>
  );
};

export default Page;
