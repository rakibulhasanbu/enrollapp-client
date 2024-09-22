import {
  deleteField,
  FieldType,
  FormField,
  setField,
  updateField,
  updateLabel,
  updateRequired,
} from "@/redux/features/event/eventSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Switch } from "antd";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import { LuCopy } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";

type TAppQuestion = {
  index: number;
  field: FormField;
};

const AppQuestion = ({ index, field }: TAppQuestion) => {
  const dispatch = useAppDispatch();
  const fields = useAppSelector((state) => state.event.fields);
  const [focused, setFocused] = useState(false);
  const [inputLabel, setInputLabel] = useState(field.label);

  const createQuestion = (label: string, fieldType: FieldType) => {
    dispatch(
      setField({
        label,
        fieldType,
      })
    );
    dispatch(
      updateLabel({
        prevLabel: field.label,
        newLabel: inputLabel,
      })
    );
  };

  useEffect(() => {
    dispatch(
      updateLabel({
        prevLabel: field.label,
        newLabel: inputLabel,
      })
    );
  }, [focused]);

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (divRef.current && !divRef.current.contains(event.target as Node)) {
        setFocused(false);
      }
    };

    // Attach event listener for detecting outside clicks
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Cleanup the event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [divRef]);

  return (
    <div
      ref={divRef}
      className={`bg-white p-5 mt-10 border-l-4 rounded-md space-y-5 ${
        focused ? "border-blue-600" : "border-white"
      }`}
      onClick={() => setFocused(true)}
    >
      {focused && (
        <motion.div
          className="flex items-center justify-end gap-4 text-[#968E90]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <LuCopy
            className="cursor-pointer text-lg hover:text-gray-800"
            onClick={() => createQuestion(field.label, field.fieldType)}
          />

          <RiDeleteBin6Line
            className="cursor-pointer hover:text-red-500 text-lg block"
            onClick={() => dispatch(deleteField(index))}
          />

          <button
            disabled={index === fields.length - 1}
            onClick={() => dispatch(updateField({ index, direction: "inc" }))}
          >
            <FaArrowDown
              className={`text-lg  block ${
                index === fields.length - 1
                  ? "text-gray-300 cursor-not-allowed"
                  : "cursor-pointer hover:text-gray-800"
              }`}
            />
          </button>

          <button
            disabled={index === 0}
            onClick={() => dispatch(updateField({ index, direction: "dec" }))}
          >
            <FaArrowUp
              className={`text-lg block ${
                index === 0
                  ? "text-gray-300 cursor-not-allowed"
                  : "cursor-pointer hover:text-gray-800"
              }`}
            />
          </button>
        </motion.div>
      )}

      <div className="space-y-2">
        <div className="flex items-center gap-0.5">
          <span>{index + 1}. </span>
          <input
            type="text"
            defaultValue={field.label}
            onChange={(e) => setInputLabel(e.target.value)}
            placeholder="Enter your Answer"
            className="outline-none px-2"
          />
        </div>
        <hr />
        {field.fieldType === FieldType.Text && (
          <input
            type="text"
            disabled
            placeholder="Enter your Answer"
            className="outline-none px-2 w-full py-1"
          />
        )}
        {field.fieldType === FieldType.Textarea && (
          <textarea
            disabled
            placeholder="Enter your Answer"
            className="outline-none px-2 w-full py-1 resize-none min-h-20"
          />
        )}
        {field.fieldType === FieldType.Date && (
          <input
            type="date"
            disabled
            placeholder="Enter your Answer"
            className="outline-none px-2 w-full py-1 resize-none"
          />
        )}
        {field.fieldType === FieldType.File && (
          <input
            type="file"
            disabled
            placeholder="Enter your Answer"
            className="outline-none px-2 w-full py-1 resize-none"
          />
        )}
        {field.fieldType === FieldType.Radio && (
          <input
            type="radio"
            disabled
            placeholder="Enter your Answer"
            className="outline-none px-2 w-full py-1 resize-none"
          />
        )}
        <hr />
      </div>

      {focused && (
        <motion.div
          className="flex items-center justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {/* <MdOutlineAddPhotoAlternate /> */}

          <div className="flex items-center gap-4">
            <Switch
              defaultValue={field?.required}
              onChange={() =>
                dispatch(updateRequired({ index, required: !field?.required }))
              }
              size="small"
            />
            <p>Required</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default AppQuestion;
