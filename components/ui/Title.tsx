type appTitle = {
  head: string;
  paragraph?: string;
};
export const Title = ({ head, paragraph }: appTitle) => {
  return (
    <div className="my-10  w-[80%] mx-auto">
      <div className="text-black text-[40px] font-bold ">{head}</div>
      <div className="text-[16px] text-[#64748B]"> {paragraph}</div>
    </div>
  );
};
