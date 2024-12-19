"use client";
import { tracksData } from "@/lib/constants";
import TrackItem from "./track-item";
import { useState, useCallback } from "react";

export const TracksList = () => {
    const [showTopGradient, setShowTopGradient] = useState(false);

    const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
        const scrollTop = e.currentTarget.scrollTop;
        setShowTopGradient(scrollTop > 0);
    }, []);

    return (
        <div className="flex flex-col gap-5 py-4 pb-24">
            {tracksData.map((track) => (
                <TrackItem 
                    key={track.id} 
                    track={track} 
                />
            ))}
        </div>
    );
}; 