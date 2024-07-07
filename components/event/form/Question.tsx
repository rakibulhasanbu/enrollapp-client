import { FiCopy } from "react-icons/fi";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { WiDirectionDown, WiDirectionUp } from "react-icons/wi";

const Question = () => {
  return (
    <div className="bg-white p-10 h-60 mt-20 border-l-8 border-blue-600 rounded-md">
      <div className="flex items-center justify-end gap-3">
        <FiCopy />
        <RiDeleteBin6Line />
        <WiDirectionDown />
        <WiDirectionUp />
      </div>
      <div>
        <h1>Question</h1>
        <hr />
        <input type="text" />
        <hr />
      </div>
      <div>
        <MdOutlineAddPhotoAlternate />
        <div>
          <MdOutlineAddPhotoAlternate />
          <p>Long Answer</p>
        </div>
      </div>
    </div>
  );
};

export default Question;
