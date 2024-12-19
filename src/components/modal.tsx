import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  onClose?: () => void;
  variant?: 'default' | 'processing';
}

export const Modal = ({ isOpen, children, onClose, variant = 'default' }: ModalProps) => {

  const handleClose = () => {
    onClose && onClose();
  }

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 backdrop-blur-md" onClick={handleClose}/>
      <div className={`relative z-10 ${
        variant === 'default' ? 'bg-background border border-secondary rounded-lg' : ''
      } max-w-md w-full p-6`}>
        {variant === 'default' && (
          <button 
            onClick={handleClose}
            className="absolute top-4 right-4 text-white hover:text-secondary transition-colors"
          >
            <IoClose className="size-6" />
          </button>
        )}
        {children}
      </div>
    </div>
  );
};