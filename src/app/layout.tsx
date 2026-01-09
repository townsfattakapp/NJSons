import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NJ SONS | Luxury Ethnic Wear - Lehengas, Sarees & Indo-Western",
  description: "Experience the finest in Indian ethnic wear with NJ SONS. Shop our exclusive designer collection of Lehengas, Sarees, Stitched Suits, and Indo-Western outfits for weddings and special occasions.",
  keywords: ["NJ SONS", "Ethnic Wear", "Lehengas", "Sarees", "Indo Western", "Indian Wedding Wear", "Luxury Fashion"],
  openGraph: {
    title: "NJ SONS | Luxury Ethnic Wear",
    description: "Designer Lehengas, Sarees, and Premium Ethnic Wear.",
    url: "https://njsons.com", // Replace with actual domain if known
    siteName: "NJ SONS",
    locale: "en_IN",
    type: "website",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
