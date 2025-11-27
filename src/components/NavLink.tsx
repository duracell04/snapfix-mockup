"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type NavLinkProps = LinkProps & {
  className?: string;
  activeClassName?: string;
  children: ReactNode;
};

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, activeClassName, href, children, ...props }, ref) => {
    const pathname = usePathname();
    const hrefString = typeof href === "string" ? href : href.pathname || "";
    const isActive = hrefString && (pathname === hrefString || pathname?.startsWith(hrefString));

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(className, isActive && activeClassName)}
        {...props}
      >
        {children}
      </Link>
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
