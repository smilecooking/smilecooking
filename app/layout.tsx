import type { Metadata } from "next";
import Script from "next/script";
import "@fontsource-variable/noto-sans-jp";
import "./globals.css";
import { MobileDock, SiteFooter, SiteHeader } from "./site";
import { AnalyticsTracker } from "./analytics-tracker";

export const metadata: Metadata = {
  metadataBase: new URL("https://smilecooking.jp"),
  title: {
    default: "スマイルクッキング｜群馬県太田市の子ども料理教室",
    template: "%s｜スマイルクッキング",
  },
  description:
    "群馬県太田市、太田駅から車で5分。子どもが主役の料理教室。親子・小学生・年齢を問わず参加できるおやつレッスンを開催し、料理研究家・管理栄養士が毎月のテーマとメニューを研究・試作しています。",
  openGraph: {
    siteName: "スマイルクッキング",
    title: "群馬県太田市の子ども料理教室｜スマイルクッキング",
    description:
      "『やってみたい』が、考える力に変わる。群馬県太田市、3歳〜小学生の子ども・親子料理教室です。",
    type: "website",
    locale: "ja_JP",
    url: "/",
    images: [{ url: "/images/home-main-03.webp", alt: "スマイルクッキングで料理を楽しむ子どもたち" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "群馬県太田市の子ども料理教室｜スマイルクッキング",
    description: "子どもが主役。料理を入口に、子どもの力と家族の未来を育てる教室です。",
    images: ["/images/home-main-03.webp"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-08PRGT939K" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-08PRGT939K');`}
        </Script>
        <AnalyticsTracker />
        <a className="skip-link" href="#main-content">
          本文へ移動
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <MobileDock />
      </body>
    </html>
  );
}
