import type { Metadata } from "next";
import {
  ButtonRow,
  FinalCta,
  PageHero,
  PrimaryButton,
  SecondaryButton,
  SectionTitle,
  SITE,
} from "../../site";

export const metadata: Metadata = {
  title: "記念日プラン",
  description:
    "スマッシュケーキやジェンダーリビールなど、家族の節目をつくる時間から写真に残すオーダーメイドの記念日プランです。",
  alternates: { canonical: "/lessons/kinenbi" },
};

const consultation = [
  ["残したい気持ちを聞く", "どんな記念日か、誰と過ごすか、どんな表情を残したいかをLINEで伺います。"],
  ["一緒に内容を決める", "材料、つくる時間、撮影、アレルギーを確認し、金額と一緒にご提案します。"],
  ["家族でつくって、笑う", "完成品を受け取るだけでなく、小さな手で触れたり、家族で仕上げたりする時間も楽しみます。"],
  ["写真と記憶に残す", "ふとこぼれた笑顔や家族のやりとりを撮影し、写真データでお渡しします。"],
];

export default function KinenbiLessonPage() {
  return (
    <main id="main-content" className="sunny-subpage sunny-kinenbi-page">
      <PageHero
        eyebrow="家族の記念日プラン"
        title={<>つくって、笑って。できあがるまで全部が記念日。</>}
        lead={<>ケーキだけでなく、一緒につくった小さな手や、<br className="mobile-copy-break" />その日の会話まで。<br className="mobile-copy-break" />「わが家らしいね」と思える時間を、<br className="mobile-copy-break" />一組ずつ、一緒に考えます。</>}
        image="/images/kinenbi-main.webp"
        alt="記念日プランでスマッシュケーキを楽しむ家族"
        note="スマッシュケーキ、ジェンダーリビールなど。内容は個別にご相談ください。"
        chips={["家族ごとの個別プラン", "材料・撮影込み", "アレルギー事前確認"]}
        facts={[["対象", "家族ごとの個別プラン"], ["料金", "7,700円〜"], ["撮影", "写真データ込み"], ["相談", "公式LINE"]]}
        photoLabel="いつもの笑顔を、そのまま写真に。"
        primaryLabel="記念日プランをLINEで相談"
        primaryHref={SITE.line}
        secondaryLabel="教室の写真を見る"
        secondaryHref={SITE.instagram}
        breadcrumbs={[{ label: "トップ", href: "/" }, { label: "レッスン", href: "/lessons" }, { label: "記念日プラン" }]}
      />

      <section className="section sub-kinenbi-intro">
        <div className="shell sub-why-banner">
          <span>早めのご相談がおすすめです</span>
          <div>
              <h3>日にちだけ決まっている、でも大丈夫です。</h3>
              <p>『こんな雰囲気にしたい』から、一緒に形にしていきます。材料やアレルギー、撮影内容を一組ずつ相談するため、少し早めにお声がけください。</p>
          </div>
          <a href={SITE.line} target="_blank" rel="noreferrer">LINEで相談する →</a>
        </div>
      </section>

      <section className="section">
        <div className="shell intro-grid">
          <SectionTitle eyebrow="家族ごとのオーダーメイド">
            どの家族にも、<br />その家族だけの物語があるから。
          </SectionTitle>
          <div className="intro-copy">
            <p>年齢、家族の人数、アレルギー、残したい場面は、一組ずつ違います。既製の進行に家族を合わせず、何をつくり、どの瞬間を残すかを相談して決めます。</p>
            <p>料金は7,700円から。材料費・参加費・撮影代・写真データを含みます。内容と追加料金は、予約を確定する前にお見積もりします。</p>
          </div>
        </div>
      </section>

      <section className="section commitments-section">
        <div className="shell">
          <SectionTitle eyebrow="プラン例">家族の節目に合わせて。</SectionTitle>
          <div className="content-grid-3">
            <article className="info-card"><span className="card-number">01</span><h3>スマッシュケーキ</h3><p>小さな手で触れ、味わう姿を、つくる準備から撮影まで一つの時間にします。</p></article>
            <article className="info-card"><span className="card-number">02</span><h3>ジェンダーリビール</h3><p>家族に伝える方法や仕上げを相談し、開く瞬間だけでなく、待つ時間も残します。</p></article>
            <article className="info-card"><span className="card-number">03</span><h3>そのほかの記念日</h3><p>誕生日、きょうだいの節目など、料理やおやつを囲みたい場面をLINEでご相談ください。</p></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell split-section">
          <div className="split-photo photo-offset"><img src="/images/kinenbi-main.webp" alt="家族で記念日のおやつを囲む様子" /></div>
          <div className="split-copy">
            <SectionTitle eyebrow="ご利用の流れ">相談から当日まで。</SectionTitle>
            <ol className="compact-steps">
              {consultation.map(([title, text], index) => (
                <li key={title}><span>0{index + 1}</span><div><strong>{title}</strong><p>{text}</p></div></li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section first-visit-section">
        <div className="shell lesson-join-grid">
          <div>
            <SectionTitle eyebrow="LINEでご相談">まずは、残したい場面を教えてください。</SectionTitle>
            <p>希望日、参加人数、お子さんの年齢、アレルギー、考えている記念日の内容をLINEでお送りください。対応可否とお見積もりをご案内します。</p>
          </div>
          <ButtonRow>
            <PrimaryButton href={SITE.line} external>記念日プランを相談</PrimaryButton>
            <SecondaryButton href={SITE.instagram} external>教室の写真を見る</SecondaryButton>
          </ButtonRow>
        </div>
      </section>

      <FinalCta
        title="まだ『こんな感じ』だけでも、大丈夫です。"
        text="残したい表情や家族の節目を聞きながら、わが家らしい記念日の形を一緒に考えます。"
        primaryLabel="記念日プランを相談"
        primaryHref={SITE.line}
        secondaryLabel="教室の写真を見る"
        secondaryHref={SITE.instagram}
      />
    </main>
  );
}
