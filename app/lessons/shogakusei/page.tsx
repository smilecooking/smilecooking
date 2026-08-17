import type { Metadata } from "next";
import {
  ButtonRow,
  CurrentLessonLinks,
  FinalCta,
  LessonValue,
  PageHero,
  PrimaryButton,
  SecondaryButton,
  SectionTitle,
  SITE,
} from "../../site";

export const metadata: Metadata = {
  title: "小学生レッスン・放課後クッキングクラブ",
  description:
    "小学生がひとりで参加し、家族の夕飯に並ぶ料理を作って持ち帰るレッスン。単発と月2回のクラブ参加があります。",
  alternates: { canonical: "/lessons/shogakusei" },
};

const strengths = [
  ["自分だけの道具がある", "順番を待つだけにならないよう、自分の包丁・まな板・調理器具で最初から最後まで作ります。"],
  ["家族に食べてもらえる", "作るのは家族と食べる2人分。『おいしい』を聞けるところまでがレッスンです。"],
  ["毎月、できることが増える", "切る、だし、炒める。メニューを楽しみながら、料理の基本を少しずつくり返します。"],
];

export default function ShogakuseiLessonPage() {
  return (
    <main id="main-content" className="sunny-subpage sunny-shogakusei-page">
      <PageHero
        eyebrow="小学生レッスン"
        title={<>考えて、選んで、最後まで。<br />家族の夕飯を、自分の手で。</>}
        lead={<>作るのは、その日の家族の夕飯に並ぶ一品。<br className="mobile-copy-break" />一人ひとつの道具を使い、「どうする？」を自分で考えながら、最初から最後まで取り組みます。</>}
        image="/images/shogakusei-hero-top.webp"
        alt="小学生レッスンで料理に取り組む子どもたち"
        note="小学校1〜6年生が、保護者と離れて参加します。"
        chips={["一人ひとつの調理器具", "夕飯2人分を持ち帰り", "初回体験2,500円"]}
        facts={[["対象", "小学校1〜6年生"], ["時間", "約60分"], ["単発", "4,500円"], ["初回体験", "2,500円"]]}
        photoLabel="自分で考えて、自分でやりきる。それがこのレッスン。"
        primaryLabel="体験できる日を見てみる"
        primaryHref={SITE.elementaryTrial}
        secondaryLabel="ひとり参加を先生に相談"
        breadcrumbs={[{ label: "トップ", href: "/" }, { label: "レッスン", href: "/lessons" }, { label: "小学生レッスン" }]}
      />

      <LessonValue
        title={<>夕飯を持ち帰る日。<br />「一人でできた」も一緒に。</>}
        lead={<>家族と食べる2人分を、自分の道具で最初から最後まで。料理を完成させるだけでなく、困ったときの考え方や助けの求め方も経験します。</>}
        items={[
          { label: "自立", title: "自分の手でやりきる", text: "一人ひとつの道具があるから、見ているだけで終わらず、全工程に向き合えます。" },
          { label: "判断", title: "考えて、助けを求める", text: "すぐに正解を渡さず、一緒に手順を確認。必要なときに知らせる力も育てます。" },
          { label: "家族", title: "誰かに食べてもらう", text: "持ち帰った夕飯に家族の『おいしい』が返るところまでが、レッスンです。" },
        ]}
      />

      <CurrentLessonLinks />

      <section className="section">
        <div className="shell intro-grid">
          <SectionTitle eyebrow="保護者と離れて参加">
            ひとりで参加しても、<br />ひとりきりにはしません。
          </SectionTitle>
          <div className="intro-copy">
            <p>初めての場所で固まる、手順が分からなくなる、途中で疲れる。そんな姿も想定して、一人ひとりの様子を近くで見ます。</p>
            <p>できる工程は子どもに任せ、包丁・火・衛生は講師が支えます。保護者と離れて参加できるか心配な場合は、予約前に普段の様子をLINEでお聞かせください。</p>
          </div>
        </div>
      </section>

      <section className="section commitments-section">
        <div className="shell">
          <SectionTitle eyebrow="レッスンの工夫">「ひとりでできた」が生まれる工夫。</SectionTitle>
          <div className="content-grid-3">
            {strengths.map(([title, text], index) => (
              <article className="info-card" key={title}><span className="card-number">0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell split-section reverse">
          <div className="split-photo photo-offset"><img src="/images/shogakusei-main.webp" alt="一人ひとつの調理器具で料理する小学生" /></div>
          <div className="split-copy">
            <SectionTitle eyebrow="放課後クッキングクラブ">月2回、「おうちでも作りたい」が増えていく。</SectionTitle>
            <p>放課後クッキングクラブは固定席で通う月2回のクラスです。平日7,000円／月、土日8,000円／月。毎回違う料理を通して、基本の工程をくり返します。</p>
            <ul className="detail-list">
              <li><strong>写真データ</strong><span>レッスン中の様子をご家庭へ</span></li>
              <li><strong>成長記録シート</strong><span>できた工程や工夫を振り返る</span></li>
              <li><strong>スターターセット</strong><span>参加時に使う基本の道具</span></li>
            </ul>
            <p className="fine-print">※学童保育・一時預かりではありません。学校へのお迎え、宿題指導、延長保育は行っていません。</p>
          </div>
        </div>
      </section>

      <section className="section gallery-section">
        <div className="shell">
          <SectionTitle eyebrow="小学校1〜6年生">低学年も高学年も、それぞれのペースで。</SectionTitle>
          <div className="photo-gallery photo-gallery-5">
            <figure><img src="/images/shogakusei-g1-lettuce.webp" alt="食材を手に料理に取り組む子ども" /></figure>
            <figure><img src="/images/shogakusei-g2-peek.webp" alt="自分で作った料理を見せる子ども" /></figure>
            <figure><img src="/images/shogakusei-g3-peace.webp" alt="料理を完成させて笑顔を見せる子ども" /></figure>
            <figure><img src="/images/shogakusei-g4-boy.webp" alt="調理に集中する子ども" /></figure>
            <figure><img src="/images/shogakusei-g5-okonomi.webp" alt="完成した料理を見せる子ども" /></figure>
          </div>
        </div>
      </section>

      <section className="section first-visit-section">
        <div className="shell lesson-join-grid">
          <div>
            <SectionTitle eyebrow="初回体験">初めての方は、2,500円で体験できます。</SectionTitle>
            <p>通常4,500円と同じ内容を、空席のあるクラスで体験します。保護者と離れて参加できるか不安な場合は、事前にLINEでご相談ください。</p>
          </div>
          <ButtonRow>
            <PrimaryButton href={SITE.elementaryTrial} external>体験できる日を見る</PrimaryButton>
            <SecondaryButton href={SITE.line} external>クラブについて相談</SecondaryButton>
          </ButtonRow>
        </div>
      </section>

      <FinalCta
        title="「今日の夕飯、私が作ったよ」を、家族の食卓へ。"
        text="自分で作った夕飯を持ち帰り、家族に食べてもらう。そんな一日を、まずは初回体験で。"
        primaryLabel="初回体験の日程を見る"
        primaryHref={SITE.elementaryTrial}
      />
    </main>
  );
}
