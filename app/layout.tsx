import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Alex Davis | Developer",
  description: "Full-stack & data engineer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-cyber-bg text-cyber-text font-sans antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}