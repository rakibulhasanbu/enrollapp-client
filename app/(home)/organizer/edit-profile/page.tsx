"use client";

import OrganizerPrivetLayout from "@/components/layout/OrganizerPrivetLayout";
import AnimationWrapper from "@/components/shared/AnimationWrapper";
import EventBanner from "@/components/shared/EventBanner";
import AppButton from "@/components/ui/AppButton";
import AppFormInput from "@/components/ui/AppFormInput";
import AppFormSelect from "@/components/ui/AppFormSelect";
import AppFormTextarea from "@/components/ui/AppFormTextarea";
import { selectCurrentOrganizer } from "@/redux/features/auth/authSlice";
import { useUpadteOrganizerByIdMutation } from "@/redux/features/organizer/organizerApi";
import { useAppSelector } from "@/redux/hook";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { AiOutlineDelete } from "react-icons/ai";
import { IoAddOutline } from "react-icons/io5";
import { toast } from "react-toastify";

type Inputs = {
  title: string;
  contactNumber: string;
  contactPersonName: string;
  socialMediaLinks: {
    name: string;
    url: string;
  }[];
  contactPersonMobileNumber: string;
  website: string;
  officeAddress: string;
  serviceArea: string;
  name: string;
  username: string;
  email: string;
  orgLogo: any;
  orgType: string;
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

const socialMediaOptions = [
  { label: "LinkedIn", value: "LinkedIn" },
  { label: "Facebook", value: "Facebook" },
  { label: "Tweeter", value: "Tweeter" },
];

const Page = () => {
  const organizer = useAppSelector(selectCurrentOrganizer);
  const [updateOrganizer] = useUpadteOrganizerByIdMutation();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<Inputs>({
    defaultValues: {
      socialMediaLinks: [{ name: "", url: "" }],
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    const submittedData = {
      id: organizer?._id,
      organizerData: {
        name: data.name,
        email: data.email,
        contactNumber: data.contactNumber,
        orgType: data?.orgType,
        about: data?.about,
        officeAddress: data.officeAddress,
        serviceArea: data?.serviceArea,
        website: data.website,
        socialMediaLinks: data?.socialMediaLinks,
        contactPerson: {
          name: data.contactPersonName,
          mobileNumber: data.contactPersonMobileNumber,
          roleInOrg: data.roleInOrg,
        },
        orgLogo: organizer?.orgLogo,
      },
    };
    await updateOrganizer(submittedData)
      .unwrap()
      .then((res: any) => {
        toast.success("Organizer profile updated successful!", {
          toastId: 1,
        });
        router.push(`/organizer/${res?.data?._id}`);
      })
      .catch((res: any) => {
        toast.error(res?.data?.message || "Something went wrong", {
          toastId: 1,
        });
      });
  };

  useEffect(() => {
    setValue("name", organizer?.name as string);
    setValue("email", organizer?.email as string);
    setValue("orgType", organizer?.orgType as string);
    setValue("contactNumber", organizer?.contactNumber as string);
    setValue("about", organizer?.about as string);
    setValue("officeAddress", organizer?.officeAddress as string);
    setValue("serviceArea", organizer?.serviceArea as string);
    setValue("website", organizer?.website as string);
    setValue("contactPersonName", organizer?.contactPerson?.name as string);
    setValue(
      "contactPersonMobileNumber",
      organizer?.contactPerson?.phoneNumber as string
    );
    setValue("roleInOrg", organizer?.contactPerson?.roleInOrg as string);
    setValue("socialMediaLinks", organizer?.socialMediaLinks as any[]);
  }, [organizer, setValue]);

  const { fields, append, remove } = useFieldArray({
    name: "socialMediaLinks",
    control,
  });

  return (
    <OrganizerPrivetLayout>
      <AnimationWrapper keyValue="organizer profile edit page">
        <div className="pt-40 w-[80%] mx-auto relative">
          <EventBanner />
          <div className="h-52 absolute left-16 lg:left-10 top-96 w-52 rounded-full border">
            <Image
              height={208}
              width={208}
              src={organizer?.orgLogo as string}
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

            <AppFormInput
              label="Email Account"
              placeholder="Write Email"
              type="text"
              name="email"
              readOnly
              register={register}
              error={errors.email}
              required
            />
            <div className="grid grid-cols-2 gap-4">
              <AppFormInput
                label="Organization Type"
                placeholder="Write Organization type"
                type="text"
                name="orgType"
                readOnly
                register={register}
                error={errors.orgType}
                required
              />

              <AppFormInput
                label="Contact Number"
                placeholder="Contact Number"
                type="number"
                name="contactNumber"
                register={register}
                error={errors.contactNumber}
                required
              />
            </div>

            <AppFormTextarea
              label="About Us"
              placeholder="Write about your organization"
              name="about"
              register={register}
              error={errors.about}
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
              required
              register={register}
              error={errors.serviceArea}
            />

            <AppFormInput
              label="Website"
              placeholder="Past your website Url"
              type="text"
              name="website"
              required
              register={register}
              error={errors.website}
            />

            <section>
              <p className="text-[20px] text-[#475569]">
                Contact person Details Information
              </p>
              <div className="grid grid-cols-3 gap-4">
                <AppFormInput
                  placeholder="Name"
                  type="text"
                  name="contactPersonName"
                  register={register}
                  required
                  error={errors.contactPersonName}
                />
                <AppFormInput
                  placeholder="Mobile Number"
                  type="number"
                  name="contactPersonMobileNumber"
                  register={register}
                  required
                  error={errors.contactPersonMobileNumber}
                />
                <AppFormInput
                  placeholder="Role In organization"
                  type="text"
                  name="roleInOrg"
                  register={register}
                  required
                  error={errors.roleInOrg}
                />
              </div>
            </section>

            {fields.map((media, index) => (
              <div key={media?.id} className="grid grid-cols-2 gap-4">
                <AppFormSelect
                  label="Social media Name"
                  placeholder="Social media name"
                  name={`socialMediaLinks.${index}.name`}
                  control={control}
                  options={socialMediaOptions}
                />
                <AppFormInput
                  label="Social Media Links"
                  placeholder="Social Media Links"
                  type="text"
                  name={`socialMediaLinks.${index}.url`}
                  register={register}
                  error={errors.socialMediaLinks}
                />
              </div>
            ))}
            <div className="flex items-center justify-center w-fit mx-auto gap-4">
              {fields.length > 1 && (
                <button
                  className="border flex items-center gap-1 border-red-500 rounded-full py-1 px-4 w-fit mx-auto text-red-500"
                  onClick={() => remove(fields.length - 1)}
                >
                  <AiOutlineDelete /> Remove last Added Social media
                </button>
              )}
              <button
                className="border flex items-center gap-1 border-primary rounded-full py-1 px-4 w-fit mx-auto text-primary"
                onClick={() => append({ name: "", url: "" })}
              >
                <IoAddOutline /> Add Social media
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4  mt-4">
              <AppButton type="submit" label="Save" variant="filled" />
              <AppButton label="Cancel" variant="outlined" />
            </div>
          </form>
        </div>
      </AnimationWrapper>
    </OrganizerPrivetLayout>
  );
};

export default Page;
