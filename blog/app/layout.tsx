import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/navigation/navBar";
import Footer from "./components/footer";

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
       <NavBar /> 
        {children}
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
