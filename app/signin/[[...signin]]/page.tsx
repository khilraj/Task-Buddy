"use client";
import { SignIn } from "@clerk/nextjs";
import React from "react";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function SignInPage() {
  const {user} = useUser();
  const router = useRouter();

  useEffect(() => {
    if(user) {
      const role = user.publicMetadata?.role || "user";
      if(role == "admin") {
        router.push("/admin-dashboard");
      } else {
        router.push("/tasks")
      }
    }
  }, [user, router]);

  return (
    <div className="flex items-center justify-center h-full">
      <SignIn />
    </div>
  );
}

export default SignInPage;
