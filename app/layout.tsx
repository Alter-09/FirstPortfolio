import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Diego León | Full Stack Developer',
  description: 'Portfolio of Diego León, a full-stack developer focused on practical software, AI-assisted development, and continuous learning.',
  metadataBase: new URL('https://github.com')
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
