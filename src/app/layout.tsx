import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "동탄 영어 학원",
  description: "최고의 영어 교육을 제공하는 동탄 지역 대표 영어 학원입니다.",
  keywords: "동탄 영어학원, 영어교육, 레벨테스트, 초등영어, 중등영어, 고등영어",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}