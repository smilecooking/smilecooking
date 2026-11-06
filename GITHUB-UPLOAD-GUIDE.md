# 本版の公開方式

2026年11月6日版は、GitHub Pagesでリポジトリ直下の静的ファイルを公開します。既存の公開ブランチ・ルート設定、独自ドメイン`smilecooking.jp`を維持します。

更新ファイルは既存の同名ファイルを上書きします。`index.html`、各ページの`index.html`、`styles.css`、`script.js`、画像、フォント、転送ページ、サイトマップ、robotsを一緒に反映します。ZIPを置くだけでは更新されません。

`.nojekyll`と`CNAME`、既存の写真URL、転送用ページを削除しないでください。GitHub Pagesの自動公開が成功したことと、公開URLで更新内容が見えることを両方確認します。

旧Next.jsの`npm run build`や`build:github-pages`による再生成は本版の更新手順ではありません。旧実装から再生成すると古い情報に戻ります。

更新前の復元用ブランチ：`backup-before-hp-update-20261106`。復元時はその内容を新しいコミットとして戻し、履歴を強制的に書き換えません。
