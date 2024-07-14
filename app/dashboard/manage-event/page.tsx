"use client";

import AppModal from "@/components/ui/AppModal";
import AppTable from "@/components/ui/AppTable";
import TableLoading from "@/components/ui/TableLoading";
import { useState } from "react";
import { MdBlock } from "react-icons/md";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const Page = () => {
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      className: "min-w-[150px]",
      render: (name: string, record: any) => {
        return (
          <div className="flex items-center gap-1">
            <img
              src={record?.profileImg as string}
              alt=""
              className="rounded-full w-10 h-10"
            />
            <p className="cursor-pointer">{name}</p>
          </div>
        );
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      className: "min-w-[150px]",
    },
    {
      title: "Money",
      dataIndex: "Currency",
      className: "min-w-[150px]",
      render: (Currency: any) => {
        return <p className="font-medium">${Currency?.amount.toFixed(2)}</p>;
      },
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      className: "min-w-[145px]",
    },
    {
      title: "Role",
      dataIndex: "role",
      className: "min-w-[145px]",
      render: (role: any) => {
        return <p className="text-base font-medium uppercase">{role}</p>;
      },
    },
    {
      title: "User Status",
      dataIndex: "isBlocked",
      className: "min-w-[115px]",
      render: (isBlocked: boolean) => {
        return (
          <div
            className={`flex items-center gap-1 text-sm ${
              isBlocked ? "text-textDark" : "text-success"
            }`}
          >
            {isBlocked ? <MdBlock /> : <RiVerifiedBadgeFill />}
            {isBlocked ? "Blocked" : "Active"}
          </div>
        );
      },
    },

    {
      title: "Action",
      dataIndex: "action",
      className: "min-w-[145px]",
      render: (text: string, record: any) => {
        return (
          <div className="flex items-center justify-evenly gap-1">
            <AppModal
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
            </AppModal>

            <AppModal
              button={<button className="appBtnSm">Delete</button>}
              cancelButtonTitle="No, Don’t"
              primaryButtonTitle="Yes. Remove"
              // primaryButtonAction={() => deleteUser(record?.id)}
            >
              <div className="max-w-80">
                <p className="text-center text-[#828282] pt-4 text-lg">
                  Are you sure Remove{" "}
                  <span className="text-textDark font-medium">
                    {record?.name}
                  </span>{" "}
                  from the user list?
                </p>
              </div>
            </AppModal>
          </div>
        );
      },
    },
  ];

  const queryInfo = {};
  return (
    <div className="">
      <div className="h-[65dvh] overflow-auto">
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
