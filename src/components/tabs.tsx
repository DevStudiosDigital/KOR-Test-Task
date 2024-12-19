"use client";
import { cn } from "@/lib/utils";
import { ReactNode, ComponentPropsWithoutRef, useState } from "react";

export interface TabItem {
  value: string;
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  defaultValue: string;
  className?: string;
}

export const Tabs = ({
  tabs,
  defaultValue,
  className,
  ...rest
}: TabsProps & ComponentPropsWithoutRef<"div">) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <div className={cn("container", className)} {...rest}>
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="inline-flex justify-center bg-primary/10">
          {tabs.map(({ label, value }) => (
            <div
              key={value}
              onClick={() => setActiveTab(value)}
              className={cn(
                "px-10 py-1 text-center",
                activeTab === value
                  ? "rounded-lg border border-primary shadow-lg"
                  : "",
              )}
            >
              <span
                className={cn(
                  "text-sm font-medium",
                  activeTab !== value && "text-foreground/75",
                )}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
        {tabs.find((tab) => tab.value === activeTab)?.content}
      </div>
    </div>
  );
};
