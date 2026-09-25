import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";

export const metadata: Metadata = {
  title: "Esther Tran",
  description: "Esther Tran's software engineer portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col bg-black">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
