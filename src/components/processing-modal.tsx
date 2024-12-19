import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

interface ProcessingModalProps {
  isOpen: boolean;
}

export const ProcessingModal = ({ isOpen }: ProcessingModalProps) => {
    const router = useRouter();
    useEffect(() => {
        if (isOpen) {
          const timer = setTimeout(() => {
            router.push("/my-tracks");
          }, 2000); 
          return () => clearTimeout(timer);
        }
      }, [isOpen, router]);
    
      if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 backdrop-blur-md" />

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="w-full max-w-md rounded-lg p-16">
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="text-xl font-semibold text-white">Processing...</h2>
            <p className="text-center text-sm text-white">
              Please do not close this screen until processing is complete
            </p>
            <div className="h-0.5 w-full mt-4 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-1/2 animate-[loading_1.5s_ease-in-out_infinite] bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};