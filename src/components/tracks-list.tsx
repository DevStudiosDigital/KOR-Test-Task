"use client";
import { tracksData } from "@/lib/constants";
import TrackItem from "./track-item";
import { useState } from "react";

export const TracksList = () => {

    const [showTopGradient, setShowTopGradient] = useState(false);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
      const scrollTop = e.currentTarget.scrollTop;
      setShowTopGradient(scrollTop > 0);
    };
  return (

        <div 
            className="flex flex-col gap-5 py-4 pb-24"
            // className="flex-1 flex flex-col gap-5 py-4 pb-24 overflow-y-auto h-full"
            // onScroll={handleScroll}
            >
        {tracksData.map((track) => (
            <TrackItem track={track} key={track.id} />
            ))}
        </div>
  );
}; 