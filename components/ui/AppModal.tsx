import { Modal } from "antd";
import { ReactNode, useState } from "react";

type TAppModalProps = {
  button?: ReactNode;
  children: ReactNode;
  title?: string;
  subTitle?: string;
  footerHave?: boolean;
  primaryButtonTitle?: string;
  primaryButtonAction?: () => void;
  cancelButtonTitle?: string;
  cancelButtonAction?: () => void;
  handleClose?: (
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  modalOpen?: boolean;
  closeable?: boolean;
  className?: string;
  setModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

const AppModal = ({
  button,
  title,
  subTitle,
  children,
  footerHave = true,
  primaryButtonTitle,
  primaryButtonAction,
  cancelButtonTitle,
  cancelButtonAction,
  modalOpen,
  setModalOpen,
  closeable,
  className,
}: TAppModalProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = (value: boolean) => {
    if (setModalOpen) {
      setModalOpen(value);
    } else {
      setOpen(value);
    }
  };

  return (
    <div className="">
      {button && (
        <div className="cursor-pointer" onClick={() => handleOpen(true)}>
          {button}
        </div>
      )}
      <Modal
        closeIcon={closeable}
        maskClosable={closeable}
        title={
          <>
            <h1 className="text-xl font-medium">{title}</h1>
            {subTitle && (
              <p className="text-textGrey text-xs md:text-sm font-normal w-fit">
                {subTitle}
              </p>
            )}
          </>
        }
        className={className}
        centered
        width="auto"
        open={modalOpen === undefined ? open : modalOpen}
        onOk={() => handleOpen(false)}
        onCancel={() => handleOpen(false)}
        footer={
          footerHave && (primaryButtonTitle || cancelButtonTitle) ? (
            <div className="w-full flex items-center justify-center gap-2 lg:pt-2">
              {cancelButtonTitle && (
                <button
                  onClick={() => {
                    handleOpen(false);
                    if (cancelButtonAction) {
                      cancelButtonAction();
                    }
                  }}
                  className="px-4 py-1 rounded-md text-textGrey bg-[#E8E8E8] hover:bg-[#e6dada] text-sm"
                >
                  {cancelButtonTitle}
                </button>
              )}

              {primaryButtonTitle && (
                <button
                  onClick={() => {
                    handleOpen(false);
                    if (primaryButtonAction) {
                      primaryButtonAction();
                    }
                  }}
                  className="px-4 py-1 rounded-md text-white bg-red-500/80 hover:bg-red-500 text-sm"
                >
                  {primaryButtonTitle}
                </button>
              )}
            </div>
          ) : (
            []
          )
        }
      >
        {children}
      </Modal>
    </div>
  );
};

export default AppModal;
