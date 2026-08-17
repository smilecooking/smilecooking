# スマイルクッキング公式サイト｜GitHub公開手順

## 最初の1回だけ

1. このZIPを解凍します。
2. 解凍したフォルダの中身を、現在の公式サイト用GitHubリポジトリの一番上へアップロードします。
3. GitHubの `Settings` → `Pages` → `Build and deployment` を開きます。
4. `Source` を `GitHub Actions` にします。
5. `Actions` 画面で公開処理が緑のチェックになるまで待ちます。
6. `Settings` → `Pages` の `Custom domain` が `smilecooking.jp` になっていることを確認します。

## 毎月の更新

1. `app/monthly-data.ts` を開きます。
2. 月、テーマ、メニュー、料金、画像、受付状況を変更します。
3. 新しい月のページが必要な場合だけ `app/lessons/YYYY-MM/page.tsx` を追加します。
4. 変更したファイルをGitHubへアップロードします。公開は自動で始まります。

詳しい役割分担とSEO確認は `CONTENT-MAINTENANCE.md` にまとめています。

## 大切な注意

- ZIPファイルそのものをGitHubへ置いても公開されません。必ず解凍した中身をアップロードしてください。
- `public/images` フォルダを省くと写真とロゴが表示されません。
- `.github/workflows/deploy-pages.yml` を省くと自動公開されません。
- `CNAME` は独自ドメイン `smilecooking.jp` を維持するために必要です。
- 既存ファイルと同じ名前のものは、今回の完成版で上書きしてください。
