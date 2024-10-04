"use client";

import { FaLongArrowAltRight } from "react-icons/fa";
import EventBanner from "@/components/shared/EventBanner";
import AppButton from "@/components/ui/AppButton";
import AppFormInput from "@/components/ui/AppFormInput";
import { useForm, SubmitHandler } from "react-hook-form";
import AppFormSelect from "@/components/ui/AppFormSelect";
import { OrganizationType } from "@/types";
import {
  useCreateEventMutation,
  useUploadImageMutation,
} from "@/redux/features/event/eventApi";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import AppFormTextarea from "@/components/ui/AppFormTextarea";
import { useState } from "react";
import AnimationWrapper from "@/components/shared/AnimationWrapper";
import OrganizerPrivetLayout from "@/components/layout/OrganizerPrivetLayout";
import { useAppDispatch } from "@/redux/hook";
import { setEventId } from "@/redux/features/event/eventSlice";

type Inputs = {
  title: string;
  category: string;
  eventMode: string;
  eventType: string;
  location: string;
  eventStartDate: Date;
  eventEndDate: Date;
  registrationDeadline: Date;
  description: string;
  registrationFee: number;
  registrationFormId: string;
};

const CreateEventPage = () => {
  const [rawFile, setRawFile] = useState<File | null>(null);
  const [banner, setBanner] = useState("");
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [createEvent] = useCreateEventMutation();
  const [uploadImage] = useUploadImageMutation();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (!rawFile) {
      return toast.error("please upload banner and try again.", { toastId: 1 });
    }
    setBanner("");
    router.push("/event/event-form");

    const formData = new FormData();
    formData.append("file", rawFile);

    const response = await uploadImage(formData).unwrap();
    const submittedData = {
      ...data,
      eventBanner: response?.data[0]?.url,
    };

    await createEvent(submittedData)
      .unwrap()
      .then((res: any) => {
        console.log("event id", res?.data?._id);
        // toast.success("Event Create successful!", { toastId: 1 });
        dispatch(setEventId(res?.data?._id));
      })
      .catch((res: any) => {
        console.log(res);
        toast.error(res?.data?.message || "Something went wrong", {
          toastId: 1,
        });
      });
  };

  const eventModes = [
    { value: "Online", label: "Online" },
    { value: "Offline", label: "Offline" },
  ];

  const eventTypes = [
    { value: "Paid", label: "Paid" },
    { value: "Free", label: "Free" },
  ];

  const organizationTypeOptions = [
    {
      label: "Competitions",
      value: "Competitions",
    },
    {
      label: "Seminars or Webinars",
      value: "Seminars or Webinars",
    },
    {
      label: "Fellowships",
      value: "Fellowships",
    },
    {
      label: "Scholarship",
      value: "Scholarship",
    },
    {
      label: "Workshop",
      value: "Workshop",
    },
    {
      label: "Skill Development Training",
      value: "Skill Development Training",
    },
    {
      label: "Campaign or Field Activities",
      value: "Campaign or Field Activities",
    },
    {
      label: "Campus Ambassador Program",
      value: "Campus Ambassador Program",
    },
    {
      label: "Miscellaneous",
      value: "Miscellaneous",
    },
  ];

  return (
    <OrganizerPrivetLayout>
      <AnimationWrapper keyValue="event create page">
        <div className="pt-40 container px-4 lg:px-20 2xl:px-40 mx-auto">
          <EventBanner
            setRawFile={setRawFile}
            onlyView={false}
            banner={banner}
            setBanner={setBanner}
          />

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-10 flex flex-col gap-2 "
          >
            <AppFormInput
              label="Event Title"
              placeholder="Event Name"
              type="text"
              name="title"
              register={register}
              error={errors.title}
              required
            />
            <div className="flex justify-between items-start gap-4 ">
              <AppFormSelect
                label={"Event Category"}
                placeholder="Category"
                name="category"
                required
                control={control}
                options={organizationTypeOptions}
              />
              <AppFormInput
                label="Event Start Date"
                placeholder="Event Date"
                type="date"
                name="eventStartDate"
                validation={{
                  validate: () => {
                    new Date(watch("eventStartDate")) >= new Date() ||
                      "Start date cannot be in the past";
                  },
                }}
                register={register}
                required
                error={errors.eventStartDate}
              />
            </div>

            <div className="flex justify-between items-start gap-4 ">
              <AppFormInput
                label="Event End Date"
                placeholder="Event End Date"
                type="date"
                name="eventEndDate"
                register={register}
                validation={{
                  validate: () =>
                    new Date(watch("eventEndDate")) >=
                      new Date(watch("eventStartDate")) ||
                    "End date cannot be before the start date",
                }}
                error={errors.eventEndDate}
              />

              <AppFormInput
                label="Registration Deadline"
                placeholder="Registration Deadline"
                type="date"
                name="registrationDeadline"
                register={register}
                validation={{
                  validate: () => {
                    new Date(watch("registrationDeadline")) >= new Date() ||
                      "Registration Deadline cannot be in the past";
                  },
                }}
                error={errors.registrationDeadline}
                required
              />
            </div>

            <div
              className={`grid gap-4 ${
                watch("eventMode") === "Offline" ? "grid-cols-2" : "grid-cols-1"
              }`}
            >
              <AppFormSelect
                label="Event Mode"
                placeholder="Type"
                name="eventMode"
                required
                control={control}
                options={eventModes}
              />
              {watch("eventMode") === "Offline" && (
                <AppFormInput
                  label="Location"
                  placeholder="Enter event location"
                  type="text"
                  name="location"
                  register={register}
                  error={errors.location}
                />
              )}
            </div>

            <div
              className={`grid gap-4 ${
                watch("eventType") === "Paid" ? "grid-cols-2" : "grid-cols-1"
              }`}
            >
              <AppFormSelect
                label="Event Type"
                placeholder="Type"
                name="eventType"
                required
                control={control}
                options={eventTypes}
              />
              {watch("eventType") === "Paid" && (
                <AppFormInput
                  label="Fees"
                  placeholder="Registration Fee"
                  type="number"
                  name="registrationFee"
                  register={register}
                  error={errors.registrationFee}
                  required
                />
              )}
            </div>

            <AppFormTextarea
              label="Add Description"
              placeholder="Write Whatever You Want"
              name="description"
              register={register}
              error={errors.description}
              required
            />

            <AppButton
              type="submit"
              label="Next"
              // href="/event/event-form"
              className="mt-4 w-fit"
              icon={<FaLongArrowAltRight />}
              iconPosition="right"
            />
          </form>
        </div>
      </AnimationWrapper>
    </OrganizerPrivetLayout>
  );
};

export default CreateEventPage;
