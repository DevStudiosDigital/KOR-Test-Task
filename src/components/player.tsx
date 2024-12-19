import { FiRefreshCw } from "react-icons/fi";
import { Button } from "./button";

export const Player = () => {
  return (
    <section>
      <div className="container py-5">
        <div className="flex items-center justify-center gap-4">
          <Button variant={"secondary"}>
            <FiRefreshCw className="size-2.5" />
            <span className="text-xs">Refresh All</span>
          </Button>
          <div className="inline-flex items-center gap-0.5 rounded-full bg-foreground p-3">
            <div className="h-3 w-1 bg-[#101317]"></div>
            <div className="h-3 w-1 bg-[#101317]"></div>
          </div>
          <Button className="text-xs">Create Song</Button>
        </div>
      </div>
    </section>
  );
};
