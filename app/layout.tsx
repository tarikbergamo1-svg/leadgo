import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "LeadGO",
  description: "Receba clientes direto no seu WhatsApp todos os dias",

  openGraph: {
    title: "LeadGO",
    description: "Receba clientes direto no seu WhatsApp todos os dias",
    url: "https://leadgo-two.vercel.app",
    siteName: "LeadGO",
    images: [
      {
        url: "/preview.png", // pode trocar por outra imagem depois
        width: 1200,
        height: 630,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "LeadGO",
    description: "Receba clientes direto no seu WhatsApp todos os dias",
    images: ["/preview.png"],
  },
};