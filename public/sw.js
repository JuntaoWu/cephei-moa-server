/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "cert.pem",
    "revision": "12d569806c04069d2d7ef7baa8d72fea"
  },
  {
    "url": "images/icons-192.png",
    "revision": "c14c655f8f406ecef2ab61713cd9b2fe"
  },
  {
    "url": "images/icons-512.png",
    "revision": "98ed5ce171929aab0653a755f13ea3c1"
  },
  {
    "url": "index.html",
    "revision": "97558533668bd78bacc26cefbe6bcd68"
  },
  {
    "url": "js/antiques-play.min_f15aa6bc.js",
    "revision": "8f3d930c36e692d9251843266cfb0422"
  },
  {
    "url": "js/assetsmanager.min_f2e50bd1.js",
    "revision": "32c46b4358677ba7de8fba699f0ad532"
  },
  {
    "url": "js/default.thm_850dd9d2.js",
    "revision": "d3abc26403b76c94f840fe6687a84e6b"
  },
  {
    "url": "js/dragonBones.min_6252b9c4.js",
    "revision": "8e2f39e62dbea0106e177ec0748aaca7"
  },
  {
    "url": "js/egret.min_1f88eb98.js",
    "revision": "cb5876923e130a8ecdc1afc5690f8eb3"
  },
  {
    "url": "js/egret.web.min_2dd0bd72.js",
    "revision": "04d8bab21eb74a90557a0971b23efb7d"
  },
  {
    "url": "js/eui.min_38a8c284.js",
    "revision": "33a02bb2c8acd05038db64a468e1c2cd"
  },
  {
    "url": "js/experimental.min_31954293.js",
    "revision": "1aba35369d25a01002413cadc9cbfe70"
  },
  {
    "url": "js/game.min_45aa06f6.js",
    "revision": "9b128bc335b0ced149a2cc7724688ec8"
  },
  {
    "url": "js/lodash.min_fca082dd.js",
    "revision": "01cab91737db40659a75ab627660da58"
  },
  {
    "url": "js/main.min_7b74a256.js",
    "revision": "fb0a4f092c46f0df1d6dca70d8ba9b84"
  },
  {
    "url": "js/photon.min_face9e9c.js",
    "revision": "171fee5fc6e8d881aed41268152e7e4c"
  },
  {
    "url": "js/promise.min_83a6a5d.js",
    "revision": "1db72e0812aeb36ffec5285a2e14959f"
  },
  {
    "url": "js/puremvc.min_15c0395c.js",
    "revision": "d4b787e02731d8f1e018dbdd976ba053"
  },
  {
    "url": "js/socket.min_8b4cb752.js",
    "revision": "43649a162ccb3e1376835c9db9c147cf"
  },
  {
    "url": "js/tween.min_6c5a88f9.js",
    "revision": "20f8a48b4726c837db3d3cb6dfeaf8b1"
  },
  {
    "url": "key.pem",
    "revision": "67c0e2a5b583f067cbd0cd51c1bbfa46"
  },
  {
    "url": "manifest.json",
    "revision": "b3ea91522c7d55345a31c673222961cc"
  },
  {
    "url": "manifest.pwa.json",
    "revision": "c2d054146353c61cb96947fc28c2e4dc"
  },
  {
    "url": "resource/ap.res.json",
    "revision": "5badf21d55de37ef795673224dd9e035"
  },
  {
    "url": "resource/assets/ani/jiemi_ske.json",
    "revision": "4440ef931e72c99107a5e7d5c94f402c"
  },
  {
    "url": "resource/assets/ani/jiemi_tex.json",
    "revision": "0536a20363c8fc7934e1566db212999f"
  },
  {
    "url": "resource/assets/ani/jiemi_tex.png",
    "revision": "b5cc222dc37d990371ac977d2040266a"
  },
  {
    "url": "resource/assets/background/ap-loading-background.jpg",
    "revision": "d42f2208d6ee291f1f72f40a2b8e3957"
  },
  {
    "url": "resource/assets/background/background.jpg",
    "revision": "a6c8723d847e1c150e02a13fecf932da"
  },
  {
    "url": "resource/assets/background/club_box.jpg",
    "revision": "096738fc1d01f41adad36de88f4236ec"
  },
  {
    "url": "resource/assets/background/loading-background.jpg",
    "revision": "689712c077ceb76663929cef3337a9ab"
  },
  {
    "url": "resource/assets/background/mini-game-loading-background.jpg",
    "revision": "d268b194decd9214fb281c7857053269"
  },
  {
    "url": "resource/assets/background/number-keyboard-bg.jpg",
    "revision": "bb8f80ddd5c001bc042810f45645a061"
  },
  {
    "url": "resource/assets/background/small-dialog-background.jpg",
    "revision": "e20efeeaccde6be8151240248d7ac111"
  },
  {
    "url": "resource/assets/background/splash.jpg",
    "revision": "deb4e32c13ccd224c43010f66668feee"
  },
  {
    "url": "resource/assets/background/start-background.jpg",
    "revision": "a6a4a8de0972a11642fcaf1e047bbf87"
  },
  {
    "url": "resource/assets/Button/btn-anonymouslogin.png",
    "revision": "988eec8f2d4c58ae4faf50d361554e97"
  },
  {
    "url": "resource/assets/Button/btn-wxlogin.png",
    "revision": "3be421879fad47657dd8f1160b89860f"
  },
  {
    "url": "resource/assets/Button/buttons.json",
    "revision": "180a4de4efe79863ce9f30f7ba351cdb"
  },
  {
    "url": "resource/assets/Button/buttons.png",
    "revision": "aa403fab5a20db416eda0c538be2b972"
  },
  {
    "url": "resource/assets/club/club_results.png",
    "revision": "2218188b45e2f062ab2ef5186fe48005"
  },
  {
    "url": "resource/assets/club/club-icon.json",
    "revision": "ef0e70484865f1616f413ad3e3529d7b"
  },
  {
    "url": "resource/assets/club/club-icon.png",
    "revision": "56b45de0ad6766886bf77c7a86476d93"
  },
  {
    "url": "resource/assets/club/club-icon2.json",
    "revision": "a4e4645873311ca1a0136655013d6eae"
  },
  {
    "url": "resource/assets/club/club-icon2.png",
    "revision": "927ecd85c3e14dd9e5e9856288989722"
  },
  {
    "url": "resource/assets/default/default.json",
    "revision": "530a24de99dd3acaa7b5e087aca9dd32"
  },
  {
    "url": "resource/assets/default/default.png",
    "revision": "4712e6a272f426ffa86caa97797ab27a"
  },
  {
    "url": "resource/assets/dragonBones/fangzhen_ske.json",
    "revision": "9b283f03d48fcc54182bfdcea337d281"
  },
  {
    "url": "resource/assets/dragonBones/fangzhen_tex.json",
    "revision": "06fdcdad58ca45ad142980de9f8a3d82"
  },
  {
    "url": "resource/assets/dragonBones/fangzhen_tex.png",
    "revision": "630ca691d5cd6c5ca800078790e6f736"
  },
  {
    "url": "resource/assets/dragonBones/skills_ske.json",
    "revision": "0b572518b145d250705311b12c8072d5"
  },
  {
    "url": "resource/assets/dragonBones/skills_tex.json",
    "revision": "d9b093512afa8d2053738daf39fe2500"
  },
  {
    "url": "resource/assets/dragonBones/skills_tex.png",
    "revision": "ffd8a8276eb20d92ac860655b73a5342"
  },
  {
    "url": "resource/assets/game/antiques.json",
    "revision": "e2c602d75ef201b86304482f420d54af"
  },
  {
    "url": "resource/assets/game/antiques.png",
    "revision": "67c32693d56a7261e1c6c6e29a80adf3"
  },
  {
    "url": "resource/assets/game/bar-bg.png",
    "revision": "4a1fe4d0ff9e0416a468ca1091064c15"
  },
  {
    "url": "resource/assets/game/bar-icon.json",
    "revision": "ccb0ae5c8382126e9dce66cc0a6c3914"
  },
  {
    "url": "resource/assets/game/bar-icon.png",
    "revision": "48342dc6f1154b0045af2a510ff4211f"
  },
  {
    "url": "resource/assets/game/game-bg.png",
    "revision": "c8de55661d4c84d13fbb2e92b5ebbb8e"
  },
  {
    "url": "resource/assets/game/game-botton.json",
    "revision": "eb2cd6a9cb5bd90d432060794527c165"
  },
  {
    "url": "resource/assets/game/game-botton.png",
    "revision": "e48c549eb1b644813b8f7973cdc5769d"
  },
  {
    "url": "resource/assets/game/game-box-border.png",
    "revision": "1c2b9a478d12f6e639a5acfcd86b17c0"
  },
  {
    "url": "resource/assets/game/game-btn.json",
    "revision": "4f075e8a93d843690e338ddfa4e87597"
  },
  {
    "url": "resource/assets/game/game-btn.png",
    "revision": "d043158aacc90bbe93c73e9e2ecc35e0"
  },
  {
    "url": "resource/assets/game/game-icon.json",
    "revision": "436f57c04fa6a2ae26c62031063c2a84"
  },
  {
    "url": "resource/assets/game/game-icon.png",
    "revision": "23c99e12e910a9d158cdd31b7361d403"
  },
  {
    "url": "resource/assets/game/head-bg.png",
    "revision": "44b81535634465e16e8ce2655616a4a3"
  },
  {
    "url": "resource/assets/game/heart.png",
    "revision": "dae0eac092da4269a8d5f5e3bf2b92dd"
  },
  {
    "url": "resource/assets/game/heiban.png",
    "revision": "56776d3c9dfba9b547ed8c71c342c39d"
  },
  {
    "url": "resource/assets/game/hintCardNumber.png",
    "revision": "914e999987344f524e9170e52b3ad52b"
  },
  {
    "url": "resource/assets/game/input-bg.png",
    "revision": "b43cd8562fae8906e3d21972acc2c94a"
  },
  {
    "url": "resource/assets/game/input-item.png",
    "revision": "ed4997c85fe9cea19d98ac30030aa8b2"
  },
  {
    "url": "resource/assets/game/no_btnmanage.png",
    "revision": "6ff54bf279effc6bfa5fbc860f722d47"
  },
  {
    "url": "resource/assets/game/no.png",
    "revision": "2d3a4c5d150f53ea032a355d7d53a01b"
  },
  {
    "url": "resource/assets/game/number.png",
    "revision": "349cb10e4e7e04c0d13a7a79dfa59483"
  },
  {
    "url": "resource/assets/game/option-bg.png",
    "revision": "2dba9c7d0c2753ac224200efc6e273a5"
  },
  {
    "url": "resource/assets/game/role.json",
    "revision": "cd70d8018506217f0131cb5e37c6a49a"
  },
  {
    "url": "resource/assets/game/role.png",
    "revision": "cc8fb3832774026fd37ef15820449649"
  },
  {
    "url": "resource/assets/game/tili.png",
    "revision": "d18ff5c5cb01ed1eaf29293ab80a9623"
  },
  {
    "url": "resource/assets/game/tips-ellipse.png",
    "revision": "fc27623b3bf6a82c27bfbcbbcc093250"
  },
  {
    "url": "resource/assets/game/wait-status.json",
    "revision": "6e7c124508b4159046b8f63a551aa233"
  },
  {
    "url": "resource/assets/game/wait-status.png",
    "revision": "f5531017a90179cb3d59f759d2abf326"
  },
  {
    "url": "resource/assets/game/yes.png",
    "revision": "ec1489f61c875d9e52019cef4a3c1f95"
  },
  {
    "url": "resource/assets/guide/guide.json",
    "revision": "9482f953d2d1d3b379c69b26338f1843"
  },
  {
    "url": "resource/assets/guide/guide.png",
    "revision": "fdd4974946871b98695890e9c24a682c"
  },
  {
    "url": "resource/assets/guide/manual21.png",
    "revision": "20d23d42f0053dfbc4e1f8f7ec0aa2cc"
  },
  {
    "url": "resource/assets/guide/manual22.png",
    "revision": "f481c63591b667c56a7d6139f117ad2c"
  },
  {
    "url": "resource/assets/guide/manual23.png",
    "revision": "1017b0e483f150471b547aa83b19af20"
  },
  {
    "url": "resource/assets/guide/manual31.png",
    "revision": "5e549bda0d03619495394d965f8f9442"
  },
  {
    "url": "resource/assets/guide/manual32.png",
    "revision": "bdc30b1af211097d85f63938fda8b0e5"
  },
  {
    "url": "resource/assets/guide/manual33.png",
    "revision": "85184c3dc781c6fb9823e3742eeab34d"
  },
  {
    "url": "resource/assets/guide/manual41.png",
    "revision": "0c81b0b30bfd631463989bdfe31f4af0"
  },
  {
    "url": "resource/assets/guide/video.json",
    "revision": "78440ae4c6ea755eb08b42a9cb5d48c0"
  },
  {
    "url": "resource/assets/guide/video.png",
    "revision": "658ecf85804af99346fbbbb88c987f0a"
  },
  {
    "url": "resource/assets/ItemRenderer/rank/rank-icon.json",
    "revision": "2a505f5d09e616fafb3101a00e5a7f91"
  },
  {
    "url": "resource/assets/ItemRenderer/rank/rank-icon.png",
    "revision": "7a255e7352c71daa758290aa08877abc"
  },
  {
    "url": "resource/assets/loading/progress-bg.png",
    "revision": "73e740df3c719c94f7d01880122ff1b8"
  },
  {
    "url": "resource/assets/loading/progress.png",
    "revision": "db3c2ee2cf4f1ef094a6c6accb9c530f"
  },
  {
    "url": "resource/assets/M14/1.png",
    "revision": "fb0501872003af683d0b808b292bd375"
  },
  {
    "url": "resource/assets/M14/2.png",
    "revision": "dd8091b1349f82ed6a34d8cd0cd92778"
  },
  {
    "url": "resource/assets/M14/3.png",
    "revision": "b4db79d654fbe6135699d748cd044b88"
  },
  {
    "url": "resource/assets/M14/4.png",
    "revision": "c9f6cc82277778e13d5d139975166797"
  },
  {
    "url": "resource/assets/M14/5.png",
    "revision": "d28e88f554283865bd88fb3c4df27c1f"
  },
  {
    "url": "resource/assets/M14/6.png",
    "revision": "490d803242d706a94b72c987bf2ced60"
  },
  {
    "url": "resource/assets/M14/7.png",
    "revision": "adf92b88e617772d7a4268e22a8c4dc4"
  },
  {
    "url": "resource/assets/M14/8.png",
    "revision": "d1b0907832239ac7b25cf5d7a1d04bd1"
  },
  {
    "url": "resource/assets/M14/M14_bg.png",
    "revision": "30fe3f18152cddb390c2fc66191a73af"
  },
  {
    "url": "resource/assets/M14/m14.png",
    "revision": "f722987f2b917e97a0f05d215d278e44"
  },
  {
    "url": "resource/assets/M17/a.png",
    "revision": "d29b10d8403077f89743fda3b1fb0f0f"
  },
  {
    "url": "resource/assets/M17/b.png",
    "revision": "23bf8d0916a5931168ac4538506343c4"
  },
  {
    "url": "resource/assets/M17/c.png",
    "revision": "030b9e40cd1021ea6604b0dbdc8e7022"
  },
  {
    "url": "resource/assets/M17/d.png",
    "revision": "235a92c2f2cfbc39245fea170529e3cd"
  },
  {
    "url": "resource/assets/M17/M17_bg.png",
    "revision": "213fd17d0319a942b3b6de335539d20d"
  },
  {
    "url": "resource/assets/M17/nono.png",
    "revision": "519b5c36dfce4d7fbc7118d0dc670d44"
  },
  {
    "url": "resource/assets/M17/yy.png",
    "revision": "6548258231b0877cf757c1188ef48927"
  },
  {
    "url": "resource/assets/M2/bai.png",
    "revision": "ca3474c4514570488103fe63fc1ed5c6"
  },
  {
    "url": "resource/assets/M2/hei.png",
    "revision": "b4d4d7de6082412174565f52458b84ea"
  },
  {
    "url": "resource/assets/M2/hong.png",
    "revision": "13b33c9109b3c03b7a319776821be530"
  },
  {
    "url": "resource/assets/M2/huang.png",
    "revision": "f01d4dc3a5df1eb4eece377094fe8767"
  },
  {
    "url": "resource/assets/M2/kuang.png",
    "revision": "5a44dc7ba4d95c0e53e75ac17e701b89"
  },
  {
    "url": "resource/assets/M2/lan.png",
    "revision": "a1ab1c401418078a09dda9a2e8048076"
  },
  {
    "url": "resource/assets/M2/M2bg.png",
    "revision": "5adae4f4733b7de8d8369283546ebac1"
  },
  {
    "url": "resource/assets/M24/M24_bg.png",
    "revision": "6e2fd79692ce9ae1bafbfb84f68fc21d"
  },
  {
    "url": "resource/assets/M24/word_bai.png",
    "revision": "8b099eadf175387a1222b069efb53b00"
  },
  {
    "url": "resource/assets/M24/word_he.png",
    "revision": "1a0ec7b82c821211351d8e5f39aeb587"
  },
  {
    "url": "resource/assets/M24/word_hei.png",
    "revision": "11ad2e93ca9950cac1e6fd00b11a541f"
  },
  {
    "url": "resource/assets/M24/word_jia.png",
    "revision": "ff3b25100a72cf7f7f8904861d14aec1"
  },
  {
    "url": "resource/assets/M24/word_jiao.png",
    "revision": "1cec377e23b75829957f2d83e2be2374"
  },
  {
    "url": "resource/assets/M24/word_ti.png",
    "revision": "62202b71cd46745175cb67453ba02a2f"
  },
  {
    "url": "resource/assets/M24/word_yi.png",
    "revision": "8fcf877bf03100c7102f4d410a575b9b"
  },
  {
    "url": "resource/assets/M24/word_zhu.png",
    "revision": "9edb7b942fdb736fd56b708b57eb179d"
  },
  {
    "url": "resource/assets/M3/bg1.png",
    "revision": "ada92a7dd37da67cfdaff6a811c364d7"
  },
  {
    "url": "resource/assets/M3/bg2.png",
    "revision": "587cfaeab08232fbbcc877dbad104076"
  },
  {
    "url": "resource/assets/M3/key1.png",
    "revision": "3db577734a289690bb13789022268843"
  },
  {
    "url": "resource/assets/M3/key2.png",
    "revision": "6a40ca4cd3e6f94facb3d37ca9ad909b"
  },
  {
    "url": "resource/assets/M3/shang.png",
    "revision": "e219e28908612b5a999cbb5af4d52e42"
  },
  {
    "url": "resource/assets/M3/trunoff.png",
    "revision": "f33533eadcad43298d0fb373dc01501f"
  },
  {
    "url": "resource/assets/M3/turnon.png",
    "revision": "fee1a0f28e9221f780d6514fac3d18ef"
  },
  {
    "url": "resource/assets/M3/word_guo.png",
    "revision": "477de361d09d3d5e24d452d8aeab93c5"
  },
  {
    "url": "resource/assets/M3/word_ren.png",
    "revision": "a69c73e345b0bd35f85b272c98b5870a"
  },
  {
    "url": "resource/assets/M3/word_shi.png",
    "revision": "d44aa8a00cb4421b110452b615f7c7b3"
  },
  {
    "url": "resource/assets/M3/word_xin.png",
    "revision": "938f5f609c496c4f0f10f1e4f3315692"
  },
  {
    "url": "resource/assets/M3/xia.png",
    "revision": "7693d5cbd1b8e34fb021afd36d5f166e"
  },
  {
    "url": "resource/assets/M5/M5_1.png",
    "revision": "46697961e9c90d7ccb5e0100bbfc032c"
  },
  {
    "url": "resource/assets/M5/M5_2.png",
    "revision": "feba6dd6b55c263fbd33834dcac32fc8"
  },
  {
    "url": "resource/assets/M5/M5_3.png",
    "revision": "bfc53e94155e4127fafb4170d17b91f6"
  },
  {
    "url": "resource/assets/M5/M5_4.png",
    "revision": "99ea5503dcc6f83fa65928ebf9d8d65a"
  },
  {
    "url": "resource/assets/M5/M5_5.png",
    "revision": "c2698c61fb10b9367b41667e37f59cff"
  },
  {
    "url": "resource/assets/M5/M5_6.png",
    "revision": "c119eceaae9d1d322e56898fe7f50eda"
  },
  {
    "url": "resource/assets/M5/M5_7.png",
    "revision": "fe86b1375406024e304364d1f8e4b402"
  },
  {
    "url": "resource/assets/M5/M5_8.png",
    "revision": "a5b12071e5aed89cb794939d65f1346a"
  },
  {
    "url": "resource/assets/M5/M5_9.png",
    "revision": "5aea63b28f8eab89507de2faf38b67d2"
  },
  {
    "url": "resource/assets/M5/M5_bg.png",
    "revision": "9df015f8ca82337cd791b638553e537b"
  },
  {
    "url": "resource/assets/M6/bg.png",
    "revision": "260e66b17bfa22d06e478ad8033f37a8"
  },
  {
    "url": "resource/assets/M6/ha1.png",
    "revision": "2a0b7b921d0fa2d3dc683a07440d9f24"
  },
  {
    "url": "resource/assets/M6/ha2.png",
    "revision": "99d6d68d797188ad5f4f6eebb5f6de46"
  },
  {
    "url": "resource/assets/M6/ha3.png",
    "revision": "601755492accb9b3a0bab92433f59b2a"
  },
  {
    "url": "resource/assets/M6/ha4.png",
    "revision": "b79aeb1171e19c9653ac893adea04b80"
  },
  {
    "url": "resource/assets/M6/ha5.png",
    "revision": "8746d1fc3e5acb680a94d013d4c68f8d"
  },
  {
    "url": "resource/assets/M9/bg.png",
    "revision": "fc77094efaef5b9af70122b1cb8c9d30"
  },
  {
    "url": "resource/assets/M9/ren.png",
    "revision": "44783eef8b2d70e84f281898d19ca9dc"
  },
  {
    "url": "resource/assets/manage/btn-plot.png",
    "revision": "6457bd11ba5775f2f2cc2a1cc4d00d95"
  },
  {
    "url": "resource/assets/manage/dialog-box.png",
    "revision": "39bbbd6fbc8e707bdac85338e223f8d4"
  },
  {
    "url": "resource/assets/manage/ellipse.png",
    "revision": "85cae3aa861ee8d017a3ddddb8eae6d7"
  },
  {
    "url": "resource/assets/manage/guide-img1.png",
    "revision": "8a3424d0f5a6f7665b94bcea8ecde335"
  },
  {
    "url": "resource/assets/manage/guide-img2.png",
    "revision": "7a5efec82bc80ef59a25fe70112d26f9"
  },
  {
    "url": "resource/assets/manage/guide-img3.png",
    "revision": "fdd343fbae567216783383f5426d9985"
  },
  {
    "url": "resource/assets/manage/guide-img4.png",
    "revision": "b561f0d57324e5e7d365d50a760244c1"
  },
  {
    "url": "resource/assets/manage/icon-clock.png",
    "revision": "a1179e4ed57dbc4ff66d3701b2fc903b"
  },
  {
    "url": "resource/assets/manage/icon-group.png",
    "revision": "ef2ea328a53e328e992f7aabbe659603"
  },
  {
    "url": "resource/assets/manage/icon-money.png",
    "revision": "fb26242fa71615d617e0380e39e84fbb"
  },
  {
    "url": "resource/assets/manage/manage-antiqe.json",
    "revision": "8616705e0f168a87ddc3d47edc2dd7a4"
  },
  {
    "url": "resource/assets/manage/manage-antiqe.png",
    "revision": "f24328e9df748b30cb6e1bfa8164cb4b"
  },
  {
    "url": "resource/assets/manage/manage-card1.png",
    "revision": "c49b2b8a984cd9c5980585154050cff1"
  },
  {
    "url": "resource/assets/manage/manage-card2.png",
    "revision": "e978da409b0eb44a165e7afdc0a716ef"
  },
  {
    "url": "resource/assets/manage/manage-errer.png",
    "revision": "fa549328ae0a9afb1a93115ded9a0ea4"
  },
  {
    "url": "resource/assets/manage/manage-right.png",
    "revision": "b23e77961a109665bf7f65d190403826"
  },
  {
    "url": "resource/assets/manage/money.png",
    "revision": "fbb4fb4ba595fa32f409017cf9a41b92"
  },
  {
    "url": "resource/assets/manage/mu_gao.png",
    "revision": "1d8f32c80f574b5e7dedea4f846da11a"
  },
  {
    "url": "resource/assets/manage/mu.png",
    "revision": "0bfe5ef80b24c74a21631da888337a5b"
  },
  {
    "url": "resource/assets/manage/qing_gao.png",
    "revision": "d0ee2a81c8fe2c88e8e1fbb93a746c15"
  },
  {
    "url": "resource/assets/manage/qing.png",
    "revision": "dc1217c696152013ed8e10381830519b"
  },
  {
    "url": "resource/assets/manage/shu_gao.png",
    "revision": "cb02fc993272e4a95fba4c0a7a51fe23"
  },
  {
    "url": "resource/assets/manage/shu.png",
    "revision": "a4f041ada04f7ca7b685a38f1372fff2"
  },
  {
    "url": "resource/assets/manage/skip-btn.png",
    "revision": "1e0599ab0d803d5d5e95cff1fd129e5d"
  },
  {
    "url": "resource/assets/manage/tutorial.png",
    "revision": "5a2bcccddc4fa021518be2447210b69b"
  },
  {
    "url": "resource/assets/manage/yu_gao.png",
    "revision": "37833e757ffb87e82ee9178ecae5948f"
  },
  {
    "url": "resource/assets/manage/yu.png",
    "revision": "e5018a58ee7d18a9b80d2c8a48b0c4d5"
  },
  {
    "url": "resource/assets/myInfo/meihua.png",
    "revision": "d0cc8454d7159b47c51ce93ee2cd594c"
  },
  {
    "url": "resource/assets/myInfo/self-info.json",
    "revision": "f1097eecdbb680f29ab6e23b72a221a0"
  },
  {
    "url": "resource/assets/myInfo/self-info.png",
    "revision": "a8f3bc34ed571bdc24c0d0e97889eacb"
  },
  {
    "url": "resource/assets/numberKeyboard/number-keyboard-icon.json",
    "revision": "03150baf62ec9059f38a42f098f4f9a5"
  },
  {
    "url": "resource/assets/numberKeyboard/number-keyboard-icon.png",
    "revision": "ac63e5f49aaaf4b37d9127be1b7423ac"
  },
  {
    "url": "resource/assets/numberKeyboard/numberKeyboard.png",
    "revision": "d88e2a1c4d8f54290c4c7e7e1deb7491"
  },
  {
    "url": "resource/assets/Panel/about.png",
    "revision": "2d19ef9f397c0bda02649c75f2db7420"
  },
  {
    "url": "resource/assets/Panel/btn-cancel.png",
    "revision": "efa7c53342ede179d5c77ca0b187f20b"
  },
  {
    "url": "resource/assets/Panel/btn-confirm.png",
    "revision": "23ff0ea822c4fd7da419381f1a5c37e6"
  },
  {
    "url": "resource/assets/Panel/not-get.png",
    "revision": "256665242f08b4fcccf357d2ce55418d"
  },
  {
    "url": "resource/assets/Panel/popup-bg.png",
    "revision": "e89524c692a58f268fc83858cadea3f7"
  },
  {
    "url": "resource/assets/Panel/scene-btn.json",
    "revision": "87eb888c6ad499f25946253883fa0bba"
  },
  {
    "url": "resource/assets/Panel/scene-btn.png",
    "revision": "c0a82ce8f0459a4420df1103972e8fcc"
  },
  {
    "url": "resource/assets/Panel/scene-text.json",
    "revision": "c36755375614d560a3e934d6f3361a26"
  },
  {
    "url": "resource/assets/Panel/scene-text.png",
    "revision": "bab74356000bfa69c41653c93c25d665"
  },
  {
    "url": "resource/assets/Panel/setting2.png",
    "revision": "dc77d4a7945e88613c7fe5dd2e59e856"
  },
  {
    "url": "resource/assets/ProgressBar/progress-bg.png",
    "revision": "73e740df3c719c94f7d01880122ff1b8"
  },
  {
    "url": "resource/assets/ProgressBar/progress.png",
    "revision": "db3c2ee2cf4f1ef094a6c6accb9c530f"
  },
  {
    "url": "resource/assets/questions/answer_right.png",
    "revision": "2244b42630186fd1475fd8c714f352af"
  },
  {
    "url": "resource/assets/questions/m01.png",
    "revision": "ca9025834e8f637160a152f8a6ef76e7"
  },
  {
    "url": "resource/assets/questions/m04.png",
    "revision": "d2d97791040acffb59205ae5694b3ab7"
  },
  {
    "url": "resource/assets/questions/M07.png",
    "revision": "fe076b27a4768722a3a6fab0dc59d533"
  },
  {
    "url": "resource/assets/questions/m08-bg.png",
    "revision": "201110a2a64e7aa5b80835d9e8cdf190"
  },
  {
    "url": "resource/assets/questions/m08-item.json",
    "revision": "c0483cf3c45d32f94092cd8cdb09d48c"
  },
  {
    "url": "resource/assets/questions/m08-item.png",
    "revision": "8c164a912e4308049ef9760dbc2f9f02"
  },
  {
    "url": "resource/assets/questions/m10.png",
    "revision": "1be1716c33ee7da252b2b69789492fdd"
  },
  {
    "url": "resource/assets/questions/M11.png",
    "revision": "f34f728cf263bc4b5d89e662fa27dad5"
  },
  {
    "url": "resource/assets/questions/m12.png",
    "revision": "256ac75bef93653e822734e197576553"
  },
  {
    "url": "resource/assets/questions/m13.png",
    "revision": "5c5bea6bdb444107f456415a28881723"
  },
  {
    "url": "resource/assets/questions/m15.png",
    "revision": "df70c4b2e6df4b4e033a414bfa1c4c72"
  },
  {
    "url": "resource/assets/questions/m16-bg.png",
    "revision": "7315d7f9736cde8ce0f111015c30c5d1"
  },
  {
    "url": "resource/assets/questions/m16-item.json",
    "revision": "a8d5d53baa7e7dcb56a8e9144014c5fc"
  },
  {
    "url": "resource/assets/questions/m16-item.png",
    "revision": "e1012001e3645127e35bae08c65294ef"
  },
  {
    "url": "resource/assets/questions/m17.png",
    "revision": "88cb69d8b61d938519c54ffb856a3cff"
  },
  {
    "url": "resource/assets/questions/m18-bg.png",
    "revision": "a414539720e8c6c3bba44df2feb7d763"
  },
  {
    "url": "resource/assets/questions/m18-item.json",
    "revision": "b75d3d52f294d48337b92373ec1b893c"
  },
  {
    "url": "resource/assets/questions/m18-item.png",
    "revision": "3f3e2c7293fd499975b9a747327c3ffb"
  },
  {
    "url": "resource/assets/questions/m19.png",
    "revision": "58ac37fcf2cdbcbd1773228e6002ce6b"
  },
  {
    "url": "resource/assets/questions/m20-bg.png",
    "revision": "6bba3c280958954b130f6b2c8dc591c6"
  },
  {
    "url": "resource/assets/questions/m20-item.json",
    "revision": "6ed70faa9bed62f6f56e2e4492253f17"
  },
  {
    "url": "resource/assets/questions/m20-item.png",
    "revision": "10e6530febd1a72a95a241ebd161b31d"
  },
  {
    "url": "resource/assets/questions/m21.png",
    "revision": "f84a67f37097e2af7972710ab296a23a"
  },
  {
    "url": "resource/assets/questions/m22.png",
    "revision": "4e5ea96b641559f95d2c9e5f5ffda5b2"
  },
  {
    "url": "resource/assets/questions/m23.png",
    "revision": "5f9de9e52e1d95cc2d9e76dff7f4a219"
  },
  {
    "url": "resource/assets/questions/m42-bg.png",
    "revision": "acc64cb05cf2362fe52b5cce7d510735"
  },
  {
    "url": "resource/assets/questions/m42-item.json",
    "revision": "877a805d59231e4f715e8b0e54f479dc"
  },
  {
    "url": "resource/assets/questions/m42-item.png",
    "revision": "e8679a60bfe4e49717173d42ba3fcc79"
  },
  {
    "url": "resource/assets/questions/m42-tips.png",
    "revision": "af0ac660029c8a7ad4bf06af01c589f7"
  },
  {
    "url": "resource/assets/questions/m8.2/m8.2_00.png",
    "revision": "12526bff02887ff7dd56a4850cd3d15b"
  },
  {
    "url": "resource/assets/questions/m8.2/m8.2_01.png",
    "revision": "2d1864f5323272352d048ce16ead6a35"
  },
  {
    "url": "resource/assets/questions/m8.2/m8.2_02.png",
    "revision": "17571f88914f52861d670b559ab81679"
  },
  {
    "url": "resource/assets/questions/m8.2/m8.2_03.png",
    "revision": "bd1f3297947e05a2e2e4e278e3a6b51a"
  },
  {
    "url": "resource/assets/questions/m8.2/m8.2_04.png",
    "revision": "a8a01fbfcd283e7b26f1c5541a7d4899"
  },
  {
    "url": "resource/assets/questions/m8.2/m8.2_05.png",
    "revision": "0a1c8dbbdde8dc2e2969e1f0efd0799c"
  },
  {
    "url": "resource/assets/questions/m8.2/m8.2_06.png",
    "revision": "521050a40bf3e49436423bdbc5e384d4"
  },
  {
    "url": "resource/assets/questions/m8.2/m8.2-bg.png",
    "revision": "7237ba72db32b0f31ecff0da672d7e2a"
  },
  {
    "url": "resource/assets/questions/m8.2/m8.2-tips.png",
    "revision": "fb8efc27ed56e41bc64356fa0ed1e754"
  },
  {
    "url": "resource/assets/result/border_black.png",
    "revision": "ffcb496f6b84dc2212656c7dd399d841"
  },
  {
    "url": "resource/assets/result/border_red.png",
    "revision": "b77324f40dd64e23897454a3b3d45aa1"
  },
  {
    "url": "resource/assets/result/lose.png",
    "revision": "82f0ab76b56b997020f2494cfe10249a"
  },
  {
    "url": "resource/assets/result/result.json",
    "revision": "536cf4a1407dbd395aaeed98792fa45a"
  },
  {
    "url": "resource/assets/result/result.png",
    "revision": "e3ebbdccde0d851de72c41de46baf3a4"
  },
  {
    "url": "resource/assets/result/result2.json",
    "revision": "c4830092497a4f665f6c6fbc96e2a971"
  },
  {
    "url": "resource/assets/result/result2.png",
    "revision": "cd019394803ba19ed68f5fc3e35bdce4"
  },
  {
    "url": "resource/assets/result/victory.png",
    "revision": "a19aeab2ad149bd792ce070312ff22af"
  },
  {
    "url": "resource/assets/scene/s0.png",
    "revision": "4f7d357fd19d888ac57da3046e67b515"
  },
  {
    "url": "resource/assets/scene/s1.png",
    "revision": "f434293265c21d76f27f5eae5522f092"
  },
  {
    "url": "resource/assets/scene/s10.png",
    "revision": "1cd5c35b1701c4b3553be13925f25cc3"
  },
  {
    "url": "resource/assets/scene/s11.jpg",
    "revision": "a6119f43a3c9068d062946ba966ab5a1"
  },
  {
    "url": "resource/assets/scene/s12.jpg",
    "revision": "5004f787747d8ab8af0fd77f0e61118f"
  },
  {
    "url": "resource/assets/scene/s13.jpg",
    "revision": "fa469113e3d8ac8435ea3b4b7b0b6e46"
  },
  {
    "url": "resource/assets/scene/s14.png",
    "revision": "bf0dd83fae5480f8d995750a956111b5"
  },
  {
    "url": "resource/assets/scene/s15.png",
    "revision": "e059579fcb9f128951a8fdd99f4f4887"
  },
  {
    "url": "resource/assets/scene/s16.png",
    "revision": "ea6ed352b75153d194c57edea3dfae29"
  },
  {
    "url": "resource/assets/scene/s17.png",
    "revision": "4765fecb1c41ef8506543a00553a4e14"
  },
  {
    "url": "resource/assets/scene/s18.png",
    "revision": "aea1b2530662cdaccef86b3c63eebfb0"
  },
  {
    "url": "resource/assets/scene/s19.png",
    "revision": "a9b82bf48c403778320d58b000003ccf"
  },
  {
    "url": "resource/assets/scene/s2.jpg",
    "revision": "4600a7592cdb2eb682a796600b383932"
  },
  {
    "url": "resource/assets/scene/s20.jpg",
    "revision": "9db07b02acfcd26218bb77e2bb3b8fd5"
  },
  {
    "url": "resource/assets/scene/s21.png",
    "revision": "2c0f7b9a37989a02615c5cdfb8ea4116"
  },
  {
    "url": "resource/assets/scene/s22.png",
    "revision": "5a9c5186a8e8bc57b27a9620c69faf10"
  },
  {
    "url": "resource/assets/scene/s23.jpg",
    "revision": "49d4bd74b1389ed490311fd72a0344bd"
  },
  {
    "url": "resource/assets/scene/s24.png",
    "revision": "9c76fbf66002e1443c97b94c0c5f0c8d"
  },
  {
    "url": "resource/assets/scene/s25.jpg",
    "revision": "65ca812b9a640d639fce67e54eef9706"
  },
  {
    "url": "resource/assets/scene/s26.jpg",
    "revision": "f371a9934b5981dcaa59b3f1620dc492"
  },
  {
    "url": "resource/assets/scene/s27.jpg",
    "revision": "9c4992c81e0f1067467243409a854a97"
  },
  {
    "url": "resource/assets/scene/s28.jpg",
    "revision": "c59ff7fe9a57bebc2e51ce7ffda331d5"
  },
  {
    "url": "resource/assets/scene/s29.jpg",
    "revision": "dd966bbc21f0ed00b4d35a041caa0ace"
  },
  {
    "url": "resource/assets/scene/s3.png",
    "revision": "3b396e2c6582d2de2880d46c6f8ac8c1"
  },
  {
    "url": "resource/assets/scene/s30.png",
    "revision": "b66acbefe7d5724554a514a385c9a8cf"
  },
  {
    "url": "resource/assets/scene/s31.jpg",
    "revision": "7193c75b04384596e2de093ed311c459"
  },
  {
    "url": "resource/assets/scene/s32.jpg",
    "revision": "7a55e0d7eb6d8b1a1478c703f0bc4eb8"
  },
  {
    "url": "resource/assets/scene/s33.jpg",
    "revision": "caf140dde9cd2709120cf152aa8b2771"
  },
  {
    "url": "resource/assets/scene/s35.jpg",
    "revision": "f5ac23837f8c12377224558c5a130b2c"
  },
  {
    "url": "resource/assets/scene/s38.jpg",
    "revision": "9ce3247ce55bdceb0cc576f5e2a252ce"
  },
  {
    "url": "resource/assets/scene/s39.jpg",
    "revision": "26a2f55e9a8bc8b27236abb779ef019d"
  },
  {
    "url": "resource/assets/scene/s4.jpg",
    "revision": "36295e1388b1e627982c711bfde609e8"
  },
  {
    "url": "resource/assets/scene/s43.jpg",
    "revision": "b2c433773923855e2e83b93f0f69db1f"
  },
  {
    "url": "resource/assets/scene/s44.jpg",
    "revision": "6bacb64143c942bc4cd231457fbf9d5b"
  },
  {
    "url": "resource/assets/scene/s49.jpg",
    "revision": "0b0fe775caa754f8f74d334f24f9997f"
  },
  {
    "url": "resource/assets/scene/s5.jpg",
    "revision": "217797d3fa8b71257ea83529bccfa014"
  },
  {
    "url": "resource/assets/scene/s50.jpg",
    "revision": "5aa16c792120c42730079d1e48c9bce3"
  },
  {
    "url": "resource/assets/scene/s53.png",
    "revision": "5d2a0788422bc0d7dc5bf9fe58dee90d"
  },
  {
    "url": "resource/assets/scene/s54.jpg",
    "revision": "4cdb191259e1af8f1e10884a8680b825"
  },
  {
    "url": "resource/assets/scene/s55.jpg",
    "revision": "c056856c4d6df3cf3a0f671ba385c65a"
  },
  {
    "url": "resource/assets/scene/s56.png",
    "revision": "9c46721bacc8d2c31948595d7efd4daf"
  },
  {
    "url": "resource/assets/scene/s57.png",
    "revision": "76f02c268a12b850b7384e9c84329b0c"
  },
  {
    "url": "resource/assets/scene/s58.png",
    "revision": "52afe2c17c227bfa52ea249b0b0d014b"
  },
  {
    "url": "resource/assets/scene/s59.jpg",
    "revision": "a690b9382315cf157d19828f789eecce"
  },
  {
    "url": "resource/assets/scene/s6.jpg",
    "revision": "9b1b92cf8e2bffdef1249e5f829d6098"
  },
  {
    "url": "resource/assets/scene/s60.png",
    "revision": "1efb09c366e88218c4eeedfbd704c927"
  },
  {
    "url": "resource/assets/scene/s61.jpg",
    "revision": "c9d1d45ee24b994f034ecec8dad7f916"
  },
  {
    "url": "resource/assets/scene/s62.jpg",
    "revision": "66151a4c007203307915e1c7bbd681f8"
  },
  {
    "url": "resource/assets/scene/s63.jpg",
    "revision": "b1ac1fce1906bda4ed5a0dd59ee7d066"
  },
  {
    "url": "resource/assets/scene/s64.jpg",
    "revision": "94b4efcaeb591f27ff0d3ca0ddde8b27"
  },
  {
    "url": "resource/assets/scene/s65.jpg",
    "revision": "3b16e7be841136ec4c0e6ebbca1aefbf"
  },
  {
    "url": "resource/assets/scene/s66.jpg",
    "revision": "af3a255f19f8b1e248c12b24fbf0f7d5"
  },
  {
    "url": "resource/assets/scene/s67.jpg",
    "revision": "8e5f2df7e899739831042a6037d8f1e5"
  },
  {
    "url": "resource/assets/scene/s68.jpg",
    "revision": "a690b9382315cf157d19828f789eecce"
  },
  {
    "url": "resource/assets/scene/s69.png",
    "revision": "9c76fbf66002e1443c97b94c0c5f0c8d"
  },
  {
    "url": "resource/assets/scene/s7.png",
    "revision": "a011687e51832abeb806335fc6a8a166"
  },
  {
    "url": "resource/assets/scene/s70.png",
    "revision": "b66acbefe7d5724554a514a385c9a8cf"
  },
  {
    "url": "resource/assets/scene/s71.jpg",
    "revision": "94b4efcaeb591f27ff0d3ca0ddde8b27"
  },
  {
    "url": "resource/assets/scene/s8.png",
    "revision": "76f02c268a12b850b7384e9c84329b0c"
  },
  {
    "url": "resource/assets/scene/s9.png",
    "revision": "2318b5ce69e351a286807fbd2e23a0eb"
  },
  {
    "url": "resource/assets/scene/s99.png",
    "revision": "924f68d8cb5a7891500d21e722f69d81"
  },
  {
    "url": "resource/assets/seat/circle.json",
    "revision": "d3c4a9f2447e487d2a404f6ca7d00d32"
  },
  {
    "url": "resource/assets/seat/circle.png",
    "revision": "2604e69d6321facf005b729d73255a4d"
  },
  {
    "url": "resource/assets/seat/seat.json",
    "revision": "621122b131848c11d23b04debe273fcc"
  },
  {
    "url": "resource/assets/seat/seat.png",
    "revision": "b87b696f9c11af628de06c899d29fee4"
  },
  {
    "url": "resource/assets/setting/company_logo.png",
    "revision": "859d6ae3d41f111fb6eee59ae8455769"
  },
  {
    "url": "resource/assets/setting/company.png",
    "revision": "6eae8f10566f013b55b84ef6019e848c"
  },
  {
    "url": "resource/assets/setting/music_close.png",
    "revision": "9f8eb9ceb7af3b7eb08fa66cdebebbf9"
  },
  {
    "url": "resource/assets/setting/music_open.png",
    "revision": "2a45f2bb46fc71aa37e92d5a79315998"
  },
  {
    "url": "resource/assets/setting/music.png",
    "revision": "1cb0d727238619d47d987b07c5e7f125"
  },
  {
    "url": "resource/assets/setting/sound_close.png",
    "revision": "e60c88942b4e4ec7c5c41fa4f1035700"
  },
  {
    "url": "resource/assets/setting/sound_open.png",
    "revision": "f29e51548335c3a115af8040981fb160"
  },
  {
    "url": "resource/assets/setting/sound.png",
    "revision": "9f88d0102203326d86754ec622081356"
  },
  {
    "url": "resource/assets/setting/text_close.png",
    "revision": "d75b92ea05a4b7f93a42ef01ccfff7d3"
  },
  {
    "url": "resource/assets/setting/text_open.png",
    "revision": "1d530c4b7731d9fc9508346040ebac09"
  },
  {
    "url": "resource/assets/shared/share.png",
    "revision": "e36c70ba779e85d69f4ed7df1a29f787"
  },
  {
    "url": "resource/assets/shop/note_bg.png",
    "revision": "217703d3ce8d970e72ae8122826a39b7"
  },
  {
    "url": "resource/assets/shop/note_prop.png",
    "revision": "44131e65e8e68bf0566b9c89fe7b536a"
  },
  {
    "url": "resource/assets/shop/pay_bg.png",
    "revision": "b9b7dd4c28097f04eb8150830873b39d"
  },
  {
    "url": "resource/assets/shop/pay.png",
    "revision": "71716f5c8d0fb9a436722cd4ae906e55"
  },
  {
    "url": "resource/assets/shop/power_bg.png",
    "revision": "30845c7ef3724dc94e2dff27e3153325"
  },
  {
    "url": "resource/assets/shop/power_large.png",
    "revision": "ac2ca302c92372319068acb92b068ca9"
  },
  {
    "url": "resource/assets/shop/power_medium.png",
    "revision": "067b77adf47d00406046bc79d6cfe1fa"
  },
  {
    "url": "resource/assets/shop/power_small.png",
    "revision": "0b2bf10aa312b6f3efd16c2f586eb5f1"
  },
  {
    "url": "resource/assets/shop/shop-icon-h.png",
    "revision": "22b278ff129d6dde82414e5ed8b5ba92"
  },
  {
    "url": "resource/assets/shop/shop-icon-m.png",
    "revision": "6d14078adcedbf8cab7a05da9dd0f031"
  },
  {
    "url": "resource/assets/start/assistant-bg.png",
    "revision": "deacc0879d71cf598dff767e25625112"
  },
  {
    "url": "resource/assets/start/game-bg.png",
    "revision": "cecedc0ac0b3fd45d73b1e919519d85e"
  },
  {
    "url": "resource/assets/start/logo.png",
    "revision": "7417e95ce0a86d1f0043bfd070ee6f5f"
  },
  {
    "url": "resource/assets/start/more-item1.png",
    "revision": "19428ba9dc7718c0452729ce81227259"
  },
  {
    "url": "resource/assets/start/more-item2.png",
    "revision": "9cfd4ce7e8315fb8dccf903730c2b92a"
  },
  {
    "url": "resource/assets/start/no_manage.png",
    "revision": "8dac39c9c56faf9de0804f027e3f46da"
  },
  {
    "url": "resource/assets/start/qrcode-img.jpg",
    "revision": "71c326a50c85eb21dbec3a072863cb57"
  },
  {
    "url": "resource/assets/start/qrcode-tk2048.jpg",
    "revision": "9ae6b961a595c03f41086ed35d45eabe"
  },
  {
    "url": "resource/assets/start/start-btn.json",
    "revision": "78ef4a02fd8249c8b15bf24e40195c2d"
  },
  {
    "url": "resource/assets/start/start-btn.png",
    "revision": "f2519c51a5133ad7ae77adb389c2ef43"
  },
  {
    "url": "resource/assets/start/start.json",
    "revision": "557f8a032e6e3be9960b101e7d646f19"
  },
  {
    "url": "resource/assets/start/start.png",
    "revision": "e78fdcbbeb5af951f167f9f94f393c60"
  },
  {
    "url": "resource/assets/ToggleSwitch/rank/rank-switch.json",
    "revision": "3fb34a62a0aed739601a32c24a0a8b37"
  },
  {
    "url": "resource/assets/ToggleSwitch/rank/rank-switch.png",
    "revision": "54118cecb9b3e279eea92cb764f93ec4"
  },
  {
    "url": "resource/config/antiques.json",
    "revision": "934c91d6398d7317a88aa01276cc2b1c"
  },
  {
    "url": "resource/config/chapter-plot.json",
    "revision": "e9e92ea25431d78d86f83a0e6c8aa701"
  },
  {
    "url": "resource/config/description.json",
    "revision": "586e5a3951dfc3ad6e690212f36d9ad7"
  },
  {
    "url": "resource/config/game-term.json",
    "revision": "e7c04b454647d3368ea904004e1996af"
  },
  {
    "url": "resource/config/guide.json",
    "revision": "0cf9e6d2ee08d066d269022e1e9b0b65"
  },
  {
    "url": "resource/config/manage-change.json",
    "revision": "f91f85f2f11bdb7dbed98ec0c44c3544"
  },
  {
    "url": "resource/config/manage-event.json",
    "revision": "f12af41ca33847b70c2135c52dc37b20"
  },
  {
    "url": "resource/config/photon.json",
    "revision": "8322bc47298f695fbd833a36c21d8268"
  },
  {
    "url": "resource/config/plot-options.json",
    "revision": "c3902dc963ff836cbff8442408e636af"
  },
  {
    "url": "resource/config/question.json",
    "revision": "c3cda44a3e21a59e2f11f41eca6c6207"
  },
  {
    "url": "resource/config/role.json",
    "revision": "f77f1b695f2c32e81df6d9fa93cd5193"
  },
  {
    "url": "resource/config/scene.json",
    "revision": "3521f229fd5e910d68ffe8180032648e"
  },
  {
    "url": "resource/config/seats.json",
    "revision": "e2be56369847ad41954419ef1644f96b"
  },
  {
    "url": "resource/config/select-options.json",
    "revision": "e4ac16a7de6025308e6230ef48c4869e"
  },
  {
    "url": "resource/config/shop.json",
    "revision": "8796e75c9f91e97083efe499ba052acf"
  },
  {
    "url": "resource/default.res.json",
    "revision": "5b1f6436f1fbd60c4cac6289f6247afc"
  },
  {
    "url": "resource/default.thm.json",
    "revision": "e299e2a5bdfee0231a49ef0ad05e2883"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
