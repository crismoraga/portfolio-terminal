import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SoundProvider from "@/contexts/SoundContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-terminal-tawny.vercel.app"),
  title: {
    default: "Cristóbal Moraga | Portfolio Terminal",
    template: "%s | Cristóbal Moraga",
  },
  description: "Portfolio interactivo de Cristóbal Moraga: ciberseguridad, data science, ingeniería telemática y desarrollo de software.",
  keywords: ["Cristóbal Moraga", "portfolio", "ciberseguridad", "data science", "ingeniería telemática", "Next.js", "TypeScript"],
  authors: [{ name: "Cristóbal Moraga G." }],
  openGraph: {
    title: "Cristóbal Moraga | Portfolio Terminal",
    description: "Experiencia profesional, proyectos destacados y perfil técnico en un portafolio interactivo.",
    url: "https://portfolio-terminal-tawny.vercel.app",
    siteName: "Portfolio Terminal",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/favicon-portfolio.png",
        width: 512,
        height: 512,
        alt: "Portfolio de Cristóbal Moraga",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cristóbal Moraga | Portfolio Terminal",
    description: "Ciberseguridad, IA y desarrollo de software con enfoque en impacto real.",
    images: ["/favicon-portfolio.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-portfolio.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/favicon-portfolio.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SoundProvider>
          {children}
        </SoundProvider>
      </body>
    </html>
  );
}
