"use client";

import { FaLongArrowAltRight } from "react-icons/fa";
import EventBanner from "@/components/shared/EventBanner";
import AppButton from "@/components/ui/AppButton";
import AppFormInput from "@/components/ui/AppFormInput";
import { useForm, SubmitHandler } from "react-hook-form";
import AppFormSelect from "@/components/ui/AppFormSelect";
import { OrganizationType } from "@/types";
import { useCreateEventMutation } from "@/redux/features/event/eventApi";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import AppFormTextarea from "@/components/ui/AppFormTextarea";
import { useState } from "react";
import AnimationWrapper from "@/components/shared/AnimationWrapper";
import OrganizerPrivetLayout from "@/components/layout/OrganizerPrivetLayout";

type Inputs = {
  title: string;
  category: string;
  eventType: string;
  location: string;
  eventStartDate: Date;
  eventEndDate: Date;
  registrationDeadline: Date;
  description: string;
  registrationFee: number;
  registrationFormId: string;
};

const Page = () => {
  const [banner, setBanner] = useState("");
  const router = useRouter();
  const [createEvent] = useCreateEventMutation();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (!banner) {
      return toast.error("please upload banner and try again.");
    }
    console.log(data);
    const submittedData = {
      ...data,
      eventBanner: banner,
      registrationFormId: "66850ecb9af8d0e462d0ddd7",
    };
    await createEvent(submittedData)
      .unwrap()
      .then((res: any) => {
        toast.success("Event Create successful!", { toastId: 1 });
        router.push("/event");
      })
      .catch((res: any) => {
        console.log(res);
        toast.error(res?.data?.message || "Something went wrong", {
          toastId: 1,
        });
      });
  };

  const eventTypes = [
    { value: "Online", label: "Online" },
    { value: "Offline", label: "Offline" },
  ];

  const organizationTypeOptions = OrganizationType.map((type) => ({
    value: type,
    label: type,
  }));

  return (
    <OrganizerPrivetLayout>
      <AnimationWrapper keyValue="event create page">
        <div className="pt-40 container px-4 lg:px-20 2xl:px-40 mx-auto">
          <EventBanner onlyView={false} banner={banner} setBanner={setBanner} />

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-10 flex flex-col gap-2 "
          >
            <AppFormInput
              label="Add Event Title"
              placeholder="Event Name"
              type="text"
              name="title"
              register={register}
              error={errors.title}
              required
            />

            <div
              className={`grid gap-4 ${
                watch("eventType") === "Offline" ? "grid-cols-2" : "grid-cols-1"
              }`}
            >
              {/* <AppFormSelect
                placeholder="Category"
                name="category"
                required
                control={control}
                options={meansOfIdentificationOptions}
              /> */}
              <AppFormSelect
                label="Event Type"
                placeholder="Type"
                name="eventType"
                required
                control={control}
                options={eventTypes}
              />
              {watch("eventType") === "Offline" && (
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

            <div className="flex justify-between items-start gap-4 ">
              <AppFormInput
                label="Event Start Date"
                placeholder="Event Date"
                type="date"
                name="eventStartDate"
                register={register}
                required
                error={errors.eventStartDate}
              />
              <AppFormInput
                label="Event End Date"
                placeholder="Event End Date"
                type="date"
                name="eventEndDate"
                register={register}
                error={errors.eventEndDate}
              />
            </div>
            <AppFormInput
              label="Registration Deadline"
              placeholder="Registration Deadline"
              type="date"
              name="registrationDeadline"
              register={register}
              error={errors.registrationDeadline}
              required
            />
            <AppFormInput
              label="Fees"
              placeholder="Registration Fee"
              type="number"
              name="registrationFee"
              register={register}
              error={errors.registrationFee}
              required
            />
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

export default Page;
