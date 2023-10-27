import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

const inter = Montserrat({ weight: "500", subsets: ["latin"] });

export const metadata = {
  title: "Twice",
  description:
    "“Set Me Free” is a song recorded by South Korean girl group Twice. It was released as the lead single of their twelfth extended play Ready to Be on March 10, 2023.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="relative w-full h-full">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
