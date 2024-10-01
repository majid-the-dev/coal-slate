import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const ibm = IBM_Plex_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Coal Slate Enterprise",
  description: "Coal Slate Enterprise",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ibm.className} antialiased`}>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
