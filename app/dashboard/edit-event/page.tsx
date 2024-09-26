"use client";

import EventBanner from "@/components/shared/EventBanner";
import AppButton from "@/components/ui/AppButton";
import AppFormInput from "@/components/ui/AppFormInput";
import { useForm, SubmitHandler } from "react-hook-form";
import AppFormSelect from "@/components/ui/AppFormSelect";
import { useUpdatedEventMutation } from "@/redux/features/event/eventApi";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import AppFormTextarea from "@/components/ui/AppFormTextarea";
import { useEffect, useState } from "react";
import AnimationWrapper from "@/components/shared/AnimationWrapper";
import OrganizerPrivetLayout from "@/components/layout/OrganizerPrivetLayout";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { setSelectedEvent } from "@/redux/features/event/eventSlice";

type Inputs = {
  title: string;
  category: string;
  eventType: string;
  location: string;
  eventStartDate: string;
  eventEndDate: string;
  registrationDeadline: string;
  description: string;
  registrationFee: number;
  registrationFormId: string;
};

const EventDetailsEditPage = () => {
  const event = useAppSelector((state) => state.event.selectedEvent);
  const [banner, setBanner] = useState(
    "https://plus.unsplash.com/premium_photo-1701590725747-ac131d4dcffd?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [updateEvent] = useUpdatedEventMutation();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
    setValue,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (!banner) {
      return toast.error("please upload banner and try again.");
    }
    console.log(data);

    const submittedData = {
      id: event?._id,
      eventData: {
        ...data,
        eventBanner: banner,
      },
    };

    await updateEvent(submittedData)
      .unwrap()
      .then((res: any) => {
        toast.success("Event updated successful!", { toastId: 1 });
        dispatch(setSelectedEvent(res?.data));
      })
      .catch((res: any) => {
        toast.error(res?.data?.message || "Something went wrong", {
          toastId: 1,
        });
      });
  };

  const eventTypes = [
    { value: "Online", label: "Online" },
    { value: "Offline", label: "Offline" },
  ];

  function formatDateForInput(dateString: string | undefined): string {
    if (!dateString) return ""; // Handle undefined or empty dates

    const date = new Date(dateString);
    if (isNaN(date.getTime())) return ""; // Handle invalid date strings

    return date.toISOString().split("T")[0]; // Return only the 'YYYY-MM-DD' part
  }

  useEffect(() => {
    setValue("title", event?.title as string);
    setValue("eventType", event?.eventType as string);
    setValue("location", event?.location as string);
    setValue("category", event?.category as string);
    setValue("description", event?.description as string);
    setValue("registrationFee", event?.registrationFee as number);
    setValue(
      "registrationDeadline",
      formatDateForInput(event?.registrationDeadline)
    );
    setValue("eventStartDate", formatDateForInput(event?.eventStartDate));
    setValue("eventEndDate", formatDateForInput(event?.eventEndDate));
  }, []);

  useEffect(() => {
    if (!event) {
      toast.error("Please select event and see the response", { toastId: 1 });
      return router.push("/dashboard/manage-my-event");
    }
  }, []);

  return (
    <OrganizerPrivetLayout>
      <AnimationWrapper keyValue="event create page">
        <div className="container px-4 lg:px-20 2xl:px-40 mx-auto">
          <EventBanner onlyView={false} banner={banner} setBanner={setBanner} />

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
              label="Save Changes"
              className="mx-auto mt-4 w-fit"
              iconPosition="right"
            />
          </form>
        </div>
      </AnimationWrapper>
    </OrganizerPrivetLayout>
  );
};

export default EventDetailsEditPage;
