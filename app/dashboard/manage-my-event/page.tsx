"use client";

import AppModal from "@/components/ui/AppModal";
import AppTable from "@/components/ui/AppTable";
import TableLoading from "@/components/ui/TableLoading";
import {
  selectCurrentOrganizer,
  selectCurrentUser,
} from "@/redux/features/auth/authSlice";
import {
  useDeleteEventMutation,
  useGetEventsQuery,
  useGetMyEventsQuery,
} from "@/redux/features/event/eventApi";
import { setSelectedEvent } from "@/redux/features/event/eventSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { formatDateOnly } from "@/utils/formateDate";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { MdBlock } from "react-icons/md";
import { RiDeleteBinLine, RiVerifiedBadgeFill } from "react-icons/ri";

const Page = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const queryString = useMemo(() => {
    const info = {
      // role: "admin",
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

  const queryInfo = useGetMyEventsQuery(queryString);
  const [deleteEvent] = useDeleteEventMutation();

  const columns = [
    {
      title: "Organized By",
      dataIndex: "organizer",
      className: "min-w-[150px]",
      render: (organizer: any, record: any) => {
        return (
          <div className="flex items-center gap-1">
            <Image
              width={40}
              height={40}
              src={organizer?.orgLogo as string}
              alt=""
              className="rounded-full w-10 h-10"
            />
            <p className="cursor-pointer">{organizer?.name}</p>
          </div>
        );
      },
    },
    {
      title: "Email",
      dataIndex: "organizer",
      className: "min-w-[150px]",
      render: (organizer: any) => {
        return <div>{organizer?.email}</div>;
      },
    },
    {
      title: "Title",
      dataIndex: "title",
      className: "min-w-[100px]",
    },
    {
      title: "Description",
      dataIndex: "description",
      className: "min-w-[100px]",
    },
    {
      title: "Event Type",
      dataIndex: "eventType",
      className: "min-w-[145px]",
    },
    {
      title: "Start Date",
      dataIndex: "eventStartDate",
      className: "min-w-[145px]",
      render: (eventStartDate: string) => {
        return <div>{formatDateOnly(eventStartDate)}</div>;
      },
    },
    {
      title: "End Date",
      dataIndex: "eventEndDate",
      className: "min-w-[145px]",
      render: (eventEndDate: string) => {
        return <div>{formatDateOnly(eventEndDate)}</div>;
      },
    },

    {
      title: "Action",
      dataIndex: "action",
      className: "min-w-[145px]",
      render: (text: string, record: any) => {
        return (
          <div className="flex items-center justify-evenly gap-1">
            {/* <AppModal
              button={
                <button className="appOutlineBtnSmDelete">
                  {record?.isBlocked ? "UnBlock" : "Block"}
                </button>
              }
              cancelButtonTitle="No, Don’t"
              primaryButtonTitle={`Yes. ${
                record?.isBlocked ? "UnBlock" : "Block"
              }`}
              // primaryButtonAction={() => handleBlockUser(record?.id, record?.isBlocked ? false : true)}
            >
              <div className="max-w-80">
                <p className="text-center text-[#828282] pt-4 text-lg">
                  Are you sure {record?.isBlocked ? "UnBlock" : "Block"}{" "}
                  <span className="text-textDark font-medium">
                    {record?.name}
                  </span>{" "}
                  from the users list?
                </p>
              </div>
            </AppModal> */}

            <button
              onClick={() => {
                dispatch(setSelectedEvent(record));
                router.push("/dashboard/manage-response");
              }}
              className="border border-primary rounded-full px-4 py-1 text-xs font-semibold text-primary hover:bg-primary hover:text-white"
            >
              Manage Event
            </button>

            <AppModal
              button={
                <RiDeleteBinLine className="text-lg hover:text-red-500" />
              }
              cancelButtonTitle="No, Don’t"
              primaryButtonTitle="Yes. Remove"
              primaryButtonAction={() => deleteEvent(record?._id)}
            >
              <div className="max-w-80">
                <p className="text-center text-[#828282] pt-4 text-lg">
                  Are you sure Remove{" "}
                  <span className="text-textDark font-medium">
                    {record?.title}
                  </span>{" "}
                  from the event list?
                </p>
              </div>
            </AppModal>
          </div>
        );
      },
    },
  ];

  return (
    <div className="">
      <h2 className="text-3xl font-medium text-primary pb-4">Manage Events</h2>
      <div className="h-[70dvh] overflow-auto">
        <AppTable
          infoQuery={queryInfo}
          columns={columns}
          setPage={setPage}
          loadingComponent={<TableLoading columnNumber={columns.length} />}
        />
      </div>
    </div>
  );
};

export default Page;
