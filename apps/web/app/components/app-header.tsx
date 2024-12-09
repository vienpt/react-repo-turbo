"use client";

import { Separator } from "@repo/shadcn/components/ui/separator";
import {
  Sheet,
  SheetContentCustom,
  SheetTitle,
  SheetTrigger,
} from "@repo/shadcn/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
} from "@repo/shadcn/components/ui/dropdown-menu";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@repo/shadcn/components/ui/avatar";
import { cn } from "@repo/shadcn/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, memo } from "react";

import { Bot, LogOut } from "lucide-react";

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
      <div className="min-w-[200px]">
        <Link href="/" className="text-2xl text-enbw-primary">
          {/* <img src={""} alt="logo" className="w-48 h-auto" /> */}
          <div className="text-sm mr-5 text-enbw-primary font-medium leading-[0.5] text-center">
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
      <div className="ml-auto flex space-x-6 items-center">
        <Assistant />
        <UserHeader />
      </div>
    </div>
  );
};

const ActiveItem = memo(function ActiveItem({ title }: { title: string }) {
  return (
    <>
      <div
        className={cn(
          "h-4 absolute top-1/2 -left-4 -translate-x-1/2 -translate-y-1/2",
        )}
      >
        <Separator
          orientation="vertical"
          className="border-orange-500 border-2"
        />
      </div>
      <span>{title}</span>
    </>
  );
});

const Assistant = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Bot className="size-6 cursor-pointer" />
      </SheetTrigger>

      <SheetContentCustom className="rounded mt-[80px] h-[calc(100dvh - 80px)]">
        <SheetTitle>AI Assistant</SheetTitle>
      </SheetContentCustom>
    </Sheet>
  );
};

const UserHeader = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <Avatar className="size-7">
          <AvatarImage src="https://github.com/vienpt.png" alt="@vienpt" />
          <AvatarFallback>VP</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-auto" align="end">
        <DropdownMenuLabel>
          <span>Hi, User</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
