import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, DM_Mono, Syne } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const syne = Syne({ subsets: ["latin"], weight: ["400","700","800"], variable: "--font-syne", display: "swap" });
const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: ["400"], style: ["normal","italic"], variable: "--font-display", display: "swap" });
const dmMono = DM_Mono({ subsets: ["latin"], weight: ["400","500"], variable: "--font-mono", display: "swap" });

const BASE_URL = "https://kelvinmaina.dev";

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#080808" };

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: { default: "Kelvin Maina — Enterprise Software Engineer & Co-Founder", template: "%s | Kelvin Maina" },
  description: "Kelvin Maina is an enterprise software engineer and co-founder of Zuribyte. He builds high-resilience systems spanning HR, fleet management, payroll, AI document processing, and automation — reducing manual effort by 60%+.",
  keywords: ["Kelvin Maina","Enterprise Software Engineer","Software Architect","Zuribyte","Co-Founder","AI Automation","RPA","Next.js","Django","Python","React","TypeScript","DevOps","Docker","Jenkins","PostgreSQL","Business Automation","Croatia","Kenya"],
  authors: [{ name: "Kelvin Maina", url: BASE_URL }],
  creator: "Kelvin Maina",
  openGraph: {
    type: "website", locale: "en_US", url: BASE_URL, siteName: "Kelvin Maina",
    title: "Kelvin Maina — Enterprise Software Engineer & Co-Founder",
    description: "Software architect building enterprise-grade systems for HR, fleet, payroll, and AI automation. Co-Founder of Zuribyte.",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Kelvin Maina Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kelvin Maina — Enterprise Software Engineer & Co-Founder",
    description: "Building enterprise-grade systems for HR, fleet, payroll, and AI automation. Co-Founder of Zuribyte.",
    images: [`${BASE_URL}/og-image.png`], creator: "@kelvinmaina",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  alternates: { canonical: BASE_URL },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" className={`${syne.variable} ${dmSerif.variable} ${dmMono.variable}`} suppressHydrationWarning>
      <head>
        {/* Inline script to prevent flash — runs before React hydrates */}
        <script dangerouslySetInnerHTML={{ __html: `
          try {
            var t = localStorage.getItem('km-theme');
            if (!t) t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', t);
          } catch(e) {}
        `}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context":"https://schema.org","@type":"Person",
          name:"Kelvin Maina",url:BASE_URL,email:"kelvinmaina547@gmail.com",
          jobTitle:"Enterprise Software Engineer & Co-Founder",
          description:"Enterprise software engineer and co-founder of Zuribyte, specializing in high-resilience systems for HR, fleet, payroll, AI automation, and business process automation.",
          knowsAbout:["Enterprise Software Architecture","System Design","Business Process Automation","RPA","AI Document Processing","DevOps","Python","Django","Next.js","React","TypeScript","PostgreSQL","Docker","Jenkins"],
          sameAs:["https://www.linkedin.com/in/kelvin-maina-ke-hr/","https://github.com/KMaina-N"],
          worksFor:{"@type":"Organization","name":"Tokić"},
          founder:{"@type":"Organization","name":"Zuribyte"},
        })}} />
      </head>
      <body className="font-[family-name:var(--font-syne)] antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
