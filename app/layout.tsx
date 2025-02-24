import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ov3r",
  description: "Central hub for OV3R services",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background antialiased">{children}</body>
    </html>
  );
} 