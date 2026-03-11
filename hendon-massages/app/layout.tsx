import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Hendon Massages | Women-Only Massage Therapy in North London",
  description:
    "Professional women-only massage therapy in Hendon, Colindale, Golders Green, Mill Hill and surrounding North London areas. Swedish, Sports, Pregnancy, Hot Stone and Aromatherapy massages. Book with Jayne today.",
  keywords:
    "massage hendon, massage colindale, massage golders green, womens massage north london, sports massage hendon, pregnancy massage nw4",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
