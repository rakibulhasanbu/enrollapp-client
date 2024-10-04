"use client";

import AppButton from "@/components/ui/AppButton";
import AppFormInput from "@/components/ui/AppFormInput";
import AppFormTextarea from "@/components/ui/AppFormTextarea";
import AppModal from "@/components/ui/AppModal";
import AppTable from "@/components/ui/AppTable";
import AppTabs from "@/components/ui/AppTabs";
import TableLoading from "@/components/ui/TableLoading";
import {
  selectCurrentOrganizer,
  selectCurrentUser,
} from "@/redux/features/auth/authSlice";
import {
  useDeleteEventMutation,
  useGetEventsQuery,
  useGetSubmittedResponsesQuery,
  useLazyExportResponsesToExcelQuery,
  useSendEmailToUsersMutation,
} from "@/redux/features/event/eventApi";
import { useAppSelector } from "@/redux/hook";
import { Table } from "antd";
import { TableRowSelection } from "antd/es/table/interface";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdBlock, MdOutlineEmail } from "react-icons/md";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { TbFileDownload } from "react-icons/tb";
import { toast } from "react-toastify";

type Inputs = {
  message: string;
  subject: string;
};

const Page = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<Inputs>();

  const selectedEvent = useAppSelector((state) => state.event.selectedEvent);
  const tabs = [
    {
      label: "All Responses",
      value: "all",
    },
    {
      label: "Rejected",
      value: "rejected",
    },
    {
      label: "Approved",
      value: "approved",
    },
  ];

  useEffect(() => {
    if (!selectedEvent) {
      toast.error("Please select event and see the response", { toastId: 1 });
      return router.push("/dashboard/manage-my-event");
    }
  }, []);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [activeTab, setActiveTab] = useState<string>(tabs[0].value);
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteEvent] = useDeleteEventMutation();
  const [triggerExport, { error, isLoading }] =
    useLazyExportResponsesToExcelQuery();
  const [sendEmailToUser] = useSendEmailToUsersMutation();

  const queryString = useMemo(() => {
    const info = {
      formId: selectedEvent?.formId,
      limit: 10,
      page,
      searchTerm: search.length ? search : "",
    };
    const queryString = Object.keys(info).reduce((pre, key: string) => {
      const value = info[key as keyof typeof info];
      if (value) {
        return pre + `${Boolean(pre.length) ? "&" : ""}${key}=${value}`;
      }
      return pre;
    }, "");
    return queryString;
  }, [page, search]);

  const queryInfo = useGetSubmittedResponsesQuery(queryString);

  const filteredKeys = Object?.keys(
    queryInfo?.data?.data?.data[0] || []
  ).filter((key) => key !== "formId" && key !== "__v" && key !== "_id");

  const emailField =
    filteredKeys.find((key) => /email/i.test(key)) || undefined;

  const columns = filteredKeys?.map((key: string) => {
    return {
      title: key,
      dataIndex: key,
      className: "min-w-[100px]",
    };
  });

  const handleExportResponse = async () => {
    if (!selectedEvent?.formId) {
      toast.error("No formId selected");
      return;
    }

    try {
      // Trigger the export query
      const blob = await triggerExport(selectedEvent.formId).unwrap();

      // Create a URL for the blob
      // const url = window.URL.createObjectURL(
      //   new Blob([blob], {
      //     type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      //   })
      // );

      // // Create a temporary link element
      // const link = document.createElement("a");
      // link.href = url;
      // link.setAttribute("download", "responses.xlsx"); // Set the desired file name

      // // Append the link to the body
      // document.body.appendChild(link);

      // // Programmatically click the link to trigger the download
      // link.click();

      // // Clean up and remove the link
      // link.parentNode?.removeChild(link);
      // window.URL.revokeObjectURL(url);
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "responses.xlsx");

      document.body.appendChild(link);
      link.click();
      link.remove();

      toast.success("Excel file downloaded successfully!");
    } catch (err) {
      toast.error("Failed to export responses");
    }
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<any> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleSendEmail = () => {
    if (!emailField) {
      toast.error(`No "email📧" or "Email📧" field found in the form`, {
        toastId: 1,
      });
      return;
    }

    if (!selectedRowKeys.length) {
      return toast.error("Please select at least one response", {
        toastId: 1,
      });
    }
    setModalOpen(true);
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const submittedData = {
      eventId: selectedEvent?._id,
      data: {
        subject: data.subject,
        message: data.message,
        responseIds: selectedRowKeys,
        emailField,
      },
    };
    setModalOpen(false);
    await sendEmailToUser(submittedData)
      .unwrap()
      .then((res) => {
        toast.success(res?.message, {
          toastId: 1,
        });
        reset();
        setSelectedRowKeys([]);
      })
      .catch((res: any) => {
        toast.error(res.message || "Something went wrong", {
          toastId: 1,
        });
      });
  };

  return (
    <>
      <div className="">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-medium text-primary pb-4">
            Event Name: {selectedEvent?.title}
          </h2>
          <div className="flex items-center gap-2">
            <AppButton
              variant="outlined"
              className="!py-1 !text-base"
              label="Export"
              icon={<TbFileDownload />}
              iconPosition="left"
              onClick={handleExportResponse}
            />
            <AppButton
              variant="outlined"
              className="!py-1 !text-base"
              label="Send Email"
              icon={<MdOutlineEmail />}
              iconPosition="left"
              onClick={handleSendEmail}
            />
          </div>
        </div>

        <AppTabs
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <div className="h-[calc(100dvh-200px)] overflow-auto pt-4">
          <AppTable
            infoQuery={queryInfo}
            columns={columns}
            rowSelection={rowSelection}
            setPage={setPage}
            loadingComponent={<TableLoading columnNumber={columns?.length} />}
          />
        </div>
      </div>

      <AppModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        closeable={false}
        className="lg:!w-[40%]"
        title="Send Email Message and Subject"
      >
        <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
          <AppFormInput
            name="subject"
            type="text"
            className="py-1.5"
            placeholder="please enter email subject"
            required
            register={register}
            error={errors.subject}
          />
          <AppFormTextarea
            name="message"
            className="py-1.5"
            placeholder="please enter message"
            required
            register={register}
            error={errors.message}
          />

          <div className="flex justify-center items-center gap-5 pt-2">
            <AppButton
              variant="outlined"
              type="button"
              className="!py-1 !text-base"
              label="Cancel"
              onClick={() => setModalOpen(false)}
            />
            <AppButton
              type="submit"
              className="!py-1 !text-base"
              label="Send Email"
            />
          </div>
        </form>
      </AppModal>
    </>
  );
};

export default Page;
