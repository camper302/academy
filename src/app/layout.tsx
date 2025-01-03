// 파일 경로: /src/app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from '@/components/common/Header';
import FooterWrapper from '@/components/common/FooterWrapper';
import AuthProvider from '@/components/providers/AuthProvider';
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "동탄 키움어학원",
  description: "최고의 영어 교육을 제공하는 동탄 지역 대표 영어 학원입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} antialiased`}>
        <AuthProvider>
          <div className="relative min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <FooterWrapper />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}