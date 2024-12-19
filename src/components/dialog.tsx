import React, { useRef, useEffect } from "react";
import { IoMdClose } from "react-icons/io";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  dialogTitle: string;
}

export const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  children,
  dialogTitle,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-start justify-center bg-black bg-opacity-50 p-4 pt-8">
      <div
        ref={dialogRef}
        className="flex flex-col items-center gap-4 rounded-xl border border-primary bg-background p-2"
      >
        <button onClick={onClose} className="self-end p-2 text-white">
          <IoMdClose className="size-6" />
        </button>
        <div className="mb-8 flex flex-col items-center gap-8 px-6">
          <h2 className="text-2xl font-bold leading-6">{dialogTitle}</h2>
          <div className="clear-both">{children}</div>
        </div>
      </div>
    </div>
  );
};
