"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import Sidebar from "@/app/Components/Sidebar/Sidebar";

export default function RoleBasedRedirect() {
  const { user, isLoaded, isSignedIn } = useUser();
  const router = useRouter();
  const pathname = usePathname();
  const [initialLogin, setInitialLogin] = useState(true);

  useEffect(() => {
    if (isLoaded && isSignedIn && initialLogin) {
      const role = user.publicMetadata?.role;
      if (role === "admin" && pathname !== "/admin-dashboard") {
        router.push("/admin-dashboard");
      } else if (role !== "admin" && pathname === "/") {
        router.push("/tasks");
      }
      setInitialLogin(false);
    }
  }, [user, router, pathname, isLoaded, isSignedIn, initialLogin]);

  if (!isLoaded || !isSignedIn) {
    return null; // Don't render anything until user data is loaded and the user is signed in
  }

  // Show the sidebar on all routes except /admin-dashboard for authenticated users
  const showSidebar = pathname !== "/admin-dashboard" && isSignedIn;

  return showSidebar ? <Sidebar /> : null;
}
