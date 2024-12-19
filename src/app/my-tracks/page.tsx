"use client";
import MediaPlayer from '@/components/media-player'
import TopGradient from '@/components/top-gradient';
import { TracksList } from '@/components/tracks-list'
import { tracksData } from '@/lib/constants'
import { Header } from '@/sections/header'
import React from 'react'

export default function MyTracksPage() {
  const [showTopGradient, setShowTopGradient] = React.useState(false);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    setShowTopGradient(scrollTop > 0);
  };

  return (
    <div className="container h-screen flex flex-col ">
      <Header 
        title="My Tracks" 
        className="sticky top-0 z-10" 
      />
      <TopGradient showTopGradient={showTopGradient}>
        <main 
          className="flex-1 flex flex-col gap-5 py-4 pb-24 overflow-y-auto h-full custom-scrollbar"
          onScroll={handleScroll}
        >
          <TracksList />
        </main>
        <MediaPlayer currentTrack={tracksData[0]} />
      </TopGradient>
    </div>
  )
}
