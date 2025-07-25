import type { Metadata } from 'next';
import { Anton } from 'next/font/google';
import './globals.css';
import SmoothScrollWrapper from './component/SmoothScrollWrapper';

const anton = Anton({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Jessica Scott',
  description: 'Content Creator, Web Designer, 3D Motion, Logo Design',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${anton.className} antialiased`}>
        <SmoothScrollWrapper>{children}</SmoothScrollWrapper>
      </body>
    </html>
  );
}
