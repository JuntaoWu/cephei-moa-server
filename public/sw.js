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
    "url": "js/default.thm_c1c4f139.js",
    "revision": "6bc941521e36419cd0b031aeacaf8ec7"
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
    "url": "js/main.min_8943ba1a.js",
    "revision": "0bbaa3ce81364fb3890869377dafb875"
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
    "revision": "853e09021df6c22963ad74c56e0c72d8"
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
    "url": "miniGame/resource/assets/background/three-kingdoms-bg.png",
    "revision": "14731f83beef15bb7ba2806e4bf79e37"
  },
  {
    "url": "miniGame/resource/assets/bg.jpg",
    "revision": "bfbd6002c35cd2bfa99ec5333c2e28f7"
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
    "url": "miniGame/resource/assets/Button/btn-wxlogin.png",
    "revision": "538805a3cc1776e45457a806c391837d"
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
    "url": "miniGame/resource/assets/Button/ok.png",
    "revision": "f9665718654c12da77fb196d22ab57f0"
  },
  {
    "url": "miniGame/resource/assets/Button/ok3.png",
    "revision": "a9e28f827bb2f797ef15278c1f86dd7a"
  },
  {
    "url": "miniGame/resource/assets/Button/share2.png",
    "revision": "adb390f96e77668f0fa70ee97ed490dc"
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
    "url": "miniGame/resource/assets/club/club_box.png",
    "revision": "09d7e7fb4b27f0abf2aaa678348548cc"
  },
  {
    "url": "miniGame/resource/assets/club/club_results.png",
    "revision": "2218188b45e2f062ab2ef5186fe48005"
  },
  {
    "url": "miniGame/resource/assets/club/club-icon.json",
    "revision": "ef0e70484865f1616f413ad3e3529d7b"
  },
  {
    "url": "miniGame/resource/assets/club/club-icon.png",
    "revision": "56b45de0ad6766886bf77c7a86476d93"
  },
  {
    "url": "miniGame/resource/assets/club/club-icon2.json",
    "revision": "a4e4645873311ca1a0136655013d6eae"
  },
  {
    "url": "miniGame/resource/assets/club/club-icon2.png",
    "revision": "927ecd85c3e14dd9e5e9856288989722"
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
    "url": "miniGame/resource/assets/game/antiques.json",
    "revision": "e2c602d75ef201b86304482f420d54af"
  },
  {
    "url": "miniGame/resource/assets/game/antiques.png",
    "revision": "67c32693d56a7261e1c6c6e29a80adf3"
  },
  {
    "url": "miniGame/resource/assets/game/game-botton.json",
    "revision": "eb2cd6a9cb5bd90d432060794527c165"
  },
  {
    "url": "miniGame/resource/assets/game/game-botton.png",
    "revision": "e48c549eb1b644813b8f7973cdc5769d"
  },
  {
    "url": "miniGame/resource/assets/game/game-box-border.png",
    "revision": "1c2b9a478d12f6e639a5acfcd86b17c0"
  },
  {
    "url": "miniGame/resource/assets/game/game-icon.json",
    "revision": "436f57c04fa6a2ae26c62031063c2a84"
  },
  {
    "url": "miniGame/resource/assets/game/game-icon.png",
    "revision": "23c99e12e910a9d158cdd31b7361d403"
  },
  {
    "url": "miniGame/resource/assets/game/number.png",
    "revision": "349cb10e4e7e04c0d13a7a79dfa59483"
  },
  {
    "url": "miniGame/resource/assets/game/role.json",
    "revision": "cd70d8018506217f0131cb5e37c6a49a"
  },
  {
    "url": "miniGame/resource/assets/game/role.png",
    "revision": "cc8fb3832774026fd37ef15820449649"
  },
  {
    "url": "miniGame/resource/assets/game/wait-status.json",
    "revision": "6e7c124508b4159046b8f63a551aa233"
  },
  {
    "url": "miniGame/resource/assets/game/wait-status.png",
    "revision": "f5531017a90179cb3d59f759d2abf326"
  },
  {
    "url": "miniGame/resource/assets/guide/guide.json",
    "revision": "9482f953d2d1d3b379c69b26338f1843"
  },
  {
    "url": "miniGame/resource/assets/guide/guide.png",
    "revision": "fdd4974946871b98695890e9c24a682c"
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
    "url": "miniGame/resource/assets/guide/manual41.png",
    "revision": "0c81b0b30bfd631463989bdfe31f4af0"
  },
  {
    "url": "miniGame/resource/assets/guide/video.json",
    "revision": "78440ae4c6ea755eb08b42a9cb5d48c0"
  },
  {
    "url": "miniGame/resource/assets/guide/video.png",
    "revision": "658ecf85804af99346fbbbb88c987f0a"
  },
  {
    "url": "miniGame/resource/assets/ItemRenderer/rank/rank-icon.json",
    "revision": "2a505f5d09e616fafb3101a00e5a7f91"
  },
  {
    "url": "miniGame/resource/assets/ItemRenderer/rank/rank-icon.png",
    "revision": "7a255e7352c71daa758290aa08877abc"
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
    "url": "miniGame/resource/assets/myInfo/self-info.json",
    "revision": "b6cc1d82e94da228090a44565e0377df"
  },
  {
    "url": "miniGame/resource/assets/myInfo/self-info.png",
    "revision": "f02a18bacf0cd30e290e367d30d1d833"
  },
  {
    "url": "miniGame/resource/assets/myInfo/tu.json",
    "revision": "a998e916e24908406a5f29cbd7e84400"
  },
  {
    "url": "miniGame/resource/assets/myInfo/tu.png",
    "revision": "90f52e0bd016ac699f63ae5c18287ed5"
  },
  {
    "url": "miniGame/resource/assets/numberKeyboard/number-keyboard-icon.json",
    "revision": "03150baf62ec9059f38a42f098f4f9a5"
  },
  {
    "url": "miniGame/resource/assets/numberKeyboard/number-keyboard-icon.png",
    "revision": "ac63e5f49aaaf4b37d9127be1b7423ac"
  },
  {
    "url": "miniGame/resource/assets/numberKeyboard/numberKeyboard.png",
    "revision": "d88e2a1c4d8f54290c4c7e7e1deb7491"
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
    "url": "miniGame/resource/assets/result/lose.png",
    "revision": "82f0ab76b56b997020f2494cfe10249a"
  },
  {
    "url": "miniGame/resource/assets/result/result.json",
    "revision": "536cf4a1407dbd395aaeed98792fa45a"
  },
  {
    "url": "miniGame/resource/assets/result/result.png",
    "revision": "e3ebbdccde0d851de72c41de46baf3a4"
  },
  {
    "url": "miniGame/resource/assets/result/result2.json",
    "revision": "c4830092497a4f665f6c6fbc96e2a971"
  },
  {
    "url": "miniGame/resource/assets/result/result2.png",
    "revision": "cd019394803ba19ed68f5fc3e35bdce4"
  },
  {
    "url": "miniGame/resource/assets/result/victory.png",
    "revision": "a19aeab2ad149bd792ce070312ff22af"
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
    "url": "miniGame/resource/assets/seat/btn-confirm.png",
    "revision": "7b8dc5016ae0f439979259a44e2b128f"
  },
  {
    "url": "miniGame/resource/assets/seat/circle.json",
    "revision": "d3c4a9f2447e487d2a404f6ca7d00d32"
  },
  {
    "url": "miniGame/resource/assets/seat/circle.png",
    "revision": "2604e69d6321facf005b729d73255a4d"
  },
  {
    "url": "miniGame/resource/assets/seat/game-init-background.png",
    "revision": "e0c67ebfb31cfb049f6323a30ee768df"
  },
  {
    "url": "miniGame/resource/assets/seat/seat-background.png",
    "revision": "3b6b50109cd1c15c73f98ea9b09f4f8d"
  },
  {
    "url": "miniGame/resource/assets/seat/seat.json",
    "revision": "621122b131848c11d23b04debe273fcc"
  },
  {
    "url": "miniGame/resource/assets/seat/seat.png",
    "revision": "b87b696f9c11af628de06c899d29fee4"
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
    "url": "miniGame/resource/assets/start/btn-view.png",
    "revision": "c2963777d52080a1399b8ba4a1a44c46"
  },
  {
    "url": "miniGame/resource/assets/start/game-bg.png",
    "revision": "ddadf8fb69b20e6470545ae5b3e5bc3b"
  },
  {
    "url": "miniGame/resource/assets/start/qrcode-img.jpg",
    "revision": "9ae6b961a595c03f41086ed35d45eabe"
  },
  {
    "url": "miniGame/resource/assets/start/qrcode-tk2048.jpg",
    "revision": "9ae6b961a595c03f41086ed35d45eabe"
  },
  {
    "url": "miniGame/resource/assets/start/start.json",
    "revision": "258016f4808ea396e6f4a67114c99c87"
  },
  {
    "url": "miniGame/resource/assets/start/start.png",
    "revision": "c0edd7c96979e40ba1581419d7d9e265"
  },
  {
    "url": "miniGame/resource/assets/start/title-more.png",
    "revision": "2b440caaa25b9b04402b315c24dd7d2c"
  },
  {
    "url": "miniGame/resource/assets/start/title-tanbao.png",
    "revision": "078dac6d068fa29615f7f491c655c45d"
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
    "url": "miniGame/resource/assets/ToggleSwitch/rank/rank-switch.json",
    "revision": "3fb34a62a0aed739601a32c24a0a8b37"
  },
  {
    "url": "miniGame/resource/assets/ToggleSwitch/rank/rank-switch.png",
    "revision": "54118cecb9b3e279eea92cb764f93ec4"
  },
  {
    "url": "miniGame/resource/config/antiques.json",
    "revision": "934c91d6398d7317a88aa01276cc2b1c"
  },
  {
    "url": "miniGame/resource/config/clubs.json",
    "revision": "a7d92fbce8212346d7ce2bdd3ed48ae0"
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
    "revision": "9ee304bbff81116b44fe85ab8cf01823"
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
    "revision": "060f51a4de061b8e9a3e910d0b99d52d"
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
    "url": "resource/assets/background/number-keyboard-bg.png",
    "revision": "d9b67b5588f7c12be9edc6d61b375de7"
  },
  {
    "url": "resource/assets/background/start-background.png",
    "revision": "f0d99f3bc1e6d25af23c03ab01ab17a1"
  },
  {
    "url": "resource/assets/background/three-kingdoms-bg.png",
    "revision": "14731f83beef15bb7ba2806e4bf79e37"
  },
  {
    "url": "resource/assets/bg.jpg",
    "revision": "bfbd6002c35cd2bfa99ec5333c2e28f7"
  },
  {
    "url": "resource/assets/Button/auth4.png",
    "revision": "e1b8a1a6bd3408b20bdbd5dcd2ef8a15"
  },
  {
    "url": "resource/assets/Button/botton.png",
    "revision": "88e6d6c2d45866d7011781e07d402033"
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
    "url": "resource/assets/Button/ok.png",
    "revision": "f9665718654c12da77fb196d22ab57f0"
  },
  {
    "url": "resource/assets/Button/ok3.png",
    "revision": "a9e28f827bb2f797ef15278c1f86dd7a"
  },
  {
    "url": "resource/assets/Button/share2.png",
    "revision": "adb390f96e77668f0fa70ee97ed490dc"
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
    "url": "resource/assets/club/club_box.png",
    "revision": "09d7e7fb4b27f0abf2aaa678348548cc"
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
    "url": "resource/assets/game/game-icon.json",
    "revision": "436f57c04fa6a2ae26c62031063c2a84"
  },
  {
    "url": "resource/assets/game/game-icon.png",
    "revision": "23c99e12e910a9d158cdd31b7361d403"
  },
  {
    "url": "resource/assets/game/number.png",
    "revision": "349cb10e4e7e04c0d13a7a79dfa59483"
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
    "url": "resource/assets/game/wait-status.json",
    "revision": "6e7c124508b4159046b8f63a551aa233"
  },
  {
    "url": "resource/assets/game/wait-status.png",
    "revision": "f5531017a90179cb3d59f759d2abf326"
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
    "url": "resource/assets/myInfo/self-info.json",
    "revision": "b6cc1d82e94da228090a44565e0377df"
  },
  {
    "url": "resource/assets/myInfo/self-info.png",
    "revision": "f02a18bacf0cd30e290e367d30d1d833"
  },
  {
    "url": "resource/assets/myInfo/tu.json",
    "revision": "a998e916e24908406a5f29cbd7e84400"
  },
  {
    "url": "resource/assets/myInfo/tu.png",
    "revision": "90f52e0bd016ac699f63ae5c18287ed5"
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
    "url": "resource/assets/ScrollBar/roundthumb.png",
    "revision": "5f550ff68f1240501f035fdc0eda0843"
  },
  {
    "url": "resource/assets/ScrollBar/track_sb.png",
    "revision": "541048214115efe2a7a2750cde6b4e54"
  },
  {
    "url": "resource/assets/seat/btn-confirm.png",
    "revision": "7b8dc5016ae0f439979259a44e2b128f"
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
    "url": "resource/assets/seat/game-init-background.png",
    "revision": "e0c67ebfb31cfb049f6323a30ee768df"
  },
  {
    "url": "resource/assets/seat/seat-background.png",
    "revision": "3b6b50109cd1c15c73f98ea9b09f4f8d"
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
    "url": "resource/assets/shared/close.png",
    "revision": "237640de87e3a894945b5c0805fd3a4a"
  },
  {
    "url": "resource/assets/shared/share.png",
    "revision": "e36c70ba779e85d69f4ed7df1a29f787"
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
    "url": "resource/assets/start/assistant-bg.png",
    "revision": "3c72afb44a521d333ad2ff69be3a6ad3"
  },
  {
    "url": "resource/assets/start/btn-view.png",
    "revision": "c2963777d52080a1399b8ba4a1a44c46"
  },
  {
    "url": "resource/assets/start/game-bg.png",
    "revision": "ddadf8fb69b20e6470545ae5b3e5bc3b"
  },
  {
    "url": "resource/assets/start/img_down.png",
    "revision": "12fc0ac1098ba0251ce5439402fa9042"
  },
  {
    "url": "resource/assets/start/img_up.png",
    "revision": "2833514f2dbf9b2cd99dad9ccae1ce37"
  },
  {
    "url": "resource/assets/start/qrcode.png",
    "revision": "0ab979d84625d44b82dbba4715ebbaa9"
  },
  {
    "url": "resource/assets/start/start.json",
    "revision": "258016f4808ea396e6f4a67114c99c87"
  },
  {
    "url": "resource/assets/start/start.png",
    "revision": "c0edd7c96979e40ba1581419d7d9e265"
  },
  {
    "url": "resource/assets/start/title-more.png",
    "revision": "2b440caaa25b9b04402b315c24dd7d2c"
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
    "url": "resource/config/clubs.json",
    "revision": "fd38e628d9dd204639988510eb6e49df"
  },
  {
    "url": "resource/config/description.json",
    "revision": "53ec3cea96670c9e36a683e0842ad67b"
  },
  {
    "url": "resource/config/game-term.json",
    "revision": "e7c04b454647d3368ea904004e1996af"
  },
  {
    "url": "resource/config/photon.json",
    "revision": "9ee304bbff81116b44fe85ab8cf01823"
  },
  {
    "url": "resource/config/rank.json",
    "revision": "ef7484edec56d7299e0fa66734a1e16b"
  },
  {
    "url": "resource/config/role.json",
    "revision": "f77f1b695f2c32e81df6d9fa93cd5193"
  },
  {
    "url": "resource/config/seats.json",
    "revision": "e2be56369847ad41954419ef1644f96b"
  },
  {
    "url": "resource/default.res.json",
    "revision": "a418503b57d36c94acbedd66ef469157"
  },
  {
    "url": "resource/default.thm.json",
    "revision": "d9974b2aaa90e1fc3065726233670c7f"
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
