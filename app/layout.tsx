import type { Metadata } from "next";
import { Poppins, Rancho } from "next/font/google"; // Add Rancho here
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const rancho = Rancho({
  weight: ["400"], // Rancho typically has only one weight
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Advencha - Explore the World with Unforgettable Travel Experiences",
  description:
    "Advencha is your ultimate travel companion. Discover breathtaking destinations, book unique hotels, and plan your dream vacations with ease. Start your adventure today!",
  keywords: [
    "travel",
    "adventure",
    "vacation",
    "destination",
    "hotel booking",
    "travel planning",
    "explore the world",
    "wanderlust",
    "travel deals",
    "luxury travel",
    "budget travel",
    "family travel",
    "solo travel",
    "travel inspiration",
    "Advencha",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}  antialiased`}>
        <ResponsiveNav></ResponsiveNav>
        {children}
        <Footer></Footer>
        <ScrollToTop></ScrollToTop>
      </body>
    </html>
  );
}
