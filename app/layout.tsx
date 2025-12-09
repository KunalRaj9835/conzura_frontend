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
  title: "Conzura Group",
  description:
    "Conzura Group engineers world-class digital solutions, including web development, app development, SEO marketing, UI/UX design, cloud services, and finance software. Trusted with 1500+ projects, we help businesses innovate, scale, and achieve digital excellence.",
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
