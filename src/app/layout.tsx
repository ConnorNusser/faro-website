// RootLayout.tsx (Server Component)
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/gradient-navbar";
import Footer from "../components/footer";
import ClientProvider from "../components/auth/client-provider";


const dmSerif = localFont({  // Changed name to reflect the font
  src: "./fonts/DMSerifText-Regular.ttf",
  variable: "--font-dm-serif", // Changed variable name
  weight: "400", // DM Serif Text typically only comes in regular weight
});
export const metadata: Metadata = {
  title: {
    template: '%s | Argos',
    default: 'Argos',
  },
  description: 'Video Footage to Cad Designs'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSerif.variable} ${dmSerif.variable} antialiased relative min-h-screen`}>
        {/* Background div - fixed position with lower z-index */}
        <div 
          className="fixed inset-0 pointer-events-none"
          style={{
            backgroundImage: 'url("/images/grid-5.png")',
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto',
            zIndex: -1,
            opacity: 1
          }}
        />
        
        {/* Content wrapper - relative position to stack above background */}
        <div className="relative flex flex-col min-h-screen">
          <ClientProvider>
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </ClientProvider>
        </div>
      </body>
    </html>
  );
}