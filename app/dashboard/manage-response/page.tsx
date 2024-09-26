"use client";

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
} from "@/redux/features/event/eventApi";
import { useAppSelector } from "@/redux/hook";
import { Table } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { MdBlock } from "react-icons/md";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { toast } from "react-toastify";

const Page = () => {
  const router = useRouter();
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

  const [activeTab, setActiveTab] = useState<string>(tabs[0].value);
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const [deleteEvent] = useDeleteEventMutation();

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

  const columns = filteredKeys?.map((key: string) => {
    return {
      title: key,
      dataIndex: key,
      className: "min-w-[100px]",
    };
  });

  return (
    <div className="">
      <h2 className="text-3xl font-medium text-primary pb-4">
        Event Name: {selectedEvent?.title}
      </h2>
      <AppTabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="h-[calc(100dvh-200px)] overflow-auto pt-4">
        <AppTable
          infoQuery={queryInfo}
          columns={columns}
          setPage={setPage}
          loadingComponent={<TableLoading columnNumber={columns?.length} />}
        />
      </div>
    </div>
  );
};

export default Page;
