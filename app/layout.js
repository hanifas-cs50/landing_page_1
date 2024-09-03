import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Poppins({ 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"]
});

export const metadata = {
  title: "PT. MULTI INDO SEJATI (MIS)",
  description: "PT. MULTI INDO SEJATI (MIS) merupakan perusahaan Perdagangan Umum, Furniture Laboratorium, Equipment Lab, Chemical, Kontraktor Mekanikal Elektrikal dan Pelayanan Teknis. Berkomitmen untuk memberikan prioritas pada klien, bekerja secara profesional, berintegritas, efektif, efisien, serta menerapkan standar K3 dan lingkungan kerja.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
