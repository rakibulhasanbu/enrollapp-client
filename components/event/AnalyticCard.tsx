import { FaArrowRight } from "react-icons/fa";

const AnalyticCard = () => {
  return (
    <div className="flex justify-between items-center bg-white p-5 rounded-lg shadow-lg mt-10">
      <h1>View All Analytical</h1>
      <p>
        <FaArrowRight />
      </p>
    </div>
  );
};

export default AnalyticCard;
