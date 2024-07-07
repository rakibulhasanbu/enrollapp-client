import { OpportunitiesCard } from "@/components/home/card/OpportunitiesCard";
import MyCardAssets from "@/components/home/card/cardAssets/cardAssets";

export const Opportunities = () => {
  return (
    <div className=" w-full lg:w-[80%] mx-auto my-16 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
      {MyCardAssets.map((items) => (
        <OpportunitiesCard key={items.id} {...items} />
      ))}
    </div>
  );
};
