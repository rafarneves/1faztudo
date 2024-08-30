import type { Metadata } from "next";
import { Inter, Playfair_Display, Arvo } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar/navbar";
import ContextProvider from "./provider";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["cyrillic"] });
const arvo = Arvo({ 
  subsets: ["latin"],
  weight: ["400", "700"]
});
export const metadata: Metadata = {
  title: "1 Faz Tudo",
  description: "O site que faz tudo por você!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={arvo.className}>
        <ContextProvider>
          <div className="wrapper">
            <Navbar />
            <div className="container">
              <Sidebar />
              <div className="container-content">
                {children}
              </div>
            </div>
          </div>
        </ContextProvider>
      </body>
    </html>
  );
}
