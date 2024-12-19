import { Modal } from "./modal";
import Image from "next/image";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebook, FaWhatsapp, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { IoCopy } from "react-icons/io5";
import { Track } from "@/lib/constants";

// Mover los botones de compartir fuera del componente
const shareButtons = [
    { icon: <FaFacebook className="size-6" />, label: "Facebook" },
    { icon: <FaWhatsapp className="size-6" />, label: "WhatsApp" },
    { icon: <FaXTwitter className="size-6" />, label: "Twitter" },
    { icon: <FaLinkedin className="size-6" />, label: "LinkedIn" },
    { icon: <FaTelegramPlane className="size-6" />, label: "Telegram" },
    { icon: <IoCopy className="size-6" />, label: "Copy link" },
];

interface ShareTrackModalProps {
    isOpen: boolean;
    onClose: () => void;
    onClick: () => void;
    track?: Track;
}


export default function ShareTrackModal({ isOpen, onClose, track, onClick }: ShareTrackModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="flex flex-col items-center p-12 space-y-6  w-full">
                <h2 className="text-2xl font-semibold text-white">Share Song</h2>
                {track && <TrackInfo track={track} />}
                <ShareButtons onClick={onClick} />
            </div>
        </Modal>
    );
}

const TrackInfo = ({ track }: { track: Track }) => (
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
);

const ShareButtons = ({ onClick }: { onClick: () => void }) => (
    <div className="grid grid-cols-3 gap-6 w-full pt-10 max-w-md">
        {shareButtons.map((button, index) => (
            <div key={index}>
                <button
                    onClick={onClick}
                    className="flex flex-col items-center space-y-2 p-4 rounded-full bg-[#8080801a] focus:bg-secondary hover:text-black hover:bg-secondary transition-colors"
                >
                    {button.icon}
                </button>
                <p className="text-sm text-center text-gray-400">{button.label}</p>
            </div>
        ))}
    </div>
);
