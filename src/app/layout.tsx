import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SAN IDLI | Authentic South Indian Vegetarian Restaurant | Phoenix, AZ",
  description:
    "Experience the best Idli, Dosa, and Chutney in Phoenix. 100% Pure Vegetarian South Indian restaurant serving fresh, authentic cuisine daily. Order online for delivery or dine-in.",
  keywords: [
    "San Idli",
    "South Indian restaurant",
    "Phoenix",
    "vegetarian",
    "idli",
    "dosa",
    "Indian food",
    "vegan",
  ],
  openGraph: {
    title: "SAN IDLI | Authentic South Indian Vegetarian",
    description:
      "The best Idli, Dosa & Chutney in Phoenix, AZ. 100% Pure Vegetarian.",
    type: "website",
    locale: "en_US",
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
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
