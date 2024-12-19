import { Modal } from "./modal";
import Image from "next/image";
import { FaFacebook, FaWhatsapp, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { IoCopy, IoClose } from "react-icons/io5";
import { Track } from "@/lib/constants";

interface ShareTrackModalProps {
    isOpen: boolean;
    onClose: () => void;
    onClick: () => void;
    track?: Track;
}

export default function ShareTrackModal({ isOpen, onClose, track, onClick }: ShareTrackModalProps) {
    const shareButtons = [
        { icon: <FaFacebook className="size-6" />, label: "Facebook" },
        { icon: <FaWhatsapp className="size-6" />, label: "WhatsApp" },
        { icon: <FaXTwitter className="size-6" />, label: "Twitter" },
        { icon: <FaLinkedin className="size-6" />, label: "LinkedIn" },
        { icon: <FaTelegram className="size-6" />, label: "Telegram" },
        { icon: <IoCopy className="size-6" />, label: "Copy link" },
    ];

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="flex flex-col items-center p-14 space-y-6 bg-background border border-secondary rounded-lg w-full relative">
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white hover:text-secondary transition-colors"
                >
                    <IoClose className="size-6" />
                </button>

                <h2 className="text-2xl font-semibold text-white">Share Song</h2>
                
                {track && (
                    <>
                        <Image
                            src="/cover.png"
                            alt="Cover"
                            width={200}
                            height={300}
                            className="rounded-lg"
                        />
                        <div className="text-center">
                            <h3 className="text-lg font-semibold text-white">{track.name}</h3>
                            <p className="text-gray-400">{track.artist}</p>
                        </div>
                    </>
                )}

                <div className="grid grid-cols-3 gap-6 w-full pt-10 max-w-md">
                    {shareButtons.map((button, index) => (
                        <div key={index}>
                            <button
                            onClick={onClick}
                                className="flex flex-col items-center space-y-2 p-4 rounded-full bg-[#8080801a] focus:bg-secondary hover:text-black hover:bg-secondary transition-colors"
                        >
                            {button.icon}
                            </button>
                            <span className="text-sm text-gray-400">{button.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Modal>
    );
}