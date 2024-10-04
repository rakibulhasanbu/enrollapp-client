import { LuSearch } from "react-icons/lu";
import { Table } from "antd";
import { ReactNode, useEffect, useState } from "react";
import AppTableSkeleton from "./AppTableSkeleton";
import AppRenderReduxData from "./AppRenderReduxData";
import useDebounce from "@/hooks/useDebounce";
import { TableRowSelection } from "antd/es/table/interface";

type TTableProps = {
  headerText?: string;
  inputPlaceholder?: string;
  columns: any;
  button?: ReactNode;
  loadingComponent?: ReactNode;
  header?: boolean;
  infoQuery?: any;
  isLoading?: boolean;
  onInputChange?: (text: string) => void;
  setPage?: (value: number) => void;
  tabs?: ReactNode;
  rowSelection?: TableRowSelection<any>;
};

const AppTable = ({
  header,
  infoQuery,
  headerText,
  inputPlaceholder,
  button,
  columns,
  onInputChange,
  loadingComponent,
  setPage,
  tabs,
  rowSelection,
}: TTableProps) => {
  const [input, setInput] = useState("");
  const debounceInput = useDebounce(input, 500);

  useEffect(() => {
    if (onInputChange) {
      onInputChange(debounceInput);
    }
  }, [debounceInput, onInputChange]);

  return (
    <div className="w-full  border border-[#E6E6E7] ">
      {/* Table header here  */}
      {!button && !headerText && !inputPlaceholder ? (
        <></>
      ) : (
        <div className="bg-[#F8F8F8] w-full flex gap-2 lg:gap-0 flex-col md:flex-row justify-between p-2 lg:p-3 rounded-t-2xl">
          <div
            className={`flex md:items-center justify-between ${
              inputPlaceholder ? "md:w-3/5" : "md:w-1/5"
            }`}
          >
            <h1 className="md:text-lg lg:text-xl font-medium">{headerText}</h1>
            {inputPlaceholder && (
              <div
                className={`bg-white w-1/2 lg:w-3/5 rounded-md px-1 md:px-2.5 py-1 md:py-1.5 lg:p-2.5 flex items-center`}
              >
                <LuSearch className="text-textDark text-lg" />
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={inputPlaceholder}
                  className="w-full h-full outline-none border-none focus:border-none pl-1 text-sm md:text-base md:pl-2"
                />
              </div>
            )}
          </div>
          {tabs}
          {button && (
            <div className="lg:w-2/5 flex  items-center justify-end">
              {button}
            </div>
          )}
        </div>
      )}

      <div className="overflow-x-auto">
        {infoQuery && (
          <AppRenderReduxData
            loadingComponent={loadingComponent || <AppTableSkeleton />}
            queryData={infoQuery}
            showData={(data) => {
              // console.log(data.data);
              return (
                <Table
                  showHeader={header}
                  columns={columns}
                  rowSelection={rowSelection}
                  dataSource={
                    Array.isArray(data?.data.data)
                      ? data?.data?.data
                      : [data?.data?.data]
                  }
                  rowKey={(record) => {
                    return record.id || record._id;
                  }}
                  pagination={
                    setPage
                      ? {
                          onChange: (value) => setPage(value),
                          pageSize: data?.data?.meta?.limit,
                          total: data?.data?.meta?.total,
                          current: data?.data?.meta?.page,
                          showSizeChanger: false,
                        }
                      : false
                  }
                />
              );
            }}
          />
        )}
      </div>
    </div>
  );
};

export default AppTable;
