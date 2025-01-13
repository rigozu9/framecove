import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";

const IBMPlex = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: "Framecove",
  description: "AI-powered image editor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font-IBMPlex-antialiased", IBMPlex.variable)}>
        {children}
      </body>
    </html>
  );
}
