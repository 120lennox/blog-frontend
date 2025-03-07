import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Blog app",
  description: "Hobby project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="mx-[112] my-[20px] font-inter"
      >
        {children}
      </body>
    </html>
  );
}
