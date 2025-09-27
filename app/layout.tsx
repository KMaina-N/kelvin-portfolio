import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Your Name — Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-cursor="true">
      <body className={`${inter.className} selection:bg-pink-500 selection:text-black`}>
        {children}
      </body>
    </html>
  );
}
