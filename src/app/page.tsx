import { ArtistTab } from "@/components/artist-tab";
import { ControlsTab } from "@/components/controls-tab";
import { GenreTab } from "@/components/genre-tab";
import { Player } from "@/components/player";
import { TabItem, Tabs } from "@/components/tabs";
import { Header } from "@/sections/header";

export default function Home() {
  const tabs: TabItem[] = [
    { label: "Controls", value: "controls", content: <ControlsTab /> },
    { label: "Artist", value: "artist", content: <ArtistTab /> },
    { label: "Genre", value: "genre", content: <GenreTab /> },
  ];

  return (
    <>
      <div className="container">
        <Header />
        <Tabs tabs={tabs} defaultValue="controls" />
      </div>
      <Player />
    </>
  );
}
