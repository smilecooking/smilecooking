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
  title: "親子レッスン",
  description:
    "3歳からの親子料理教室。子どもが主役でつくり、保護者は隣で見守る約90分のレッスンです。",
  alternates: { canonical: "/lessons/oyako" },
};

const flow = [
  ["今日の食材にこんにちは", "香りや色、手触りを親子で確かめながら、今日つくるものを見ていきます。"],
  ["「どうしたい？」を決める", "切り方や形、味つけなど、選べるところは子どもの声を聞きます。"],
  ["親子でゆっくりつくる", "主役は子ども。ママやパパは、必要なときにだけそっと手を添えます。"],
  ["できたてを一緒に喜ぶ", "おいしさはもちろん、がんばったことや工夫したことも一緒に見つけます。"],
];

export default function OyakoLessonPage() {
  return (
    <main id="main-content" className="sunny-subpage sunny-oyako-page">
      <PageHero
        eyebrow="親子レッスン"
        title={<>「できた！」を、<br />隣で見守れる時間。</>}
        lead={<>家ではつい「危ない」「早くして」が先に出てしまう料理の時間。<br className="mobile-copy-break" />スマイルクッキングでは、安全は講師が支えながら、子どもが主役で挑戦します。<br className="mobile-copy-break" />親は少し手を止めて、「考えた」「選んだ」「できた」を受け取れます。</>}
        image="/images/oyako_main.webp"
        alt="親子レッスンで料理を楽しむ子ども"
        note="通常レッスンは3歳〜。体験は毎月第1日曜日、2歳半ごろからLINEで相談できます。"
        chips={["子どもが主役", "途中で休んでもOK", "近い距離で見守り"]}
        facts={[["対象", "3歳〜＋保護者"], ["時間", "約90分"], ["通常", "親子2人1組 4,000円"], ["体験", "第1日曜 1,500円"]]}
        photoLabel="主役は子ども。大人は隣で見守っていて大丈夫。"
        primaryLabel="親子で参加できる日を見る"
        secondaryLabel="先生にLINEで聞いてみる"
        breadcrumbs={[{ label: "トップ", href: "/" }, { label: "レッスン", href: "/lessons" }, { label: "親子レッスン" }]}
      />

      <LessonValue
        title={<>子どもは「自分でできた」を。<br />大人は「この子に任せて大丈夫」を。</>}
        lead={<>子どもは自分で選び、保護者は急がせずに待ってみる。家のキッチンでは難しい二つの経験を、同じ90分の中で重ねます。</>}
        items={[
          { label: "子ども", title: "自分で決められた", text: "切り方や形、盛りつけ。選べる場面では、その子の答えを待ちます。" },
          { label: "保護者", title: "手を出さずに見守れた", text: "安全は講師が支えるから、完成を急がず、わが子の考える姿を見られます。" },
          { label: "親子", title: "また一緒にやりたい", text: "上手さより、工夫や頑張りを言葉にする。家での次の一回につながります。" },
        ]}
      />

      <CurrentLessonLinks />

      <section className="section">
        <div className="shell intro-grid">
          <SectionTitle eyebrow="子どもが主役">
            うまく作るより、<br />「自分でやった」を一緒に喜ぶ。
          </SectionTitle>
          <div className="intro-copy">
            <p>切る、混ぜる、味を見る、盛りつける。できるところは、子どもの手に任せてみます。少しくらい形が違っても、それがその子の一皿です。</p>
            <p>包丁・火・衛生は私たちが見守ります。ママやパパには、「やってあげる」以外のそばにい方も、レッスンの中でそっとお伝えします。</p>
          </div>
        </div>
      </section>

      <section className="section commitments-section">
        <div className="shell">
          <SectionTitle eyebrow="大切にしていること">親子の「楽しい」を守るために。</SectionTitle>
          <div className="content-grid-3">
            <article className="info-card"><span className="card-number">01</span><h3>その子の「やりたい」から</h3><p>触る、ちぎる、混ぜる。みんなを同じ作業にそろえず、その子が手を伸ばしたところから始めます。</p></article>
            <article className="info-card"><span className="card-number">02</span><h3>迷っている時間も待つ</h3><p>すぐに答えを言わず、「どうしたい？」と聞いてみます。考えている静かな時間も、大切にします。</p></article>
            <article className="info-card"><span className="card-number">03</span><h3>危ないところは、私たちが</h3><p>任せきりにはしません。講師が手元と全体を見て、火や包丁を安全に使えるようそばで支えます。</p></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell split-section">
          <div className="split-photo photo-offset"><img src="/images/oyako-cutting-safe.webp" alt="親子レッスンで包丁を使う子ども" /></div>
          <div className="split-copy">
            <SectionTitle eyebrow="約90分の流れ">レッスンの流れ。</SectionTitle>
            <ol className="compact-steps">
              {flow.map(([title, text], index) => (
                <li key={title}><span>0{index + 1}</span><div><strong>{title}</strong><p>{text}</p></div></li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section gallery-section">
        <div className="shell">
          <SectionTitle eyebrow="レッスンの様子">小さな手の「できた」が、いっぱい。</SectionTitle>
          <div className="photo-gallery photo-gallery-3">
            <figure><img src="/images/oyako-focus-01.webp" alt="講師に見守られながら調理する子ども" /><figcaption>手元を見守り、必要なときだけ支える</figcaption></figure>
            <figure><img src="/images/oyako-focus-02.webp" alt="気分転換をしながらレッスンに参加する子ども" /><figcaption>集中が途切れても、その子の様子を見ながら、講師が気分転換を挟んだり参加しやすい作業へ切り替えたりします。</figcaption></figure>
            <figure><img src="/images/oyako_smile.webp" alt="完成した料理を持って笑う子ども" /><figcaption>完成度の高さより、つくりきった実感を</figcaption></figure>
          </div>
        </div>
      </section>

      <section className="section first-visit-section">
        <div className="shell lesson-join-grid">
          <div>
            <SectionTitle eyebrow="毎月第1日曜日の体験">はじめてなら、親子体験からどうぞ。</SectionTitle>
            <p>体験は、保護者1名＋子ども1名の親子2人1組で1,500円です。兄弟追加は＋1,000円／人、追加食材は＋500円。料理が初めて、人見知り、途中で休憩したい場合もご相談ください。</p>
          </div>
          <ButtonRow>
            <PrimaryButton href={SITE.booking} external>次の第1日曜日を見る</PrimaryButton>
            <SecondaryButton href={SITE.line} external>年齢・兄弟参加を相談</SecondaryButton>
          </ButtonRow>
        </div>
      </section>

      <FinalCta title="「できたね」と笑い合う時間を、親子の思い出に。" text="一回だけの参加も大歓迎です。初めての方は、毎月第1日曜日の親子体験から始められます。" />
    </main>
  );
}
