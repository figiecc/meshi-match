# メシマッチ v0.34

現在地から半径1km以内の飲食店を、OpenStreetMap / Overpass APIから取得できるようにした版です。

## 起動方法

`index.html` をブラウザで開くだけでも動きます。

ただし、現在地取得はブラウザの制約により、GitHub PagesなどのHTTPS環境で確認するのが確実です。

## ZIP構成

このZIPは、ZIP直下にファイルを直接配置しています。

```text
meshi_match_v34.zip
├─ index.html
├─ style.css
├─ app.js
├─ README.md
├─ manifest.json
├─ service-worker.js
├─ icon-192.png
└─ icon-512.png
```

## v0.34の追加内容

- 現在地取得
- 現在地から半径1km以内を検索
- OpenStreetMap / Overpass APIから飲食店を取得
- 取得対象
  - restaurant
  - cafe
  - fast_food
  - bar
  - pub
- 最大30件まで取得
- 取得結果をスワイプカード化
- 取得結果をlocalStorageにキャッシュ
- キャッシュ条件
  - 6時間以内
  - 前回位置から300m以内
- 取得失敗時は内蔵サンプル店舗で動作
- Service Workerのキャッシュ名を `meshi-match-v0.34` に更新
- CSS/JSキャッシュ対策を v0.34 に更新

## コスト方針

v0.34では、有料APIは使っていません。  
OpenStreetMap / Overpass APIを使うため、APIキーも不要です。

ただし、公共Overpass APIに大量アクセスする設計は避けるべきです。  
そのため、以下の制御を入れています。

```text
・半径1km固定
・最大30件
・6時間キャッシュ
・300m以内なら再取得しない
・ボタン操作でのみ取得
```

## 注意

Overpass APIは店舗情報の網羅性・営業時間・評価・写真がGoogle Placesほど強くありません。  
まずは無料で「周辺から自動取得する体験」を作るための実装です。

## キャッシュ対策

```html
<link rel="stylesheet" href="style.css?v=0.34" />
<script src="app.js?v=0.34"></script>
```

Service Workerのキャッシュ名も `meshi-match-v0.34` に更新しています。

## 確認ポイント

1. スワイプ画面に「周辺取得」ボタンがあるか
2. 位置情報を許可できるか
3. 半径1km以内の店舗が取得されるか
4. 取得した店舗がスワイプに出るか
5. 取得失敗時もサンプル店舗で動くか
6. 6時間以内の再取得でキャッシュが使われるか
