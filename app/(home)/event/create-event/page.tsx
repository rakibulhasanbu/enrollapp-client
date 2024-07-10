"use client";

import { FaLongArrowAltRight } from "react-icons/fa";
import EventBanner from "@/components/event/EventBanner";
import AppButton from "@/components/ui/AppButton";
import AppFormInput from "@/components/ui/AppFormInput";
import { useForm, SubmitHandler } from "react-hook-form";
import AppFormSelect from "@/components/ui/AppFormSelect";
import { OrganizationType } from "@/types";
import { useCreateEventMutation } from "@/redux/features/event/eventApi";
import { toast } from "react-toastify";
import PrivateLayout from "@/components/layout/PrivetLayout";
import { useRouter } from "next/navigation";

type Inputs = {
  title: string;
  category: string;
  eventType: string;
  location: string;
  eventDate: Date;
  registrationDeadline: Date;
  description: string;
  registrationFee: number;
  registrationFormId: string;
};

const Page = () => {
  const router = useRouter();
  const [createEvent] = useCreateEventMutation();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    const submittedData = {
      ...data,
      eventBanner: "https",
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

  const meansOfIdentificationOptions = [
    { value: "PASSPORT", label: "PASSPORT" },
    { value: "DRIVER_LICENSE", label: "Driver LICENSE" },
    { value: "NATIONAL_ID", label: "NATIONAL ID (NIN)" },
  ];

  const organizationTypeOptions = OrganizationType.map((type) => ({
    value: type,
    label: type,
  }));

  return (
    <PrivateLayout>
      <div className="pt-40 container px-4 lg:px-20 2xl:px-40 mx-auto">
        <EventBanner
          imgSrc1="/assets/Frame 1618872988.png"
          imgAlt1="Event Banner"
          imgSrc2="/assets/image-add-01.png"
          imgAlt2="Event Banner"
          label="Add Event Banner"
        />

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
          <p className="text-[#475569] text-[20px]">Add Types</p>
          <div className="grid grid-cols-2 gap-4">
            <AppFormSelect
              placeholder="Category"
              name="category"
              required
              control={control}
              options={meansOfIdentificationOptions}
            />
            <AppFormSelect
              placeholder="Type"
              name="eventType"
              required
              control={control}
              options={organizationTypeOptions}
            />
          </div>
          <div className="flex justify-between items-start gap-4 ">
            <AppFormInput
              label="Location"
              placeholder="Enter event location"
              type="text"
              name="location"
              register={register}
              error={errors.location}
            />

            <AppFormInput
              label="Event Date"
              placeholder="Event Date"
              type="date"
              name="eventDate"
              register={register}
              required
              error={errors.eventDate}
            />
            {/* <AppFormInput
            label=""
            placeholder="End Date & Time"
            type="text"
            name="EndtDateTime"
            register={register}
            error={errors.EndtDateTime}
          /> */}
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
          <AppFormInput
            label="Add Description"
            placeholder="Write Whatever You Want"
            type="textarea"
            name="description"
            register={register}
            error={errors.description}
            required
          />

          <div className="pt-4 w-full text-center">
            <AppButton
              type="submit"
              label="Next"
              className="w-full"
              icon={<FaLongArrowAltRight />}
              iconPosition="right"
            />
          </div>
        </form>
      </div>
    </PrivateLayout>
  );
};

export default Page;
