import type { Metadata } from "next";
import { lessonCalendar, paymentNote } from "./monthly-data";
import { ButtonRow, FinalCta, PrimaryButton, SecondaryButton, SITE } from "./site";

export const metadata: Metadata = {
  title: { absolute: "群馬県太田市の子ども料理教室｜スマイルクッキング" },
  description: "群馬県太田市、太田駅から車で5分。3歳から始められる、子どもが主役の料理教室です。親子・小学生・年齢を問わず参加できるおやつレッスンを開催。料理研究家・管理栄養士が毎月のテーマとメニューを研究・試作しています。",
  alternates: { canonical: "/" },
  openGraph: {
    title: "群馬県太田市の子ども料理教室｜スマイルクッキング",
    description: "子どもが主役の料理教室。ここでは、子どもが自分で考えて、自分で作る。親子・小学生・おやつレッスンを開催しています。",
    url: "/",
    images: [{ url: "/images/home-main-03.webp", alt: "スマイルクッキングで料理を楽しむ子どもたち" }],
  },
};

const lessonTypes = [
  { label: "親子レッスン", target: "3歳〜｜親子2人1組", price: "4,000円／組", text: "「できた！」を隣で見守れる、親子の料理時間。", image: "/images/lessons-oyako-list.webp", imageSize: [1280, 960] as const, href: "/lessons/oyako" },
  { label: "小学生レッスン", target: "小1〜小6｜子どものみ", price: "4,500円／人", text: "料理を通して、自分で考えて動く力を育てる放課後の習い事。", image: "/images/shogakusei-hero-top.webp", imageSize: [1280, 960] as const, href: "/lessons/shogakusei" },
  { label: "おやつレッスン", target: "年齢制限なし｜開催回ごとにご案内", price: "4,000円／2人分", text: "講師自慢の研究レシピで、手作りおやつ・デコレーション・ラッピングまで楽しむ特別レッスン。", image: "/images/oyatsu_kids.webp", imageSize: [1280, 960] as const, href: "/lessons/oyatsu" },
];

const values = [
  { number: "01", title: "自分で選ぶ", text: "どの形にする？ どこから始める？ 選べる場面では、すぐに正解を渡さず、その子の答えを待ちます。" },
  { number: "02", title: "考え直して、もう一度", text: "思った通りにならなくても、それで終わりにしません。「次はどうする？」を一緒に考え、やり直せる形にします。" },
  { number: "03", title: "誰かを思って、つくる", text: "自分で作った料理を家族に食べてもらう。相手の顔を思い浮かべて作るところまで、大切な経験です。" },
];

const parentVoices = [
  { quote: "家ではつい口を出してしまうのに、ここでは先生が子どものペースを大切にしてくれて、私も安心して見守れました。『できた！』の顔を近くで見られて嬉しかったです。", source: "年中さんのママ" },
  { quote: "レッスンで作ったものを持ち帰ると、家族に『これ作ったんだよ！』と誇らしそうに話していました。料理だけでなく、自分でやってみる自信につながっていると感じます。", source: "小学2年生の保護者" },
  { quote: "人見知りで最初は心配でしたが、無理に急かされることなく、その子のタイミングを待ってくれました。帰る頃には『また行きたい』と言っていて、親の私もほっとしました。", source: "年長さんのママ" },
];

const currentMonth = lessonCalendar.current.content;
const nextMonth = lessonCalendar.next.content;

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", "@id": "https://smilecooking.jp/#website", url: "https://smilecooking.jp/", name: "スマイルクッキング", alternateName: "Smile Cooking", inLanguage: "ja" },
      { "@type": "EducationalOrganization", "@id": "https://smilecooking.jp/#organization", name: "スマイルクッキング", url: "https://smilecooking.jp/", logo: "https://smilecooking.jp/images/logo-full.webp", image: "https://smilecooking.jp/images/home-main-03.webp", description: "料理を入口に、子どもの力と家族の未来を育てる、群馬県太田市の料理教室", address: { "@type": "PostalAddress", addressLocality: "太田市", addressRegion: "群馬県", addressCountry: "JP" }, areaServed: { "@type": "City", name: "群馬県太田市" }, sameAs: [SITE.instagram] }
    ]
  };

  return (
    <main id="main-content" className="monthly-home evergreen-home">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="mh-hero eh-hero">
        <div className="shell mh-hero-grid">
          <div className="mh-hero-copy">
            <p className="mh-kicker">群馬県太田市｜3歳から始められる料理教室</p>
            <h1><span className="eh-h1-small">子どもが主役の</span>料理教室。</h1>
            <p className="eh-hero-thesis">ここでは、子どもが自分で考えて、自分で作る。</p>
            <div className="eh-hero-promise">
              <span>子どもは「自分でできた」を。</span>
              <span>ママは「この子に任せて大丈夫」を。</span>
              <strong>その積み重ねが、自分の人生を自分でつくる力になる。</strong>
            </div>
            <p className="mh-lead">
              <span>「やらせてあげたい」のに、おうちでは時間も余裕も足りない。</span>
              <span>それで大丈夫です。安全と進行は、私たちが支えます。</span>
              <span>ママは少し離れて、夢中になる横顔を見ていてください。</span>
            </p>
            <ul className="mh-chips"><li>3歳から</li><li>単発1回から</li><li>入会金なし</li></ul>
            <ButtonRow>
              <PrimaryButton href={SITE.booking} external>日程・空席を見る</PrimaryButton>
              <SecondaryButton href="/guide">初めての方へ</SecondaryButton>
            </ButtonRow>
            <a className="eh-latest-link" href={lessonCalendar.current.href}><span>{lessonCalendar.current.badge}</span><strong>{currentMonth.shortMonth} スマイルクッキングのテーマは「{currentMonth.theme}」</strong><b>{currentMonth.shortMonth}のメニューを見る →</b></a>
          </div>
          <div className="eh-hero-collage" aria-label="スマイルクッキングのレッスン風景">
            <figure className="eh-hero-collage-main">
              <img src="/images/home-main-03.webp" alt="料理を作り終えて、達成感いっぱいの笑顔を見せる子どもたち" width="1280" height="960" fetchPriority="high" />
              <figcaption>今日の主役は、子どもたち。</figcaption>
            </figure>
            <figure className="eh-hero-collage-detail">
              <img src="/images/home-main-01.webp" alt="自分で考えながら、包丁で野菜を切る子ども" width="1280" height="960" fetchPriority="high" />
              <figcaption><span>01</span> 考えて、手を動かす。</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="mh-section eh-signals"><div className="shell"><div className="mh-heading"><p>気持ち、わかります。</p><h2>「やらせてあげたい」のに、<br />家のキッチンでは余裕がなくなる。</h2></div><div className="eh-signal-grid"><article><span>時間のこと</span><h3>自分でやった方が早い</h3><p>手伝ってもらうより自分でやった方が早い。忙しい毎日の中では、そう感じるのが自然です。</p></article><article><span>安全のこと</span><h3>「だめ」「待って」が先に出る</h3><p>包丁も火も心配で、「だめ」「待って」が先に出てしまう。見守る方が、実はずっと難しい。</p></article><article><span>片付けのこと</span><h3>「また今度ね」が続く</h3><p>床にこぼれる、洗い物が増える。「また今度ね」が続くのは、ママが悪いわけじゃない。</p></article></div><div className="eh-signal-answer"><strong>待てない日があっても、それで大丈夫です。</strong><p>スマイルクッキングは、その「やらせてあげたい」を受け取る場所です。安全は講師が整えながら、子どもが主役になれる時間をつくっています。ママも少し肩の力を抜いて、子どもの「できた！」を隣で見ていてください。</p><a href={lessonCalendar.current.href}>{currentMonth.shortMonth}のレッスンを見る →</a></div></div></section>

      <section className="mh-section eh-manifesto">
        <div className="shell eh-manifesto-grid">
          <figure>
            <img src="/images/home-main-02.webp" alt="子どもの料理をすぐ隣で見守る講師" width="960" height="1280" loading="lazy" />
            <figcaption>「この子に任せて大丈夫」と思える一日へ。</figcaption>
          </figure>
          <div>
            <p className="mh-kicker">料理の先にあるもの</p>
            <h2>つくっているのは、<br />料理だけじゃない。</h2>
            <div className="eh-manifesto-copy">
              <p>包丁を前に、どこから切ろうかと止まる。盛りつけをやり直す。味を見て、「もう少し」と決める。レッスンでは、そんな小さな場面が何度もあります。</p>
              <p>隣にいる大人にとっては、手を出さずに待つほうが難しい日もあります。私たちは安全を守る。でも、答えまで先に言わない。</p>
              <p>子どもが持ち帰るのは、「自分でできた」という経験。大人が持ち帰るのは、「この子に任せて大丈夫」という新しいまなざしです。</p>
              <strong>その一回一回が、親子の信頼になり、家族の記憶になり、いつか自分の人生を自分で選び、つくっていく力になっていきます。</strong>
            </div>
            <a className="eh-manifesto-link" href="/kodawari">私たちが大切にしていること →</a>
          </div>
        </div>
      </section>

      <section className="mh-section eh-lessons"><div className="shell"><div className="mh-heading"><p>レッスンを選ぶ</p><h2>今の「やってみたい」に合うレッスンを。</h2><span>親子で一緒に、小学生がひとりで、好きなおやつから。参加する人や目的に合わせて選べます。</span></div><div className="mh-card-grid">{lessonTypes.map(lesson => <a className="mh-card" href={lesson.href} data-cta="lesson" key={lesson.label}><img src={lesson.image} alt={`${lesson.label}の様子`} loading="lazy" width={lesson.imageSize[0]} height={lesson.imageSize[1]} /><div><small>{lesson.target}</small><h3>{lesson.label}</h3><p>{lesson.text}</p><strong>{lesson.price}</strong><b>{lesson.label}を見る →</b></div></a>)}</div></div></section>

      <section className="mh-section eh-voices">
        <div className="shell">
          <div className="mh-heading"><p>参加された方の声</p><h2>レッスンのあと、<br />おうちで見えたこと。</h2><span>これまでに保護者の方からいただいた感想をご紹介します。</span></div>
          <div className="eh-voice-grid">
            {parentVoices.map((voice) => <blockquote key={voice.source}><p>「{voice.quote}」</p><cite>{voice.source}</cite></blockquote>)}
          </div>
        </div>
      </section>

      <section className="mh-section eh-about"><div className="shell"><div className="mh-heading"><p>料理から育つもの</p><h2>小さな「どうしよう」が、<br />考える力に変わっていく。</h2><span>どこから始める？ もう少し混ぜる？ 誰に食べてもらう？ 料理の中には、自分で決める場面が何度もあります。</span></div><div className="mh-trust-grid">{values.map(value => <article key={value.number}><span>{value.number}</span><h3>{value.title}</h3><p>{value.text}</p></article>)}</div><p className="mh-text-link"><a href="/kodawari">素材・関わり方・学びへのこだわり →</a></p></div></section>

      <section className="mh-section eh-monthly"><div className="shell eh-monthly-grid"><div><p className="mh-kicker">毎月のテーマ</p><h2>毎月ひとつずつ、<br />料理のきほんに触れていきます。</h2><p>親子レッスンも小学生レッスンも、毎月共通のテーマで開催。きょうだいで別々のレッスンでも、おうちで同じ話ができます。</p><ul className="eh-theme-list"><li>だし</li><li>切る</li><li>はかる・まぜる</li><li>炒める</li><li>焼く</li><li>包む・巻く</li></ul></div><article className="eh-current eh-current-text"><div className="eh-current-month" aria-hidden="true">{currentMonth.shortMonth.replace("月", "")}</div><div className="eh-current-content"><small>{lessonCalendar.current.badge}</small><p className="eh-current-label">{currentMonth.shortMonth} スマイルクッキングのテーマ</p><h3>「{currentMonth.theme}」</h3><ul>{currentMonth.lessons.map((lesson) => <li key={lesson.type}><span>{lesson.type}</span><strong>{lesson.title}</strong></li>)}</ul><a href={lessonCalendar.current.href}>各レッスンの詳細を見る →</a><a className="eh-next-month" href={lessonCalendar.next.href}>{nextMonth.shortMonth}「{nextMonth.theme}」も見る →</a></div></article></div></section>

      <section className="mh-section mh-guide"><div className="shell mh-guide-grid"><div><p className="mh-kicker">初めての方へ</p><h2>まずはこの不安から。</h2><p className="eh-guide-lead">うちの子、料理初心者だし…。静かにしていられるかな…。みんなと同じにできるかな…。たくさんの保護者の方が、最初にそう感じます。</p></div><dl><div><dt>通常</dt><dd>親子 4,000円／小学生 4,500円／おやつ 4,000円</dd></div><div><dt>初回体験</dt><dd>小学生 2,500円／親子 1,500円（毎月第1日曜）</dd></div><div><dt>参加方法</dt><dd>入会金・年会費なし。単発1回から</dd></div><div><dt>お支払い</dt><dd>{paymentNote}</dd></div></dl><ButtonRow><PrimaryButton href="/guide">はじめての方のページへ</PrimaryButton><SecondaryButton href={SITE.booking} external>日程・空席を見る</SecondaryButton></ButtonRow></div></section>

      <FinalCta title="子どもの「やってみたい」が聞こえた今を、最初の一回に。" text="最初から上手にできなくても大丈夫です。自分で選び、手を動かす姿を、まずは一度見に来てください。" />
    </main>
  );
}
