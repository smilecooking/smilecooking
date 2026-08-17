import type { Metadata } from "next";
import {
  Eyebrow,
  FinalCta,
  PageHero,
  SectionTitle,
} from "../site";

export const metadata: Metadata = {
  title: "私たちのこだわり",
  description:
    "だしと素材の味、管理栄養士が考えるメニュー、手を出しすぎずに見守る関わり方。スマイルクッキングが大切にしていることをご紹介します。",
  alternates: { canonical: "/kodawari" },
};

const designStandards = [
  {
    title: "濃い味で、隠さない",
    text: "まずは、だしのいい香りや野菜の甘みをひと口。酸っぱい、しょっぱいの違いも、子ども自身の舌で確かめます。",
  },
  {
    title: "その子の「やってみたい」から入れる",
    text: "切る大きさや道具の扱いを小さな手順に分け、同じ料理でも一人ひとりが入りやすいところを見つけます。",
  },
  {
    title: "おうちの食卓へ、つながる料理に",
    text: "特別な材料ばかりに頼らず、『また家でも作りたい』と思えるメニューを。安全に持ち帰れるところまで考えます。",
  },
];

const smileRules = [
  ["自分で決めて、やってみる", "味・形・順番を、自分の言葉で選びます。"],
  ["困ったら、先生に知らせる", "助けを求めることも大切な生活の力です。"],
  ["道具と食べ物を大切にする", "安全と、食材をいただく意識につなげます。"],
  ["みんなが笑顔になれるやり方で", "自分だけでなく、隣の人や家族まで考えます。"],
];

const learningMap = [
  ["知識・技能", "切る・はかる・加熱する・衛生を守る", "道具と食材を安全に扱う"],
  ["思考・判断・表現", "手順を見通す・味を見て調整する", "自分の選択や工夫を言葉にする"],
  ["学びに向かう力", "失敗後にもう一度試す・人に届ける", "役割を引き受け、最後まで片づける"],
];

export default function KodawariPage() {
  return (
    <main id="main-content" className="sunny-subpage sunny-kodawari-page">
      <PageHero
        eyebrow="私たちのこだわり"
        title={<>手を出しすぎず、<br />ひとりにもしない。</>}
        lead={<>おいしく食べられること。子どもが自分の手で作れること。安心して挑戦できること。<br className="mobile-copy-break" />その全部を一つのレッスンにできるよう、毎月のメニューと関わり方を考えています。</>}
        image="/images/oyako-focus-03.webp"
        alt="自分で料理を進める子どもをそばで見守る講師"
        chips={["管理栄養士・料理研究家が中心に試作", "だしと素材の味", "子どもとの近い距離"]}
        facts={[["食", "素材・工程・衛生"], ["関わり", "答えを急がない"], ["安全", "危ないところは大人が守る"], ["学び", "選ぶ・試す・伝える"]]}
        photoLabel="先回りしすぎず、でも放っておかない距離感。"
        primaryLabel="今月のレッスンを見てみる"
        secondaryLabel="先生に子どものことを相談"
        breadcrumbs={[{ label: "トップ", href: "/" }, { label: "私たちのこだわり" }]}
      />

      <nav className="shell sub-page-jump" aria-label="こだわりページ内メニュー">
        <a href="#food-design"><span>01</span>素材とメニュー</a>
        <a href="#support"><span>02</span>子どもへの関わり</a>
        <a href="#learning"><span>03</span>これからの力</a>
        <a href="#teachers"><span>04</span>講師の専門性</a>
        <a href="#research"><span>05</span>参考資料</a>
      </nav>

      <section className="section">
        <div className="shell intro-grid">
          <SectionTitle eyebrow="なぜ、料理なのか">
            料理には、<br className="mobile-only-break" />「自分で決める」場面が
            <br />
            たくさんあります。
          </SectionTitle>
          <div className="intro-copy">
            <p>
              どこから始めよう。もう少し混ぜる？ 焼き色を見て、あと少し待ってみる？ 料理をしていると、小さな「どうしよう」が何度もやってきます。
            </p>
            <p>
              私たちが見たいのは、見本どおりに早くできる姿だけではありません。危ないところは大人が守りながら、子どもが考え、選び、自分の手で進める時間を待ちます。
            </p>
          </div>
        </div>
      </section>

      <section className="section commitments-section" id="food-design">
        <div className="shell">
          <SectionTitle
            eyebrow="素材とメニュー設計"
            lead="高価な材料を使うことだけが、素材へのこだわりではないと考えています。子どもが香りや味の違いに気づけるかを、一つの基準にしています。"
          >
            まずは、だしの香りと
            <br />
            野菜の甘みから。
          </SectionTitle>
          <div className="content-grid-3">
            {designStandards.map((item, index) => (
              <article className="info-card" key={item.title}>
                <span className="card-number">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="wide-note">
            <strong>すべてのメニューを、管理栄養士・料理研究家が中心となって研究・試作しています。</strong><br />
            栄養バランスだけでなく、小さな手で作れる手順、衛生と安全、アレルギー、家でも作りやすいか、持ち帰りやすいかまで確認します。アレルギー対応は内容によって異なるため、事前に一緒に確認します。
          </div>
        </div>
      </section>

      <section className="section" id="support">
        <div className="shell split-section">
          <div className="split-photo photo-offset">
            <img src="/images/oyako-cutting-safe.webp" alt="親子レッスンで包丁に挑戦する子ども" />
          </div>
          <div className="split-copy">
            <Eyebrow>子どもへの関わり方</Eyebrow>
            <h2>手を出しすぎず、<br />ひとりにもしない。</h2>
            <p>
              子どもに任せることは、何もしないことではありません。私たちは手元・火・衛生をしっかり見ながら、必要なときにそっと支えます。迷っていたら、答えを言う前に「どうしたい？」と聞きます。
            </p>
            <p>
              疲れたら、途中で休んで戻ってきても大丈夫。「今は見ていたい」という気持ちも受け止めながら、また手を伸ばしやすい作業を一緒に探します。
            </p>
          </div>
        </div>
      </section>

      <section className="section first-visit-section">
        <div className="shell">
          <SectionTitle
            eyebrow="4つのスマイルール"
            lead="叱るためのルールではありません。子どもたちと先生が、みんなで気持ちよく料理をするためのお約束です。"
          >
            4つのスマイルール。
          </SectionTitle>
          <div className="content-grid-4">
            {smileRules.map(([title, text], index) => (
              <article className="info-card" key={title}>
                <span className="card-number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="learning">
        <div className="shell">
          <SectionTitle
            eyebrow="料理から育つ力"
            lead="難しい能力の名前を並べるのではなく、レッスン中に見える子どもの姿でお伝えします。"
          >
            料理をしながら、
            <br />
            こんな力も育っていく。
          </SectionTitle>
          <div className="price-table-wrap">
            <table className="price-table">
              <thead>
                <tr>
                  <th>学びの観点</th>
                  <th>料理中の行動</th>
                  <th>暮らしへのつながり</th>
                </tr>
              </thead>
              <tbody>
                {learningMap.map(([category, action, life]) => (
                  <tr key={category}>
                    <td><strong>{category}</strong></td>
                    <td>{action}</td>
                    <td>{life}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="wide-note">
            <strong>料理教室に通うだけで、すぐに性格や学力が変わるわけではありません。</strong><br />
            私たちが大切にするのは、その日の中で「自分で選べた」「やり直せた」「助けてと言えた」という小さな一歩です。その積み重ねを、焦らず見守ります。
          </div>
        </div>
      </section>

      <section className="section commitments-section" id="teachers">
        <div className="shell">
          <SectionTitle eyebrow="講師について">子どもの姿を共有し、食の専門性で支えます。</SectionTitle>
          <div className="content-grid-2 teacher-detail-grid">
            <article className="info-card teacher-detail">
              <img className="teacher-erika-photo" src="/images/teacher-erika-final.webp" alt="料理をする子どもの隣で笑顔を見せるえりか先生" />
              <div>
                <span className="card-number">子ども・家族への寄り添い</span>
                <h3>えりか先生</h3>
                <p>ママ講師／子育てコーチング資格保有。<br />「やりたくない」も「自分でやる！」も、まずはそのまま受け止めます。ママの心配にも耳を傾けながら、その子が動き出す瞬間を待ちます。</p>
              </div>
            </article>
            <article className="info-card teacher-detail">
              <img className="teacher-mai-photo" src="/images/teacher-mai-final.webp" alt="まい先生と子どもが笑顔で寄り添う様子" />
              <div>
                <span className="card-number">食・レシピ設計</span>
                <h3>まい先生</h3>
                <p>管理栄養士／料理研究家。<br />給食30万食の調理経験を生かし、「子どもが作れて、家族もおいしい」レシピを試作します。栄養・安全・持ち帰りまで、すべてのメニューを確認します。</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section sources-section" id="research">
        <div className="shell">
          <SectionTitle
            eyebrow="考え方のよりどころ"
            lead="大切なことだからこそ、教室の思いだけで教育効果を大きく言いすぎないよう、公的な教育・食育の考え方も確認しています。"
          >
            できることを、正直に伝えるために。
          </SectionTitle>
          <details className="source-disclosure">
            <summary>参考資料9件を開く</summary>
            <ul className="source-list">
              <li><a href="https://www.city.ota.gunma.jp/uploaded/attachment/32536.pdf" target="_blank" rel="noreferrer">太田市「第三期 子ども・子育て支援事業計画」ニーズ調査</a></li>
              <li><a href="https://company.benesse.co.jp/newsrelease/education/2023/01/20_5911.html" target="_blank" rel="noreferrer">ベネッセ教育総合研究所「第6回 幼児の生活アンケート」</a></li>
              <li><a href="https://www.tokyo-gas.co.jp/Press/20140724-01.html" target="_blank" rel="noreferrer">東京ガス都市生活研究所「親子料理の意識と実態2014」</a></li>
              <li><a href="https://www.gakken.co.jp/ja/news/news20230703101301.html" target="_blank" rel="noreferrer">学研教育総合研究所「家庭学習の実態と保護者の教育観に関する調査2023」</a></li>
              <li><a href="https://corp.atama.plus/news/2727/" target="_blank" rel="noreferrer">atama plus「子どもの将来と教育に関する意識調査」</a></li>
              <li><a href="https://www.mext.go.jp/component/a_menu/education/micro_detail/__icsFiles/afieldfile/2019/03/18/1387017_009.pdf" target="_blank" rel="noreferrer">文部科学省「小学校学習指導要領解説 家庭編」</a></li>
              <li><a href="https://www.mhlw.go.jp/shingi/2007/06/dl/s0604-2k.pdf" target="_blank" rel="noreferrer">厚生労働省「楽しく食べる子どもに〜保育所における食育に関する指針」</a></li>
              <li><a href="https://www.cfa.go.jp/policies/kodomo-kihon" target="_blank" rel="noreferrer">こども家庭庁「こども基本法」</a></li>
              <li><a href="https://www.oecd.org/content/dam/oecd/en/about/projects/edu/education-2040/concept-notes/Student_Agency_for_2030_concept_note.pdf" target="_blank" rel="noreferrer">OECD「Student Agency for 2030」</a></li>
            </ul>
          </details>
        </div>
      </section>

      <FinalCta />
    </main>
  );
}
