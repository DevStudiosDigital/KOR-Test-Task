"use client";
import { songsData } from "@/lib/constants";

import { MouseEvent as ReactMouseEvent, useState } from "react";
import { FiRefreshCw } from "react-icons/fi";
import { IoMdVolumeOff } from "react-icons/io";
import { Equalizer } from "./equalizer";
import { cn } from "@/lib/utils";

export const ControlsTab = () => {
  const sanitizedSongsData = songsData.map(({ id, name, artist }) => {
    if (id === 1)
      return {
        id,
        name,
        artist,
        isMuted: false,
      };
    return {
      id,
      name,
      artist,
      isMuted: false,
    };
  });

  const [songs, setSongs] = useState(sanitizedSongsData);
  const [activeSongId, setActiveSongId] = useState(songs[0].id);

  const handlePlayPause = (id: number) => {
    setActiveSongId(id);
  };

  const handleMuteUnmute = (id: number, e: ReactMouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setSongs((prev) => {
      const newSongs = prev.map((song) => {
        if (song.id === id) {
          return {
            ...song,
            isMuted: !song.isMuted,
          };
        }
        return song;
      });
      return newSongs;
    });
  };

  return (
    <div className="container relative">
      <div className="flex flex-col gap-3 h-[550px] overflow-y-auto pr-4 custom-scrollbar">
        {songs.map(({ id, name, artist, isMuted }) => (
          <div
            key={id}
            className={cn(
              "grid grid-cols-5 rounded-lg border border-border hover:border-primary",
              activeSongId === id && "border-primary",
              isMuted && "border-border",
            )}
          >
            <div
              className="col-span-3 flex-1 overflow-hidde border-r border-border px-4 py-5"
              onClick={() => handlePlayPause(id)}
            >
              <h4 className={cn("font-bold", isMuted && "text-muted")}>
                {name}
              </h4>
              <span className={cn("text-accent", isMuted && "text-muted")}>
                {artist}
              </span>
              <Equalizer
                className="-mx-4 -mb-5 text-foreground"
                isMuted={isMuted}
              />
            </div>
            <div
              className={cn(
                "col-span-1 flex items-center justify-center border-r border-border p-4 hover:bg-accent/10",
                isMuted && "text-destructive",
              )}
              onClick={(e) => handleMuteUnmute(id, e)}
            >
              <IoMdVolumeOff className="size-5" />
            </div>
            <div
              className={cn(
                "col-span-1 flex items-center justify-center p-4 hover:bg-accent/10",
                activeSongId === id && "bg-primary/50",
                isMuted && "bg-transparent text-muted",
              )}
              onClick={(e) => handleMuteUnmute(id, e)}
            >
              <FiRefreshCw className="size-5" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex mt-10 justify-end">
          <button className="inline-flex items-center gap-1.5 rounded-full bg-[#F96718] py-0.5 pl-3 pr-0.5 shadow-lg transition-colors hover:bg-[#FF7B3A]">
            <span className="text-[10px] font-bold leading-4 text-white">
              Auto Refresh
            </span>
            <div className="inline-flex items-center justify-center rounded-full bg-[#AE4811] p-2">
              <FiRefreshCw className="size-4 text-white" />
            </div>
          </button>
      </div>
    </div>
  );
};
