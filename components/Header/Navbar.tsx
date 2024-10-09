"use client";

import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Search,
  Users,
  MessageCircle,
  User,
  Menu,
  Settings,
  Building,
  LayoutDashboard,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import UserContext from "@/providers/UserProvider";
import axios from "axios";

const navItems = [
  { name: "Find Rooms", href: "/rooms", icon: Home },
  { name: "Find Roommates", href: "/roommates", icon: Users },
  { name: "Messages", href: "/messages", icon: MessageCircle },
];

const adminItems = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Manage Properties", href: "/admin/properties", icon: Building },
];

export default function Navbar() {
  const userContent = useContext(UserContext);

  useEffect(() => {
    async function fetch() {
      try {
        const response = await axios.get("/api/fetch-user");

        if (response.status === 200) {
          if (response.data.payload) {
            userContent?.setUser(response.data.payload);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, []);


  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  const userRole = userContent?.user?.role; // Get user role dynamically, or undefined if not logged in

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="ml-2 text-2xl font-bold text-primary">
                Roomzy
              </span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {userContent?.user ? (
                <>
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
                        pathname === item.href
                          ? "border-primary text-primary"
                          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                      )}
                    >
                      <item.icon className="h-5 w-5 mr-1" />
                      {item.name}
                    </Link>
                  ))}
                  {userRole === "admin" &&
                    adminItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                          "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
                          pathname === item.href
                            ? "border-primary text-primary"
                            : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                        )}
                      >
                        <item.icon className="h-5 w-5 mr-1" />
                        {item.name}
                      </Link>
                    ))}
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {userContent?.user ? (
              <>
                <div className="relative">
                  {isSearchOpen ? (
                    <Input
                      type="text"
                      placeholder="Search..."
                      className="w-64"
                      onBlur={() => setIsSearchOpen(false)}
                      autoFocus
                    />
                  ) : (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsSearchOpen(true)}
                    >
                      <Search className="h-5 w-5" />
                    </Button>
                  )}
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="ml-3">
                      <User className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>
                      {userRole === "admin" ? "Admin Menu" : "User Menu"}
                    </DropdownMenuLabel>
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    {userRole === "admin" && (
                      <>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                          <DropdownMenuItem>
                            <LayoutDashboard className="mr-2 h-4 w-4" />
                            <span>Admin Dashboard</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Building className="mr-2 h-4 w-4" />
                            <span>Manage Properties</span>
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                      </>
                    )}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <span className="text-red-600">Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : null}
          </div>

          <div className="flex items-center sm:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open main menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {userContent?.user ? (
                    <>
                      {navItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={cn(
                            "block px-3 py-2 rounded-md text-base font-medium",
                            pathname === item.href
                              ? "bg-primary text-white"
                              : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                          )}
                        >
                          <div className="flex items-center">
                            <item.icon className="h-5 w-5 mr-2" />
                            {item.name}
                          </div>
                        </Link>
                      ))}
                      {userRole === "admin" &&
                        adminItems.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                              "block px-3 py-2 rounded-md text-base font-medium",
                              pathname === item.href
                                ? "bg-primary text-white"
                                : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                            )}
                          >
                            <div className="flex items-center">
                              <item.icon className="h-5 w-5 mr-2" />
                              {item.name}
                            </div>
                          </Link>
                        ))}
                    </>
                  ) : (
                    <>
                      <Link
                        href="/login"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      >
                        Login
                      </Link>
                      <Link
                        href="/signup"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      >
                        Sign Up
                      </Link>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
