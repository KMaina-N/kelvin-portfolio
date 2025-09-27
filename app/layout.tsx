import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kelvin Maina — Enterprise Software Engineer & Co-Founder | Portfolio",
  description:
    "Kelvin Maina is an experienced software architect and engineer building enterprise-grade systems, AI automation, and web solutions. Co-Founder of Zuribyte, specializing in scalable software for HR, payroll, fleet, and accounting processes.",
  keywords: [
    "Kelvin Maina",
    "Software Engineer",
    "Enterprise Software",
    "Zuribyte",
    "AI Automation",
    "Next.js",
    "React",
    "Python",
    "Django",
    "DevOps",
    "Portfolio",
    "Croatia",
  ],
  openGraph: {
    title: "Kelvin Maina — Portfolio",
    description:
      "Explore the portfolio of Kelvin Maina, software architect and Co-Founder of Zuribyte, specializing in enterprise-grade systems and AI-driven automation.",
    url: "https://kelvinmaina.netlify.app", // replace with your URL
    siteName: "Kelvin Maina Portfolio",
    images: [
      {
        url: "https://kelvinmaina.netlify.app/og-image.png", // replace with a real OG image
        width: 1200,
        height: 630,
        alt: "Kelvin Maina Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kelvin Maina — Portfolio",
    description:
      "Kelvin Maina, software architect & Co-Founder of Zuribyte. Explore enterprise software, AI automation, and web solutions.",
    images: ["https://kelvinmaina.netlify.app/og-image.png"],
    site: "@kelvinmaina", // optional, replace with your Twitter handle
    creator: "@kelvinmaina",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-cursor="true">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.className} selection:bg-pink-500 selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}
