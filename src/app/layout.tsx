import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThemeProvider from "@/components/layout/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thomas Cameron | Computer Games Programmer",
  description: "Portfolio of Thomas Cameron, a Computer Games Programmer specialising in gameplay systems, C++, Unreal Engine and interactive software development.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      // suppressHydrationWarning
    >
      {/* <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                const theme = localStorage.getItem("theme");

                if (theme === "dark") {
                  document.documentElement.classList.add("dark");
                }
              })();
            `,
          }}
        />
      </head> */}
      <body className="min-h-full flex flex-col">
          <ThemeProvider />
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  );
}
