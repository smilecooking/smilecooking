import type { Metadata } from "next";
import { monthlyContent } from "../../monthly-data";
import { MonthlyPage } from "../monthly-page";

export const metadata: Metadata = { title: "2026年8月レッスン｜テーマは切る", description: "スマイルクッキング2026年8月の親子・小学生・おやつレッスン。今月のテーマは『切る』です。", alternates: { canonical: "/lessons/2026-08" } };
export default function AugustPage() { return <MonthlyPage content={monthlyContent.august} otherHref="/lessons/2026-09" otherLabel="9月の内容を見る" />; }
