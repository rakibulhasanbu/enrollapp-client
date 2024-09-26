"use client";

import AppButton from "@/components/ui/AppButton";
import { useUpdatedEventMutation } from "@/redux/features/event/eventApi";
import { setSelectedEvent } from "@/redux/features/event/eventSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Switch } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { LuCopy } from "react-icons/lu";
import { toast } from "react-toastify";

const EventSettingPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const selectedEvent = useAppSelector((state) => state.event.selectedEvent);

  const [updateEvent] = useUpdatedEventMutation();

  // const [publicEvent, setPublicEvent] = useState(false);
  const [limitResponse, setLimitResponse] = useState(
    selectedEvent?.isLimitOneResponse
  );
  const [confirmationMessage, setConfirmationMessage] = useState(
    selectedEvent?.submissionMessage
  );
  const [link, setLink] = useState(
    `${process.env.NEXT_PUBLIC_BASE_URL}/form/${selectedEvent?.formId}`
  );
  const [linkCopied, setLinkCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(link).then(() => {
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    });
  };

  const handleSwitchChange = (setter: any) => (checked: boolean) => {
    setter(checked);
  };

  const handleSaveChanges = async () => {
    const submittedData = {
      id: selectedEvent?._id,
      eventData: {
        isLimitOneResponse: limitResponse,
        submissionMessage: confirmationMessage,
        formLink: link,
      },
    };

    await updateEvent(submittedData)
      .unwrap()
      .then((res: any) => {
        toast.success("Event updated successful!", { toastId: 1 });
        dispatch(setSelectedEvent(res?.data));
      })
      .catch((res: any) => {
        toast.error(res?.data?.message || "Something went wrong", {
          toastId: 1,
        });
      });
  };

  useEffect(() => {
    if (!selectedEvent) {
      toast.error("Please select event and see the response", { toastId: 1 });
      return router.push("/dashboard/manage-my-event");
    }
  }, []);

  return (
    <div className="w-[70%] mx-auto py-12">
      <h2 className="text-3xl text-center font-semibold mb-8">Setting</h2>
      {/*
      <div className="flex justify-between items-center">
        <span className="text-lg font-medium">Public Event</span>
        <Switch
          size="small"
          checked={publicEvent}
          onChange={handleSwitchChange(setPublicEvent)}
        />
      </div>
      <p className="text-gray-500 text-sm mb-4">
        If you turn off, only people with the link can access the event.
      </p> */}

      <div className="flex justify-between items-center">
        <span className="text-lg font-medium">
          Limit to 1 response (require sign in)
        </span>
        <Switch
          size="small"
          checked={limitResponse}
          onChange={handleSwitchChange(setLimitResponse)}
        />
      </div>
      <p className="text-gray-500 text-sm mb-4">
        If you turn on, participants will be required to sign in.
      </p>

      <div className="mb-4 space-y-2">
        <span className="text-lg font-medium">
          After Submission Confirmation Message
        </span>

        <textarea
          className="w-full text-base resize-none border p-2 rounded-md"
          placeholder="Confirmation Message"
          value={confirmationMessage}
          onChange={(e) => setConfirmationMessage(e.target.value)}
          rows={3}
        />
      </div>

      <p className="text-lg font-medium">Get Link</p>
      <div className="flex items-center mb-6">
        <p className="line-clamp-1 flex-1 px-4 py-2 bg-gray-100 font-medium text-gray-800 rounded-md">
          {link}
        </p>
        <button
          onClick={handleCopy}
          className="ml-4 bg-primary rounded-md py-2.5 text-lg px-4 text-white"
        >
          {linkCopied ? <FaCheck /> : <LuCopy />}
        </button>
      </div>

      <div className="flex justify-center items-center gap-6">
        <AppButton onClick={handleSaveChanges} label="Save Changes" />
      </div>
    </div>
  );
};

export default EventSettingPage;
