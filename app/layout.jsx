import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "EcoTech",
  description: "Reciclagem de eletrônicos e outros",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
