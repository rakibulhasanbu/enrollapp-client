import { ImSpinner9 } from "react-icons/im";

type TLoading = {
  height?: "full" | "fit";
};

const Loading = ({ height = "full" }: TLoading) => {
  return (
    <div
      className={`flex items-center justify-center ${
        height === "full" ? "min-h-screen" : "h-fit py-20 lg:py-40 2xl:py-40"
      }`}
    >
      <ImSpinner9 className="animate-spin duration-700 text-5xl lg:text-7xl text-primary" />
    </div>
  );
};

export default Loading;
