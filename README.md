# スマイルクッキング公式サイト

群馬県太田市の子ども・親子料理教室「スマイルクッキング」の公式サイト完成版です。

## 公開する方へ

最初に `GITHUB-UPLOAD-GUIDE.md` をお読みください。

- GitHubへは、このフォルダの中身をすべてアップロードします。
- `Settings` → `Pages` → `Source` は `GitHub Actions` を選びます。
- `public/images` と `.github/workflows` を省かないでください。
- 独自ドメインは `smilecooking.jp` に設定済みです。

## 毎月更新する方へ

月替わり情報は原則として `app/monthly-data.ts` の1か所で管理します。ページの役割と更新順は `CONTENT-MAINTENANCE.md` にまとめています。

## 制作環境

- Next.js / React / TypeScript
- Noto Sans JP
- GitHub Pages用の静的出力に対応
- Google Analytics、SEOメタデータ、構造化データ、サイトマップ、robots.txtを設定済み

## 確認用コマンド

```bash
npm ci
npm run build:github-pages
```

完成した公開用ファイルは `out` フォルダへ出力されます。通常はGitHub Actionsが自動で行うため、手元で実行する必要はありません。
