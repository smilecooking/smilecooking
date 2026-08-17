export type MonthlyLesson = {
  type: string;
  target: string;
  title: string;
  detail?: string;
  description: string;
  price: string;
  image: string;
  alt: string;
  learning: string[];
};

export type MonthlyContent = {
  month: string;
  shortMonth: string;
  theme: string;
  status: string;
  headline: string;
  lead: string;
  image: string;
  alt: string;
  lessons: MonthlyLesson[];
};

export const monthlyContent: Record<"august" | "september", MonthlyContent> = {
  august: {
    month: "2026年8月",
    shortMonth: "8月",
    theme: "切る",
    status: "開催中｜残りの日程は予約ページへ",
    headline: "切れた、できた。夏休みのキッチンが、少し頼もしくなる。",
    lead: "包丁の持ち方から、食材に合わせた大きさまで。急がず、子どもの手で確かめます。",
    image: "/images/theme-cutting.webp",
    alt: "包丁で食材を切ることに集中する子ども",
    lessons: [
      { type: "親子レッスン", target: "3歳〜｜親子2人1組", title: "ハンバーガー屋さん", detail: "手作りバンズ・ベイクドポテト", description: "注文を聞いて、こねて、はさんで。親子で自分だけのバーガーを仕上げます。", price: "4,000円／親子2人1組", image: "/images/lessons-oyako-list.webp", alt: "親子で料理を楽しむ様子", learning: ["包丁の基本", "注文を聞いて選ぶ", "親子で役割を分ける"] },
      { type: "小学生レッスン", target: "小1〜小6｜子どものみ", title: "じゃがいもピザ／夏野菜キーマ", detail: "前半・後半でメニューが変わります", description: "前半はじゃがいもピザとピクルス。後半はルウを使わない、辛くない夏野菜キーマです。", price: "4,500円／人", image: "/images/shogakusei-g3-peace.webp", alt: "料理を完成させた小学生", learning: ["食材ごとの切り方", "火の通り方を見る", "家族の夕食を作る"] },
      { type: "おやつレッスン", target: "年齢制限なし｜2人分", title: "テーマパークおやつ3種", detail: "チュロス・ポップコーン・ゼリードリンク", description: "チュロス、ポップコーン、きらきらのゼリードリンク。テーマパークのわくわくを、3つのおやつにして持ち帰ります。", price: "4,000円／2人分", image: "/images/oyatsu-photo-2.webp", alt: "おやつ作りを楽しむ子ども", learning: ["生地をしぼる", "できたての変化を感じる", "自分らしく仕上げる"] },
    ],
  },
  september: {
    month: "2026年9月",
    shortMonth: "9月",
    theme: "はかる・まぜる",
    status: "9月レッスン受付中",
    headline: "「これくらいかな？」が、「自分ではかれた！」に変わる9月。",
    lead: "分量を見て、順番を考えて、混ざっていく様子を確かめる。料理の中で、小さな判断を重ねます。",
    image: "/images/home-main-03.webp",
    alt: "ボウルで材料を混ぜながら笑顔を見せる子どもたち",
    lessons: [
      { type: "親子レッスン", target: "3歳〜｜親子2人1組", title: "親子でパスタ屋さん", detail: "ミートソース or カルボナーラ", description: "お子さんの注文で作る味が決まります。イタリアンサラダと手作りドレッシングも一緒に。", price: "4,000円／親子2人1組", image: "/images/oyako_main.webp", alt: "お母さんに見守られながら料理をする子ども", learning: ["自分で注文を決める", "材料をはかる", "親子で一皿を仕上げる"] },
      { type: "小学生レッスン", target: "小1〜小6｜子どものみ", title: "チキン南蛮／麻婆豆腐", detail: "前半・後半でメニューが変わります", description: "前半は手作りタルタルのささみチキン南蛮。後半は麻婆豆腐と春雨サラダです。", price: "4,500円／人", image: "/images/shogakusei-main.webp", alt: "それぞれの調理台で料理をする小学生", learning: ["調味料を正しくはかる", "味のバランスを考える", "変化を見ながら混ぜる"] },
      { type: "おやつレッスン", target: "年齢制限なし｜2人分", title: "カップレアチーズケーキ", detail: "手作りブルーベリーソース添え", description: "子どもは手作りカルピス、大人はコーヒーと。混ぜ方で変わる口あたりも楽しみます。", price: "4,000円／2人分", image: "/images/oyatsu-photo-2.webp", alt: "先生と一緒におやつを作る子ども", learning: ["分量をはかる", "なめらかになるまで混ぜる", "ソースを仕上げる"] },
    ],
  },
};

export const paymentNote = "お支払いはレッスン当日・現金払いのみです。";

/**
 * 毎月の運用で最初に変更する場所。
 * トップ、レッスン一覧、各レッスンページ、/lessons/latest、サイトマップが
 * この設定を参照するため、月表示がページごとにずれるのを防ぎます。
 */
export const lessonCalendar = {
  lastUpdated: "2026-08-11",
  current: {
    href: "/lessons/2026-08",
    badge: "開催中",
    content: monthlyContent.august,
  },
  next: {
    href: "/lessons/2026-09",
    badge: "次月・受付中",
    content: monthlyContent.september,
  },
} as const;
