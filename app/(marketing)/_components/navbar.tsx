'use client';

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const scrolled = useScrollTop();

  return(
    <div className={cn('z-50 bg-background fixedd top-0 items-center w-full p-6', scrolled)}>

    </div>
  )
}