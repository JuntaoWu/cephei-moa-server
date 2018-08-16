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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

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
    "revision": "8ee7fd6dbddf7a978c5a36dfaea0a1a0"
  },
  {
    "url": "js/assetsmanager.min_49f5417f.js",
    "revision": "b41191e6b6b8bdb793a225621356bdaa"
  },
  {
    "url": "js/default.thm_2b6e14d5.js",
    "revision": "6aefcfe1dec81fb6cdc4d0a48087fe91"
  },
  {
    "url": "js/dragonBones.min_6252b9c4.js",
    "revision": "8e2f39e62dbea0106e177ec0748aaca7"
  },
  {
    "url": "js/egret.min_ffc81eea.js",
    "revision": "6b841df9b4d580131a9ab09b418b4fcb"
  },
  {
    "url": "js/egret.web.min_3e311c0e.js",
    "revision": "8f46ab2f04c344203c57e720978ad536"
  },
  {
    "url": "js/eui.min_22447123.js",
    "revision": "c33fa31924cd623aa93e453ad260c0c1"
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
    "url": "js/main.min_7389ce8e.js",
    "revision": "e0002389cb7a23132d76c4611d8338c2"
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
    "url": "js/puremvc.min_c3ffb868.js",
    "revision": "70ca3458d11d4b28d7a0cf4dd80ecd43"
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
    "revision": "fa562db482b7dc79298190607d3a790d"
  },
  {
    "url": "manifest.pwa.json",
    "revision": "c2d054146353c61cb96947fc28c2e4dc"
  },
  {
    "url": "miniGame/resource/assets/background/number-keyboard-bg.png",
    "revision": "d9b67b5588f7c12be9edc6d61b375de7"
  },
  {
    "url": "miniGame/resource/assets/background/start-background.png",
    "revision": "f0d99f3bc1e6d25af23c03ab01ab17a1"
  },
  {
    "url": "miniGame/resource/assets/bg.jpg",
    "revision": "bfbd6002c35cd2bfa99ec5333c2e28f7"
  },
  {
    "url": "miniGame/resource/assets/Button/auth3.png",
    "revision": "39f799ded21e48f183b8c4870a6599ba"
  },
  {
    "url": "miniGame/resource/assets/Button/auth4.png",
    "revision": "e1b8a1a6bd3408b20bdbd5dcd2ef8a15"
  },
  {
    "url": "miniGame/resource/assets/Button/botton.png",
    "revision": "88e6d6c2d45866d7011781e07d402033"
  },
  {
    "url": "miniGame/resource/assets/Button/btn-back.png",
    "revision": "ce5b26d945087e58aa6a1bee2d1348c0"
  },
  {
    "url": "miniGame/resource/assets/Button/button_down.png",
    "revision": "878334d13048afd6b6b061e8b156dadb"
  },
  {
    "url": "miniGame/resource/assets/Button/button_up.png",
    "revision": "a6341a65c7155a4edbbf1f39bc7932d9"
  },
  {
    "url": "miniGame/resource/assets/Button/cancel.png",
    "revision": "92692ac870251779fd12cab48543666b"
  },
  {
    "url": "miniGame/resource/assets/Button/cancel2.png",
    "revision": "91dcdd0c95821ef8e4dfbddfd2c2364a"
  },
  {
    "url": "miniGame/resource/assets/Button/enter_info.png",
    "revision": "48f4819433b1b6f05bb94847ab72d75c"
  },
  {
    "url": "miniGame/resource/assets/Button/ok_2.png",
    "revision": "92a01ba18f1b604e5b1ad82273a5b88b"
  },
  {
    "url": "miniGame/resource/assets/Button/ok.png",
    "revision": "f9665718654c12da77fb196d22ab57f0"
  },
  {
    "url": "miniGame/resource/assets/Button/ok2.png",
    "revision": "02ab55968f5924a4649bc14d0f737234"
  },
  {
    "url": "miniGame/resource/assets/Button/ok3.png",
    "revision": "a9e28f827bb2f797ef15278c1f86dd7a"
  },
  {
    "url": "miniGame/resource/assets/Button/ok4.png",
    "revision": "e9480f43ea914d4130c727ca5d82013a"
  },
  {
    "url": "miniGame/resource/assets/Button/share2.png",
    "revision": "adb390f96e77668f0fa70ee97ed490dc"
  },
  {
    "url": "miniGame/resource/assets/Button/skip.png",
    "revision": "f3fc4ea9bebe43fcc266003c293eb31c"
  },
  {
    "url": "miniGame/resource/assets/Button/skip2.png",
    "revision": "0a515d8040cdbef7a0ceefd228afa0ea"
  },
  {
    "url": "miniGame/resource/assets/Button/start.png",
    "revision": "31a881a2d229a2aee65fa9055bd5d421"
  },
  {
    "url": "miniGame/resource/assets/Button/talk_over.png",
    "revision": "718486c0978c365efb4cc2e845d9da67"
  },
  {
    "url": "miniGame/resource/assets/Button/vote_over.png",
    "revision": "aa90ab112830b298936a9acef2e9f626"
  },
  {
    "url": "miniGame/resource/assets/Button/vote-clear.png",
    "revision": "20aed74f094c873f2064d1e6fe237b45"
  },
  {
    "url": "miniGame/resource/assets/CheckBox/checkbox_select_disabled.png",
    "revision": "dd9aa43f0bf6cbb969f7cfa238734ee9"
  },
  {
    "url": "miniGame/resource/assets/CheckBox/checkbox_select_down.png",
    "revision": "71e5f029838a1b6ffc11198097555e4b"
  },
  {
    "url": "miniGame/resource/assets/CheckBox/checkbox_select_up.png",
    "revision": "68a00c5f12172b1a2f658925d69a998b"
  },
  {
    "url": "miniGame/resource/assets/CheckBox/checkbox_unselect.png",
    "revision": "2ffa97740e6d6ea0b005b4465255b098"
  },
  {
    "url": "miniGame/resource/assets/club_attr.png",
    "revision": "1679c8e2bc8e1145a1db7cfc908c9df1"
  },
  {
    "url": "miniGame/resource/assets/club_box_1.png",
    "revision": "1600230789ff435968d9eb27f545fff2"
  },
  {
    "url": "miniGame/resource/assets/club_box_2.png",
    "revision": "52127d64dca223f8c37be0372e1ea0b6"
  },
  {
    "url": "miniGame/resource/assets/club_box.png",
    "revision": "09d7e7fb4b27f0abf2aaa678348548cc"
  },
  {
    "url": "miniGame/resource/assets/club_game1_1.png",
    "revision": "85941906b69ad6c95887f118a708b053"
  },
  {
    "url": "miniGame/resource/assets/club_game1_2.png",
    "revision": "ced269a5475b55dae96e5d73160e2784"
  },
  {
    "url": "miniGame/resource/assets/club_game2_1.png",
    "revision": "7ac4e2030c47dd172abe4447160af6c7"
  },
  {
    "url": "miniGame/resource/assets/club_game2_2.png",
    "revision": "7cbcac11aead82ae4f46487c5d30194e"
  },
  {
    "url": "miniGame/resource/assets/club_game3_1.png",
    "revision": "e0b39f1415e77973eded26fa0f5e32dd"
  },
  {
    "url": "miniGame/resource/assets/club_game3_2.png",
    "revision": "98766f9c3d2d5a58f7fd4e226cfc5fc8"
  },
  {
    "url": "miniGame/resource/assets/club_game4_1.png",
    "revision": "ef3791e591f53a313bfcc1b1ede58349"
  },
  {
    "url": "miniGame/resource/assets/club_game4_2.png",
    "revision": "69f3e033b0a08c37bb8647a70e773edb"
  },
  {
    "url": "miniGame/resource/assets/club_location.png",
    "revision": "b95fc923b0a5cd6b3c5a714ef81e8de2"
  },
  {
    "url": "miniGame/resource/assets/club_lv1.png",
    "revision": "440bbefc8b05df6ca938e0b9daeb440d"
  },
  {
    "url": "miniGame/resource/assets/club_lv2.png",
    "revision": "10d3b1b030508dd26d0ffb2122bf8f3e"
  },
  {
    "url": "miniGame/resource/assets/club_lv3.png",
    "revision": "338f2122951873f5db5ce152e18774ae"
  },
  {
    "url": "miniGame/resource/assets/club_phone.png",
    "revision": "c2d68578f239d6584158e9f1ae1e575a"
  },
  {
    "url": "miniGame/resource/assets/club_results.png",
    "revision": "2218188b45e2f062ab2ef5186fe48005"
  },
  {
    "url": "miniGame/resource/assets/club_search.png",
    "revision": "8a30eea3628235a18bb1ea017292e2bb"
  },
  {
    "url": "miniGame/resource/assets/club_time.png",
    "revision": "f4ee2cc31846e07bef697d26f39fbf3c"
  },
  {
    "url": "miniGame/resource/assets/club/club_attr.png",
    "revision": "1679c8e2bc8e1145a1db7cfc908c9df1"
  },
  {
    "url": "miniGame/resource/assets/club/club_box_1.png",
    "revision": "1600230789ff435968d9eb27f545fff2"
  },
  {
    "url": "miniGame/resource/assets/club/club_box_2.png",
    "revision": "52127d64dca223f8c37be0372e1ea0b6"
  },
  {
    "url": "miniGame/resource/assets/club/club_box.png",
    "revision": "09d7e7fb4b27f0abf2aaa678348548cc"
  },
  {
    "url": "miniGame/resource/assets/club/club_game1_1.png",
    "revision": "85941906b69ad6c95887f118a708b053"
  },
  {
    "url": "miniGame/resource/assets/club/club_game1_2.png",
    "revision": "ced269a5475b55dae96e5d73160e2784"
  },
  {
    "url": "miniGame/resource/assets/club/club_game2_1.png",
    "revision": "7ac4e2030c47dd172abe4447160af6c7"
  },
  {
    "url": "miniGame/resource/assets/club/club_game2_2.png",
    "revision": "7cbcac11aead82ae4f46487c5d30194e"
  },
  {
    "url": "miniGame/resource/assets/club/club_game3_1.png",
    "revision": "e0b39f1415e77973eded26fa0f5e32dd"
  },
  {
    "url": "miniGame/resource/assets/club/club_game3_2.png",
    "revision": "98766f9c3d2d5a58f7fd4e226cfc5fc8"
  },
  {
    "url": "miniGame/resource/assets/club/club_game4_1.png",
    "revision": "ef3791e591f53a313bfcc1b1ede58349"
  },
  {
    "url": "miniGame/resource/assets/club/club_game4_2.png",
    "revision": "69f3e033b0a08c37bb8647a70e773edb"
  },
  {
    "url": "miniGame/resource/assets/club/club_location.png",
    "revision": "b95fc923b0a5cd6b3c5a714ef81e8de2"
  },
  {
    "url": "miniGame/resource/assets/club/club_lv1.png",
    "revision": "440bbefc8b05df6ca938e0b9daeb440d"
  },
  {
    "url": "miniGame/resource/assets/club/club_lv2.png",
    "revision": "10d3b1b030508dd26d0ffb2122bf8f3e"
  },
  {
    "url": "miniGame/resource/assets/club/club_lv3.png",
    "revision": "338f2122951873f5db5ce152e18774ae"
  },
  {
    "url": "miniGame/resource/assets/club/club_phone.png",
    "revision": "c2d68578f239d6584158e9f1ae1e575a"
  },
  {
    "url": "miniGame/resource/assets/club/club_results.png",
    "revision": "2218188b45e2f062ab2ef5186fe48005"
  },
  {
    "url": "miniGame/resource/assets/club/club_search.png",
    "revision": "8a30eea3628235a18bb1ea017292e2bb"
  },
  {
    "url": "miniGame/resource/assets/club/club_time.png",
    "revision": "f4ee2cc31846e07bef697d26f39fbf3c"
  },
  {
    "url": "miniGame/resource/assets/dragonBones/fangzhen_ske.json",
    "revision": "9b283f03d48fcc54182bfdcea337d281"
  },
  {
    "url": "miniGame/resource/assets/dragonBones/fangzhen_tex.json",
    "revision": "06fdcdad58ca45ad142980de9f8a3d82"
  },
  {
    "url": "miniGame/resource/assets/dragonBones/fangzhen_tex.png",
    "revision": "630ca691d5cd6c5ca800078790e6f736"
  },
  {
    "url": "miniGame/resource/assets/dragonBones/skills_ske.json",
    "revision": "0b572518b145d250705311b12c8072d5"
  },
  {
    "url": "miniGame/resource/assets/dragonBones/skills_tex.json",
    "revision": "d9b093512afa8d2053738daf39fe2500"
  },
  {
    "url": "miniGame/resource/assets/dragonBones/skills_tex.png",
    "revision": "ffd8a8276eb20d92ac860655b73a5342"
  },
  {
    "url": "miniGame/resource/assets/egret_icon.png",
    "revision": "d7c7550013fbcae72390f7ce17c78e19"
  },
  {
    "url": "miniGame/resource/assets/game/auth2.png",
    "revision": "ade72753bd226833c3d5cc62ae0f2eb1"
  },
  {
    "url": "miniGame/resource/assets/game/bg2.png",
    "revision": "5a5a314aeeae9b86211c677c4124e4bb"
  },
  {
    "url": "miniGame/resource/assets/game/bg3.png",
    "revision": "6a7e6dcee2af4734751479a511b25152"
  },
  {
    "url": "miniGame/resource/assets/game/enter-info.png",
    "revision": "48f4819433b1b6f05bb94847ab72d75c"
  },
  {
    "url": "miniGame/resource/assets/game/false.png",
    "revision": "b2547662a4a05ded0ba46336e98d8699"
  },
  {
    "url": "miniGame/resource/assets/game/game-box-border.png",
    "revision": "1c2b9a478d12f6e639a5acfcd86b17c0"
  },
  {
    "url": "miniGame/resource/assets/game/game-record.png",
    "revision": "b2238edfe4dc6e8789f64431b18db064"
  },
  {
    "url": "miniGame/resource/assets/game/hide.png",
    "revision": "467259acd3577bf58ee7c54c4a6523fb"
  },
  {
    "url": "miniGame/resource/assets/game/number.png",
    "revision": "349cb10e4e7e04c0d13a7a79dfa59483"
  },
  {
    "url": "miniGame/resource/assets/game/role1.png",
    "revision": "af597bf6db55b107986730982110920c"
  },
  {
    "url": "miniGame/resource/assets/game/role2.png",
    "revision": "c2146ad42888f88027ed57bcb5d277bb"
  },
  {
    "url": "miniGame/resource/assets/game/role3.png",
    "revision": "8f02fc0df5efea4dcaf124463e99b889"
  },
  {
    "url": "miniGame/resource/assets/game/role4-5.png",
    "revision": "99cb09e3f8b2b2a562695392695ccdc6"
  },
  {
    "url": "miniGame/resource/assets/game/role6.png",
    "revision": "3e4c3f7108b96c80d55d4de193d57294"
  },
  {
    "url": "miniGame/resource/assets/game/role7.png",
    "revision": "895d6bd10aec7337deaee7983da6d22c"
  },
  {
    "url": "miniGame/resource/assets/game/role8.png",
    "revision": "db46b2c42aa8f4a7f860c368acea7310"
  },
  {
    "url": "miniGame/resource/assets/game/round1.png",
    "revision": "866ab0a48e35312db373d9adaafe2c97"
  },
  {
    "url": "miniGame/resource/assets/game/round2.png",
    "revision": "897b6b7daabd75d7ae43bf0f96880b5c"
  },
  {
    "url": "miniGame/resource/assets/game/round3.png",
    "revision": "e89de3c80ac9ece5b4975279df1e0222"
  },
  {
    "url": "miniGame/resource/assets/game/self_info.png",
    "revision": "8192dbd28cdada960794fe565e7efe42"
  },
  {
    "url": "miniGame/resource/assets/game/t1.png",
    "revision": "475f7e7cc8121adfb4f299d67eb140a0"
  },
  {
    "url": "miniGame/resource/assets/game/t10.png",
    "revision": "b0ff26d51b3294590975cc10934b13bd"
  },
  {
    "url": "miniGame/resource/assets/game/t11.png",
    "revision": "0094f08f275cef494f314ef735e40b74"
  },
  {
    "url": "miniGame/resource/assets/game/t12.png",
    "revision": "1fd0e2215621e5578aca48643501a540"
  },
  {
    "url": "miniGame/resource/assets/game/t2.png",
    "revision": "5a9ece163e8c4b166995d83f91955307"
  },
  {
    "url": "miniGame/resource/assets/game/t3.png",
    "revision": "b98a9adf1433726c3cc070c497439e0a"
  },
  {
    "url": "miniGame/resource/assets/game/t4.png",
    "revision": "0600376f70e4e69e253856e06b7090d3"
  },
  {
    "url": "miniGame/resource/assets/game/t5.png",
    "revision": "831a5baa101eecb2908ce8c95f00aeeb"
  },
  {
    "url": "miniGame/resource/assets/game/t6.png",
    "revision": "4e13d79abeb673ca6c64a90ff30e17d7"
  },
  {
    "url": "miniGame/resource/assets/game/t7.png",
    "revision": "062a9bba6db72674a2fdc09385cdf855"
  },
  {
    "url": "miniGame/resource/assets/game/t8.png",
    "revision": "df216c1c2c1245a4952939c067aad2dd"
  },
  {
    "url": "miniGame/resource/assets/game/t9.png",
    "revision": "4ee9d3bc6f6e44cbc0530696338c125e"
  },
  {
    "url": "miniGame/resource/assets/game/true.png",
    "revision": "b5e3071b9ba88a9ca312b59f877c9fd9"
  },
  {
    "url": "miniGame/resource/assets/game/wait-1-players-enough.png",
    "revision": "c0129e4da3e2b237f74faa647f7d074c"
  },
  {
    "url": "miniGame/resource/assets/game/wait-2-master-confirm.png",
    "revision": "62a4984278069f28160f83ef89debfd6"
  },
  {
    "url": "miniGame/resource/assets/game/wait-3-set-identity.png",
    "revision": "d52193cdb12df28351072a216764a62c"
  },
  {
    "url": "miniGame/resource/assets/game/wait-4-others-process.png",
    "revision": "2e602a9dad7c2bb7092497e157f944a5"
  },
  {
    "url": "miniGame/resource/assets/game/wait-5-vote.png",
    "revision": "1d31e6f6317ef91770e69367841594ad"
  },
  {
    "url": "miniGame/resource/assets/game/wait-6-others-vote.png",
    "revision": "6bf555f307b06b9fa3b329398f8dee33"
  },
  {
    "url": "miniGame/resource/assets/guide/manual1.png",
    "revision": "a623a281cc8b02fecd4c92c3f0f34861"
  },
  {
    "url": "miniGame/resource/assets/guide/manual2.png",
    "revision": "b5c8582124383bfbe2156aa82fb87cf8"
  },
  {
    "url": "miniGame/resource/assets/guide/manual21.png",
    "revision": "20d23d42f0053dfbc4e1f8f7ec0aa2cc"
  },
  {
    "url": "miniGame/resource/assets/guide/manual22.png",
    "revision": "f481c63591b667c56a7d6139f117ad2c"
  },
  {
    "url": "miniGame/resource/assets/guide/manual23.png",
    "revision": "1017b0e483f150471b547aa83b19af20"
  },
  {
    "url": "miniGame/resource/assets/guide/manual3.png",
    "revision": "846c7eab884bf29637ffb918ee7237d0"
  },
  {
    "url": "miniGame/resource/assets/guide/manual31.png",
    "revision": "5e549bda0d03619495394d965f8f9442"
  },
  {
    "url": "miniGame/resource/assets/guide/manual32.png",
    "revision": "bdc30b1af211097d85f63938fda8b0e5"
  },
  {
    "url": "miniGame/resource/assets/guide/manual33.png",
    "revision": "85184c3dc781c6fb9823e3742eeab34d"
  },
  {
    "url": "miniGame/resource/assets/guide/manual4.png",
    "revision": "2078c4b5d0b2cbdb600dc558495aabef"
  },
  {
    "url": "miniGame/resource/assets/guide/manual41.png",
    "revision": "0c81b0b30bfd631463989bdfe31f4af0"
  },
  {
    "url": "miniGame/resource/assets/guide/manual5.png",
    "revision": "329b372fada14ac3fe6d52657473f78d"
  },
  {
    "url": "miniGame/resource/assets/guide/video1.png",
    "revision": "dafc54ca92a65a734ee9d04f0067e7a9"
  },
  {
    "url": "miniGame/resource/assets/guide/video2.png",
    "revision": "ee4cd89ef980b518de05d2a9085a9c75"
  },
  {
    "url": "miniGame/resource/assets/guide/video3.png",
    "revision": "9c69e414ade1ae9f71be10c65a8a61c1"
  },
  {
    "url": "miniGame/resource/assets/ItemRenderer/rank/rank_bg.png",
    "revision": "5a5a314aeeae9b86211c677c4124e4bb"
  },
  {
    "url": "miniGame/resource/assets/ItemRenderer/rank/rank1.png",
    "revision": "5a39a8365bec76a50868fae65874982e"
  },
  {
    "url": "miniGame/resource/assets/ItemRenderer/rank/rank2.png",
    "revision": "3716ae6b60a0eabd7e3b4fdd98369b48"
  },
  {
    "url": "miniGame/resource/assets/ItemRenderer/rank/rank3.png",
    "revision": "944687d6263d7e53bccdbf7e64b28dc8"
  },
  {
    "url": "miniGame/resource/assets/ItemRenderer/rank/sep.png",
    "revision": "e91f34370922f8c6718ab2dff4b09bb7"
  },
  {
    "url": "miniGame/resource/assets/ItemRenderer/selected.png",
    "revision": "94efb85255bad50f4b5c1b44f7190d0d"
  },
  {
    "url": "miniGame/resource/assets/loading/loading-background.png",
    "revision": "0e8af8e59d0343b2f9d86adf175bab54"
  },
  {
    "url": "miniGame/resource/assets/loading/progress-bg.png",
    "revision": "73e740df3c719c94f7d01880122ff1b8"
  },
  {
    "url": "miniGame/resource/assets/loading/progress.png",
    "revision": "db3c2ee2cf4f1ef094a6c6accb9c530f"
  },
  {
    "url": "miniGame/resource/assets/myInfo/meihua.png",
    "revision": "d0cc8454d7159b47c51ce93ee2cd594c"
  },
  {
    "url": "miniGame/resource/assets/myInfo/room6.png",
    "revision": "45ced5b0e43203a75e86648b76dfecca"
  },
  {
    "url": "miniGame/resource/assets/myInfo/room7.png",
    "revision": "1222f59a7990873c6195a1164918d3f9"
  },
  {
    "url": "miniGame/resource/assets/myInfo/room8.png",
    "revision": "109b843cd526160af56147f95f3a19c6"
  },
  {
    "url": "miniGame/resource/assets/myInfo/score2.png",
    "revision": "2ae679f8b8a695e2ab476df9ba750504"
  },
  {
    "url": "miniGame/resource/assets/myInfo/team_lao_2.png",
    "revision": "3cd02651174a202b1f14d6b577ae140f"
  },
  {
    "url": "miniGame/resource/assets/myInfo/team_xu_2.png",
    "revision": "0bb2c92c3100929a71f4ed495f5e78d8"
  },
  {
    "url": "miniGame/resource/assets/myInfo/tu.json",
    "revision": "603dbd4074879cc7a7ac590d60f315cd"
  },
  {
    "url": "miniGame/resource/assets/myInfo/tu.png",
    "revision": "33db2fca2acd0dad15f917c852d9acce"
  },
  {
    "url": "miniGame/resource/assets/myInfo/win_rate.png",
    "revision": "41cb73e1bdda5ff239bedd1b42939c8e"
  },
  {
    "url": "miniGame/resource/assets/numberKeyboard/input_cancel.png",
    "revision": "920c440c631b8fffb0f516d0c5d2fb4e"
  },
  {
    "url": "miniGame/resource/assets/numberKeyboard/input_ok.png",
    "revision": "e606ff5cc0ef6d221a6a73cfb1daf7e3"
  },
  {
    "url": "miniGame/resource/assets/numberKeyboard/input_room.png",
    "revision": "574691c6b60e9661c20f63c8bad6b790"
  },
  {
    "url": "miniGame/resource/assets/numberKeyboard/input_vote.png",
    "revision": "19d0c42c05434f5e79f2b03b3bc9841c"
  },
  {
    "url": "miniGame/resource/assets/numberKeyboard/num_del.png",
    "revision": "2046125c99f2b15b6d1b05d1a0f9fd9c"
  },
  {
    "url": "miniGame/resource/assets/numberKeyboard/numberKeyboard.png",
    "revision": "d195cf716274ea45937c4659d4d94e53"
  },
  {
    "url": "miniGame/resource/assets/Panel/about.png",
    "revision": "2d19ef9f397c0bda02649c75f2db7420"
  },
  {
    "url": "miniGame/resource/assets/Panel/border.png",
    "revision": "a4ff3e088a39fef12556e404e768244a"
  },
  {
    "url": "miniGame/resource/assets/Panel/header.png",
    "revision": "46c313e8c024d3bf069767075842b713"
  },
  {
    "url": "miniGame/resource/assets/Panel/setting2.png",
    "revision": "dc77d4a7945e88613c7fe5dd2e59e856"
  },
  {
    "url": "miniGame/resource/assets/ProgressBar/thumb_pb.png",
    "revision": "903295905d99cabc4c2b679959d55373"
  },
  {
    "url": "miniGame/resource/assets/ProgressBar/track_pb.png",
    "revision": "60e6154d678d5e516dfe3f84b47dd894"
  },
  {
    "url": "miniGame/resource/assets/RadioButton/black_2.png",
    "revision": "0e0c2d1be3f6e36d6c21a57c936e550a"
  },
  {
    "url": "miniGame/resource/assets/RadioButton/radiobutton_select_disabled.png",
    "revision": "725d226305491301ca8cce8aa68d08d6"
  },
  {
    "url": "miniGame/resource/assets/RadioButton/radiobutton_select_down.png",
    "revision": "725d226305491301ca8cce8aa68d08d6"
  },
  {
    "url": "miniGame/resource/assets/RadioButton/radiobutton_select_up.png",
    "revision": "bf16aacfe9b30037835e1c6482eee507"
  },
  {
    "url": "miniGame/resource/assets/RadioButton/radiobutton_unselect.png",
    "revision": "cd40270b37ab3a5248ea2c61f883934c"
  },
  {
    "url": "miniGame/resource/assets/RadioButton/white_2.png",
    "revision": "63d3278082ee7a9fd4bc318e5de0755d"
  },
  {
    "url": "miniGame/resource/assets/result/border_black.png",
    "revision": "ffcb496f6b84dc2212656c7dd399d841"
  },
  {
    "url": "miniGame/resource/assets/result/border_red.png",
    "revision": "b77324f40dd64e23897454a3b3d45aa1"
  },
  {
    "url": "miniGame/resource/assets/result/false2.png",
    "revision": "ebcd278b632d05165acbdae1a3585b75"
  },
  {
    "url": "miniGame/resource/assets/result/jzj.png",
    "revision": "44cc57b2e257cbd6efeebd4f187021a5"
  },
  {
    "url": "miniGame/resource/assets/result/lose.png",
    "revision": "82f0ab76b56b997020f2494cfe10249a"
  },
  {
    "url": "miniGame/resource/assets/result/result1.png",
    "revision": "65cbd8200bfb1fd710afc9ac4d1e0d7e"
  },
  {
    "url": "miniGame/resource/assets/result/result2.png",
    "revision": "85c6cdef7f2ddcfd502711baac346854"
  },
  {
    "url": "miniGame/resource/assets/result/result3.png",
    "revision": "6b0405937be97ade7e1109b7ead24171"
  },
  {
    "url": "miniGame/resource/assets/result/result4.png",
    "revision": "62c388dd903bd349facc585599f9bccc"
  },
  {
    "url": "miniGame/resource/assets/result/share_team_lao.png",
    "revision": "8d9d19318a59126afc0374ca53e42c92"
  },
  {
    "url": "miniGame/resource/assets/result/share_team_xu.png",
    "revision": "2aa7150a800d1fff1b90f61132b22fe5"
  },
  {
    "url": "miniGame/resource/assets/result/teasure12.png",
    "revision": "19ad11a5bd03ea2ccfd38b873324a75d"
  },
  {
    "url": "miniGame/resource/assets/result/true2.png",
    "revision": "8594b818a91711054c672caae1bf6e35"
  },
  {
    "url": "miniGame/resource/assets/result/victory.png",
    "revision": "a19aeab2ad149bd792ce070312ff22af"
  },
  {
    "url": "miniGame/resource/assets/result/vote1.png",
    "revision": "203b36cc5c186bdb10d9274adb78d4a5"
  },
  {
    "url": "miniGame/resource/assets/ScrollBar/roundthumb.png",
    "revision": "5f550ff68f1240501f035fdc0eda0843"
  },
  {
    "url": "miniGame/resource/assets/ScrollBar/track_sb.png",
    "revision": "541048214115efe2a7a2750cde6b4e54"
  },
  {
    "url": "miniGame/resource/assets/seat/auth.png",
    "revision": "6038b6c7c6eb0d1582d11b8b74b71d31"
  },
  {
    "url": "miniGame/resource/assets/seat/avatar-background.png",
    "revision": "a256e3641466f8a6a9b0b1fb546fd043"
  },
  {
    "url": "miniGame/resource/assets/seat/back_2.png",
    "revision": "0d4b01e6ccc15c51b1579d0bb070cb67"
  },
  {
    "url": "miniGame/resource/assets/seat/btn-confirm.png",
    "revision": "7b8dc5016ae0f439979259a44e2b128f"
  },
  {
    "url": "miniGame/resource/assets/seat/btn-help.png",
    "revision": "bab7c66cdbbb7a8626c023c2f1ac20aa"
  },
  {
    "url": "miniGame/resource/assets/seat/btn-input-identity.png",
    "revision": "d6f0f7bcb008ea569f4f24bb2bb0c8c8"
  },
  {
    "url": "miniGame/resource/assets/seat/color-black.png",
    "revision": "cd2be19de703f80685856082818ae5f3"
  },
  {
    "url": "miniGame/resource/assets/seat/color-blue.png",
    "revision": "08899c1b11421147cd575b28d7f416ca"
  },
  {
    "url": "miniGame/resource/assets/seat/color-green.png",
    "revision": "171f2e647ad7135a4985a28423a0af2b"
  },
  {
    "url": "miniGame/resource/assets/seat/color-orange.png",
    "revision": "010b7720357059f0ef56417e5abe41d4"
  },
  {
    "url": "miniGame/resource/assets/seat/color-purple.png",
    "revision": "26782d320af055693a2784a5cb500f85"
  },
  {
    "url": "miniGame/resource/assets/seat/color-red.png",
    "revision": "82ebb7573e70eb1e61bd5be302c42551"
  },
  {
    "url": "miniGame/resource/assets/seat/color-white.png",
    "revision": "1a3010fa5bc040b27232f3433ff80a6c"
  },
  {
    "url": "miniGame/resource/assets/seat/color-yellow.png",
    "revision": "2479e7cef9e46cab62ccf30d65192756"
  },
  {
    "url": "miniGame/resource/assets/seat/game-init-background.png",
    "revision": "e0c67ebfb31cfb049f6323a30ee768df"
  },
  {
    "url": "miniGame/resource/assets/seat/master-avatar-background.png",
    "revision": "cd30a4ed721b04fb885c9b8c7e4d5ab2"
  },
  {
    "url": "miniGame/resource/assets/seat/seat-background.png",
    "revision": "3b6b50109cd1c15c73f98ea9b09f4f8d"
  },
  {
    "url": "miniGame/resource/assets/seat/seat.json",
    "revision": "67311beeeb3de3212dda8652388616d0"
  },
  {
    "url": "miniGame/resource/assets/seat/seat.png",
    "revision": "1f41d934d3af1a161d7e0487c373d726"
  },
  {
    "url": "miniGame/resource/assets/seat/self-mark.png",
    "revision": "a8963fdddab780c34174943f28539c82"
  },
  {
    "url": "miniGame/resource/assets/seat/talk_over.png",
    "revision": "718486c0978c365efb4cc2e845d9da67"
  },
  {
    "url": "miniGame/resource/assets/seat/talking.png",
    "revision": "c0d1e7cf1449198ebe21213d60e8d96a"
  },
  {
    "url": "miniGame/resource/assets/seat/vote_over.png",
    "revision": "e592af970ee9e362e1b096fa755e4924"
  },
  {
    "url": "miniGame/resource/assets/seat/waiting-for-all-ready.png",
    "revision": "8c7cadec0ddf7389d92ee1a9254c42f0"
  },
  {
    "url": "miniGame/resource/assets/seat/waiting-for-master-start.png",
    "revision": "e1b53ed1d46c6b07c33a983da82edd00"
  },
  {
    "url": "miniGame/resource/assets/shared/close.png",
    "revision": "237640de87e3a894945b5c0805fd3a4a"
  },
  {
    "url": "miniGame/resource/assets/shared/share.png",
    "revision": "e36c70ba779e85d69f4ed7df1a29f787"
  },
  {
    "url": "miniGame/resource/assets/shared/small-dialog-background.png",
    "revision": "c5fc6e4b6311f326ae773f611fb64473"
  },
  {
    "url": "miniGame/resource/assets/Slider/thumb.png",
    "revision": "ac46ad4174244342194e74667d57cf1d"
  },
  {
    "url": "miniGame/resource/assets/Slider/track.png",
    "revision": "541048214115efe2a7a2750cde6b4e54"
  },
  {
    "url": "miniGame/resource/assets/Slider/tracklight.png",
    "revision": "5f550ff68f1240501f035fdc0eda0843"
  },
  {
    "url": "miniGame/resource/assets/start/assistant-bg.png",
    "revision": "3c72afb44a521d333ad2ff69be3a6ad3"
  },
  {
    "url": "miniGame/resource/assets/start/btn-board.png",
    "revision": "d4905fae28b5136dfdf929269ec2eda3"
  },
  {
    "url": "miniGame/resource/assets/start/btn-create-small.png",
    "revision": "6272db90dfd12649e4d201126f3523a6"
  },
  {
    "url": "miniGame/resource/assets/start/btn-create.png",
    "revision": "f9d8ac5d123086a243c23e6c80750f54"
  },
  {
    "url": "miniGame/resource/assets/start/btn-game-bar.png",
    "revision": "ac85fe1c04de997ed9d12c0257cbb987"
  },
  {
    "url": "miniGame/resource/assets/start/btn-game.png",
    "revision": "afb5afd35d3d8e13d93453647afe145b"
  },
  {
    "url": "miniGame/resource/assets/start/btn-guide.png",
    "revision": "39b31e9184df43aae663369e179a7dda"
  },
  {
    "url": "miniGame/resource/assets/start/btn-join-small.png",
    "revision": "9e0a327037416075197d07a4ff5e9c29"
  },
  {
    "url": "miniGame/resource/assets/start/btn-join.png",
    "revision": "ac52cc8312fcd7fb08e196a59119957e"
  },
  {
    "url": "miniGame/resource/assets/start/btn-rank.png",
    "revision": "8127ead63ab0b87531c10613808b9edc"
  },
  {
    "url": "miniGame/resource/assets/start/btn-settings.png",
    "revision": "11610d8752bf28accf9eba6bf9893dce"
  },
  {
    "url": "miniGame/resource/assets/start/btn-share.png",
    "revision": "f0cfaf1938c75bf27d385e749112a1c1"
  },
  {
    "url": "miniGame/resource/assets/start/game-bg.png",
    "revision": "ddadf8fb69b20e6470545ae5b3e5bc3b"
  },
  {
    "url": "miniGame/resource/assets/start/navigation-bar.png",
    "revision": "760ecd4ae28377f46369f44fa8404015"
  },
  {
    "url": "miniGame/resource/assets/start/search.png",
    "revision": "d0b3c55bacff883dee058668f7476600"
  },
  {
    "url": "miniGame/resource/assets/start/title-assistant.png",
    "revision": "a892081110e7175d162d99a4370f3e77"
  },
  {
    "url": "miniGame/resource/assets/start/title-game.png",
    "revision": "1fa1f261f36073a2e6375d884af6d61e"
  },
  {
    "url": "miniGame/resource/assets/start/userinfo-background.png",
    "revision": "b9b8c49526e06baf6f7febf7f8d9ca63"
  },
  {
    "url": "miniGame/resource/assets/ToggleSwitch/handle.png",
    "revision": "1b0a0f006c66a7264ab62a897076bd12"
  },
  {
    "url": "miniGame/resource/assets/ToggleSwitch/off.png",
    "revision": "808df10161bd36abd6600f16e131aca3"
  },
  {
    "url": "miniGame/resource/assets/ToggleSwitch/on.png",
    "revision": "1dccf23d316f65d77c6497d3de987b1d"
  },
  {
    "url": "miniGame/resource/assets/ToggleSwitch/rank/auth_player_1.png",
    "revision": "f9bdaacf4c8e8bf0d7a4c3f2ee051e6f"
  },
  {
    "url": "miniGame/resource/assets/ToggleSwitch/rank/auth_player_2.png",
    "revision": "3e9ccbf73a9ef17c0e1d705705870cec"
  },
  {
    "url": "miniGame/resource/assets/ToggleSwitch/rank/auth_rate_1.png",
    "revision": "3cbf4114bf67b6634035a65afcc737a4"
  },
  {
    "url": "miniGame/resource/assets/ToggleSwitch/rank/auth_rate_2.png",
    "revision": "4fc0c7de9e6066f6cec5510f4132f49c"
  },
  {
    "url": "miniGame/resource/assets/ToggleSwitch/rank/btn-role.png",
    "revision": "996c2920f9f51c3cbf2437d7805b4605"
  },
  {
    "url": "miniGame/resource/assets/ToggleSwitch/rank/btn-role2.png",
    "revision": "f1803b5859dbf617a143e2260a28c23d"
  },
  {
    "url": "miniGame/resource/assets/ToggleSwitch/rank/fang1.png",
    "revision": "8d806d466cbd8a01f6c14361583e6b16"
  },
  {
    "url": "miniGame/resource/assets/ToggleSwitch/rank/fang2.png",
    "revision": "05544c21bbc31fb1c3f1cb01fc4b108e"
  },
  {
    "url": "miniGame/resource/assets/ToggleSwitch/rank/game6_1.png",
    "revision": "3f10a4d372c495dee492190af0d36cb7"
  },
  {
    "url": "miniGame/resource/assets/ToggleSwitch/rank/game6_2.png",
    "revision": "c87aecfaca6faafcff4cd9216138bcf3"
  },
  {
    "url": "miniGame/resource/assets/ToggleSwitch/rank/game7_1.png",
    "revision": "c6ffcf39fa364638323e951fc83501a2"
  },
  {
    "url": "miniGame/resource/assets/ToggleSwitch/rank/game7_2.png",
    "revision": "66c8268dee8e56159a30445667e25613"
  },
  {
    "url": "miniGame/resource/assets/ToggleSwitch/rank/game8_1.png",
    "revision": "12c036690d55dd3c036d286485e41dc6"
  },
  {
    "url": "miniGame/resource/assets/ToggleSwitch/rank/game8_2.png",
    "revision": "bc9b01784e37efd933128d84e40b8864"
  },
  {
    "url": "miniGame/resource/assets/ToggleSwitch/rank/huang1.png",
    "revision": "e3088816bb9d6641db691320f0168f92"
  },
  {
    "url": "miniGame/resource/assets/ToggleSwitch/rank/huang2.png",
    "revision": "7c2d15ecee39851bbf3dba13198e7e3c"
  },
  {
    "url": "miniGame/resource/assets/ToggleSwitch/rank/ji1.png",
    "revision": "9cfe4aad0763853d19deaa40a3648f40"
  },
  {
    "url": "miniGame/resource/assets/ToggleSwitch/rank/ji2.png",
    "revision": "e6af50f4030b0ec215dec3e9f0a2576b"
  },
  {
    "url": "miniGame/resource/assets/ToggleSwitch/rank/jushu1.png",
    "revision": "ed0ac271d31b7c45c54ab4c129565d2c"
  },
  {
    "url": "miniGame/resource/assets/ToggleSwitch/rank/jushu2.png",
    "revision": "4b6d8f1f39cceb8c1741890e046de637"
  },
  {
    "url": "miniGame/resource/assets/ToggleSwitch/rank/lao1.png",
    "revision": "d2cc176fd90d3e6a3f6f0eb880f2008e"
  },
  {
    "url": "miniGame/resource/assets/ToggleSwitch/rank/lao2.png",
    "revision": "cc681196a8abc5de41a8601057a105d5"
  },
  {
    "url": "miniGame/resource/assets/ToggleSwitch/rank/mu1.png",
    "revision": "51d0c331e7a3ec7c8203ed2508702007"
  },
  {
    "url": "miniGame/resource/assets/ToggleSwitch/rank/mu2.png",
    "revision": "691d273dd507276ff61d6d44bd6483e0"
  },
  {
    "url": "miniGame/resource/assets/ToggleSwitch/rank/team_lao_3.png",
    "revision": "aa20fcf5143e7fc16d36618df3c0a2bb"
  },
  {
    "url": "miniGame/resource/assets/ToggleSwitch/rank/team_lao_4.png",
    "revision": "67a40470dcd4a2abf38bc1b91ee1d160"
  },
  {
    "url": "miniGame/resource/assets/ToggleSwitch/rank/team_xu_3.png",
    "revision": "a270fb1bc2662f28a3c1fa77829c456e"
  },
  {
    "url": "miniGame/resource/assets/ToggleSwitch/rank/team_xu_4.png",
    "revision": "dac16c89700ad34ee3850106655715b5"
  },
  {
    "url": "miniGame/resource/assets/ToggleSwitch/rank/total_play_1.png",
    "revision": "41021f8b667c68384ce44198e6c93a8f"
  },
  {
    "url": "miniGame/resource/assets/ToggleSwitch/rank/total_play_2.png",
    "revision": "7aae8d1c7073cbec73ef078b588359fa"
  },
  {
    "url": "miniGame/resource/assets/ToggleSwitch/rank/total_rate_1.png",
    "revision": "ab1e5aa223b95f86af855d86baa244a8"
  },
  {
    "url": "miniGame/resource/assets/ToggleSwitch/rank/total_rate_2.png",
    "revision": "3ef537f4b0903ba1d248222c45ce4a37"
  },
  {
    "url": "miniGame/resource/assets/ToggleSwitch/rank/win_rate_1.png",
    "revision": "957b3c217bbb99c40fc06ac261559810"
  },
  {
    "url": "miniGame/resource/assets/ToggleSwitch/rank/win_rate_2.png",
    "revision": "394f6f88ef0ea198392b38c5e47f816d"
  },
  {
    "url": "miniGame/resource/assets/ToggleSwitch/rank/xu1.png",
    "revision": "b6a1d27a2928c12566ea89d790b2e82c"
  },
  {
    "url": "miniGame/resource/assets/ToggleSwitch/rank/xu2.png",
    "revision": "aea4bde60b5167e65217b26381e25c84"
  },
  {
    "url": "miniGame/resource/assets/ToggleSwitch/rank/yao1.png",
    "revision": "d272afc711a309c973a668989286be30"
  },
  {
    "url": "miniGame/resource/assets/ToggleSwitch/rank/yao2.png",
    "revision": "ccebfb4fee8b3bb79c1c6a0fb3dd530d"
  },
  {
    "url": "miniGame/resource/assets/ToggleSwitch/rank/zheng1.png",
    "revision": "50f9036f9dd557ee951678c613337adc"
  },
  {
    "url": "miniGame/resource/assets/ToggleSwitch/rank/zheng2.png",
    "revision": "925c32962a533dc4a2c7dbbe2c5ec7ac"
  },
  {
    "url": "miniGame/resource/config/antiques.json",
    "revision": "934c91d6398d7317a88aa01276cc2b1c"
  },
  {
    "url": "miniGame/resource/config/clubs.json",
    "revision": "fd38e628d9dd204639988510eb6e49df"
  },
  {
    "url": "miniGame/resource/config/description.json",
    "revision": "53ec3cea96670c9e36a683e0842ad67b"
  },
  {
    "url": "miniGame/resource/config/game-term.json",
    "revision": "e7c04b454647d3368ea904004e1996af"
  },
  {
    "url": "miniGame/resource/config/photon.json",
    "revision": "badf85c277c401bd73bcc284a10aae30"
  },
  {
    "url": "miniGame/resource/config/rank.json",
    "revision": "ef7484edec56d7299e0fa66734a1e16b"
  },
  {
    "url": "miniGame/resource/config/role.json",
    "revision": "f77f1b695f2c32e81df6d9fa93cd5193"
  },
  {
    "url": "miniGame/resource/config/seats.json",
    "revision": "e2be56369847ad41954419ef1644f96b"
  },
  {
    "url": "miniGame/resource/default.res.json",
    "revision": "776447d25d1dbef4e716dab7fe0a2a3b"
  },
  {
    "url": "miniGame/resource/default.thm.json",
    "revision": "2db202ac33c20dff67ee15cfe41a5749"
  },
  {
    "url": "miniGame/resource/gameEui.json",
    "revision": "99914b932bd37a50b983c5e7c90ae93b"
  },
  {
    "url": "resource/assets/background/start-background.png",
    "revision": "f0d99f3bc1e6d25af23c03ab01ab17a1"
  },
  {
    "url": "resource/assets/bg.jpg",
    "revision": "bfbd6002c35cd2bfa99ec5333c2e28f7"
  },
  {
    "url": "resource/assets/Button/auth3.png",
    "revision": "39f799ded21e48f183b8c4870a6599ba"
  },
  {
    "url": "resource/assets/Button/auth4.png",
    "revision": "e1b8a1a6bd3408b20bdbd5dcd2ef8a15"
  },
  {
    "url": "resource/assets/Button/btn-back.png",
    "revision": "ce5b26d945087e58aa6a1bee2d1348c0"
  },
  {
    "url": "resource/assets/Button/button_down.png",
    "revision": "878334d13048afd6b6b061e8b156dadb"
  },
  {
    "url": "resource/assets/Button/button_up.png",
    "revision": "a6341a65c7155a4edbbf1f39bc7932d9"
  },
  {
    "url": "resource/assets/Button/cancel.png",
    "revision": "92692ac870251779fd12cab48543666b"
  },
  {
    "url": "resource/assets/Button/cancel2.png",
    "revision": "91dcdd0c95821ef8e4dfbddfd2c2364a"
  },
  {
    "url": "resource/assets/Button/enter_info.png",
    "revision": "48f4819433b1b6f05bb94847ab72d75c"
  },
  {
    "url": "resource/assets/Button/ok_2.png",
    "revision": "92a01ba18f1b604e5b1ad82273a5b88b"
  },
  {
    "url": "resource/assets/Button/ok.png",
    "revision": "f9665718654c12da77fb196d22ab57f0"
  },
  {
    "url": "resource/assets/Button/ok2.png",
    "revision": "02ab55968f5924a4649bc14d0f737234"
  },
  {
    "url": "resource/assets/Button/ok3.png",
    "revision": "a9e28f827bb2f797ef15278c1f86dd7a"
  },
  {
    "url": "resource/assets/Button/ok4.png",
    "revision": "e9480f43ea914d4130c727ca5d82013a"
  },
  {
    "url": "resource/assets/Button/skip.png",
    "revision": "f3fc4ea9bebe43fcc266003c293eb31c"
  },
  {
    "url": "resource/assets/Button/skip2.png",
    "revision": "0a515d8040cdbef7a0ceefd228afa0ea"
  },
  {
    "url": "resource/assets/Button/start.png",
    "revision": "31a881a2d229a2aee65fa9055bd5d421"
  },
  {
    "url": "resource/assets/Button/talk_over.png",
    "revision": "718486c0978c365efb4cc2e845d9da67"
  },
  {
    "url": "resource/assets/Button/vote_over.png",
    "revision": "e592af970ee9e362e1b096fa755e4924"
  },
  {
    "url": "resource/assets/CheckBox/checkbox_select_disabled.png",
    "revision": "dd9aa43f0bf6cbb969f7cfa238734ee9"
  },
  {
    "url": "resource/assets/CheckBox/checkbox_select_down.png",
    "revision": "71e5f029838a1b6ffc11198097555e4b"
  },
  {
    "url": "resource/assets/CheckBox/checkbox_select_up.png",
    "revision": "68a00c5f12172b1a2f658925d69a998b"
  },
  {
    "url": "resource/assets/CheckBox/checkbox_unselect.png",
    "revision": "2ffa97740e6d6ea0b005b4465255b098"
  },
  {
    "url": "resource/assets/config/role.json",
    "revision": "83881fcf4a679aa1741ef206e1972ca1"
  },
  {
    "url": "resource/assets/egret_icon.png",
    "revision": "d7c7550013fbcae72390f7ce17c78e19"
  },
  {
    "url": "resource/assets/game/auth2.png",
    "revision": "ade72753bd226833c3d5cc62ae0f2eb1"
  },
  {
    "url": "resource/assets/game/bg2.png",
    "revision": "5a5a314aeeae9b86211c677c4124e4bb"
  },
  {
    "url": "resource/assets/game/bg3.png",
    "revision": "6a7e6dcee2af4734751479a511b25152"
  },
  {
    "url": "resource/assets/game/enter-info.png",
    "revision": "48f4819433b1b6f05bb94847ab72d75c"
  },
  {
    "url": "resource/assets/game/false.png",
    "revision": "b2547662a4a05ded0ba46336e98d8699"
  },
  {
    "url": "resource/assets/game/game-box-border.png",
    "revision": "1c2b9a478d12f6e639a5acfcd86b17c0"
  },
  {
    "url": "resource/assets/game/role1.png",
    "revision": "af597bf6db55b107986730982110920c"
  },
  {
    "url": "resource/assets/game/role2.png",
    "revision": "c2146ad42888f88027ed57bcb5d277bb"
  },
  {
    "url": "resource/assets/game/role3.png",
    "revision": "8f02fc0df5efea4dcaf124463e99b889"
  },
  {
    "url": "resource/assets/game/role4-5.png",
    "revision": "99cb09e3f8b2b2a562695392695ccdc6"
  },
  {
    "url": "resource/assets/game/role6.png",
    "revision": "3e4c3f7108b96c80d55d4de193d57294"
  },
  {
    "url": "resource/assets/game/role7.png",
    "revision": "895d6bd10aec7337deaee7983da6d22c"
  },
  {
    "url": "resource/assets/game/role8.png",
    "revision": "db46b2c42aa8f4a7f860c368acea7310"
  },
  {
    "url": "resource/assets/game/round1.png",
    "revision": "866ab0a48e35312db373d9adaafe2c97"
  },
  {
    "url": "resource/assets/game/round2.png",
    "revision": "897b6b7daabd75d7ae43bf0f96880b5c"
  },
  {
    "url": "resource/assets/game/round3.png",
    "revision": "e89de3c80ac9ece5b4975279df1e0222"
  },
  {
    "url": "resource/assets/game/self_info.png",
    "revision": "8192dbd28cdada960794fe565e7efe42"
  },
  {
    "url": "resource/assets/game/t1.png",
    "revision": "475f7e7cc8121adfb4f299d67eb140a0"
  },
  {
    "url": "resource/assets/game/t10.png",
    "revision": "b0ff26d51b3294590975cc10934b13bd"
  },
  {
    "url": "resource/assets/game/t11.png",
    "revision": "0094f08f275cef494f314ef735e40b74"
  },
  {
    "url": "resource/assets/game/t12.png",
    "revision": "1fd0e2215621e5578aca48643501a540"
  },
  {
    "url": "resource/assets/game/t2.png",
    "revision": "5a9ece163e8c4b166995d83f91955307"
  },
  {
    "url": "resource/assets/game/t3.png",
    "revision": "b98a9adf1433726c3cc070c497439e0a"
  },
  {
    "url": "resource/assets/game/t4.png",
    "revision": "0600376f70e4e69e253856e06b7090d3"
  },
  {
    "url": "resource/assets/game/t5.png",
    "revision": "831a5baa101eecb2908ce8c95f00aeeb"
  },
  {
    "url": "resource/assets/game/t6.png",
    "revision": "4e13d79abeb673ca6c64a90ff30e17d7"
  },
  {
    "url": "resource/assets/game/t7.png",
    "revision": "062a9bba6db72674a2fdc09385cdf855"
  },
  {
    "url": "resource/assets/game/t8.png",
    "revision": "df216c1c2c1245a4952939c067aad2dd"
  },
  {
    "url": "resource/assets/game/t9.png",
    "revision": "4ee9d3bc6f6e44cbc0530696338c125e"
  },
  {
    "url": "resource/assets/game/true.png",
    "revision": "b5e3071b9ba88a9ca312b59f877c9fd9"
  },
  {
    "url": "resource/assets/game/wait-1-players-enough.png",
    "revision": "c0129e4da3e2b237f74faa647f7d074c"
  },
  {
    "url": "resource/assets/game/wait-2-master-confirm.png",
    "revision": "62a4984278069f28160f83ef89debfd6"
  },
  {
    "url": "resource/assets/game/wait-3-set-identity.png",
    "revision": "d52193cdb12df28351072a216764a62c"
  },
  {
    "url": "resource/assets/game/wait-4-others-process.png",
    "revision": "2e602a9dad7c2bb7092497e157f944a5"
  },
  {
    "url": "resource/assets/game/wait-5-vote.png",
    "revision": "1d31e6f6317ef91770e69367841594ad"
  },
  {
    "url": "resource/assets/game/wait-6-others-vote.png",
    "revision": "6bf555f307b06b9fa3b329398f8dee33"
  },
  {
    "url": "resource/assets/ItemRenderer/rank/rank_bg.png",
    "revision": "5a5a314aeeae9b86211c677c4124e4bb"
  },
  {
    "url": "resource/assets/ItemRenderer/rank/rank1.png",
    "revision": "5a39a8365bec76a50868fae65874982e"
  },
  {
    "url": "resource/assets/ItemRenderer/rank/rank2.png",
    "revision": "3716ae6b60a0eabd7e3b4fdd98369b48"
  },
  {
    "url": "resource/assets/ItemRenderer/rank/rank3.png",
    "revision": "944687d6263d7e53bccdbf7e64b28dc8"
  },
  {
    "url": "resource/assets/ItemRenderer/rank/sep.png",
    "revision": "e91f34370922f8c6718ab2dff4b09bb7"
  },
  {
    "url": "resource/assets/ItemRenderer/selected.png",
    "revision": "94efb85255bad50f4b5c1b44f7190d0d"
  },
  {
    "url": "resource/assets/loading/loading-background.png",
    "revision": "0e8af8e59d0343b2f9d86adf175bab54"
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
    "url": "resource/assets/myInfo/meihua.png",
    "revision": "d0cc8454d7159b47c51ce93ee2cd594c"
  },
  {
    "url": "resource/assets/myInfo/room6.png",
    "revision": "45ced5b0e43203a75e86648b76dfecca"
  },
  {
    "url": "resource/assets/myInfo/room7.png",
    "revision": "1222f59a7990873c6195a1164918d3f9"
  },
  {
    "url": "resource/assets/myInfo/room8.png",
    "revision": "109b843cd526160af56147f95f3a19c6"
  },
  {
    "url": "resource/assets/myInfo/score2.png",
    "revision": "2ae679f8b8a695e2ab476df9ba750504"
  },
  {
    "url": "resource/assets/myInfo/team_lao_2.png",
    "revision": "3cd02651174a202b1f14d6b577ae140f"
  },
  {
    "url": "resource/assets/myInfo/team_xu_2.png",
    "revision": "0bb2c92c3100929a71f4ed495f5e78d8"
  },
  {
    "url": "resource/assets/myInfo/win_rate.png",
    "revision": "41cb73e1bdda5ff239bedd1b42939c8e"
  },
  {
    "url": "resource/assets/Panel/about.png",
    "revision": "2d19ef9f397c0bda02649c75f2db7420"
  },
  {
    "url": "resource/assets/Panel/border.png",
    "revision": "a4ff3e088a39fef12556e404e768244a"
  },
  {
    "url": "resource/assets/Panel/header.png",
    "revision": "46c313e8c024d3bf069767075842b713"
  },
  {
    "url": "resource/assets/Panel/setting2.png",
    "revision": "dc77d4a7945e88613c7fe5dd2e59e856"
  },
  {
    "url": "resource/assets/ProgressBar/thumb_pb.png",
    "revision": "903295905d99cabc4c2b679959d55373"
  },
  {
    "url": "resource/assets/ProgressBar/track_pb.png",
    "revision": "60e6154d678d5e516dfe3f84b47dd894"
  },
  {
    "url": "resource/assets/RadioButton/black_2.png",
    "revision": "0e0c2d1be3f6e36d6c21a57c936e550a"
  },
  {
    "url": "resource/assets/RadioButton/radiobutton_select_disabled.png",
    "revision": "725d226305491301ca8cce8aa68d08d6"
  },
  {
    "url": "resource/assets/RadioButton/radiobutton_select_down.png",
    "revision": "725d226305491301ca8cce8aa68d08d6"
  },
  {
    "url": "resource/assets/RadioButton/radiobutton_select_up.png",
    "revision": "bf16aacfe9b30037835e1c6482eee507"
  },
  {
    "url": "resource/assets/RadioButton/radiobutton_unselect.png",
    "revision": "cd40270b37ab3a5248ea2c61f883934c"
  },
  {
    "url": "resource/assets/RadioButton/white_2.png",
    "revision": "63d3278082ee7a9fd4bc318e5de0755d"
  },
  {
    "url": "resource/assets/ScrollBar/roundthumb.png",
    "revision": "5f550ff68f1240501f035fdc0eda0843"
  },
  {
    "url": "resource/assets/ScrollBar/track_sb.png",
    "revision": "541048214115efe2a7a2750cde6b4e54"
  },
  {
    "url": "resource/assets/seat/avatar-background.png",
    "revision": "a256e3641466f8a6a9b0b1fb546fd043"
  },
  {
    "url": "resource/assets/seat/back_2.png",
    "revision": "0d4b01e6ccc15c51b1579d0bb070cb67"
  },
  {
    "url": "resource/assets/seat/btn-confirm.png",
    "revision": "7b8dc5016ae0f439979259a44e2b128f"
  },
  {
    "url": "resource/assets/seat/btn-help.png",
    "revision": "bab7c66cdbbb7a8626c023c2f1ac20aa"
  },
  {
    "url": "resource/assets/seat/btn-input-identity.png",
    "revision": "d6f0f7bcb008ea569f4f24bb2bb0c8c8"
  },
  {
    "url": "resource/assets/seat/color-black.png",
    "revision": "cd2be19de703f80685856082818ae5f3"
  },
  {
    "url": "resource/assets/seat/color-blue.png",
    "revision": "08899c1b11421147cd575b28d7f416ca"
  },
  {
    "url": "resource/assets/seat/color-green.png",
    "revision": "171f2e647ad7135a4985a28423a0af2b"
  },
  {
    "url": "resource/assets/seat/color-orange.png",
    "revision": "010b7720357059f0ef56417e5abe41d4"
  },
  {
    "url": "resource/assets/seat/color-purple.png",
    "revision": "26782d320af055693a2784a5cb500f85"
  },
  {
    "url": "resource/assets/seat/color-red.png",
    "revision": "82ebb7573e70eb1e61bd5be302c42551"
  },
  {
    "url": "resource/assets/seat/color-white.png",
    "revision": "1a3010fa5bc040b27232f3433ff80a6c"
  },
  {
    "url": "resource/assets/seat/color-yellow.png",
    "revision": "2479e7cef9e46cab62ccf30d65192756"
  },
  {
    "url": "resource/assets/seat/game-init-background.png",
    "revision": "e0c67ebfb31cfb049f6323a30ee768df"
  },
  {
    "url": "resource/assets/seat/master-avatar-background.png",
    "revision": "cd30a4ed721b04fb885c9b8c7e4d5ab2"
  },
  {
    "url": "resource/assets/seat/seat-background.png",
    "revision": "3b6b50109cd1c15c73f98ea9b09f4f8d"
  },
  {
    "url": "resource/assets/seat/self-mark.png",
    "revision": "a8963fdddab780c34174943f28539c82"
  },
  {
    "url": "resource/assets/seat/waiting-for-all-ready.png",
    "revision": "8c7cadec0ddf7389d92ee1a9254c42f0"
  },
  {
    "url": "resource/assets/seat/waiting-for-master-start.png",
    "revision": "e1b53ed1d46c6b07c33a983da82edd00"
  },
  {
    "url": "resource/assets/shared/close.png",
    "revision": "237640de87e3a894945b5c0805fd3a4a"
  },
  {
    "url": "resource/assets/shared/small-dialog-background.png",
    "revision": "c5fc6e4b6311f326ae773f611fb64473"
  },
  {
    "url": "resource/assets/Slider/thumb.png",
    "revision": "ac46ad4174244342194e74667d57cf1d"
  },
  {
    "url": "resource/assets/Slider/track.png",
    "revision": "541048214115efe2a7a2750cde6b4e54"
  },
  {
    "url": "resource/assets/Slider/tracklight.png",
    "revision": "5f550ff68f1240501f035fdc0eda0843"
  },
  {
    "url": "resource/assets/start/btn-board.png",
    "revision": "d4905fae28b5136dfdf929269ec2eda3"
  },
  {
    "url": "resource/assets/start/btn-create-small.png",
    "revision": "6272db90dfd12649e4d201126f3523a6"
  },
  {
    "url": "resource/assets/start/btn-create.png",
    "revision": "3237d088f29e455142a141b38e6643cc"
  },
  {
    "url": "resource/assets/start/btn-guide.png",
    "revision": "39b31e9184df43aae663369e179a7dda"
  },
  {
    "url": "resource/assets/start/btn-join-small.png",
    "revision": "9e0a327037416075197d07a4ff5e9c29"
  },
  {
    "url": "resource/assets/start/btn-join.png",
    "revision": "69a066270405ca1c83861e4f274f64d3"
  },
  {
    "url": "resource/assets/start/btn-rank.png",
    "revision": "8127ead63ab0b87531c10613808b9edc"
  },
  {
    "url": "resource/assets/start/btn-settings.png",
    "revision": "11610d8752bf28accf9eba6bf9893dce"
  },
  {
    "url": "resource/assets/start/btn-share.png",
    "revision": "f0cfaf1938c75bf27d385e749112a1c1"
  },
  {
    "url": "resource/assets/start/userinfo-background.png",
    "revision": "b9b8c49526e06baf6f7febf7f8d9ca63"
  },
  {
    "url": "resource/assets/ToggleSwitch/handle.png",
    "revision": "1b0a0f006c66a7264ab62a897076bd12"
  },
  {
    "url": "resource/assets/ToggleSwitch/off.png",
    "revision": "808df10161bd36abd6600f16e131aca3"
  },
  {
    "url": "resource/assets/ToggleSwitch/on.png",
    "revision": "1dccf23d316f65d77c6497d3de987b1d"
  },
  {
    "url": "resource/assets/ToggleSwitch/rank/auth_player_1.png",
    "revision": "f9bdaacf4c8e8bf0d7a4c3f2ee051e6f"
  },
  {
    "url": "resource/assets/ToggleSwitch/rank/auth_player_2.png",
    "revision": "3e9ccbf73a9ef17c0e1d705705870cec"
  },
  {
    "url": "resource/assets/ToggleSwitch/rank/auth_rate_1.png",
    "revision": "3cbf4114bf67b6634035a65afcc737a4"
  },
  {
    "url": "resource/assets/ToggleSwitch/rank/auth_rate_2.png",
    "revision": "4fc0c7de9e6066f6cec5510f4132f49c"
  },
  {
    "url": "resource/assets/ToggleSwitch/rank/btn-role.png",
    "revision": "996c2920f9f51c3cbf2437d7805b4605"
  },
  {
    "url": "resource/assets/ToggleSwitch/rank/btn-role2.png",
    "revision": "f1803b5859dbf617a143e2260a28c23d"
  },
  {
    "url": "resource/assets/ToggleSwitch/rank/fang1.png",
    "revision": "8d806d466cbd8a01f6c14361583e6b16"
  },
  {
    "url": "resource/assets/ToggleSwitch/rank/fang2.png",
    "revision": "05544c21bbc31fb1c3f1cb01fc4b108e"
  },
  {
    "url": "resource/assets/ToggleSwitch/rank/game6_1.png",
    "revision": "3f10a4d372c495dee492190af0d36cb7"
  },
  {
    "url": "resource/assets/ToggleSwitch/rank/game6_2.png",
    "revision": "c87aecfaca6faafcff4cd9216138bcf3"
  },
  {
    "url": "resource/assets/ToggleSwitch/rank/game7_1.png",
    "revision": "c6ffcf39fa364638323e951fc83501a2"
  },
  {
    "url": "resource/assets/ToggleSwitch/rank/game7_2.png",
    "revision": "66c8268dee8e56159a30445667e25613"
  },
  {
    "url": "resource/assets/ToggleSwitch/rank/game8_1.png",
    "revision": "12c036690d55dd3c036d286485e41dc6"
  },
  {
    "url": "resource/assets/ToggleSwitch/rank/game8_2.png",
    "revision": "bc9b01784e37efd933128d84e40b8864"
  },
  {
    "url": "resource/assets/ToggleSwitch/rank/huang1.png",
    "revision": "e3088816bb9d6641db691320f0168f92"
  },
  {
    "url": "resource/assets/ToggleSwitch/rank/huang2.png",
    "revision": "7c2d15ecee39851bbf3dba13198e7e3c"
  },
  {
    "url": "resource/assets/ToggleSwitch/rank/ji1.png",
    "revision": "9cfe4aad0763853d19deaa40a3648f40"
  },
  {
    "url": "resource/assets/ToggleSwitch/rank/ji2.png",
    "revision": "e6af50f4030b0ec215dec3e9f0a2576b"
  },
  {
    "url": "resource/assets/ToggleSwitch/rank/jushu1.png",
    "revision": "ed0ac271d31b7c45c54ab4c129565d2c"
  },
  {
    "url": "resource/assets/ToggleSwitch/rank/jushu2.png",
    "revision": "4b6d8f1f39cceb8c1741890e046de637"
  },
  {
    "url": "resource/assets/ToggleSwitch/rank/lao1.png",
    "revision": "d2cc176fd90d3e6a3f6f0eb880f2008e"
  },
  {
    "url": "resource/assets/ToggleSwitch/rank/lao2.png",
    "revision": "cc681196a8abc5de41a8601057a105d5"
  },
  {
    "url": "resource/assets/ToggleSwitch/rank/mu1.png",
    "revision": "51d0c331e7a3ec7c8203ed2508702007"
  },
  {
    "url": "resource/assets/ToggleSwitch/rank/mu2.png",
    "revision": "691d273dd507276ff61d6d44bd6483e0"
  },
  {
    "url": "resource/assets/ToggleSwitch/rank/team_lao_3.png",
    "revision": "aa20fcf5143e7fc16d36618df3c0a2bb"
  },
  {
    "url": "resource/assets/ToggleSwitch/rank/team_lao_4.png",
    "revision": "67a40470dcd4a2abf38bc1b91ee1d160"
  },
  {
    "url": "resource/assets/ToggleSwitch/rank/team_xu_3.png",
    "revision": "a270fb1bc2662f28a3c1fa77829c456e"
  },
  {
    "url": "resource/assets/ToggleSwitch/rank/team_xu_4.png",
    "revision": "dac16c89700ad34ee3850106655715b5"
  },
  {
    "url": "resource/assets/ToggleSwitch/rank/total_play_1.png",
    "revision": "41021f8b667c68384ce44198e6c93a8f"
  },
  {
    "url": "resource/assets/ToggleSwitch/rank/total_play_2.png",
    "revision": "7aae8d1c7073cbec73ef078b588359fa"
  },
  {
    "url": "resource/assets/ToggleSwitch/rank/total_rate_1.png",
    "revision": "ab1e5aa223b95f86af855d86baa244a8"
  },
  {
    "url": "resource/assets/ToggleSwitch/rank/total_rate_2.png",
    "revision": "3ef537f4b0903ba1d248222c45ce4a37"
  },
  {
    "url": "resource/assets/ToggleSwitch/rank/win_rate_1.png",
    "revision": "957b3c217bbb99c40fc06ac261559810"
  },
  {
    "url": "resource/assets/ToggleSwitch/rank/win_rate_2.png",
    "revision": "394f6f88ef0ea198392b38c5e47f816d"
  },
  {
    "url": "resource/assets/ToggleSwitch/rank/xu1.png",
    "revision": "b6a1d27a2928c12566ea89d790b2e82c"
  },
  {
    "url": "resource/assets/ToggleSwitch/rank/xu2.png",
    "revision": "aea4bde60b5167e65217b26381e25c84"
  },
  {
    "url": "resource/assets/ToggleSwitch/rank/yao1.png",
    "revision": "d272afc711a309c973a668989286be30"
  },
  {
    "url": "resource/assets/ToggleSwitch/rank/yao2.png",
    "revision": "ccebfb4fee8b3bb79c1c6a0fb3dd530d"
  },
  {
    "url": "resource/assets/ToggleSwitch/rank/zheng1.png",
    "revision": "50f9036f9dd557ee951678c613337adc"
  },
  {
    "url": "resource/assets/ToggleSwitch/rank/zheng2.png",
    "revision": "925c32962a533dc4a2c7dbbe2c5ec7ac"
  },
  {
    "url": "resource/config/description.json",
    "revision": "53ec3cea96670c9e36a683e0842ad67b"
  },
  {
    "url": "resource/default.res.json",
    "revision": "2edd204e39d6071554c684c214bb6514"
  },
  {
    "url": "resource/default.thm.json",
    "revision": "94bdef914cc26cee491f118610d36c6d"
  },
  {
    "url": "resource/gameEui.json",
    "revision": "99914b932bd37a50b983c5e7c90ae93b"
  },
  {
    "url": "stylesheets/style.css",
    "revision": "d88b6fc51036cea4ea659b304568e088"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
