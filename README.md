# メシマッチ v0.30

スワイプ操作と、未判定完了後の戻り動作を修正した版です。

## 起動方法

`index.html` をブラウザで開くだけでも動きます。

PWAとしてのホーム画面追加・Service Workerによるキャッシュは、GitHub PagesなどのHTTPS環境で確認してください。

## ZIP構成

このZIPは、ZIP直下にファイルを直接配置しています。

```text
meshi_match_v30.zip
├─ index.html
├─ style.css
├─ app.js
├─ README.md
├─ manifest.json
├─ service-worker.js
├─ icon-192.png
└─ icon-512.png
```

## v0.30の修正内容

- 未判定のお店を見終わったあと、「スワイプへ戻る」を押すと全店舗が再表示される問題を修正
- 未判定が0件の場合は、再び完了画面を表示
- 気分フィルター変更時も、未判定がなければ完了画面を表示
- スマホの左右スワイプ操作を安定化
- PCのマウスドラッグにも対応
- Pointer Eventsに加えてTouch Eventsのフォールバックを追加
- CSS/JSキャッシュ対策を v0.30 に更新
- Service Workerのキャッシュ名を v0.30 に更新

## キャッシュ対策

```html
<link rel="stylesheet" href="style.css?v=0.30" />
<script src="app.js?v=0.30"></script>
```

Service Workerのキャッシュ名も `meshi-match-v0.30` に更新しています。

## 確認ポイント

1. スマホでカードを左右にスワイプできるか
2. PCでカードをドラッグできるか
3. 未判定を全部見終わった後、スワイプへ戻っても最初のカードに戻らないか
4. フィルター変更時、未判定がなければ完了画面になるか
