
"use client";

import Link from "next/link";
import { AlignJustify, Package2 } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import AuthDropdown from "./AuthDropdown";


const Header = () => {
  const menuItems = [
    {
      label: "Home",
      path: "/",
      show: true,
    },
    {
      label: "Donner",
      path: "/donner-list",
      show: true,
    },
    {
      label: "About Us",
      path: "/about-us",
      show: true,
    },
    {
      label: "Dashboard",
      path: "/dashboard",
      show: true,
    },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 border-b bg-white  z-50">
        <div className=" mx-auto px-12">
          <header className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Sheet>
                <SheetTrigger asChild>
                  <Button className="lg:hidden">
                    <AlignJustify className="h-6 w-6" />
                    <span className="sr-only">Toggle Navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <Link
                    href="/"
                    className="flex items-center gap-2 font-semibold"
                  >
                    <Package2 className="h-6 w-6" />
                    <span className="">ShareNest</span>
                  </Link>
                  <div className="grid gap-2 py-6">
                    {menuItems.map((menuItem) =>
                      menuItem.show ? (
                        <Link href={menuItem.path} key={menuItem.label}>
                          {menuItem.label}
                        </Link>
                      ) : null
                    )}
                  </div>
                </SheetContent>
              </Sheet>

              <div className="hidden md:flex">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="">ShareNest</span>
                </Link>
              </div>
            </div>

            <nav className="hidden lg:flex gap-6">
              {menuItems.map((menuItem) =>
                menuItem.show ? (
                  <Link
                    href={menuItem.path}
                    key={menuItem.label}
                    className="group inline-flex h-9 w-max items-center rounded-md bg-white px-4 py-2 text-sm font-medium"
                  >
                    {menuItem.label}
                  </Link>
                ) : null
              )}
            </nav>

            <div className="flex items-center">
              <AuthDropdown />
            </div>
          </header>
        </div>
      </div>
      <div className="mt-16">{/* Main content goes here */}</div>
    </>
  );
};

export default Header;