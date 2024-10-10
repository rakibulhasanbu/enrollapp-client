import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";

type AppEventBanner = {
  label?: string;
  imgSrc?: StaticImport | string;
  onlyView?: Boolean;
  banner?: string;
  setBanner?: (banner: string) => void;
  setRawFile?: (banner: File | null) => void;
};

const EventBanner = ({
  onlyView = true,
  label,
  imgSrc,
  banner,
  setBanner,
  setRawFile,
}: AppEventBanner) => {
  const [dragging, setDragging] = useState(false);

  const handleFileChange = (e: any) => {
    const maxSizeInBytes = 2 * 1024 * 1024;
    const file = e.target.files?.[0];

    if (!file) {
      return;
    }

    if (file.size > maxSizeInBytes) {
      return toast.error("Your file exceeds the 2 MB size limit!", {
        toastId: 1,
      });
    }

    if (setRawFile) {
      setRawFile(file);
    }

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2 && setBanner) {
          setBanner(reader?.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e: any) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    setDragging(false);

    const maxSizeInBytes = 2 * 1024 * 1024;
    const file = e.dataTransfer.files?.[0];

    if (file?.size > maxSizeInBytes) {
      return toast.error("Your file exceeds the 2 MB size limit!", {
        toastId: 1,
      });
    }

    if (setRawFile) {
      setRawFile(file);
    }

    if (file) {
      const reader = new FileReader();
      if (setBanner) {
        reader.onload = () => {
          setBanner(reader?.result as string);
        };
      }
      reader.readAsDataURL(file);
    }
  };

  return onlyView ? (
    <div className="w-full flex flex-col items-center justify-center h-72 lg:h-[500px] 2xl:h-[500px] bg-gradient-to-r from-sky-400 to-blue-500 rounded-md relative">
      {imgSrc && (
        <Image
          src={imgSrc}
          alt="Event Banner"
          className="w-full h-full rounded-md object-cover"
          width={1500}
          height={400}
        />
      )}
    </div>
  ) : (
    <div>
      <input
        type="file"
        name="file"
        id="file"
        className="hidden"
        accept="image/*"
        onChange={handleFileChange}
      />
      <label
        htmlFor="file"
        className={`w-full cursor-pointer h-72 2xl:h-96 bg-gradient-to-r from-sky-400 to-blue-500 rounded-md flex items-center justify-center text-2xl text-zinc-200 ${
          dragging ? "from-sky-500 to-blue-600 border-2 border-dashed" : ""
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {banner ? (
          <Image
            src={banner}
            alt="Event Banner"
            className="w-full h-full rounded-md object-cover"
            width={1200}
            height={300}
          />
        ) : (
          <span>
            {label || "Drag and drop your Banner here or Click to browse"}
          </span>
        )}
      </label>
    </div>
  );
};

export default EventBanner;
