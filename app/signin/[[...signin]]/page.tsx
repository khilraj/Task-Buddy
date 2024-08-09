"use client";
import { SignIn } from "@clerk/nextjs";
import React from "react";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
      <div className="mt-4">
        <Link className="text-blue-500 hover:underline" href="/forgot">
          Forgot Password?
        </Link>
      </div>
    </div>
    
  );
}

export default SignInPage;
