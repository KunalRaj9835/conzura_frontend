export const dynamic = "force-dynamic";

import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import RouteLoader from "@/components/RouteLoader";
import AOSInit from "@/components/AOSInit";

const poppins = Poppins({
  weight: [
    "100", "200", "300", "400", "500", "600", "700", "800", "900"
  ],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  metadataBase: new URL("https://conzuragroups.com"),

  title: {
    default: "Conzura",
    template: "%s | Conzura",
  },

  description:
    "Conzura engineers world-class digital solutions including web development, app development, SEO marketing, UI/UX design, cloud services, and finance software. With 1500+ successful projects, Conzura empowers businesses to innovate, scale, and achieve digital excellence through premium engineering, strategic design, and reliable long-term support.",

  keywords: [
    "Conzura",
    "Conzura Group",
    "Conzura Soft Solutions",
    "web development",
    "app development",
    "SEO marketing",
    "digital marketing",
    "UI UX design",
    "cloud solutions",
    "finance software",
    "software company",
    "IT services",
    "custom software development",
    "enterprise solutions",
    "digital transformation",
  ],

  authors: [{ name: "Conzura" }],
  creator: "Conzura Soft Solutions",
  publisher: "Conzura Soft Solutions",
  category: "technology",

  alternates: {
    canonical: "https://conzuragroups.com/",
    languages: {
      "en-IN": "https://conzuragroups.in/",
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title:
      "Conzura – Digital Excellence Engineered | Web, App, UI/UX, SEO, Cloud & Finance Solutions",
    description:
      "We architect and build premium digital products—high-performance websites, mobile apps, UI/UX, SEO strategies, cloud systems, and finance solutions—trusted by 1500+ clients worldwide.",
    url: "https://conzuragroups.com",
    siteName: "Conzura",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Conzura Digital Excellence Banner",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Conzura – Web Development, App Development, UI/UX, SEO & Cloud Solutions",
    description:
      "Trusted by 1500+ businesses, Conzura builds high-quality digital products—from modern websites and mobile apps to marketing, cloud engineering, and finance software.",
    creator: "@conzura",
    images: ["/og.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  applicationName: "Conzura",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <AOSInit />
        <RouteLoader />
        <Header />

        <div className="pt-[60px]">{children}</div>
      </body>
    </html>
  );
}
