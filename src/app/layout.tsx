import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wasi Raza — Full-stack software engineer",
  description: "Full-stack software engineer",
};

const themeInitScript = `
  (function(){
    try{
      var stored = localStorage.getItem('wasi-theme');
      if(stored === 'dark' || stored === 'light'){
        document.documentElement.setAttribute('data-theme', stored);
      }
    }catch(e){}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=Cascadia+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* Runs before paint so a stored theme preference never flashes the wrong theme */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
