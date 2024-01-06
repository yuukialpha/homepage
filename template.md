[![](https://badgen.net/badge/github/yuukialpha/0D1117?icon)](https://github.com/yuukialpha)
[![](https://badgen.net/badge/codeberg/mofusky/2185D0)](https://codeberg.org/mofusky)
![](https://badgen.net/badge/paypay/yfpk/FF0E33)

# https://taikoapp.uk/
↑太鼓ウェブ、今すぐプレイしよっ！↑

現在の曲数: <code id="taiko-size">-</code>

※クッキー無効にしたらログインできなくなったのでそのうち直します

## 最近追加された曲はこちら！

- <span id="taiko-last-song-1">-</span>
- <span id="taiko-last-song-2">-</span>
- <span id="taiko-last-song-3">-</span>
- <span id="taiko-last-song-4">-</span>
- <span id="taiko-last-song-5">-</span>
- <span id="taiko-last-song-6">-</span>
- <span id="taiko-last-song-7">-</span>

## 以前使ってたツールも配布中！

- [TJADB・一括ダウンロード](https://codeberg.org/mofusky/tjadb-downloader)
- [譜面配布の部屋・一括ダウンロード](https://codeberg.org/mofusky/humenroom-downloader)

ニジイロ全曲も[ここに](https://drive.google.com/drive/folders/19eGJLDkiTt2qsJ2-YMrhvuV6VvxZYcWE?usp=sharing)あるよ、でも私は管理してないから自己責任でダウンロードしてね。

## 稼働状況を確認！

太鼓ウェブの調子や姉妹サイトは[こちら](https://stats.uptimerobot.com/vvPZrsOyo5/)から確認できるよ、でもUptime RobotはGlitchサポートしてないから[こちら](https://rentry.co/f3c9y)から全部の一覧をゲットしてね。

# ゴリ押しアナリティクスv3、とうとうリリース！
## それってなに？
Cloudflareのダッシュボード見なくても、アクセス数簡単に画像でシェアできるよ！

エンドポイントは `https://gorioshi.yuuk1.tk/<key>/<email>/<zone_id>/[hourly|daily]/<int:scale>` だよ！

キーはアナリティクスにアクセスできるやつ使ってね。

## `yuuk1.tk` の統計情報

過去72時間の1時間ごとのグラフ

![](https://gorioshi.yuuk1.tk/xFksuatVZcO5_r_JpSak7wRxV0r3OMD-Qe1WxjXC/skifree@skiff.com/3ace6ae0587033b37c79e168cf60c234/hourly/72)

過去30日間の1日ごとのグラフ

![](https://gorioshi.yuuk1.tk/xFksuatVZcO5_r_JpSak7wRxV0r3OMD-Qe1WxjXC/skifree@skiff.com/3ace6ae0587033b37c79e168cf60c234/daily/30)

## `taikoapp.uk` の統計情報

過去72時間の1時間ごとのグラフ

![](https://gorioshi.yuuk1.tk/xFksuatVZcO5_r_JpSak7wRxV0r3OMD-Qe1WxjXC/skifree@skiff.com/176677a44c89b3aa8ab0a33f2d7108c3/hourly/72)

過去30日間の1日ごとのグラフ

![](https://gorioshi.yuuk1.tk/xFksuatVZcO5_r_JpSak7wRxV0r3OMD-Qe1WxjXC/skifree@skiff.com/176677a44c89b3aa8ab0a33f2d7108c3/daily/30)

# Cloudflareを使うときの個人的ベストプラクティス

- SSL/TLSは厳密モードにする
- ブラウザキャッシュはオリジンに従うように設定する
- エッジキャッシュは以下のようにする
  - キャッシュルールで対象に追加する
  - オリジンからCDN-Cache-Controlを返して制御する
- ページルールは優先度が高過ぎるのでなるべく使わない
