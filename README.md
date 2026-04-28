# メシマッチ v0.29

データ書き出し / 読み込みと、PWA化を追加した版です。

## 起動方法

`index.html` をブラウザで開くだけでも動きます。

ただし、PWAのホーム画面追加・Service Workerによるキャッシュは、`file://` では完全には動きません。  
GitHub PagesなどのHTTPS環境にアップロードして確認してください。

## ZIP構成

このZIPは、ZIP直下にファイルを直接配置しています。

```text
meshi_match_v29.zip
├─ index.html
├─ style.css
├─ app.js
├─ README.md
├─ manifest.json
├─ service-worker.js
├─ icon-192.png
└─ icon-512.png
```

## v0.29の追加内容

### データ管理

設定画面に「データ管理」を追加しました。

- データを書き出す
- JSONファイルとして保存
- データを読み込む
- 読み込み前に確認
- 読み込み後に画面を再描画

書き出し対象：

- Like / Nope / Superlike
- 友達
- 友達リクエスト
- 決定履歴
- 訪問状態
- 表示名
- 設定
- お知らせ既読状態

### PWA化

以下を追加しました。

- `manifest.json`
- `service-worker.js`
- `icon-192.png`
- `icon-512.png`
- テーマカラー
- ホーム画面追加用メタタグ
- Service Workerによる基本キャッシュ

## PWA確認方法

GitHub Pagesなどにアップロードしたあと、スマホブラウザで開いてください。

iPhone Safari：

```text
共有ボタン → ホーム画面に追加
```

Android Chrome：

```text
メニュー → ホーム画面に追加
```

## キャッシュ対策

```html
<link rel="stylesheet" href="style.css?v=0.29" />
<script src="app.js?v=0.29"></script>
```

Service Workerのキャッシュ名も `meshi-match-v0.29` に更新しています。

## 確認ポイント

1. 設定に「データ管理」が表示されるか
2. データを書き出せるか
3. JSONを読み込めるか
4. GitHub Pages上でホーム画面追加できるか
5. 再読み込みしても基本ファイルがキャッシュされるか
