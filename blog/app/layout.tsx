import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/navigation/navBar";

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
        className="mx-[90px]"
      >
       <NavBar /> 
        {children}
      </body>
    </html>
  );
}
