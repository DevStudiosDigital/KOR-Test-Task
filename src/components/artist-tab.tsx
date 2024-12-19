import { artistsData } from "@/lib/constants";
import Image from "next/image";

export const ArtistTab = () => {
  return (
    <section className="p-4">
      <div className="grid grid-cols-3 gap-4">
        {artistsData.map(({ id, image, name }) => (
          <div key={id} className="relative">
            <Image
              src={image}
              alt={name}
              width={112}
              height={112}
              className="aspect-square w-full rounded-sm object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 top-[80%] rounded-sm bg-gradient-to-b from-[#16121F00] to-[#16121FBF] backdrop-blur-sm" />
            <div className="absolute bottom-1.5 left-2">
              <p className="font-special text-[10px]">{name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
