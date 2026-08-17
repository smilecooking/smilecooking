import type { ReactNode } from "react";
import Link from "next/link";
import { lessonCalendar } from "./monthly-data";

export const SITE = {
  line: "https://lin.ee/TBZC5Bl",
  booking: "https://tol-app.jp/s/smilecooking",
  elementaryTrial: "https://tol-app.jp/s/smilecooking/5kji00",
  instagram: "https://www.instagram.com/smile_cooking2022/",
  map: "https://maps.app.goo.gl/a7SQ2kcqdHcPcgGp9",
};

const navItems = [
  { href: "/lessons", label: "レッスンを選ぶ" },
  { href: "/kodawari", label: "私たちのこだわり" },
  { href: "/guide", label: "初めての方・ご利用案内" },
];

const SITE_ORIGIN = "https://smilecooking.jp";

export type BreadcrumbItem = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${SITE_ORIGIN}${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <nav className="breadcrumbs shell" aria-label="パンくずリスト">
        {items.map((item, index) => (
          <span key={`${item.label}-${index}`}>
            {item.href ? <a href={item.href}>{item.label}</a> : <b aria-current="page">{item.label}</b>}
            {index < items.length - 1 ? <i aria-hidden="true">/</i> : null}
          </span>
        ))}
      </nav>
    </>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="wordmark" href="/" aria-label="スマイルクッキング トップへ">
          <span className="wordmark-symbol" aria-hidden="true">
            <img src="/images/logo-full.webp" alt="" width="700" height="700" />
          </span>
          <span className="wordmark-type">
            <strong>スマイルクッキング</strong>
            <small>CHILDREN&apos;S COOKING STUDIO</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="メインナビゲーション">
          {navItems.map((item) => (
            <a href={item.href} data-cta={item.href === "/lessons" ? "lesson" : "internal"} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-line" href={SITE.booking} data-cta="booking" target="_blank" rel="noreferrer">
          日程・空席を見る
        </a>

        <details className="mobile-menu">
          <summary aria-label="メニューを開く">
            <span />
            <span />
            <b aria-hidden="true">メニュー</b>
          </summary>
          <nav aria-label="スマートフォンメニュー">
            <Link href="/">トップ</Link>
            {navItems.map((item) => (
              <a href={item.href} data-cta={item.href === "/lessons" ? "lesson" : "internal"} key={item.href}>
                {item.label}
              </a>
            ))}
            <a href={SITE.booking} data-cta="booking" target="_blank" rel="noreferrer">
              日程・空席を見る
            </a>
            <a href={SITE.line} data-cta="line" target="_blank" rel="noreferrer">
              LINEで相談する
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <img src="/images/logo-full.webp" alt="スマイルクッキングのくまロゴ" width="700" height="700" loading="lazy" />
          <div>
            <strong>スマイルクッキング</strong>
            <p>群馬県太田市｜子どもが主役の料理教室</p>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <strong>サイトメニュー</strong>
            <a href="/lessons" data-cta="lesson">レッスン一覧</a>
            <a href="/kodawari">私たちのこだわり</a>
            <a href="/guide">初めての方・ご利用案内</a>
          </div>
          <div>
            <strong>参加する</strong>
            <a href={SITE.booking} data-cta="booking" target="_blank" rel="noreferrer">
              日程・空席を見る
            </a>
            <a href={SITE.line} data-cta="line" target="_blank" rel="noreferrer">LINEで相談する</a>
          </div>
          <div>
            <strong>最新情報</strong>
            <a href={SITE.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>教室の場所はGoogleマップでご確認いただけます。駐車位置と入口は、予約後に公式LINEでご案内します。</p>
        <p>© Smile Cooking</p>
      </div>
    </footer>
  );
}

export function MobileDock() {
  return (
    <nav className="mobile-dock" aria-label="レッスンメニュー">
      <a href="/lessons/shogakusei" data-cta="lesson">
        小学生
      </a>
      <a href="/lessons/oyako" data-cta="lesson">
        親子
      </a>
      <a href="/lessons/oyatsu" data-cta="lesson">
        おやつ
      </a>
    </nav>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function SectionTitle({
  eyebrow,
  children,
  lead,
}: {
  eyebrow: string;
  children: ReactNode;
  lead?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{children}</h2>
      {lead ? <p className="section-lead">{lead}</p> : null}
    </div>
  );
}

export function LessonValue({
  title,
  lead,
  items,
}: {
  title: ReactNode;
  lead: ReactNode;
  items: Array<{ label: string; title: string; text: string }>;
}) {
  return (
    <section className="lesson-value" aria-labelledby="lesson-value-title">
      <div className="shell lesson-value-inner">
        <div className="lesson-value-heading">
          <Eyebrow>このレッスンで持ち帰るもの</Eyebrow>
          <h2 id="lesson-value-title">{title}</h2>
          <p>{lead}</p>
        </div>
        <div className="lesson-value-grid">
          {items.map((item, index) => (
            <article key={item.title}>
              <span><b>0{index + 1}</b>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ButtonRow({ children }: { children: ReactNode }) {
  return <div className="button-row">{children}</div>;
}

export function PrimaryButton({
  href,
  children,
  external = false,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      className="button button-primary"
      href={href}
      data-cta={href === SITE.booking || href === SITE.elementaryTrial ? "booking" : href === SITE.line ? "line" : "internal"}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {children}
      <span aria-hidden="true">→</span>
    </a>
  );
}

export function SecondaryButton({
  href,
  children,
  external = false,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      className="button button-secondary"
      href={href}
      data-cta={href === SITE.booking || href === SITE.elementaryTrial ? "booking" : href === SITE.line ? "line" : "internal"}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {children}
      <span aria-hidden="true">→</span>
    </a>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  alt,
  note,
  chips = [],
  facts = [],
  photoLabel,
  primaryLabel = "日程・空席を見る",
  primaryHref = SITE.booking,
  secondaryLabel = "LINEで相談する",
  secondaryHref = SITE.line,
  breadcrumbs,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: ReactNode;
  image: string;
  alt: string;
  note?: string;
  chips?: string[];
  facts?: Array<[string, string]>;
  photoLabel?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  breadcrumbs?: BreadcrumbItem[];
}) {
  return (
    <section className="page-hero">
      {breadcrumbs?.length ? <Breadcrumbs items={breadcrumbs} /> : null}
      <div className="shell page-hero-grid">
        <div className="page-hero-copy">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1>{title}</h1>
          <p>{lead}</p>
          {chips.length ? (
            <ul className="page-hero-chips" aria-label="ページのポイント">
              {chips.map((chip) => <li key={chip}>{chip}</li>)}
            </ul>
          ) : null}
          <ButtonRow>
            <PrimaryButton href={primaryHref} external>
              {primaryLabel}
            </PrimaryButton>
            <SecondaryButton href={secondaryHref} external>
              {secondaryLabel}
            </SecondaryButton>
          </ButtonRow>
          {note ? <small>{note}</small> : null}
        </div>
        <div className="page-hero-photo">
          <img src={image} alt={alt} width="1280" height="960" fetchPriority="high" />
          {photoLabel ? <p>{photoLabel}</p> : null}
        </div>
      </div>
      {facts.length ? (
        <dl className="shell page-hero-facts" aria-label="基本情報">
          {facts.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      ) : null}
    </section>
  );
}

export function CurrentLessonLinks() {
  const current = lessonCalendar.current;
  const next = lessonCalendar.next;

  return (
    <aside className="current-lesson-links" aria-label="最新の月別レッスン">
      <div className="shell current-lesson-links-inner">
        <div>
          <span>最新の月別メニュー</span>
          <strong>最新メニューは、月別ページにまとめています。</strong>
        </div>
        <a href={current.href}>
          <small>{current.badge}</small>
          <b>{current.content.shortMonth}｜{current.content.theme}</b>
          <span>見る →</span>
        </a>
        <a href={next.href}>
          <small>{next.badge}</small>
          <b>{next.content.shortMonth}｜{next.content.theme}</b>
          <span>見る →</span>
        </a>
      </div>
    </aside>
  );
}

export function FinalCta({
  title = "「うちの子にも合うかな？」を、そのまま聞いてください。",
  text = "年齢や参加のしかた、アレルギーなど、気になることは先生がLINEでお答えします。",
  primaryLabel = "日程・空席を見てみる",
  primaryHref = SITE.booking,
  secondaryLabel = "先生にLINEで聞いてみる",
  secondaryHref = SITE.line,
}: {
  title?: ReactNode;
  text?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="final-cta">
      <div className="shell final-cta-inner">
        <div>
          <Eyebrow>ご予約・ご相談</Eyebrow>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <ButtonRow>
          <PrimaryButton href={primaryHref} external={primaryHref.startsWith("http")}>
            {primaryLabel}
          </PrimaryButton>
          <SecondaryButton href={secondaryHref} external={secondaryHref.startsWith("http")}>
            {secondaryLabel}
          </SecondaryButton>
        </ButtonRow>
      </div>
    </section>
  );
}
