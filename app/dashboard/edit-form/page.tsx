"use client";

import AppQuestion from "@/components/event/form/AppQuestion";
import AnimationWrapper from "@/components/shared/AnimationWrapper";
import AppButton from "@/components/ui/AppButton";
import {
  useGetFormByIdQuery,
  useUpdatedEventMutation,
} from "@/redux/features/event/eventApi";
import {
  FieldType,
  setField,
  setFormId,
  setTitle,
} from "@/redux/features/event/eventSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { BsPatchQuestion } from "react-icons/bs";
import { FaPlus, FaXmark } from "react-icons/fa6";
import { IoMdRadioButtonOn } from "react-icons/io";
import { MdOutlineUploadFile } from "react-icons/md";
import { TbCalendarQuestion, TbMessageCircleQuestion } from "react-icons/tb";
import { toast } from "react-toastify";

type Inputs = {
  description: string;
};

const EditEventForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const event = useAppSelector((state) => state.event.selectedEvent);

  const title = useAppSelector((state) => state.event.title);
  const fields = useAppSelector((state) => state.event.fields);
  const eventId = useAppSelector((state) => state.event.eventId);

  const [openQuestion, setOpenQuestion] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
    setValue,
  } = useForm<Inputs>();

  const { data } = useGetFormByIdQuery(event?.formId);
  console.log("🚀 ~ EditEventForm ~ data:", data);

  const [updateEvent] = useUpdatedEventMutation();

  const questionType = [
    {
      label: "Short Question",
      icon: <BsPatchQuestion className="text-gray-600 text-lg" />,
      fieldType: FieldType.Text,
    },
    {
      label: "Long Question",
      icon: <TbMessageCircleQuestion className="text-gray-600 text-lg" />,
      fieldType: FieldType.Textarea,
    },
    {
      label: "Single Choice",
      icon: <IoMdRadioButtonOn className="text-gray-600 text-lg" />,
      fieldType: FieldType.Radio,
    },
    {
      label: "Multiple Choice",
      icon: <IoMdRadioButtonOn className="text-gray-600 text-lg" />,
      fieldType: FieldType.Checkbox,
    },
    {
      label: "Date",
      icon: <TbCalendarQuestion className="text-gray-600 text-lg" />,
      fieldType: FieldType.Date,
    },
    {
      label: "Upload File",
      icon: <MdOutlineUploadFile className="text-gray-600 text-lg" />,
      fieldType: FieldType.File,
    },
  ];

  const createQuestion = (label: string, fieldType: FieldType) => {
    dispatch(
      setField({
        label,
        fieldType,
      })
    );
    setOpenQuestion(false);
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const submittedData = {
      id: eventId,
      eventData: {
        title,
        description: data.description,
        fields,
        eventId,
      },
    };

    await updateEvent(submittedData)
      .unwrap()
      .then((res: any) => {
        dispatch(setFormId(res?.data?._id));
      })
      .catch((res: any) => {
        console.log(res);
        toast.error(res?.data?.message || "Something went wrong", {
          toastId: 1,
        });
      });
  };

  useEffect(() => {
    setValue("description", data?.data?.description);
  }, []);

  useEffect(() => {
    if (!event) {
      toast.error("Please select event and see the response", { toastId: 1 });
      return router.push("/dashboard/manage-my-event");
    }
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" w-full lg:w-[80%] mx-auto"
    >
      <div className=" bg-white h-40 rounded-md py-5">
        <input
          defaultValue={title}
          className="text-4xl font-medium text-[#1E293B] w-full focus:outline-none pb-2"
          onChange={(e) => dispatch(setTitle(e.target.value))}
        />
        <hr className="mb-8" />
        <textarea
          placeholder="From Description"
          className="h-auto resize-none text-base font-medium placeholder:font-normal text-[#1E293B] w-full focus:outline-none"
          {...register("description")}
        />
        <hr />
      </div>

      {fields.map((field, i) => (
        <AnimationWrapper
          key={field.label + i}
          transition={{ delay: i * 0.08 }}
        >
          <AppQuestion index={i} field={field} />
        </AnimationWrapper>
      ))}

      <button
        type="button"
        onClick={() => setOpenQuestion((prev) => !prev)}
        className="text-primary flex items-center gap-1 my-4"
      >
        {openQuestion ? (
          <FaXmark className="text-lg" />
        ) : (
          <FaPlus className="text-lg" />
        )}{" "}
        Add New
      </button>

      {openQuestion && (
        <div className="grid grid-cols-3 gap-5">
          {questionType.map((question, i) => (
            <AnimationWrapper
              key={question.label + i}
              transition={{ delay: i * 0.08 }}
            >
              <button
                type="button"
                onClick={() =>
                  createQuestion(question.label, question.fieldType)
                }
                className="w-full border border-primary bg-white rounded-md px-6 py-4 hover:bg-blue-50 flex items-center gap-x-6 gap-y-4"
              >
                {question.icon} {question.label}
              </button>
            </AnimationWrapper>
          ))}
        </div>
      )}

      <AppButton
        type="submit"
        label="Save Changes"
        className="mt-8 w-fit"
        iconPosition="right"
      />
    </form>
  );
};

export default EditEventForm;
