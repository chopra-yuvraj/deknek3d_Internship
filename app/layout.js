import "./globals.css";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "IdeaBoard — Share & Discover Project Ideas",
  description:
    "A collaborative platform where developers share innovative project ideas, get inspired, and find their next build. Sign up to post your ideas and discover what others are building.",
  keywords: ["project ideas", "developer", "collaboration", "brainstorm"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          <div className="bg-glow" />
          <div className="bg-grid" />
          <Navbar />
          <main className="relative z-10 pt-16 min-h-screen">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
