[![](https://badgen.net/badge/github/yuukialpha/0D1117?icon)](https://github.com/yuukialpha)
[![](https://badgen.net/badge/codeberg/mofusky/2185D0)](https://codeberg.org/mofusky)
![](https://badgen.net/badge/paypay/yfpk/FF0E33)

# https://taikoapp.uk/
↑太鼓ウェブ、今すぐプレイしよっ！↑

現在の曲数: <code id="taiko-size">-</code>

以前使ってたツールも配布中！

- [TJADB・一括ダウンロード](https://codeberg.org/mofusky/tjadb-downloader)
- [譜面配布の部屋・一括ダウンロード](https://codeberg.org/mofusky/humenroom-downloader)

ニジイロ全曲も[ここに](https://drive.google.com/drive/folders/19eGJLDkiTt2qsJ2-YMrhvuV6VvxZYcWE?usp=sharing)あるよ、でも管理してないから自己責任でダウンロードしてね。

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
- エッジキャッシュはキャッシュルールで対象に追加してオリジンからCDN-Cache-Controlを返して制御する
- ページルールは使わない
