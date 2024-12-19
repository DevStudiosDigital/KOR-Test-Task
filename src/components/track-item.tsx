import Image from "next/image";
import { IoMdTrash } from "react-icons/io";
import { PiShareFat } from "react-icons/pi";

interface TrackItemProps {
    track: any;
    key: number;
}

export default function TrackItem( {track, key}: TrackItemProps) {
    return (
        <div
        key={key}
        className="flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
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
          <div>
            <h3 className={track.active ? "font-bold text-primary" : "text-muted-foreground font-bold"}>{track.name}</h3>
            <p className={track.active ? "text-xs text-white" : "text-xs text-accent"}>{track.artist}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-accent hover:text-foreground">
            <PiShareFat className="size-5" />
          </button>
          <button className="text-accent hover:text-destructive">
            <IoMdTrash className="size-5" />

          </button>
        </div>
      </div>
    )
}