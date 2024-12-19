import Image from "next/image";
import { IoMdTrash } from "react-icons/io";
import { PiShareFat } from "react-icons/pi";
import { useState } from "react";
import ShareTrackModal from "./share-track-modal";
import { useRouter } from "next/navigation";
import DeleteSongModal from "./delete-song-modal";
import { Track } from "@/lib/constants";

interface TrackItemProps {
    track: Track;
}

export default function TrackItem({ track }: TrackItemProps) {
    const router = useRouter();
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const TrackImage = () => (
        <div className="relative">
            <Image
                src={track.image}
                alt={track.name}  
                width={48}
                height={48}
                className="rounded-sm"
            />
            {track.active && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                        src="/track-active.png"
                        alt="Playing"
                        width={15}
                        height={15}
                    />
                </div>
            )}
        </div>
    );

    const TrackInfo = () => (
        <div>
            <h3 className={track.active ? "font-bold text-primary" : "text-muted-foreground font-bold"}>
                {track.name}
            </h3>
            <p className={track.active ? "text-xs text-white" : "text-xs text-accent"}>
                {track.artist}
            </p>
        </div>
    );

    const ActionButtons = () => (
        <div className="flex items-center gap-4">
            <button 
                className="text-accent hover:text-foreground"
                onClick={() => setIsShareModalOpen(true)}
            >
                <PiShareFat className="size-5" />
            </button>
            <button 
                className="text-accent hover:text-destructive"
                onClick={() => setIsDeleteModalOpen(true)}
            >
                <IoMdTrash className="size-5" />
            </button>
        </div>
    );

    return (
        <>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <TrackImage />
                    <TrackInfo />
                </div>
                <ActionButtons />
            </div>
            
            <ShareTrackModal 
                isOpen={isShareModalOpen} 
                track={track}
                onClose={() => setIsShareModalOpen(false)}
                onClick={() => router.push(`/login`)}
            />
            <DeleteSongModal 
                isOpen={isDeleteModalOpen} 
                onClose={() => setIsDeleteModalOpen(false)}
            />
        </>
    );
}