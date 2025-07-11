import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Toaster } from '@workspace/ui/components/sonner';
import '@workspace/ui/globals.css';
import { ThemeProvider } from '@/components/Providers';
import { type LayoutProps } from '@/types';

const fontSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Fullstack Starter',
  description: 'Fullstack Starter Next.js App',
};

/**
 * The root layout component for the application.
 * @param {LayoutProps} props - The layout properties.
 */
export default async function RootLayout(props: LayoutProps) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {props.children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
