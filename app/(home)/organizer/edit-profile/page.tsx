"use client";

import EventBanner from "@/components/shared/EventBanner";
import AppButton from "@/components/ui/AppButton";
import AppFormInput from "@/components/ui/AppFormInput";
import AppFormSelect from "@/components/ui/AppFormSelect";
import AppFormTextarea from "@/components/ui/AppFormTextarea";
import { selectCurrentOrganizer } from "@/redux/features/auth/authSlice";
import { useUpadteOrganizerByIdMutation } from "@/redux/features/organizer/organizerApi";
import { useAppSelector } from "@/redux/hook";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  title: string;
  contactNumber: number;
  contactpersonName: string;
  SocialMediaLinks: string;
  contactPersonMobileNumber: number;
  website: string;
  officeAddress: string;
  serviceArea: string;
  name: string;
  username: string;
  email: string;
  orgLogo: any;
  about: string;
  eventType: string;
  location: string;
  eventDate: Date;
  registrationDeadline: Date;
  description: string;
  registrationFee: number;
  registrationFormId: string;
  roleInOrg: string;
};

const categoryOptions = [
  { label: "Category 1", value: "category1" },
  { label: "Category 2", value: "category2" },
  { label: "Category 3", value: "category3" },
];

const Page = () => {
  const organizer = useAppSelector(selectCurrentOrganizer);
  const [updateOrganizer] = useUpadteOrganizerByIdMutation();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    const submittedData = {
      id: organizer?.id,
      organizerData: {
        name: data.name,
        email: data.email,
        contactNumber: data.contactNumber,
        officeAddress: data.officeAddress,
        website: data.website,
        contactPerson: {
          name: data.contactpersonName,
          mobileNumber: data.contactPersonMobileNumber,
          roleInOrg: data.roleInOrg,
        },
        orgLogo: organizer?.orgLogo,
      },
    };
    await updateOrganizer(submittedData);
  };

  return (
    <div className="pt-40 w-[80%] mx-auto relative">
      <EventBanner label="Add Banner" isEditable={true} />
      <div className="h-52 absolute left-16 lg:left-10 top-80 w-52 rounded-full border">
        <img
          src={organizer?.orgLogo}
          className="w-full h-full bg-backgroundColor rounded-full"
          alt=""
        />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-24 grid grid-cols-1 gap-4"
      >
        <AppFormInput
          label="Name"
          placeholder="Org Name"
          type="text"
          name="name"
          register={register}
          error={errors.name}
          required
        />
        <AppFormTextarea
          label="About Us"
          placeholder="Write about your organization"
          name="about"
          register={register}
          error={errors.about}
          required
        />

        <AppFormInput
          label="Email Account"
          placeholder="Write Email"
          type="text"
          name="email"
          register={register}
          error={errors.email}
          required
        />
        <AppFormInput
          label="Office Address"
          placeholder="Write Address"
          type="text"
          name="officeAddress"
          register={register}
          error={errors.officeAddress}
        />
        <AppFormInput
          label="Service Area"
          placeholder="Write Service Area"
          type="text"
          name="serviceArea"
          register={register}
          error={errors.serviceArea}
        />
        <div className="grid grid-cols-2 gap-4">
          <AppFormSelect
            label="Category"
            placeholder="Category"
            name="category"
            required
            control={control}
            options={categoryOptions}
          />

          <AppFormInput
            label="Contact"
            placeholder="Contact Number"
            type="number"
            name="contact"
            register={register}
            error={errors.contactNumber}
            required
          />
        </div>
        <AppFormInput
          label="Website"
          placeholder="Past your website Url"
          type="text"
          name="website"
          register={register}
          error={errors.website}
        />
        <div className="grid grid-cols-2 gap-4">
          <AppFormSelect
            label="Socila media Name"
            placeholder="Choose"
            name="Choose"
            required
            control={control}
            options={categoryOptions}
          />
          <AppFormInput
            label="Social Media Links"
            placeholder="Social Media Links"
            type="text"
            name="SocialMediaLinks"
            register={register}
            error={errors.SocialMediaLinks}
          />
        </div>
        <section>
          <p className="text-[20px] text-[#475569]">
            Contact Details Information
          </p>
          <div className="grid grid-cols-3 gap-4">
            <AppFormInput
              placeholder="Name"
              type="text"
              name="contactpersonName"
              register={register}
              error={errors.contactpersonName}
            />
            <AppFormInput
              placeholder="Mobile Number"
              type="number"
              name="contactPersonMobileNumber"
              register={register}
              error={errors.contactPersonMobileNumber}
            />
            <AppFormInput
              placeholder="Role In organization"
              type="text"
              name="roleInOrg"
              register={register}
              error={errors.roleInOrg}
            />
          </div>
        </section>

        <div className="grid grid-cols-2 gap-4  mt-4">
          <AppButton type="submit" label="Save" variant="filled" />
          <AppButton label="Cancel" variant="outlined" />
        </div>
      </form>
    </div>
  );
};

export default Page;
