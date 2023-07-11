import ManageModalProvider from "@/contexts/ModalContext";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

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
      <ManageModalProvider>
        <body className="flex">
          <Sidebar />
          {children}
        </body>
      </ManageModalProvider>
    </html>
  );
}
