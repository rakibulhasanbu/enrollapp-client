import { IoSearch } from "react-icons/io5";

type TAppSearchInput = {
  variant?: "white" | "gray";
};

const AppSearchInput = ({ variant = "white" }: TAppSearchInput) => {
  return (
    <div
      className={`w-[30%] mx-auto flex justify-between items-center py-2 border  rounded-full px-5 mt-5 ${
        variant === "white"
          ? "text-white border-gray-200"
          : "text-gray-800 border-gray-600"
      }`}
    >
      <input
        type="text"
        placeholder="Search event"
        name=""
        id=""
        className="bg-transparent outline-none "
      />
      <IoSearch
        className={`text-xl cursor-pointer ${
          variant === "white" ? "text-white" : "text-gray-800"
        }`}
      />
    </div>
  );
};

export default AppSearchInput;
