import Image from "next/image";
import { Track } from "@/lib/constants";
interface MediaPlayerProps {
    currentTrack: Track;
}

export default function MediaPlayer({ currentTrack }: MediaPlayerProps) {
    return (
        <section id="media-player" className="relative">
            <div className="fixed bottom-0 left-0 right-0 border-t border-border bg-background pt-2">
                <div className="flex items-center justify-between relative">
                    <div className="flex items-center gap-3">
                        <Image
                        src={currentTrack.image}
                        alt="Current track"
                        width={40}
                        height={40}
                        className="rounded-sm"
                        />
                        <div>
                        <h3 className="text-sm font-medium">{currentTrack.name}</h3>
                        <p className="text-xs text-accent">{currentTrack.artist}</p>
                        </div>
                    </div>
                    <div className="inline-flex items-center gap-1 p-3">
                        <div className="h-4 w-1.5 bg-white"></div>
                        <div className="h-4 w-1.5 bg-white"></div>
                    </div>
                </div>
                <div className="h-1 w-full  mt-2">
                    <div className="h-full w-1/2 bg-primary"></div>
                </div>
            </div>
        </section>
    )
}