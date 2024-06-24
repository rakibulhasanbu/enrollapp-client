"use client";
import { FaLongArrowAltRight } from "react-icons/fa";
import EventBanner from "@/app/components/event/EventBanner";
import AppButton from "@/app/components/ui/AppButton";
import AppFormInput from "@/app/components/ui/AppFormInput";
import { useForm, SubmitHandler } from "react-hook-form";
import AppFormSelect from "@/app/components/ui/AppFormSelect";
import { OrganizationType } from "@/types";

type Inputs = {
  StartDateTime: string;
  EndtDateTime: string;
  eventName: string;
  Category: string;
  password: string;
  orgType: string;
  confirmPassword: string;
  email: string;
  location: string;
  type: string;
  fees: number;
  endDate: string;
  description: string;
};
const Page = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
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
    <div className="pt-40 w-[80%] mx-auto">
      <EventBanner
        imgSrc1="/assets/Frame 1618872988.png"
        imgAlt1="Event Banner"
        imgSrc2="/assets/image-add-01.png"
        imgAlt2="Event Banner"
        label="Add Event Banner"
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-40 flex flex-col gap-2 "
      >
        <AppFormInput
          label="Add Event Title"
          placeholder="Event Name"
          type="text"
          name="eventName"
          register={register}
          error={errors.eventName}
          required
        />
        <p className="text-[#475569] text-[20px]">Add Types</p>
        <div className="grid grid-cols-3 gap-4 items-end">
          <AppFormSelect
            placeholder="Category"
            name="Category"
            required
            control={control}
            options={meansOfIdentificationOptions}
          />
          <AppFormSelect
            placeholder="Type"
            name="type"
            required
            control={control}
            options={organizationTypeOptions}
          />
          <AppFormSelect
            placeholder="location"
            name="location"
            required
            control={control}
            options={meansOfIdentificationOptions}
          />
        </div>
        <p className="text-[#475569] text-[20px]">Event Date & Time</p>
        <div className="flex justify-center items-center gap-4 ">
          <AppFormInput
            // label="Event Date & Time"
            placeholder="Start Date & Time"
            type="text"
            name="StartDateTime"
            register={register}
            error={errors.StartDateTime}
          />
          <AppFormInput
            label=""
            placeholder="End Date & Time"
            type="text"
            name="EndtDateTime"
            register={register}
            error={errors.EndtDateTime}
          />
        </div>
        <AppFormInput
          label="Registration Deadline"
          placeholder="End Date"
          type="text"
          name="endDate"
          register={register}
          error={errors.endDate}
          required
        />
        <AppFormInput
          label="Fees"
          placeholder="Registration Fee"
          type="text"
          name="fees"
          register={register}
          error={errors.fees}
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
  );
};

export default Page;
