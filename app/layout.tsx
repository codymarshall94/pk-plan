import "./globals.css";
import type { Metadata } from "next";
import Application from "@/pages/Application";
import ProtectedRoute from "@/pages/ProtectedRoute";

export const metadata: Metadata = {
  title: "PKPLAN",
  description: "An application for your parkour needs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Application>
        <body className="flex">
          <ProtectedRoute>
            {children}
          </ProtectedRoute>
        </body>
      </Application>
    </html>
  );
}
