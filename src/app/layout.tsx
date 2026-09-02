import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { ShoppingCartProvider } from "@/components/ShoppingCartProvider";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito",
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Het Duivels Broodje",
  description:
    "Duivelse broodjes, elke dag vers in Leuven. Bestel voor 10u30 en wij leveren op kantoor.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="nl" className={`${nunitoSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-stone-50 font-sans">
        {/* The cart lives here, above the routes, so it survives navigation. */}
        <ShoppingCartProvider>
          <Header />
          {children}
        </ShoppingCartProvider>
      </body>
    </html>
  );
}
