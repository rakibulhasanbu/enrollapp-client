"use client";

import AppQuestion from "@/components/event/form/AppQuestion";
import Question from "@/components/event/form/AppQuestion";
import AnimationWrapper from "@/components/shared/AnimationWrapper";
import AppButton from "@/components/ui/AppButton";
import AppFormInput from "@/components/ui/AppFormInput";
import AppModal from "@/components/ui/AppModal";
import {
  useCreateFormMutation,
  useUpdatedEventMutation,
} from "@/redux/features/event/eventApi";
import {
  FieldType,
  setEventId,
  setField,
  setFormId,
  setTitle,
} from "@/redux/features/event/eventSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Switch } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { BsPatchQuestion } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaCheck, FaLongArrowAltRight } from "react-icons/fa";
import { FaCross, FaPlus, FaRegCircleXmark, FaXmark } from "react-icons/fa6";
import { HiArrowUturnLeft, HiArrowUturnRight } from "react-icons/hi2";
import { IoMdRadioButtonOn } from "react-icons/io";
import { LuCopy } from "react-icons/lu";
import { MdOutlineUploadFile } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { TbCalendarQuestion, TbMessageCircleQuestion } from "react-icons/tb";
import { VscEye } from "react-icons/vsc";
import { toast } from "react-toastify";

type Inputs = {
  description: string;
};

const Page = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const title = useAppSelector((state) => state.event.title);
  const fields = useAppSelector((state) => state.event.fields);
  const eventId = useAppSelector((state) => state.event.eventId);
  const formId = useAppSelector((state) => state.event.formId);

  const [openQuestion, setOpenQuestion] = useState(false);
  const [showModal, setShowModal] = useState(false);

  //these state for the modal
  const [publicEvent, setPublicEvent] = useState(false);
  const [limitResponse, setLimitResponse] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState(
    "Your response has been recorded"
  );
  const [link, setLink] = useState(
    `${process.env.NEXT_PUBLIC_BASE_URL}/form/${formId}`
  );
  const [linkCopied, setLinkCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(link).then(() => {
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000); // Reset after 2 seconds
    });
  };

  const handleSwitchChange = (setter: any) => (checked: boolean) => {
    setter(checked);
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
    setValue,
  } = useForm<Inputs>();

  const [createForm] = useCreateFormMutation();
  const [updateEvent] = useUpdatedEventMutation();

  // useEffect(() => {
  //   setValue("title", "Untitled From Title");
  // }, []);

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
      title,
      description: data.description,
      fields,
      eventId,
    };
    await createForm(submittedData)
      .unwrap()
      .then((res: any) => {
        setShowModal(true);
        dispatch(setFormId(res?.data?._id));
      })
      .catch((res: any) => {
        console.log(res);
        toast.error(res?.data?.message || "Something went wrong", {
          toastId: 1,
        });
      });
  };

  const handlePublishNow = async () => {
    const submittedData = {
      id: eventId,
      eventData: {
        formId,
        isPublished: true,
        isPublic: publicEvent,
        isLimitOneResponse: limitResponse,
        formLink: link,
        submissionMessage: confirmationMessage,
      },
    };
    await updateEvent(submittedData)
      .unwrap()
      .then((res: any) => {
        toast.success("Event Published successful!", { toastId: 1 });
        setShowModal(false);
        dispatch(setEventId(""));
        dispatch(setFormId(""));
        router.push("/event");
      })
      .catch((res: any) => {
        console.log(res);
        toast.error(res?.data?.message || "Something went wrong", {
          toastId: 1,
        });
      });
  };

  const handleSaveDraft = async () => {
    if (!formId) {
      const submittedData = {
        title,
        description: watch("description"),
        fields,
        eventId,
      };
      await createForm(submittedData)
        .unwrap()
        .then((res: any) => {
          // setShowModal(true);
          // dispatch(setEventId(""));
        })
        .catch((res: any) => {
          console.log(res);
          toast.error(res?.data?.message || "Something went wrong", {
            toastId: 1,
          });
        });
    }

    const submittedData = {
      id: eventId,
      eventData: {
        formId,
        isPublished: false,
        isPublic: publicEvent,
        isLimitOneResponse: limitResponse,
        formLink: link,
        submissionMessage: confirmationMessage,
      },
    };
    await updateEvent(submittedData)
      .unwrap()
      .then((res: any) => {
        toast.success("Event save as a draft successful!", { toastId: 1 });
        setShowModal(false);
        dispatch(setEventId(""));
        dispatch(setFormId(""));
        router.push("/event");
      })
      .catch((res: any) => {
        console.log(res);
        toast.error(res?.data?.message || "Something went wrong", {
          toastId: 1,
        });
      });
  };

  useEffect(() => {
    if (eventId === "") {
      router.push("/event/create-event");
      return;
    }
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="sticky z-50 top-[72px] bg-[#CBD5E1] ">
          <div className="w-[80%] mx-auto text-[#475569] flex items-center justify-between py-5">
            <div>Question</div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1 px-4 py-2">
                <VscEye /> Preview
              </button>
              <AppButton className="!text-sm" label="Save Draft" />
            </div>
          </div>
        </div>

        <div className=" w-full lg:w-[80%] mx-auto">
          <div className=" bg-white h-40 rounded-md py-5 px-10 mt-28">
            <input
              defaultValue={title}
              className="text-4xl font-medium text-[#1E293B] w-full focus:outline-none pb-2"
              onChange={(e) => dispatch(setTitle(e.target.value))}
            />
            <hr className="mb-8" />
            <input
              placeholder="From Description"
              className="text-base font-medium placeholder:font-normal text-[#1E293B] w-full focus:outline-none"
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

          {fields.length > 0 && (
            <AppButton
              type="submit"
              label="Next"
              className="mt-8 w-fit"
              icon={<FaLongArrowAltRight />}
              iconPosition="right"
            />
          )}
        </div>
      </form>

      <AppModal
        closeable={false}
        modalOpen={showModal}
        setModalOpen={setShowModal}
      >
        <div className="w-[500px]">
          <h2 className="text-3xl text-center font-semibold mb-8">Setting</h2>

          <div className="flex justify-between items-center">
            <span className="text-lg font-medium">Public Event</span>
            <Switch
              size="small"
              checked={publicEvent}
              onChange={handleSwitchChange(setPublicEvent)}
            />
          </div>
          <p className="text-gray-500 text-sm mb-4">
            If you turn off, only people with the link can access the event.
          </p>

          <div className="flex justify-between items-center">
            <span className="text-lg font-medium">
              Limit to 1 response (require sign in)
            </span>
            <Switch
              size="small"
              checked={limitResponse}
              onChange={handleSwitchChange(setLimitResponse)}
            />
          </div>
          <p className="text-gray-500 text-sm mb-4">
            If you turn on, participants will be required to sign in.
          </p>

          <div className="mb-4 space-y-2">
            <span className="text-lg font-medium">
              After Submission Confirmation Message
            </span>

            <textarea
              className="w-full text-base resize-none border p-2 rounded-md"
              placeholder="Confirmation Message"
              value={confirmationMessage}
              onChange={(e) => setConfirmationMessage(e.target.value)}
              rows={3}
            />
          </div>

          <p className="text-lg font-medium">Get Link</p>
          <div className="flex items-center mb-6">
            <p className="line-clamp-1 flex-1 px-2 py-1.5 bg-gray-100 font-medium text-gray-800 rounded-md">
              {link}
            </p>
            <button
              onClick={handleCopy}
              className="ml-4 bg-primary rounded-md py-2 text-lg px-4 text-white"
            >
              {linkCopied ? <FaCheck /> : <LuCopy />}
            </button>
          </div>

          <div className="flex justify-center items-center gap-6">
            <AppButton
              onClick={handleSaveDraft}
              className="!py-1 !text-sm"
              variant="outlined"
              label="Save Draft"
            />
            <AppButton
              onClick={handlePublishNow}
              className="!py-1 !text-sm"
              label="Publish Now"
            />
          </div>
        </div>
      </AppModal>
    </>
  );
};

export default Page;
