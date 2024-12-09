"use client";

import { Button } from "@repo/shadcn/components/ui/button";
import { Separator } from "@repo/shadcn/components/ui/separator";
import {
  Sheet,
  SheetContentCustom,
  SheetTrigger,
} from "@repo/shadcn/components/ui/sheet";
import { cn } from "@repo/shadcn/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, memo } from "react";

import { Bell } from "lucide-react";

interface AppHeaderProps {
  className?: string;
}

const headerItems = [
  {
    name: "Order Table",
    href: "/order",
  },
  {
    name: "User Table",
    href: "/user",
  },
];

export const AppHeader: FC<AppHeaderProps> = ({ className }) => {
  const pathName = usePathname();

  return (
    <div
      id="app-header"
      className={cn(
        "h-[80px]",
        "px-[2rem] border-b",
        "relative flex flex-row items-center",
        className,
      )}
    >
      <div className="min-w-[200px] flex flex-col">
        <Link href="/" className="text-2xl text-enbw-primary">
          {/* <img src={""} alt="logo" className="w-48 h-auto" /> */}
          <div className="text-sm mr-5 text-enbw-primary font-medium leading-[0.5] text-right">
            Your Logo
          </div>
        </Link>
      </div>
      <div className="inline-flex gap-10 mx-auto items-center">
        {headerItems.map((item, key) => (
          <Link
            key={`${item.name}+${key}`}
            href={item.href}
            className="relative"
          >
            {pathName === item.href ? (
              <ActiveItem title={item.name} />
            ) : (
              <>{item.name}</>
            )}
          </Link>
        ))}
      </div>
      <div className="ml-auto flex space-x-2 items-center">
        <Assistant />
        {/* <UserHeader /> */}
      </div>
    </div>
  );
};

const ActiveItem = memo(function ActiveItem({ title }: { title: string }) {
  return (
    <>
      <div
        className={cn(
          "h-4 absolute top-1/2 -left-5 -translate-x-1/2 -translate-y-1/2",
        )}
      >
        <Separator orientation="vertical" className="bg-orange-800" />
      </div>
      <span>{title}</span>
    </>
  );
});

const Assistant = () => {
  return (
    <div className="relative">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="focus:bg-transparent hover:bg-transparent"
          >
            <span
              className={cn([
                "top-[35%] right-[40%] translate-x-1/2 -translate-y-1/2",
                "absolute block size-1 rounded-full ring-1 ring-blue-400 bg-blue-400",
              ])}
            />
            <Bell />
          </Button>
        </SheetTrigger>
        <SheetContentCustom className="rounded mt-[80px] h-[calc(100dvh - 80px)]">
          content with overlay
        </SheetContentCustom>
      </Sheet>
    </div>
  );
};
