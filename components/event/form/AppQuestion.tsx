import { FiCopy } from "react-icons/fi";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { WiDirectionDown, WiDirectionUp } from "react-icons/wi";

const AppQuestion = () => {
  return (
    <div className="bg-white p-5 h-52 mt-10 border-l-8 border-blue-600 rounded-md  space-y-5">
      <div className="flex items-center justify-end gap-4 text-[#968E90]">
        <FiCopy />
        <RiDeleteBin6Line />
        <WiDirectionDown />
        <WiDirectionUp />
      </div>
      <div className="space-y-2">
        <h1>Question</h1>
        <hr />
        <input
          type="text"
          placeholder="Enter your Answer"
          className="outline-none "
        />
        <hr />
      </div>
      <div className="flex items-center justify-between">
        <MdOutlineAddPhotoAlternate />
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <img src="/assets/lock.png" alt="" />
            <p>Long Answer</p>
          </div>
          <div className="flex items-center gap-4">
            <img src="/assets/lock.png" alt="" />
            <p>Required</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppQuestion;
