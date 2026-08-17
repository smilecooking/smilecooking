import type { MonthlyContent } from "../monthly-data";
import { paymentNote } from "../monthly-data";
import { Breadcrumbs, ButtonRow, FinalCta, PrimaryButton, SecondaryButton, SITE } from "../site";

export function MonthlyPage({ content, otherHref, otherLabel }: { content: MonthlyContent; otherHref: string; otherLabel: string }) {
  return <main id="main-content" className="monthly-page">
    <section className="mp-hero"><Breadcrumbs items={[{ label: "トップ", href: "/" }, { label: "レッスン", href: "/lessons" }, { label: `${content.shortMonth}のレッスン` }]} /><div className="shell mp-hero-grid"><div><p className="mh-kicker">{content.status}｜群馬県太田市</p><h1>{content.headline}</h1><p>{content.lead}</p><ul className="mh-chips"><li>テーマ｜{content.theme}</li><li>単発参加OK</li><li>子どもが主役</li></ul><ButtonRow><PrimaryButton href={SITE.booking} external>日程・空席を見る</PrimaryButton><SecondaryButton href={SITE.line} external>LINEで相談する</SecondaryButton></ButtonRow><small>{paymentNote}</small></div><figure><img src={content.image} alt={content.alt} width="1280" height="960" fetchPriority="high" /><figcaption>{content.month}｜{content.theme}</figcaption></figure></div></section>

    <section className="mp-section"><div className="shell"><div className="mh-heading"><p>{content.shortMonth}のメニュー</p><h2>今月の3つのレッスン</h2><span>前半・後半の開催日や空席は、予約ページに最新情報を掲載しています。</span></div><div className="mp-lessons">{content.lessons.map((lesson, index) => <article key={lesson.type} className="mp-lesson"><figure><img src={lesson.image} alt={lesson.alt} loading="lazy" width="1280" height="960" /><span>0{index + 1}</span></figure><div><small>{lesson.target}</small><p className="mh-type">{lesson.type}</p><h2>{lesson.title}</h2>{lesson.detail && <h3>{lesson.detail}</h3>}<p>{lesson.description}</p><ul>{lesson.learning.map(item => <li key={item}>{item}</li>)}</ul><strong>{lesson.price}</strong></div></article>)}</div></div></section>

    <section className="mp-section mp-value"><div className="shell mp-value-grid"><div><p className="mh-kicker">今月の学び</p><h2>料理の中で、考える回数を増やす。</h2></div><p>正解を先に教えるのではなく、見て、触って、迷って、決める。その小さな経験を大切にします。上手に完成させることだけが目的ではありません。</p></div></section>

    <section className="mp-section mp-info"><div className="shell"><div className="mh-heading"><p>予約・ご利用案内</p><h2>日程と空席は、予約ページを最新情報に。</h2><span>共通の料金・持ち物・アクセス・キャンセルは「初めての方・ご利用案内」にまとめています。</span></div><ButtonRow><PrimaryButton href={SITE.booking} external>最新の日程・空席を見る</PrimaryButton><SecondaryButton href="/guide">初めての方・ご利用案内</SecondaryButton></ButtonRow><p className="mp-other-month"><a href={otherHref}>{otherLabel} →</a></p></div></section>

    <FinalCta title={`${content.shortMonth}の「やってみたい」を、子どもの手で。`} text="はじめてで固まっても、途中で休んでも大丈夫。今のお子さんのペースから始めます。" />
  </main>;
}
