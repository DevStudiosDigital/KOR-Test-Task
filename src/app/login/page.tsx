import LoginAlert from "@/components/login-alert";
import MediaPlayer from "@/components/media-player";
import { tracksData } from "@/lib/constants";
import Image from "next/image";

export default function LoginPage() {
    const currentTrack = tracksData[0];

    return (
    <>
            <LoginAlert />
            <div className="container">
                <div className="mx-auto pt-20 w-full p-4"> 
                    <Image src="/cover.png"
                        alt="Current track" 
                        width={660} 
                        height={660} 
                        className="rounded-sm" />
                    </div>
                <MediaPlayer currentTrack={currentTrack} />
            </div>
        </>
    )
}

