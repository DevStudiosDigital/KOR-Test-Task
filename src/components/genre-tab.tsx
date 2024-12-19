"use client";
import { genresData } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const GenreTab = () => {
  const [isSelected, setIsSelected] = useState<number>(7);
  return (
    <div className="container">
      <ul className="flex flex-wrap gap-2">
        {genresData.map(({ id, name }) => (
          <li
            key={id}
            className={cn(
              "inline-flex items-center justify-center gap-3 rounded-[48px] border border-border px-4 py-2",
              isSelected === id && "bg-foreground",
            )}
            onClick={() => setIsSelected(id)}
          >
            <div
              className={cn(
                "size-2 rounded-full border border-[#FFFFFF]/25",
                isSelected === id && "bg-primary",
              )}
            ></div>
            <span
              className={cn(
                "font-special text-[10px] leading-4 text-[#CCCCCC]",
                isSelected === id && "text-[#282B2E]",
              )}
            >
              {name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
