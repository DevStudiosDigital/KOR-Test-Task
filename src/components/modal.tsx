import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  onClose?: () => void;
}

export const Modal = ({ isOpen, children, onClose }: ModalProps) => {

      if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 backdrop-blur-md" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="w-full h-screen max-w-md rounded-lg py-16 px-6">
            <div className="flex flex-col items-center justify-center gap-4">
              {children}
            </div>
          </div>
        </div>
      </div>
  );
};