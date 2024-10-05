import { OpportunitiesCard } from "@/components/home/card/OpportunitiesCard";
import MyCardAssets from "@/components/home/card/cardAssets/cardAssets";
import { AppTitle } from "../ui/AppTitle";

export const Opportunities = () => {
  return (
    <div className="space-all-components">
      <div className="text-center">
        <AppTitle head="Explore Opportunities" paragraph="" />
      </div>
      <div className=" w-full lg:w-[80%] mx-auto  grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4">
        {MyCardAssets.map((items) => (
          <OpportunitiesCard key={items.id} {...items} />
        ))}
      </div>
    </div>
  );
};
