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
  title: "おやつレッスン",
  description:
    "年齢制限なしのおやつレッスン。つくる、飾る、包むまで、2人分4,000円で楽しみます。",
  alternates: { canonical: "/lessons/oyatsu" },
};

export default function OyatsuLessonPage() {
  return (
    <main id="main-content" className="sunny-subpage sunny-oyatsu-page">
      <PageHero
        eyebrow="おやつレッスン"
        title={<>市販おやつも、憧れスイーツも、<br />「作ってみたい！」を形に。</>}
        lead={<>ポテトチップスやスティック菓子のような身近なおやつを手作りしてみたり、ケーキや焼き菓子をかわいく飾ったり。<br className="mobile-copy-break" />講師が何度も試作を重ねた自慢のレシピで、家ではなかなかできないことに挑戦するレッスンです。</>}
        image="/images/oyatsu_kids.webp"
        alt="完成したおやつを持つ子どもたち"
        note="年齢制限なし。大人1名・小学生1名・親子2名1組のいずれかで参加できます。"
        chips={["大人1名・小学生1名・親子2名", "基本材料は2人分", "大人の見学無料"]}
        facts={[["参加", "大人1名／小学生1名／親子2名"], ["基本料金", "材料2人分 4,000円"], ["兄弟追加", "調理参加＋2,500円／人"], ["見学・支払い", "大人見学無料／当日現金"]]}
        photoLabel="かわいい！作りたい！食べてみたい！"
        primaryLabel="おやつの日程を見る"
        secondaryLabel="先生にLINEで聞いてみる"
        breadcrumbs={[{ label: "トップ", href: "/" }, { label: "レッスン", href: "/lessons" }, { label: "おやつレッスン" }]}
      />

      <LessonValue
        title={<>「好き」から始めると、<br />試したいことが増えていく。</>}
        lead={<>料理にまだ慣れていなくても、おやつなら手が伸びることがあります。混ぜる・変化を見る・飾る・包むまで、好きな気持ちを学びの入口にします。</>}
        items={[
          { label: "発見", title: "変化を自分で見つける", text: "混ぜる前とあと、焼く前とあと。香りや形の変化を五感で確かめます。" },
          { label: "表現", title: "好きな色と形を選ぶ", text: "見本と同じでなくて大丈夫。自分の『こうしたい』を仕上げに込めます。" },
          { label: "よろこび", title: "持ち帰って、分け合う", text: "自分で包み、誰と食べるかを考える時間まで、おやつづくりの一部です。" },
        ]}
      />

      <CurrentLessonLinks />

      <section className="section">
        <div className="shell intro-grid">
          <SectionTitle eyebrow="レシピの研究・試作">
            かわいくて、ちゃんとおいしい。<br />どちらも、ゆずりません。
          </SectionTitle>
          <div className="intro-copy">
            <p>おやつは、混ぜ方や温度、時間で仕上がりが変わります。「ふくらんだ！」「固まってきた！」。小さな発見も一緒に楽しみます。</p>
            <p>味や作りやすさ、安全、持ち帰りやすさまで、管理栄養士・料理研究家が何度も試作。最後の色や形は、作る人が自由に選べるようにしています。</p>
          </div>
        </div>
      </section>

      <section className="section gallery-section">
        <div className="shell">
          <SectionTitle eyebrow="レッスンのひとこま" lead="季節やメニューが変わっても、自分の手で試して、できたてを味わう時間を大切にしています。最新メニューは予約ページでご確認ください。">つくる途中も、できあがった瞬間も。</SectionTitle>
          <div className="photo-gallery photo-gallery-4 oyatsu-story-gallery">
            <figure><img src="/images/oyatsu-photo-1.webp" alt="おやつにチョコレートを塗る子どもたち" /><figcaption>チョコをぬって、好きな形に</figcaption></figure>
            <figure><img src="/images/oyatsu-photo-2.webp" alt="絞り袋からおやつの生地を絞る子ども" /><figcaption>ぎゅっと力を入れて、生地をしぼる</figcaption></figure>
            <figure><img src="/images/oyatsu-photo-3.webp" alt="いちごを包丁で切り、味見をする子どもたち" /><figcaption>いちごを切って、ちょっと味見</figcaption></figure>
            <figure><img src="/images/oyatsu-photo-4.webp" alt="完成した手作りおやつを見せる子ども" /><figcaption>「できたよ！」を、うれしそうに見せてくれました</figcaption></figure>
          </div>
        </div>
      </section>

      <section className="section first-visit-section">
        <div className="shell lesson-join-grid">
          <div>
            <SectionTitle eyebrow="予約前のご案内">たっぷり2人分を、お持ち帰り。</SectionTitle>
            <p>基本料金4,000円で、大人1名、小学生1名、または親子2名（大人1名＋子ども1名）のいずれかで参加できます。料金には2人分の材料が含まれます。兄弟が一緒に調理する場合は1名につき＋2,500円。調理に参加しない大人の見学は無料です。アレルギー対応や材料追加の可否は、メニューごとにご相談ください。</p>
          </div>
          <ButtonRow>
            <PrimaryButton href={SITE.booking} external>開催メニューを見る</PrimaryButton>
            <SecondaryButton href={SITE.line} external>アレルギーを相談</SecondaryButton>
          </ButtonRow>
        </div>
      </section>

      <FinalCta title={<>その「作ってみたい！」、<br />ここなら、自分でできる。</>} text="大人1名・小学生1名・親子2名1組から参加方法を選べます。見学だけの大人は無料です。まずは今月のメニューをご覧ください。" />
    </main>
  );
}
