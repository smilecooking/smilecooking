import type { Metadata } from "next";
import { FinalCta, PageHero, SectionTitle, SITE } from "../site";

export const metadata: Metadata = {
  title: "初めての方・料金・アクセス",
  description: "スマイルクッキングへ初めて参加する方へ。体験・料金・持ち物・当日の流れ・アクセス・キャンセル規定を一つのページにまとめました。",
  alternates: { canonical: "/guide" },
};

const flow = [
  ["10分前を目安に到着", "玄関でお迎えします。教室の場所はGoogleマップ、駐車位置と入口は公式LINEの写真つき案内をご確認ください。"],
  ["受付・身支度", "当日、現金でお支払い後、エプロン・三角巾を着けて手を洗います。"],
  ["料理スタート", "主役は子ども。安全に関わるところは講師が支え、途中で休むこともできます。"],
  ["試食・持ち帰り・解散", "内容に応じて試食または持ち帰り。工夫したことや頑張ったことも一緒に振り返ります。"],
];

export default function GuidePage() {
  return (
    <main id="main-content" className="sunny-subpage guide-page">
      <PageHero
        eyebrow="初めての方・ご利用案内"
        title={<>まずはこの不安から。</>}
        lead={<>うちの子、料理初心者だし…。<br className="mobile-copy-break" />静かにしていられるかな…。<br className="mobile-copy-break" />みんなと同じにできるかな…。<br className="mobile-copy-break" />たくさんの保護者の方が、最初にそう感じます。</>}
        image="/images/teacher_group.webp"
        alt="スマイルクッキングの講師と子どもたち"
        chips={["単発1回から", "入会金なし", "当日・現金払い"]}
        facts={[["場所", "群馬県太田市"], ["対象", "親子・小学生・おやつ"], ["参加", "単発・体験あり"], ["予約", "Webまたは公式LINE"]]}
        photoLabel="料理が初めてでも、その子のペースで。"
        primaryLabel="日程・空席を見る"
        secondaryLabel="LINEで相談する"
        breadcrumbs={[{ label: "トップ", href: "/" }, { label: "初めての方・ご利用案内" }]}
      />

      <nav className="shell sub-page-jump guide-jump" aria-label="ご利用案内のページ内メニュー">
        <a href="#start"><span>01</span>初めての方</a>
        <a href="#price"><span>02</span>料金・体験</a>
        <a href="#access"><span>03</span>持ち物・アクセス</a>
        <a href="#rules"><span>04</span>予約・キャンセル</a>
      </nav>

      <section className="section" id="start">
        <div className="shell">
          <SectionTitle eyebrow="初めての方へ" lead="料理が初めてでも、人見知りでも、途中で休んでも大丈夫。続ける前提ではなく、今のお子さんに合う一回から選べます。">初めてでも、大丈夫です。</SectionTitle>
          <ol className="steps compact-steps">
            {flow.map(([title, text]) => <li key={title}><strong>{title}</strong><span>{text}</span></li>)}
          </ol>
          <p className="guide-inline-link"><a href="#price">体験・料金を確認する →</a></p>
        </div>
      </section>

      <section className="section commitments-section" id="price">
        <div className="shell">
          <SectionTitle eyebrow="料金・体験">料金と体験。</SectionTitle>
          <div className="guide-price-list">
            <article className="guide-price-card">
              <div><h3>親子体験レッスン</h3><strong>1,500円<small>／親子2人1組</small></strong></div>
              <p>初めての場所でも、ママやパパがすぐそばにいる安心から。毎月第1日曜日に開催します。兄弟追加＋1,000円、追加食材＋500円です。</p>
            </article>
            <article className="guide-price-card">
              <div><h3>小学生体験レッスン</h3><strong>2,500円<small>／人</small></strong></div>
              <p>教室や先生との相性を確かめてから、続けるか決められます。空席のある通常クラスに入り、家族2人分の夕食を作って持ち帰ります。</p>
            </article>
            <article className="guide-price-card">
              <div><h3>親子レッスン</h3><strong>4,000円<small>／親子2人1組</small></strong></div>
              <p>3歳から。子どもが主役になり、ママやパパはすぐそばで見守ります。兄弟も調理に参加する場合は＋2,500円／人です。</p>
            </article>
            <article className="guide-price-card">
              <div><h3>小学生レッスン</h3><strong>4,500円<small>／人</small></strong></div>
              <p>小1〜小6。子どもだけで参加し、その日の夕食になる家族2人分の料理を、最初から最後まで作って持ち帰ります。</p>
            </article>
            <article className="guide-price-card">
              <div><h3>おやつレッスン</h3><strong>4,000円<small>／2人分</small></strong></div>
              <p>年齢制限なし。子どもから大人まで、その回に合った参加方法で、2人分のおやつを作って持ち帰ります。</p>
            </article>
            <article className="guide-price-card guide-price-club">
              <div><h3>放課後クッキングクラブ</h3><strong>平日7,000円・土日8,000円<small>／月</small></strong></div>
              <p>小学生体験後、継続を希望するご家庭へ個別にご案内しています。月2回の固定席で、毎月のテーマに取り組みながら成長を長く見守るクラスです。</p>
            </article>
          </div>
          <p className="wide-note"><strong>お支払いは当日、現金のみです。</strong> 入会金・年会費はありません。材料追加は500円〜、希望者の写真データは＋500円です。</p>
          <p className="guide-inline-link"><a href="/lessons/kinenbi">記念日プラン（7,700円〜）を見る →</a></p>
        </div>
      </section>

      <section className="section" id="access">
        <div className="shell split-section guide-access-grid">
          <div className="split-copy">
            <SectionTitle eyebrow="持ち物・アクセス">持ち物とアクセス。</SectionTitle>
            <div className="belongings-list">
              <div><strong>持ち物</strong><span>エプロン・三角巾・手拭きタオル・水筒。持ち帰りがある回は容器と袋。</span></div>
              <div><strong>場所</strong><span>群馬県太田市、太田駅から車で約5分。駐車場があります。</span></div>
              <div><strong>地図</strong><span>Googleマップで教室の位置をご確認いただけます。駐車位置と入口は、予約後に公式LINEで写真つき案内をお送りします。</span></div>
              <div><strong>同行するご家族</strong><span>和室で待機できる場合があります。事前に人数をお知らせください。</span></div>
            </div>
            <div className="button-row">
              <a className="button button-primary access-line-button" href={SITE.map} target="_blank" rel="noreferrer">Googleマップを開く <span aria-hidden="true">→</span></a>
              <a className="button button-secondary" href={SITE.line} target="_blank" rel="noreferrer">LINEで駐車位置を確認 <span aria-hidden="true">→</span></a>
            </div>
          </div>
          <div className="split-photo photo-offset"><img src="/images/exterior.webp" alt="スマイルクッキングの教室外観" /></div>
        </div>
      </section>

      <section className="section first-visit-section" id="rules">
        <div className="shell">
          <SectionTitle eyebrow="予約する前に">予約前の確認。</SectionTitle>
          <div className="faq-list">
            <details open className="cancel-policy"><summary>キャンセル・振替について</summary>
              <div className="cancel-policy-body">
                <p className="cancel-policy-lead">お休みや日程変更は、公式LINEへご連絡ください。</p>
                <dl className="cancel-policy-list">
                  <div><dt>前々日まで</dt><dd><strong>キャンセル無料</strong></dd></div>
                  <div><dt>前日10:00まで</dt><dd><strong>キャンセル料50％</strong><span>通常レッスンは1回だけ振替できます</span></dd></div>
                  <div><dt>前日10:00以降</dt><dd><strong>キャンセル料50％</strong><span>振替はできません</span></dd></div>
                  <div><dt>当日・連絡なし</dt><dd><strong>キャンセル料100％</strong></dd></div>
                </dl>
                <div className="cancel-policy-notes">
                  <h3>振替について</h3>
                  <ul>
                    <li>通常レッスンのみ、同じ種類の空席がある日へ1回振替できます。</li>
                    <li>原則は同じ月です。月末のレッスンは、次の月の10日までにあるレッスンへ振替できます。月が変わると、メニューも変わる場合があります。</li>
                    <li><strong>振替したあとのキャンセル・再振替はできません。お休みの場合も受講料は全額かかります。</strong></li>
                    <li>体験レッスンは振替できません。</li>
                  </ul>
                </div>
                <p className="cancel-policy-unpaid">無断キャンセルやキャンセル料の未払いがあった方は、次回のみ事前払いとなります。</p>
              </div>
            </details>
            <details><summary>アレルギーについて</summary><p>予約時に必ずご記入ください。管理栄養士が確認し、対応の可否をご案内します。内容によっては対応できない場合があります。</p></details>
            <details><summary>きょうだい・付き添いについて</summary><p>参加するきょうだいは追加料金が必要です。参加しないきょうだいや付き添いのご家族は、和室で待機できる場合があります。事前にLINEでご相談ください。</p></details>
            <details><summary>予約サイトの入力について</summary><p>システム上は1名分のみ入力できます。備考欄に、参加者全員の氏名・年齢／学年・アレルギー・追加材料の希望をご記入ください。</p></details>
          </div>
        </div>
      </section>

      <FinalCta title="迷ったまま、予約しなくて大丈夫です。" text="年齢や今のお子さんの様子、きょうだい参加の合計金額など、分からないことはLINEでそのまま聞いてください。" />
    </main>
  );
}
