"use client";
import { Dialog } from "@/components/dialog";
import { useState } from "react";
import refreshIcon from "/public/refresh-icon.png";
import refreshAllIcon from "/public/refresh-all.png";
import autoRefreshIcon from "/public/auto-refresh.png";
import muteIcon from "/public/mute.png";
import pauseIcon from "/public/pause.png";
import createSongIcon from "/public/create-song.png";

import { HiOutlineInformationCircle } from "react-icons/hi";
import Image from "next/image";
import { cn } from "@/lib/utils";

const dialogContent = [
  {
    title: "refresh",
    icon: refreshIcon,
    content: (
      <>
        Activate <span className="font-bold">Refresh</span> on an individual
        stem to refresh a random section on every loop
      </>
    ),
  },
  {
    title: "refreshAll",
    icon: refreshAllIcon,
    content: (
      <>
        Select <span className="font-bold">Refresh All</span> to refresh all
        stems once
      </>
    ),
  },
  {
    title: "autoRefresh",
    icon: autoRefreshIcon,
    content: (
      <>
        Select the <span className="font-bold">Auto Refresh</span> toggle to
        constantly refresh all stems on every loop
      </>
    ),
  },
  {
    title: "mute",
    icon: muteIcon,
    content: "Mute Stem",
  },
  {
    title: "pause",
    icon: pauseIcon,
    content: "Pause and Play song",
  },
  {
    title: "createSong",
    icon: createSongIcon,
    content: (
      <>
        Select <span className="font-bold">Create Song</span> to save your
        creation to your <span className="font-bold">Song Library</span>
      </>
    ),
  },
];

interface HeaderProps {
  title?: string;
  className?: string;
}

export const Header = ({ title, className }: HeaderProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <section className={cn("py-7", className)}>
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex size-6 flex-col justify-around">
            <div className="h-0.5 w-5 bg-foreground/75"></div>
            <div className="h-0.5 w-5 bg-foreground/75"></div>
            <div className="h-0.5 w-5 bg-foreground/75"></div>
          </div>
          <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
          <div
            className="flex size-10 items-center justify-center rounded-full border border-primary"
            onClick={openDialog}
          >
            <HiOutlineInformationCircle className="size-5" />
          </div>
          <Dialog
            isOpen={isDialogOpen}
            onClose={closeDialog}
            dialogTitle="Create SongShortcuts"
          >
            <div className="flex flex-col gap-3">
              {dialogContent.map(({ icon, content, title }) => (
                <div key={title} className="flex items-center gap-4">
                  <Image
                    src={icon}
                    className="aspect-square size-[80px]"
                    alt={title}
                  />
                  <p className="text-xs">{content}</p>
                </div>
              ))}
            </div>
          </Dialog>
        </div>
      </div>
    </section>
  );
};
