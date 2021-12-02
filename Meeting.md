---
marp: true
---

# PWA×Web NFC×SESAMEで家の鍵を開閉するWebアプリを作った話

---

# 概要
NFCカードをかざして家のドアを開閉するWEBアプリを作った

---

# 使用技術

大体この辺り
- React
- Next.js
- Vercel
- PWA
- Web NFC
- SESAME3

---

![bg right:20% w:200 h:100](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/pwa.png)

# PWAとは
- Progressive Web Appsの略
- ネイティブアプリのような機能をWEBで実現できる
- PWA化するにはGoogleが策定している条件を満たす必要がある
- 様々な機能がある
  - プッシュ通知
  - 決済APIとの連携
  - オフラインでの動作
  - スマホのホーム画面に追加

---

# NFCとは

- NFC(Near Field Communications)の略
- SuicaやQUICPayなどのFelicaもその一つ
- WEB NFCはNFCをJavaScriptで読み込む技術
- Chrome89以降で正式サポートされた技術。W3Cに標準化されている
- 現在、Android Chromeのみ対応(2021/09/13)
- 今回買ったNFCカードは[こちら](https://www.amazon.co.jp/dp/B08WRV4NHM/ref=cm_sw_em_r_mt_dp_RTVZMK8YGTQAC460DXSE?_encoding=UTF8&psc=1)

![bg right:20% w:200 h:200](https://m.media-amazon.com/images/I/51A--aRhRzL._AC_SL1000_.jpg)

---

![bg](https://user-images.githubusercontent.com/32666389/133017345-05886fbe-8529-43c9-8c1a-9dc386f79583.png)

---

# Sesameとは
- 鍵の施錠・解錠ができるスマートロックデバイス
- 専用アプリで鍵の管理が可能
- Wifiモジュールと組み合わせることで鍵をリモート管理できる
- NFCや時間による開閉、鍵の共有など割となんでも出来る
- [API](https://doc.candyhouse.co/ja/SesameAPI)を公開している
- SESAME4がもうすぐ発売。オススメです

![bg right:20% w:200 h:200](https://cdn.shopify.com/s/files/1/0016/1870/6495/products/mini_shopfiy_1_2048x2048.png?v=1608122523)

---

# 全体図

![4ae98a50d8448f30423cca4e70788e48](https://user-images.githubusercontent.com/32666389/133000486-616e15db-e3cc-4843-aec1-42db120eb838.png)

---

# デモ

---

# まとめ

- アプリライクなものをWebで作れるのはかなり良い体験になる
- 限定的ではあるが、NFCやBluetoothなど様々な機能が使えて良かった
- ただし、Chrome以外は端末特有の機能へのWebの介入に乗り気じゃないので、実務で使えるかは微妙

---

# 参考文献
- https://w3c.github.io/web-nfc/
- https://github.com/w3c/web-nfc
- https://jp.candyhouse.co/
- https://developer.mozilla.org/en-US/docs/Web/API/NDEFRecord
- https://vercel.com/
- https://www.amazon.co.jp/dp/B08WRV4NHM/ref=cm_sw_em_r_mt_dp_RTVZMK8YGTQAC460DXSE?_encoding=UTF8&psc=1
- https://zenn.dev/key3/articles/6c1c2841d7a8a2
