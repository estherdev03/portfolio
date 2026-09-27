import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Esther Tran",
  description: "Esther Tran's software engineer portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col bg-black">{children}</body>
    </html>
  );
}
