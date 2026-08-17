import type { Metadata } from "next";
import { lessonCalendar } from "../monthly-data";
import { Breadcrumbs, ButtonRow, FinalCta, PrimaryButton, SecondaryButton, SITE } from "../site";

export const metadata: Metadata = { title: "レッスン一覧", description: "親子・小学生・おやつから選べる、スマイルクッキングの最新レッスン。単発1回から参加できます。", alternates: { canonical: "/lessons" } };

const lessonTypes = [
  { title:"親子レッスン", target:"3歳〜｜親子2人1組", price:"4,000円／組", text:"子どもが作り、ママやパパはすぐそばで見守る時間です。", href:"/lessons/oyako", image:"/images/lessons-oyako-list.webp" },
  { title:"小学生レッスン", target:"小1〜小6｜子どものみ", price:"4,500円／人", text:"自分の調理器具で、家族の夕食を最初から最後まで作ります。", href:"/lessons/shogakusei", image:"/images/shogakusei-main.webp" },
  { title:"おやつレッスン", target:"年齢制限なし｜2人分", price:"4,000円／2人分", text:"つくって、飾って、包むところまで楽しむおやつ時間です。", href:"/lessons/oyatsu", image:"/images/oyatsu-photo-2.webp" },
];

export default function LessonsPage(){return <main id="main-content" className="monthly-page">
  <section className="mp-hero"><Breadcrumbs items={[{ label: "トップ", href: "/" }, { label: "レッスン" }]} /><div className="shell mp-hero-grid"><div><p className="mh-kicker">群馬県太田市｜レッスン案内</p><h1>今のお子さんに、ちょうどいい一回を。</h1><p>親子で、小学生がひとりで、大好きなおやつから。入会金や年会費はなく、一回から参加できます。</p><ul className="mh-chips"><li>親子・小学生・おやつ</li><li>子どもが主役</li><li>当日・現金払いのみ</li></ul><div className="button-row"><PrimaryButton href={lessonCalendar.current.href}>{lessonCalendar.current.content.shortMonth}の内容を見る</PrimaryButton><SecondaryButton href={SITE.booking} external>日程・空席を見る</SecondaryButton></div></div><figure><img src="/images/children_lineup.webp" alt="スマイルクッキングに参加する子どもたち" width="1280" height="960" fetchPriority="high" /><figcaption>一回から、やってみよう。</figcaption></figure></div></section>
  <section className="mp-section"><div className="shell"><div className="mh-heading"><p>レッスンを選ぶ</p><h2>参加スタイルから選ぶ</h2></div><div className="mh-card-grid">{lessonTypes.map(item=><a className="mh-card" href={item.href} data-cta="lesson" key={item.title} style={{color:"inherit",textDecoration:"none"}}><img src={item.image} alt={`${item.title}の様子`} loading="lazy"/><div><small>{item.target}</small><h3>{item.title}</h3><p>{item.text}</p><strong>{item.price}　→</strong></div></a>)}</div></div></section>
  <section className="mh-section mh-now"><div className="shell mh-now-grid"><div><p className="mh-kicker">毎月のメニュー</p><h2>毎月、テーマとメニューが変わります。</h2><p>同じ参加スタイルでも、経験する工程と料理は月ごとに変わります。詳しいメニューは月別ページ、日程と空席は予約ページを最新情報としています。</p></div><div className="mh-month-switch"><a href={lessonCalendar.current.href}><small>{lessonCalendar.current.badge}</small><strong>{lessonCalendar.current.content.shortMonth}｜{lessonCalendar.current.content.theme}</strong><span>メニューを見る →</span></a><a href={lessonCalendar.next.href}><small>{lessonCalendar.next.badge}</small><strong>{lessonCalendar.next.content.shortMonth}｜{lessonCalendar.next.content.theme}</strong><span>次月のメニューを見る →</span></a></div></div></section>
  <section className="mp-section mp-info"><div className="shell"><div className="mh-heading"><p>予約前のご案内</p><h2>初めての方に必要なことは、ひとつのページに。</h2><span>体験・料金・持ち物・当日の流れ・アクセス・キャンセルを、ご利用案内にまとめています。</span></div><ButtonRow><PrimaryButton href="/guide">初めての方・ご利用案内</PrimaryButton><SecondaryButton href={SITE.booking} external>日程・空席を見る</SecondaryButton></ButtonRow></div></section>
  <FinalCta title="どれが合うか迷ったら、先生に聞いてください。" text="年齢や今の様子を伺いながら、楽しめそうな一回を一緒に選びます。" />
</main>}
