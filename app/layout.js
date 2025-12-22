import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import AOSProvider from "@/components/AOSProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = localFont({
  variable: "--font-montserrat",
  display: "swap",
  src: [
    {
      path: "../font/Cinzel,DM_Sans,Inter,Manrope,Montserrat,etc (6)/Montserrat/Montserrat-VariableFont_wght.ttf",
      style: "normal",
      weight: "100 900",
    },
    {
      path: "../font/Cinzel,DM_Sans,Inter,Manrope,Montserrat,etc (6)/Montserrat/Montserrat-Italic-VariableFont_wght.ttf",
      style: "italic",
      weight: "100 900",
    },
  ],
});

export const metadata = {
  metadataBase: new URL("https://astool.com"),
  title: {
    default: "Astool Alshaula Transportation Services",
    template: "%s | Astool Alshaula Transportation Services",
  },
  description:
    "Astool Alshaula Transportation Services offers top-notch logistics solutions in Riyadh and across the Kingdom of Saudi Arabia. Specializing in comprehensive logistics and land transportation operations with the latest vehicle models for high efficiency.",
  keywords: [
    "Astool Alshaula",
    "Transportation Services",
    "Logistics Solutions",
    "Land Transportation",
    "Riyadh",
    "KSA",
    "Saudi Arabia",
    "Freight Services",
    "Transportation Company",
  ],
  authors: [{ name: "Astool Alshaula Transportation Services" }],
  creator: "Astool Alshaula Transportation Services",
  icons: {
    icon: "/assets/images/ASTOOL_logo_page.png",
  },
  openGraph: {
    title: "Astool Alshaula Transportation Services",
    description:
      "Top-notch logistics solutions in Riyadh and across the Kingdom of Saudi Arabia. Comprehensive logistics and land transportation operations with the latest vehicle models.",
    url: "/",
    siteName: "Astool Alshaula Transportation Services",
    images: [
      {
        url: "/assets/images/TESTHERO.png",
        width: 1200,
        height: 630,
        alt: "Astool Alshaula Transportation Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Astool Alshaula Transportation Services",
    description:
      "Top-notch logistics solutions in Riyadh and across the Kingdom of Saudi Arabia. Comprehensive logistics and land transportation operations with the latest vehicle models.",
    images: ["/assets/images/TESTHERO.png"],
    creator: "@astool",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0f19",
  colorScheme: "light only",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${geistMono.variable} antialiased`}>
        <AOSProvider>{children}</AOSProvider>
      </body>
    </html>
  );
}
