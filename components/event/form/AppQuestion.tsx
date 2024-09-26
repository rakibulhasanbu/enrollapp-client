import {
  deleteField,
  FieldType,
  FormField,
  setField,
  updateField,
  updateFieldDirection,
  updateLabel,
  updateRequired,
} from "@/redux/features/event/eventSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  Button,
  Checkbox,
  Input,
  Radio,
  RadioChangeEvent,
  Space,
  Switch,
} from "antd";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaArrowDown, FaArrowUp, FaPlus, FaTrash } from "react-icons/fa6";
import { LuCopy } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";

type TAppQuestion = {
  index: number;
  field: FormField;
  isEditing?: boolean;
};

const AppQuestion = ({ index, field, isEditing = true }: TAppQuestion) => {
  console.log("field?.fieldType :>> ", field);
  const dispatch = useAppDispatch();
  const fields = useAppSelector((state) => state.event.fields);
  const [focused, setFocused] = useState(false);
  const [inputLabel, setInputLabel] = useState(field.label);
  const [options, setOptions] = useState(field.options || ["Option 1"]);
  const [checkedValues, setCheckedValues] = useState<string[]>([]);
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  const onCheckboxChange = (checkedValues: string[]) => {
    setCheckedValues(checkedValues);
  };

  const addOption = () => {
    setOptions([...options, `Option ${options.length + 1}`]);
  };

  const removeOption = (index: number) => {
    const updatedOptions = options.filter((_, i) => i !== index);
    setOptions(updatedOptions);
  };

  const updateOption = (value: string, index: number) => {
    const updatedOptions = options.map((option, i) =>
      i === index ? value : option
    );
    setOptions(updatedOptions);
  };

  const handleBlur = () => {
    if (inputLabel !== field.label) {
      dispatch(
        updateLabel({
          prevLabel: field.label,
          newLabel: inputLabel,
        })
      );
    }
  };

  const handleOptionsBlur = () => {
    if (options !== field.options) {
      dispatch(
        updateField({
          index,
          field: { ...field, options },
        })
      );
    }
  };

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

  // useEffect(() => {
  //   dispatch(
  //     updateLabel({
  //       prevLabel: field.label,
  //       newLabel: inputLabel,
  //     })
  //   );
  // }, [focused]);

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (divRef.current && !divRef.current.contains(event.target as Node)) {
        setFocused(false);
        handleBlur();
        handleOptionsBlur();
      }
    };

    // Attach event listener for detecting outside clicks
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Cleanup the event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [divRef, inputLabel, options]);

  return (
    <div
      ref={divRef}
      className={`bg-white p-5 mt-10 border-l-4 rounded-md space-y-5 ${
        focused ? "border-blue-600" : "border-white"
      } ${!isEditing && "border-none"}`}
      onClick={() => setFocused(true)}
    >
      {isEditing && focused && (
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
            onClick={() =>
              dispatch(updateFieldDirection({ index, direction: "inc" }))
            }
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
            onClick={() =>
              dispatch(updateFieldDirection({ index, direction: "dec" }))
            }
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

          {isEditing ? (
            <input
              type="text"
              defaultValue={field.label}
              onChange={(e) => setInputLabel(e.target.value)}
              onBlur={handleBlur}
              placeholder="Enter input label"
              className="outline-none px-2"
            />
          ) : (
            <p className="text-base pl-1">{field.label}</p>
          )}
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
          <div className="flex flex-col gap-2">
            <Radio.Group onChange={onChange}>
              <div className="space-y-2">
                {options.map((option, i) => (
                  <div key={i} className="flex items-center">
                    <Radio disabled={isEditing} value={i}>
                      {isEditing ? (
                        <Input
                          value={option}
                          onChange={(e) => updateOption(e.target.value, i)}
                          onBlur={handleOptionsBlur}
                          placeholder="Edit option"
                          className="px-4 bg-backgroundColor py-1 outline-none"
                        />
                      ) : (
                        <p className="text-base">{option}</p>
                      )}
                    </Radio>
                    {isEditing && (
                      <Button
                        onClick={() => removeOption(i)}
                        type="link"
                        danger
                        disabled={options.length === 1}
                      >
                        <FaTrash />
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </Radio.Group>
            {isEditing && (
              <button
                type="button"
                className="text-primary text-sm pl-4 w-fit flex items-center gap-1"
                onClick={addOption}
              >
                <FaPlus /> Add Option
              </button>
            )}
          </div>
        )}

        {field.fieldType === FieldType.Checkbox && (
          <div className="flex flex-col gap-2">
            <Checkbox.Group value={checkedValues} onChange={onCheckboxChange}>
              <Space direction="vertical">
                {options.map((option, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Checkbox disabled={isEditing} value={option}>
                      {isEditing ? (
                        <Input
                          value={option}
                          onChange={(e) => updateOption(e.target.value, i)}
                          onBlur={handleOptionsBlur}
                          placeholder="Edit option"
                          className="px-4 bg-backgroundColor py-1 outline-none"
                        />
                      ) : (
                        <p className="text-base">{option}</p>
                      )}
                    </Checkbox>
                    {isEditing && (
                      <Button
                        onClick={() => removeOption(i)}
                        type="link"
                        danger
                        disabled={options.length === 1}
                      >
                        <FaTrash />
                      </Button>
                    )}
                  </div>
                ))}
              </Space>
            </Checkbox.Group>
            {isEditing && (
              <button
                type="button"
                className="text-primary text-sm pl-4 w-fit flex items-center gap-1"
                onClick={addOption}
              >
                <FaPlus /> Add Option
              </button>
            )}
          </div>
        )}
        <hr />
      </div>

      {isEditing && focused && (
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
