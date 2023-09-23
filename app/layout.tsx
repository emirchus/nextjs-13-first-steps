import "./globals.css";
import type { Metadata } from "next";
import { Anybody } from "next/font/google";

const anybody = Anybody({ weight: "800", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emir's Home Page",
  description: "With <3 from Emir",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={anybody.className}>
        <div className="flex flex-col">{children}</div>
      </body>
    </html>
  );
}
