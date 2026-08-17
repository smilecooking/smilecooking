import type { Metadata } from "next";
import { monthlyContent } from "../../monthly-data";
import { MonthlyPage } from "../monthly-page";

export const metadata: Metadata = { title: "2026年9月レッスン｜はかる・まぜる", description: "スマイルクッキング2026年9月の親子・小学生・おやつレッスン。テーマは『はかる・まぜる』です。", alternates: { canonical: "/lessons/2026-09" } };
export default function SeptemberPage() { return <MonthlyPage content={monthlyContent.september} otherHref="/lessons/2026-08" otherLabel="8月の内容を見る" />; }
