"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { UserAuth } from "@/contexts/AuthContext";
import Sidebar from "@/components/Sidebar/Sidebar";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = UserAuth();

  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  return (
    <>
      <Sidebar />
      {children}
    </>
  );
};

export default ProtectedRoute;
