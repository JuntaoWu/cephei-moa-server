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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

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
    "url": "js/assetsmanager.min_20ffd62d.js",
    "revision": "e3999bd5afe6974abbb2abed7e5925c4"
  },
  {
    "url": "js/default.thm_37134adb.js",
    "revision": "f795f0ec4cd9efcaf7bd70f99cb86534"
  },
  {
    "url": "js/dragonBones.min_58c5f7ec.js",
    "revision": "f388b38204c65f59db05b7d86ca0e550"
  },
  {
    "url": "js/egret.min_86bac23c.js",
    "revision": "c4c0b69c37f3f375fd39cc2404531caf"
  },
  {
    "url": "js/egret.web.min_6ba890da.js",
    "revision": "e00940f9f8271992f7653ddd60eb09d3"
  },
  {
    "url": "js/eui.min_3abd2ff.js",
    "revision": "96c75b1636cf3f7b5a221b764669af67"
  },
  {
    "url": "js/game.min_45aa06f6.js",
    "revision": "9b128bc335b0ced149a2cc7724688ec8"
  },
  {
    "url": "js/lodash.min_52920d12.js",
    "revision": "f6bfa17bb7fcef9bd0ccd42c2a7a96bc"
  },
  {
    "url": "js/main.min_a43406f5.js",
    "revision": "a1a2319f1da55db89553236f39f688c4"
  },
  {
    "url": "js/promise.min_83a6a5d.js",
    "revision": "1db72e0812aeb36ffec5285a2e14959f"
  },
  {
    "url": "js/puremvc.min_f5d15f8f.js",
    "revision": "8063c4992216c05530612e490a26156a"
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
    "revision": "541ef31aafd0c24bc954fac50790a8f4"
  },
  {
    "url": "manifest.pwa.json",
    "revision": "c2d054146353c61cb96947fc28c2e4dc"
  },
  {
    "url": "miniGame/js/default.thm.js",
    "revision": "d47aed316e200b2e5eb689f78b0d5161"
  },
  {
    "url": "miniGame/resource/assets/achievement-icon/achievement-icon.json",
    "revision": "8b1367bf2c7838d2f80a772e3bc047c0"
  },
  {
    "url": "miniGame/resource/assets/achievement-icon/achievement-icon.png",
    "revision": "2640bc612aefd75104a40e563f949c41"
  },
  {
    "url": "miniGame/resource/assets/background/chapter-bg(1)-1.jpg",
    "revision": "64dc5910f302d4ff5a68a61a7a7bfbf0"
  },
  {
    "url": "miniGame/resource/assets/background/chapter-bg(1)-2.jpg",
    "revision": "f6db7b01dd490811f8c664950c6314e7"
  },
  {
    "url": "miniGame/resource/assets/background/chapter-bg(2)-1.jpg",
    "revision": "08623a4ca0ef99f497cbd298d706e826"
  },
  {
    "url": "miniGame/resource/assets/background/chapter-bg(2)-2.jpg",
    "revision": "69a77b77bb4e5f46eaff0d9d3064da79"
  },
  {
    "url": "miniGame/resource/assets/background/chapter-bg(3)-1.jpg",
    "revision": "9ded670eea1a3fb2d7556b26ebb7e67c"
  },
  {
    "url": "miniGame/resource/assets/background/chapter-bg(3)-2.jpg",
    "revision": "929d2d85908c83ec48ea63acc9f331f1"
  },
  {
    "url": "miniGame/resource/assets/background/chapter-bg(4)-1.jpg",
    "revision": "74122770d16f16615b733a4dbd30444c"
  },
  {
    "url": "miniGame/resource/assets/background/chapter-bg(4)-2.jpg",
    "revision": "3fe28b8ce60c769715fdc659111f429e"
  },
  {
    "url": "miniGame/resource/assets/background/chapter-bg(5)-1.jpg",
    "revision": "c6fcf043cce95e81badd2f4ae5b5e06f"
  },
  {
    "url": "miniGame/resource/assets/background/chapter-bg(5)-2.jpg",
    "revision": "9d3b9d56309254c2a4cc09a4e7ac0e39"
  },
  {
    "url": "miniGame/resource/assets/background/scene-background.png",
    "revision": "74ab38ce4248c2d646bd4d025f679511"
  },
  {
    "url": "miniGame/resource/assets/background/start-background.png",
    "revision": "b2d0b5d1c375126fcd2b18ab2e35832d"
  },
  {
    "url": "miniGame/resource/assets/background/victory.png",
    "revision": "585f4206a118ee6083cc3f4961ac571e"
  },
  {
    "url": "miniGame/resource/assets/battle/back.png",
    "revision": "464ae216208cf938063b25800737e2dd"
  },
  {
    "url": "miniGame/resource/assets/battle/backup-hero-bg.png",
    "revision": "3a5db5b9f0b47d1ffadd500353b223d5"
  },
  {
    "url": "miniGame/resource/assets/battle/blue.png",
    "revision": "bfad2d61c896e47c769d00d8e668d544"
  },
  {
    "url": "miniGame/resource/assets/battle/blueTeam.png",
    "revision": "fdd2125ed6246d6214a69dfbb982c9c3"
  },
  {
    "url": "miniGame/resource/assets/battle/bottom-bg.png",
    "revision": "a3f8a14b6fd20e47576644048819302b"
  },
  {
    "url": "miniGame/resource/assets/battle/btn-view-heroes.png",
    "revision": "25fcdac3f4c3eba9259ea4bcdab61afc"
  },
  {
    "url": "miniGame/resource/assets/battle/btn-view-prison.png",
    "revision": "e8e1ef5376b36b5cfefc748ba143200b"
  },
  {
    "url": "miniGame/resource/assets/battle/btn-view.png",
    "revision": "0b12b2342706fb08b0421af17665c037"
  },
  {
    "url": "miniGame/resource/assets/battle/defend-bg.png",
    "revision": "f5565bac685e96f5c32006710e4a0481"
  },
  {
    "url": "miniGame/resource/assets/battle/enemy-mark.png",
    "revision": "fd7651b951e0c94a00e856a1c03dea4f"
  },
  {
    "url": "miniGame/resource/assets/battle/fail-left.png",
    "revision": "51d7186d8586cd434db662bddb467273"
  },
  {
    "url": "miniGame/resource/assets/battle/fail-right.png",
    "revision": "370b3c3fc6edb0ea3aafdb5dbfd4cce1"
  },
  {
    "url": "miniGame/resource/assets/battle/fail-title.png",
    "revision": "051b47c16535dbf00beda302f7cee4cf"
  },
  {
    "url": "miniGame/resource/assets/battle/game-over-main.png",
    "revision": "f1f0ac6819c36622f1a574ecf53a9e0e"
  },
  {
    "url": "miniGame/resource/assets/battle/hero-mark.png",
    "revision": "c9c65ff58cde444facdef50b2b5bd773"
  },
  {
    "url": "miniGame/resource/assets/battle/icon-new.png",
    "revision": "42e380da1d4bd4f174b8ffc554330ab8"
  },
  {
    "url": "miniGame/resource/assets/battle/label-background.png",
    "revision": "2bb5321826abf0797c2595958125d845"
  },
  {
    "url": "miniGame/resource/assets/battle/red-boss.png",
    "revision": "3afdb275704b52d871ba457b44946fdb"
  },
  {
    "url": "miniGame/resource/assets/battle/red-elite.png",
    "revision": "81e1e4572be66a6d15a00ec1b9793fe1"
  },
  {
    "url": "miniGame/resource/assets/battle/red.png",
    "revision": "78cfb785b3f76b16384b1156ba2df52e"
  },
  {
    "url": "miniGame/resource/assets/battle/redTeam.png",
    "revision": "b196aa9862625641ac515a572bf2d2c6"
  },
  {
    "url": "miniGame/resource/assets/battle/rest.png",
    "revision": "a1f00d2afe7d93b2e25f34dd6b0a7c72"
  },
  {
    "url": "miniGame/resource/assets/battle/seperator.png",
    "revision": "3ec37132c5594897317d2dbcacb503a7"
  },
  {
    "url": "miniGame/resource/assets/battle/split-line.png",
    "revision": "84a60abb4c5e2fa2b2d99a3185381690"
  },
  {
    "url": "miniGame/resource/assets/battle/stone(0).png",
    "revision": "a39c0753129704e22b9fb84c2fe11453"
  },
  {
    "url": "miniGame/resource/assets/battle/tile-attack(1).png",
    "revision": "c9acec152932a92fd7c43eabe307c7ea"
  },
  {
    "url": "miniGame/resource/assets/battle/tile-attack(2).png",
    "revision": "3e2c20ecfe7a7e7ce8af189eac556219"
  },
  {
    "url": "miniGame/resource/assets/battle/tile-defend.png",
    "revision": "041831d0fd7cf91c178e0e76ae35fcaf"
  },
  {
    "url": "miniGame/resource/assets/battle/tile-hp.png",
    "revision": "acb7f32d875fdf17d74fab0c7be6052d"
  },
  {
    "url": "miniGame/resource/assets/battle/title-get-achiev.png",
    "revision": "fd7e5f18f433ff9d96a10e631918b953"
  },
  {
    "url": "miniGame/resource/assets/battle/title-pass-time.png",
    "revision": "06efa71fc1a5e82ed8723774e24b6442"
  },
  {
    "url": "miniGame/resource/assets/battle/title-player-level.png",
    "revision": "4a6c9ad2b47d52c2bd3e25118956b451"
  },
  {
    "url": "miniGame/resource/assets/battle/title-this-pass.png",
    "revision": "13ed93f819b6418094f409cab2b4fd57"
  },
  {
    "url": "miniGame/resource/assets/battle/title-total-point.png",
    "revision": "9f1c91bb1b98b032188cd0200fb56e94"
  },
  {
    "url": "miniGame/resource/assets/battle/title-use-cards.png",
    "revision": "844567b8a2e2ffa35b43d073e97786f7"
  },
  {
    "url": "miniGame/resource/assets/battle/victory-title.png",
    "revision": "9bc58aa0bb9effe1c158d3e8ea6a3c78"
  },
  {
    "url": "miniGame/resource/assets/battle/victory/btn-blue.png",
    "revision": "36ab07be8712aa4bf7950221a713a311"
  },
  {
    "url": "miniGame/resource/assets/battle/victory/btn-choose.png",
    "revision": "1197c1d1ee579becaffb7734d126779e"
  },
  {
    "url": "miniGame/resource/assets/battle/victory/btn-red.png",
    "revision": "d4c03ebc28bc4ac1151f0040501cce76"
  },
  {
    "url": "miniGame/resource/assets/battle/victory/btn-text-back.png",
    "revision": "098e2c47c1a986af848064eafceb5069"
  },
  {
    "url": "miniGame/resource/assets/battle/victory/btn-text-share.png",
    "revision": "b8c3cd85ed7b562609bd99f61f4aedbf"
  },
  {
    "url": "miniGame/resource/assets/battle/victory/choose-hero-background.png",
    "revision": "a804572b5ae36b4e6f66d9aa75d79e72"
  },
  {
    "url": "miniGame/resource/assets/battle/victory/chooses-hero-bg.png",
    "revision": "fd47da9b51dcbeee3be76b1f0cba9473"
  },
  {
    "url": "miniGame/resource/assets/battle/victory/chooses-prisoner-bg.png",
    "revision": "eaa07a436faa2276084aba342aa225bd"
  },
  {
    "url": "miniGame/resource/assets/battle/victory/random-icon.png",
    "revision": "d7c4175ad230b6ba7fc9d0563d04b67e"
  },
  {
    "url": "miniGame/resource/assets/battle/victory/scroller-arrow-left.png",
    "revision": "c8123800c9cbbb1a5c3bf75f63c2bef2"
  },
  {
    "url": "miniGame/resource/assets/battle/victory/scroller-arrow-right.png",
    "revision": "8298ab4f54d0ca621fcba334e3be4bac"
  },
  {
    "url": "miniGame/resource/assets/battle/victory/tips-choose-hero.png",
    "revision": "ceb1f5591e27098aedf24f504aeabf65"
  },
  {
    "url": "miniGame/resource/assets/battle/victory/tips-choose-prisoner.png",
    "revision": "3708b0b28d37c0c0e5826e9d5864a542"
  },
  {
    "url": "miniGame/resource/assets/battle/victory/title-choose-hero.png",
    "revision": "45e9dcb8e2b3be92e0e3d9b3d8be2994"
  },
  {
    "url": "miniGame/resource/assets/battle/victory/victory-background.png",
    "revision": "5a41937fa03d3eaf87cdcfa77b326422"
  },
  {
    "url": "miniGame/resource/assets/battle/vistro-content-background.png",
    "revision": "d9dcf7c21ce2d0f7953456536288b024"
  },
  {
    "url": "miniGame/resource/assets/button_down.png",
    "revision": "878334d13048afd6b6b061e8b156dadb"
  },
  {
    "url": "miniGame/resource/assets/button_up.png",
    "revision": "a6341a65c7155a4edbbf1f39bc7932d9"
  },
  {
    "url": "miniGame/resource/assets/button/btn-confirm.png",
    "revision": "3d2f410316afed5f36a83e8a47525887"
  },
  {
    "url": "miniGame/resource/assets/button/btn-share.png",
    "revision": "72dd786faee14ce960a6edd43ccdd5a8"
  },
  {
    "url": "miniGame/resource/assets/button/btn-text-back.png",
    "revision": "73139f89252161fb1ee21207faeaaa03"
  },
  {
    "url": "miniGame/resource/assets/button/btn-text-confirm.png",
    "revision": "9aa072772632dffe6838cae003a1e501"
  },
  {
    "url": "miniGame/resource/assets/config/achievement.json",
    "revision": "aa3bccb7f8aba339f4ef70534ccf89ee"
  },
  {
    "url": "miniGame/resource/assets/config/battle.json",
    "revision": "40c09bbd9b50630afb088db1495376bc"
  },
  {
    "url": "miniGame/resource/assets/config/camp.json",
    "revision": "f35e5e41cbe6900fa51bf02f7275da51"
  },
  {
    "url": "miniGame/resource/assets/config/chapter.json",
    "revision": "52faef3a3340c369aa91d0472ec22b38"
  },
  {
    "url": "miniGame/resource/assets/config/effect.json",
    "revision": "c0da84050ad9d41e43eba03f229933a0"
  },
  {
    "url": "miniGame/resource/assets/config/event.json",
    "revision": "28f7e9f05fbc88ff404a7212347fb48b"
  },
  {
    "url": "miniGame/resource/assets/config/hero.json",
    "revision": "e521f1193f7739b27c1794d172933ac1"
  },
  {
    "url": "miniGame/resource/assets/config/init-hero.json",
    "revision": "4a400dc8059a13d038501ad4838986ce"
  },
  {
    "url": "miniGame/resource/assets/config/node.json",
    "revision": "96c6b82751492659eae1c46967e20d90"
  },
  {
    "url": "miniGame/resource/assets/config/novice-guidance.json",
    "revision": "0fb271ccd44a633bfc2693ba00c47377"
  },
  {
    "url": "miniGame/resource/assets/config/player-level.json",
    "revision": "7534262d436092be89965bf1fe69800e"
  },
  {
    "url": "miniGame/resource/assets/config/pub.json",
    "revision": "9202d553094c3d8c1a54a021dcb0db64"
  },
  {
    "url": "miniGame/resource/assets/config/random-event.json",
    "revision": "eb1dc7cfd61273a7ef764cc2a22a3817"
  },
  {
    "url": "miniGame/resource/assets/config/rarity.json",
    "revision": "9b6e995bd0d3234b1050caab9fbe2afd"
  },
  {
    "url": "miniGame/resource/assets/config/reward.json",
    "revision": "0713410b75c83158c3eeb55be3183966"
  },
  {
    "url": "miniGame/resource/assets/config/skill.json",
    "revision": "e0381219c54314328cf879b0da91806c"
  },
  {
    "url": "miniGame/resource/assets/config/store.json",
    "revision": "dfef5a2168fc89f65ba50177b68c597e"
  },
  {
    "url": "miniGame/resource/assets/confirm/btn-cancel.png",
    "revision": "14cb9a4deacf658b188e715a7bfe753f"
  },
  {
    "url": "miniGame/resource/assets/confirm/btn-confirm.png",
    "revision": "025c37d400799008707a7c1dfefb3ed3"
  },
  {
    "url": "miniGame/resource/assets/confirm/confirm-background.png",
    "revision": "399a93c557cef26488f85ead9a74b9fe"
  },
  {
    "url": "miniGame/resource/assets/confirm/confirm-content.png",
    "revision": "284a2782fb32cd9f94d2e762a578ee40"
  },
  {
    "url": "miniGame/resource/assets/confirm/icon-background.png",
    "revision": "c66be2e62b63e71b677825251ac6b162"
  },
  {
    "url": "miniGame/resource/assets/confirm/tips-label.png",
    "revision": "7ec5aebf34d2c067735933b5ccf1ce50"
  },
  {
    "url": "miniGame/resource/assets/confirm/title-background.png",
    "revision": "a5f038c45e234c75b010a3a1fe5f334b"
  },
  {
    "url": "miniGame/resource/assets/dragonbones/cloud1/cloud_1_ske.json",
    "revision": "6f54071cae0950a7afec7803e5020321"
  },
  {
    "url": "miniGame/resource/assets/dragonbones/cloud1/cloud_1_tex.json",
    "revision": "d7656d34d0b33a7bd69553ee9c5cd366"
  },
  {
    "url": "miniGame/resource/assets/dragonbones/cloud1/cloud_1_tex.png",
    "revision": "910f624522275a29209329ab7de8eb6f"
  },
  {
    "url": "miniGame/resource/assets/dragonbones/deadspell_ske.json",
    "revision": "bfc0db165739be3119d90ab7dfe2c1a5"
  },
  {
    "url": "miniGame/resource/assets/dragonbones/deadspell_tex.json",
    "revision": "956a59ecfd6e61e3e2bdbe975b8e88ec"
  },
  {
    "url": "miniGame/resource/assets/dragonbones/deadspell_tex.png",
    "revision": "ab2f9858d2d2d546314b9e2a62b39f29"
  },
  {
    "url": "miniGame/resource/assets/dragonbones/dizzy_ske.json",
    "revision": "70cac7970e942d1571ec443f2b1c676a"
  },
  {
    "url": "miniGame/resource/assets/dragonbones/dizzy_tex.json",
    "revision": "1fe189a4ad5cb142c1ac3c49116acb6b"
  },
  {
    "url": "miniGame/resource/assets/dragonbones/dizzy_tex.png",
    "revision": "92a787ad4b899651d852b3e232705d16"
  },
  {
    "url": "miniGame/resource/assets/dragonbones/enhance_ske.json",
    "revision": "fedba011886d7d1f69d148c86edb0bca"
  },
  {
    "url": "miniGame/resource/assets/dragonbones/enhance_tex.json",
    "revision": "97381c1f54b6a69dce016c4e983f5bbe"
  },
  {
    "url": "miniGame/resource/assets/dragonbones/enhance_tex.png",
    "revision": "236dc656d228237f7164724b9c495404"
  },
  {
    "url": "miniGame/resource/assets/dragonbones/magic_ske.json",
    "revision": "a8673f4c2c0d36316d7e5557a2b91496"
  },
  {
    "url": "miniGame/resource/assets/dragonbones/magic_tex.json",
    "revision": "f9aebb7eef684a5ce298b58998e8146f"
  },
  {
    "url": "miniGame/resource/assets/dragonbones/magic_tex.png",
    "revision": "4273e44dcc3f13a5f058fcedc341979b"
  },
  {
    "url": "miniGame/resource/assets/dragonbones/mark_ske.json",
    "revision": "82e27f72e31b1cc7dc66db5c880b35a2"
  },
  {
    "url": "miniGame/resource/assets/dragonbones/mark_tex.json",
    "revision": "0dd2d2c29c6ba840205d9e5a47e4848f"
  },
  {
    "url": "miniGame/resource/assets/dragonbones/mark_tex.png",
    "revision": "7221e65ec1fdc260de0082a5202c27bc"
  },
  {
    "url": "miniGame/resource/assets/dragonbones/normal-skill_ske.json",
    "revision": "609290c44ac0abbfccba6ecc03d37cbe"
  },
  {
    "url": "miniGame/resource/assets/dragonbones/normal-skill_tex.json",
    "revision": "3578e688a600131275cfa6eba30a8a4c"
  },
  {
    "url": "miniGame/resource/assets/dragonbones/normal-skill_tex.png",
    "revision": "289fe7cd0c53c33e1cc3530c48324738"
  },
  {
    "url": "miniGame/resource/assets/dragonbones/threekingdoms2048_ske.json",
    "revision": "31588258d30af6719329541f00abe05b"
  },
  {
    "url": "miniGame/resource/assets/dragonbones/threekingdoms2048_tex.json",
    "revision": "fb967ef4f362dd3fdcf230843c1ec80b"
  },
  {
    "url": "miniGame/resource/assets/dragonbones/threekingdoms2048_tex.png",
    "revision": "16c19b175f3108bacd6a6cff12b6147d"
  },
  {
    "url": "miniGame/resource/assets/dragonbones/weaken_ske.json",
    "revision": "639651e6b61b4b933c66a8c7b87b25a3"
  },
  {
    "url": "miniGame/resource/assets/dragonbones/weaken_tex.json",
    "revision": "6053d80907bfd63e92606fdd9f490450"
  },
  {
    "url": "miniGame/resource/assets/dragonbones/weaken_tex.png",
    "revision": "233b2e66765103adf91d82c25a9a7c57"
  },
  {
    "url": "miniGame/resource/assets/enemy-bg.png",
    "revision": "0ca344c73cc23ae6831c2249b0b846d3"
  },
  {
    "url": "miniGame/resource/assets/hero-bg.png",
    "revision": "a17c7a6cde1b7a26dc28a816e4d3db83"
  },
  {
    "url": "miniGame/resource/assets/icons/attack-number.png",
    "revision": "349cb10e4e7e04c0d13a7a79dfa59483"
  },
  {
    "url": "miniGame/resource/assets/icons/attack(1).png",
    "revision": "23b68019a658e3c0bb34a966ccc181f8"
  },
  {
    "url": "miniGame/resource/assets/icons/attack(2).png",
    "revision": "b8eb96bd269d3ec7e0edb35acc4eb94c"
  },
  {
    "url": "miniGame/resource/assets/icons/barracks-number.png",
    "revision": "1cb49daa1afb0db3740997454f0ac176"
  },
  {
    "url": "miniGame/resource/assets/icons/bootcamp.png",
    "revision": "85854fbed1cd93f44cc4b1833cc02577"
  },
  {
    "url": "miniGame/resource/assets/icons/boss.png",
    "revision": "86adbe835bbcfb0e362bd8ed7e1efd15"
  },
  {
    "url": "miniGame/resource/assets/icons/collect-number.png",
    "revision": "740f378b03bc127828f083488f0d2b3e"
  },
  {
    "url": "miniGame/resource/assets/icons/defend-number.png",
    "revision": "7c5b76204da3b58abf803ac2d4c1ee0e"
  },
  {
    "url": "miniGame/resource/assets/icons/defend.png",
    "revision": "bb5180c940676c6befd991bc1bc37534"
  },
  {
    "url": "miniGame/resource/assets/icons/elite.png",
    "revision": "20bf31d9971dee1e7db5fc262240514f"
  },
  {
    "url": "miniGame/resource/assets/icons/hero-attack(1).png",
    "revision": "b5866f417c263389a197135ef64ee341"
  },
  {
    "url": "miniGame/resource/assets/icons/hero-attack(2).png",
    "revision": "75030d3f4fb3ea707d1db3068889be09"
  },
  {
    "url": "miniGame/resource/assets/icons/hero-background(1).png",
    "revision": "e33efcb5571cb302067029cf49614551"
  },
  {
    "url": "miniGame/resource/assets/icons/hero-background(2).png",
    "revision": "077fca488fff1a35adfb5f181cb889da"
  },
  {
    "url": "miniGame/resource/assets/icons/hero-background(3).png",
    "revision": "b8aac9477c0dc1aa57fcb9e960442fca"
  },
  {
    "url": "miniGame/resource/assets/icons/hero-background(4).png",
    "revision": "9cb2e486f96dc2b800cd9aa20cb848fc"
  },
  {
    "url": "miniGame/resource/assets/icons/hero-bg-box.png",
    "revision": "bc6d476ac0ea9d0d48bbdb4b77b1f2a1"
  },
  {
    "url": "miniGame/resource/assets/icons/hero-hp.png",
    "revision": "7c2ff5ae836a1451f5f99c60897b31f2"
  },
  {
    "url": "miniGame/resource/assets/icons/hospital.png",
    "revision": "043f9a103d48ab6b3fc46120d51996f6"
  },
  {
    "url": "miniGame/resource/assets/icons/hp-number.png",
    "revision": "c279e6fef90f8373210b156f80d297be"
  },
  {
    "url": "miniGame/resource/assets/icons/hp.png",
    "revision": "df63ddbafbebc0a5e5843d5a6edbe951"
  },
  {
    "url": "miniGame/resource/assets/icons/icon-camp(1).png",
    "revision": "2665601d973f531ec8ca57159f085fa4"
  },
  {
    "url": "miniGame/resource/assets/icons/icon-camp(2).png",
    "revision": "52c29c6ab1936db4360d9e7e603e0f4d"
  },
  {
    "url": "miniGame/resource/assets/icons/icon-camp(3).png",
    "revision": "d63f36656bb0fd7ddc4daeefbeee86a0"
  },
  {
    "url": "miniGame/resource/assets/icons/icon-camp(4).png",
    "revision": "62dbc2afe9e208d90b20929fd038fe1b"
  },
  {
    "url": "miniGame/resource/assets/icons/icons.json",
    "revision": "fc0baf2d461f97264e700febb77bd297"
  },
  {
    "url": "miniGame/resource/assets/icons/icons.png",
    "revision": "55cad85faefc8e6880840be08c65f5bf"
  },
  {
    "url": "miniGame/resource/assets/icons/Lv..png",
    "revision": "d939aef7b015ba24c8c7e44060109965"
  },
  {
    "url": "miniGame/resource/assets/icons/mass.png",
    "revision": "877578c2e26a6baf41908f542b1ea7f5"
  },
  {
    "url": "miniGame/resource/assets/icons/next-nodes-marker.jpg",
    "revision": "c06903d61044a0ca53beae7fba5df821"
  },
  {
    "url": "miniGame/resource/assets/icons/next-nodes-marker.png",
    "revision": "330cc4b29673389a1eb008401368299d"
  },
  {
    "url": "miniGame/resource/assets/icons/pub.png",
    "revision": "90fdc30096e8a95c1694cd8de8ac5a7c"
  },
  {
    "url": "miniGame/resource/assets/icons/random.png",
    "revision": "2ba9d3dbdae0fe28f1c65699f9c06cc3"
  },
  {
    "url": "miniGame/resource/assets/icons/start-player-bg.png",
    "revision": "14ae101bd151233ad07cf3226cd23765"
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
    "url": "miniGame/resource/assets/modal/12yuan.png",
    "revision": "a0de2de617ff9f301c46d627fd5dd571"
  },
  {
    "url": "miniGame/resource/assets/modal/all.png",
    "revision": "1d6dca3dab53facfd4c83fb9924054cc"
  },
  {
    "url": "miniGame/resource/assets/modal/all3.png",
    "revision": "3bf4be418be33cd9def25bcf77cb5770"
  },
  {
    "url": "miniGame/resource/assets/modal/ashen.png",
    "revision": "ae81e19405c4cdd52285a4a4b96523c4"
  },
  {
    "url": "miniGame/resource/assets/modal/avatar-bg.png",
    "revision": "125faa35e22804715dd297682ca2d99e"
  },
  {
    "url": "miniGame/resource/assets/modal/bg-heroes.png",
    "revision": "6c56958437fb607d9f4d97fbd993dae5"
  },
  {
    "url": "miniGame/resource/assets/modal/bg.png",
    "revision": "799e2169bd1f308a156ee4f7415e451f"
  },
  {
    "url": "miniGame/resource/assets/modal/blue.png",
    "revision": "36ab07be8712aa4bf7950221a713a311"
  },
  {
    "url": "miniGame/resource/assets/modal/btn-back-main.png",
    "revision": "db815cd3d06480cc0c9ee68099285532"
  },
  {
    "url": "miniGame/resource/assets/modal/btn-back.png",
    "revision": "051de3f89a7467092f6ffdb1d12d5d14"
  },
  {
    "url": "miniGame/resource/assets/modal/btn-barrack.png",
    "revision": "d56b15fa04cd220db2875d5f39527154"
  },
  {
    "url": "miniGame/resource/assets/modal/btn-before-train.png",
    "revision": "36d45a958871593bbe94c1c288d3e280"
  },
  {
    "url": "miniGame/resource/assets/modal/btn-explain.png",
    "revision": "0675749239bca3cca47aa3a18cfdb3a7"
  },
  {
    "url": "miniGame/resource/assets/modal/btn-next-train.png",
    "revision": "893679ebf5b65ce1188b58dc2659c246"
  },
  {
    "url": "miniGame/resource/assets/modal/btn-prison.png",
    "revision": "f3c772a0974cd81f260237ddb64fde9b"
  },
  {
    "url": "miniGame/resource/assets/modal/btn-random-events-back.png",
    "revision": "b5d7c1f660dae6687faad752e4cb9170"
  },
  {
    "url": "miniGame/resource/assets/modal/btn-random-events-view-heroes.png",
    "revision": "a9526306223ef080b5b88c0801e7a0df"
  },
  {
    "url": "miniGame/resource/assets/modal/btn-random-select.png",
    "revision": "4ceb69d11fd2fe249481652e7513aa4b"
  },
  {
    "url": "miniGame/resource/assets/modal/btn-summon.png",
    "revision": "40a8716487ffbc96fa02f039bcee4153"
  },
  {
    "url": "miniGame/resource/assets/modal/btn-text-back.png",
    "revision": "c0bf235a10f4a47bd37ab65b64d4f443"
  },
  {
    "url": "miniGame/resource/assets/modal/btn-text-cure.png",
    "revision": "f2c8bedbee2642135c5e8ca885817547"
  },
  {
    "url": "miniGame/resource/assets/modal/btn-text-fire.png",
    "revision": "4d17426a57449b95348aec737dde551c"
  },
  {
    "url": "miniGame/resource/assets/modal/btn-text-recover.png",
    "revision": "f2c8bedbee2642135c5e8ca885817547"
  },
  {
    "url": "miniGame/resource/assets/modal/btn-text-recruit.png",
    "revision": "f6cb7797ec7cb79d17eb56723e259b0e"
  },
  {
    "url": "miniGame/resource/assets/modal/btn-text-release.png",
    "revision": "81a82c4c196c2b6630f3daa6a380beb3"
  },
  {
    "url": "miniGame/resource/assets/modal/btn-text-share.png",
    "revision": "1117848d9b4772321babbeb1c1647474"
  },
  {
    "url": "miniGame/resource/assets/modal/btn-text-summon.png",
    "revision": "e234f9f185c9dd79303b8575782ec014"
  },
  {
    "url": "miniGame/resource/assets/modal/btn-text-train.png",
    "revision": "58b90aed4f0099e75114a062a50aacbc"
  },
  {
    "url": "miniGame/resource/assets/modal/btn-text-view.png",
    "revision": "f0c3ee0478179029eb5405f6f2a2f3cd"
  },
  {
    "url": "miniGame/resource/assets/modal/chapter-head-bg.png",
    "revision": "531e8663d71c20eab98eee2215622228"
  },
  {
    "url": "miniGame/resource/assets/modal/company-logo.png",
    "revision": "57d308361f59e5946f9111c756d50d6e"
  },
  {
    "url": "miniGame/resource/assets/modal/content-bg.png",
    "revision": "f3438b5b6b13695a7a56b4f010b2a1ac"
  },
  {
    "url": "miniGame/resource/assets/modal/footer.png",
    "revision": "763dee1ef281d16c6b6de943c317f839"
  },
  {
    "url": "miniGame/resource/assets/modal/green.png",
    "revision": "79c41753fbd65aecb60eee313a9e007b"
  },
  {
    "url": "miniGame/resource/assets/modal/guidance-dialog.png",
    "revision": "e811ada31077f4ccb989fcb174e713fd"
  },
  {
    "url": "miniGame/resource/assets/modal/have-money-box.png",
    "revision": "6b6762879acaaecbdf86deea0e72f265"
  },
  {
    "url": "miniGame/resource/assets/modal/header.png",
    "revision": "1717af0b3a0bb95391e8324fe690d1e0"
  },
  {
    "url": "miniGame/resource/assets/modal/hero-bg-box(1).png",
    "revision": "e748183414f90c2244f03926e9e06438"
  },
  {
    "url": "miniGame/resource/assets/modal/hero-bg-box(2).png",
    "revision": "ebb735ba32fa234e3400048f760b02b5"
  },
  {
    "url": "miniGame/resource/assets/modal/hero-bg-box(3).png",
    "revision": "42e913f05e157955c2d60f45757d8f36"
  },
  {
    "url": "miniGame/resource/assets/modal/hero-bg-box(4).png",
    "revision": "d315298cc821c2e1337767a36fc8a73f"
  },
  {
    "url": "miniGame/resource/assets/modal/hero-lock.png",
    "revision": "841db9cea0356b4bf829d3f9c24ca112"
  },
  {
    "url": "miniGame/resource/assets/modal/hero-name-bg.png",
    "revision": "5a1ef6b0ab68b171b36aa06709cf73e6"
  },
  {
    "url": "miniGame/resource/assets/modal/hero-type(1).png",
    "revision": "69fbca5fa919b77f243e07718c78baef"
  },
  {
    "url": "miniGame/resource/assets/modal/hero-type(2).png",
    "revision": "0caf505d36346e8c111afe64c0f13e40"
  },
  {
    "url": "miniGame/resource/assets/modal/hero-type(3).png",
    "revision": "770ba5208db8f6283d27d7086f7b0389"
  },
  {
    "url": "miniGame/resource/assets/modal/heroes-1st.png",
    "revision": "b53802de34b4b9bf0929e96a483f2108"
  },
  {
    "url": "miniGame/resource/assets/modal/heroes-2nd.png",
    "revision": "b4e313db458322d1b0bf7d20f98d4893"
  },
  {
    "url": "miniGame/resource/assets/modal/heroes-3rd.png",
    "revision": "2b14b2451eb1886dbfff533036e12361"
  },
  {
    "url": "miniGame/resource/assets/modal/heroes-4th.png",
    "revision": "aae4b6cd280de49fd373a96f204302c2"
  },
  {
    "url": "miniGame/resource/assets/modal/item-bg.png",
    "revision": "b1ee272038fa376f340a433d7bcd08b7"
  },
  {
    "url": "miniGame/resource/assets/modal/lock-bg.png",
    "revision": "9af4be5eb8bb8baded0cbdad5dcccb4e"
  },
  {
    "url": "miniGame/resource/assets/modal/locked.png",
    "revision": "b6731dd93aa12f0d8671b1c611b8beeb"
  },
  {
    "url": "miniGame/resource/assets/modal/Lv.png",
    "revision": "4721c334f45713b076b709cca4f8cd97"
  },
  {
    "url": "miniGame/resource/assets/modal/modal.json",
    "revision": "9162f7a8cf394bde0ee34938a68da8f6"
  },
  {
    "url": "miniGame/resource/assets/modal/modal.png",
    "revision": "3c2983241cf6db3506816a2419a811b2"
  },
  {
    "url": "miniGame/resource/assets/modal/money-yb.png",
    "revision": "0847e7f991598589d56e1425abb51248"
  },
  {
    "url": "miniGame/resource/assets/modal/msg-bg.png",
    "revision": "b235c5602cc439cb7e690ea6cae15101"
  },
  {
    "url": "miniGame/resource/assets/modal/msg-icon.png",
    "revision": "b21ebaf58fccdc668f5e6a2c4fa15197"
  },
  {
    "url": "miniGame/resource/assets/modal/name-bg.png",
    "revision": "fd750fbd0887fae1f9035dc0256e3bba"
  },
  {
    "url": "miniGame/resource/assets/modal/novice-dialog.png",
    "revision": "39bbbd6fbc8e707bdac85338e223f8d4"
  },
  {
    "url": "miniGame/resource/assets/modal/novice-guidance.png",
    "revision": "e2321c735b1c5a68d08b02316ef357ab"
  },
  {
    "url": "miniGame/resource/assets/modal/opacity_bg.png",
    "revision": "d6350d3a921c147d78c992c04e5cf96b"
  },
  {
    "url": "miniGame/resource/assets/modal/option-bg.png",
    "revision": "38abec629ddba92f21509ae1a2805854"
  },
  {
    "url": "miniGame/resource/assets/modal/owned-marker.png",
    "revision": "38fc0114b0e227de0bbff3412477417a"
  },
  {
    "url": "miniGame/resource/assets/modal/owned.png",
    "revision": "490f68bcfaa7f840312fc8c305328ea1"
  },
  {
    "url": "miniGame/resource/assets/modal/owned3.png",
    "revision": "164e102b71d308c766f1e01fb8196aa5"
  },
  {
    "url": "miniGame/resource/assets/modal/pass-camp(1).png",
    "revision": "4da2704cc8c4f5a548c883bf2e5087ca"
  },
  {
    "url": "miniGame/resource/assets/modal/pass-camp(2).png",
    "revision": "e22d4ad6dc060675666b9a5acd0effb2"
  },
  {
    "url": "miniGame/resource/assets/modal/pass-camp(3).png",
    "revision": "cdf2914855f540747953162489b35c84"
  },
  {
    "url": "miniGame/resource/assets/modal/pass-camp(4).png",
    "revision": "3a2bbaa99b808a77a6c53b3964e4953b"
  },
  {
    "url": "miniGame/resource/assets/modal/player-info-bg.png",
    "revision": "c349b3a84e909ab5e1780cd8746f97d6"
  },
  {
    "url": "miniGame/resource/assets/modal/player-pass-bg.png",
    "revision": "11d6514aedb64ad27e57ab04ba0d24ba"
  },
  {
    "url": "miniGame/resource/assets/modal/player-unlock.png",
    "revision": "d0b0e512a1cd0d610bd5e864183a9279"
  },
  {
    "url": "miniGame/resource/assets/modal/prison-box.png",
    "revision": "deca65d5dd385695290776a5ddc2685d"
  },
  {
    "url": "miniGame/resource/assets/modal/prison-btn-share.png",
    "revision": "dfa165d66dc60701e80f9dfe34b9ec1d"
  },
  {
    "url": "miniGame/resource/assets/modal/prison-locked.png",
    "revision": "4d014f8fb9e5349b25f2b9f5e6e690c8"
  },
  {
    "url": "miniGame/resource/assets/modal/prison.png",
    "revision": "d5eec3895e60d252d999564573364137"
  },
  {
    "url": "miniGame/resource/assets/modal/rank.json",
    "revision": "05f3df8b135ccc2cadb00d2f63a8f218"
  },
  {
    "url": "miniGame/resource/assets/modal/rank.png",
    "revision": "827809a0af714a5c228ccba89c7f5d3c"
  },
  {
    "url": "miniGame/resource/assets/modal/rarity1.png",
    "revision": "758090fecf4adb5355089861d59f53e0"
  },
  {
    "url": "miniGame/resource/assets/modal/rarity2.png",
    "revision": "521abb03299ac6f386c1878a958e9b1f"
  },
  {
    "url": "miniGame/resource/assets/modal/rarity3.png",
    "revision": "1bb8b706f6fbd5128ec86cda9b79e406"
  },
  {
    "url": "miniGame/resource/assets/modal/rarity4.png",
    "revision": "1e7b9757cf1d25d108a7f50654afd955"
  },
  {
    "url": "miniGame/resource/assets/modal/rarity5.png",
    "revision": "57b038c27cc63bbbb92856155f1fa0e6"
  },
  {
    "url": "miniGame/resource/assets/modal/red.png",
    "revision": "75d186507ef56b2390f1de19128c03a7"
  },
  {
    "url": "miniGame/resource/assets/modal/scroll-bg.jpg",
    "revision": "c47cd405f2a336acd0b90831ef70f0c9"
  },
  {
    "url": "miniGame/resource/assets/modal/scroll-bg.png",
    "revision": "fbf08314e90d3950a831abb462b95f10"
  },
  {
    "url": "miniGame/resource/assets/modal/scroll-tail.png",
    "revision": "d4cb9d3e2127e41562afb49cd7584b7f"
  },
  {
    "url": "miniGame/resource/assets/modal/scroll-title.png",
    "revision": "ffca668ab244b6273e14e37d83d46dac"
  },
  {
    "url": "miniGame/resource/assets/modal/select-bg.png",
    "revision": "052b45b2704951e5422365ce806d55fa"
  },
  {
    "url": "miniGame/resource/assets/modal/select-icon.png",
    "revision": "daeabcb4a39eed86f334e76065c13e8b"
  },
  {
    "url": "miniGame/resource/assets/modal/select-item-bottom.png",
    "revision": "f20487fa893d80643716d606fd6d9e12"
  },
  {
    "url": "miniGame/resource/assets/modal/skill-border.png",
    "revision": "32bac11f95b475380838a37228578dc8"
  },
  {
    "url": "miniGame/resource/assets/modal/skip-btn.png",
    "revision": "1e0599ab0d803d5d5e95cff1fd129e5d"
  },
  {
    "url": "miniGame/resource/assets/modal/store-icon.json",
    "revision": "444f31317718bdc40ca3e2e404ab7e6a"
  },
  {
    "url": "miniGame/resource/assets/modal/store-icon.png",
    "revision": "d31b3177b0585643ac43c8e821d21799"
  },
  {
    "url": "miniGame/resource/assets/modal/sub-title-bg.png",
    "revision": "1ebfb3c43855bfd4a1c5dc6814a4a3c4"
  },
  {
    "url": "miniGame/resource/assets/modal/text-bg.png",
    "revision": "cbc498ade88bd7b6f3849cb8437566da"
  },
  {
    "url": "miniGame/resource/assets/modal/title-achiev.png",
    "revision": "f7e7bd2b3f9ff5a610add36c0dc35f3f"
  },
  {
    "url": "miniGame/resource/assets/modal/title-barrack-hero.png",
    "revision": "d021d6badfd2fcb75adb182231cfb2b4"
  },
  {
    "url": "miniGame/resource/assets/modal/title-base.png",
    "revision": "55bdb263fe36d19c04192ba6f7db1cf7"
  },
  {
    "url": "miniGame/resource/assets/modal/title-bg-active.png",
    "revision": "565e3b83cb46a1c41be1bf05b4772959"
  },
  {
    "url": "miniGame/resource/assets/modal/title-bg.png",
    "revision": "7e9dc9bdeb52c789b7a6dc4736e10e12"
  },
  {
    "url": "miniGame/resource/assets/modal/title-camp(1).png",
    "revision": "c8493ca6f53c723aaa76adfb8511d1df"
  },
  {
    "url": "miniGame/resource/assets/modal/title-camp(2).png",
    "revision": "4499ae410d6b40d5c6b4a4accbd02a9f"
  },
  {
    "url": "miniGame/resource/assets/modal/title-camp(3).png",
    "revision": "78c3171a5ba41058d2411a4734e2a871"
  },
  {
    "url": "miniGame/resource/assets/modal/title-camp(4).png",
    "revision": "d32c037e5a8af72c140d3e2686193fbf"
  },
  {
    "url": "miniGame/resource/assets/modal/title-developer.png",
    "revision": "8d58820fdda74b27a2d016aec5c7cb52"
  },
  {
    "url": "miniGame/resource/assets/modal/title-field-hero.png",
    "revision": "a52e4b66d50e18e8937b50b3401a397a"
  },
  {
    "url": "miniGame/resource/assets/modal/title-field-sub.png",
    "revision": "e025da55f00868a4bea05bfe85e1ed10"
  },
  {
    "url": "miniGame/resource/assets/modal/title-field.png",
    "revision": "a93adb66373e3fe4cb5c40be5ad9101a"
  },
  {
    "url": "miniGame/resource/assets/modal/title-first.png",
    "revision": "558b103474cf4ca454dcc4b3316db687"
  },
  {
    "url": "miniGame/resource/assets/modal/title-hero-star.png",
    "revision": "434b07608936d0c6f188ee523be34d22"
  },
  {
    "url": "miniGame/resource/assets/modal/title-hospital-hero.png",
    "revision": "85e719c8d27fb37a7508fb66380f7caa"
  },
  {
    "url": "miniGame/resource/assets/modal/title-intro.png",
    "revision": "eed721aaf5890beffb43b4bf1ecf8d8d"
  },
  {
    "url": "miniGame/resource/assets/modal/title-pass.png",
    "revision": "5177e9b92be732bf45b01c13444a9423"
  },
  {
    "url": "miniGame/resource/assets/modal/title-player.png",
    "revision": "398db02d64ae8072ebc195547ba20d3e"
  },
  {
    "url": "miniGame/resource/assets/modal/title-prison-bg.png",
    "revision": "b83d1a4dc83a501f52bbacd23514baca"
  },
  {
    "url": "miniGame/resource/assets/modal/title-prison-hero.png",
    "revision": "63c888153010203157e3beacc4d4b92c"
  },
  {
    "url": "miniGame/resource/assets/modal/title-prison1.png",
    "revision": "3083ea44fba84e263afc0db65522af85"
  },
  {
    "url": "miniGame/resource/assets/modal/title-prison2.png",
    "revision": "2a1b455fb70879b49b96652b177c3181"
  },
  {
    "url": "miniGame/resource/assets/modal/title-pub-hero.png",
    "revision": "59ae4b7894fd85727809f384ef4d44ae"
  },
  {
    "url": "miniGame/resource/assets/modal/title-pub.png",
    "revision": "e6f03b069cdba6bbd3d7be749831ecfd"
  },
  {
    "url": "miniGame/resource/assets/modal/title-random.png",
    "revision": "bce8c8ddd42b10eb766beebc9fa09f8c"
  },
  {
    "url": "miniGame/resource/assets/modal/title-rank.png",
    "revision": "c698211d6a348f4085d12fd6181cd0b4"
  },
  {
    "url": "miniGame/resource/assets/modal/title-recruit.png",
    "revision": "926ef6d8892b75fac099bbba7df8bdf7"
  },
  {
    "url": "miniGame/resource/assets/modal/title-skill.png",
    "revision": "92c5a66b332b0f7767a5c7e5e66b4582"
  },
  {
    "url": "miniGame/resource/assets/modal/title-store.png",
    "revision": "970e84f5531dc6eb7e1db04291ade289"
  },
  {
    "url": "miniGame/resource/assets/modal/title-team-limit.png",
    "revision": "918bbb1e585f8c0d8a5041a87bc3da89"
  },
  {
    "url": "miniGame/resource/assets/modal/title-team.png",
    "revision": "1c24695686e2c228835fbab3b0160524"
  },
  {
    "url": "miniGame/resource/assets/modal/title-wait.png",
    "revision": "cf08f4d63297203d86a9fa06f2a2c84c"
  },
  {
    "url": "miniGame/resource/assets/modal/title-wounded.png",
    "revision": "f2dd42174f875ff5aea1aedcfbec1e72"
  },
  {
    "url": "miniGame/resource/assets/modal/unlock-bg.png",
    "revision": "337001db15f2905efdf40efe4c358dba"
  },
  {
    "url": "miniGame/resource/assets/modal/unlock-level.png",
    "revision": "3d43c08f1abc61d3c5b58d68f402e0c2"
  },
  {
    "url": "miniGame/resource/assets/modal/unselected-bg.png",
    "revision": "ae5b7f3db8aab51779456c44625de8ca"
  },
  {
    "url": "miniGame/resource/assets/modal/unselected-middle.png",
    "revision": "6ec6b055a0ac847eb0ca3fdfc54ce098"
  },
  {
    "url": "miniGame/resource/assets/modal/unselected-pub.png",
    "revision": "20f5e137054cbba18b50ba41d95446e7"
  },
  {
    "url": "miniGame/resource/assets/modal/unselected-wounded.png",
    "revision": "99396e68ad4cb18ff1aaecba4c27ef8a"
  },
  {
    "url": "miniGame/resource/assets/modal/yellow.png",
    "revision": "a014eb6f92403d73103276970fcf7eb9"
  },
  {
    "url": "miniGame/resource/assets/modal/you-have.png",
    "revision": "1662ab3bf168405512803fe62ef0cd88"
  },
  {
    "url": "miniGame/resource/assets/popup/btn-text-confirm.png",
    "revision": "5670826ba835c059f139d81c67362824"
  },
  {
    "url": "miniGame/resource/assets/popup/btn-text-goto.png",
    "revision": "6ee7dc3dea1c2ea3fe05ec81b8e1b0e0"
  },
  {
    "url": "miniGame/resource/assets/popup/camp-selected-border.png",
    "revision": "f7bafb2bc989928d3a0a61115b317308"
  },
  {
    "url": "miniGame/resource/assets/popup/close.png",
    "revision": "a913091547ac61abbdd14c53948b18f1"
  },
  {
    "url": "miniGame/resource/assets/popup/green-popup.png",
    "revision": "79c41753fbd65aecb60eee313a9e007b"
  },
  {
    "url": "miniGame/resource/assets/popup/popup-bg.png",
    "revision": "61f3492c65423b7ac864bbd020a455d9"
  },
  {
    "url": "miniGame/resource/assets/popup/shu.png",
    "revision": "aa70178b0197d98fda0b249587d4b303"
  },
  {
    "url": "miniGame/resource/assets/popup/ta.png",
    "revision": "d87402f95edc0e3ee4bf925cbd7d58ef"
  },
  {
    "url": "miniGame/resource/assets/popup/title-achievement.png",
    "revision": "4554fa75e6f041c4302d743b5f843b86"
  },
  {
    "url": "miniGame/resource/assets/popup/title-battle.png",
    "revision": "b565ba58f96d632a055e95c51efc943b"
  },
  {
    "url": "miniGame/resource/assets/popup/title-explain.png",
    "revision": "4d0c15be997ce111dd80418d232c124d"
  },
  {
    "url": "miniGame/resource/assets/popup/title-field.png",
    "revision": "4dc649303f118c7d03e0b7b5847e4d5f"
  },
  {
    "url": "miniGame/resource/assets/popup/title-hospital.png",
    "revision": "6301aa317267eec8c987e3bb2e6bdf55"
  },
  {
    "url": "miniGame/resource/assets/popup/title-prompt.png",
    "revision": "00919463cd5b4f643ca225be17506ce4"
  },
  {
    "url": "miniGame/resource/assets/popup/title-pub.png",
    "revision": "13b0e360ba73c199fbf59554d5367937"
  },
  {
    "url": "miniGame/resource/assets/popup/title-random.png",
    "revision": "92e3c38c56739a933746af4a3dc5e90e"
  },
  {
    "url": "miniGame/resource/assets/popup/title-select-camp.png",
    "revision": "f83591e54293e37593ab86876f423049"
  },
  {
    "url": "miniGame/resource/assets/popup/wei.png",
    "revision": "385494e1fd3063138e3ba9df2c6f7df4"
  },
  {
    "url": "miniGame/resource/assets/popup/wu.png",
    "revision": "23ec7b96018c3eda907e9d159b1f38b8"
  },
  {
    "url": "miniGame/resource/assets/random-events/event0.jpg",
    "revision": "36a901f8897fdef4284ad1eecce9eff4"
  },
  {
    "url": "miniGame/resource/assets/random-events/event01.jpg",
    "revision": "550ee94e5c060b7ec217b018ee43f3dc"
  },
  {
    "url": "miniGame/resource/assets/random-events/event02.jpg",
    "revision": "66428650f179eac42fe06f16c4bd45e6"
  },
  {
    "url": "miniGame/resource/assets/random-events/event03.jpg",
    "revision": "4fea5c5a09fce06cb74b32fe3f375809"
  },
  {
    "url": "miniGame/resource/assets/random-events/event04.jpg",
    "revision": "7e5d85c8a7c6c42023b1b66cfd434b18"
  },
  {
    "url": "miniGame/resource/assets/random-events/event05.jpg",
    "revision": "2859279906298c86c5611d1dca0035e7"
  },
  {
    "url": "miniGame/resource/assets/random-events/event06.jpg",
    "revision": "25de72ae536eea1a916632b3634bead1"
  },
  {
    "url": "miniGame/resource/assets/random-events/event07.jpg",
    "revision": "7be250821d29333ca3dc4c8cae904c65"
  },
  {
    "url": "miniGame/resource/assets/random-events/event08.jpg",
    "revision": "7a57840c759e4afa3a99b4124e1010d8"
  },
  {
    "url": "miniGame/resource/assets/random-events/event09.jpg",
    "revision": "3c0f6fdcc2b3a3856ab80c1e772410af"
  },
  {
    "url": "miniGame/resource/assets/random-events/event10.jpg",
    "revision": "4fcc5ba30e70b7b6144c6416cd1000bb"
  },
  {
    "url": "miniGame/resource/assets/random-events/event11.jpg",
    "revision": "797e9448bae27192c17c7e078742808e"
  },
  {
    "url": "miniGame/resource/assets/random-events/event12.jpg",
    "revision": "18584654847011a0eb29027006710ee3"
  },
  {
    "url": "miniGame/resource/assets/random-events/event13.jpg",
    "revision": "4d5474dccf97b197f307dac24388c2cc"
  },
  {
    "url": "miniGame/resource/assets/random-events/event14.jpg",
    "revision": "60fb12020e9071924fd3b673b4a7549b"
  },
  {
    "url": "miniGame/resource/assets/random-events/event15.jpg",
    "revision": "7179e7a30365b2b6a0f82b30575fcc29"
  },
  {
    "url": "miniGame/resource/assets/random-events/event16.jpg",
    "revision": "333ec3edeb91ad512a714439123c1f49"
  },
  {
    "url": "miniGame/resource/assets/random-events/event17.jpg",
    "revision": "fad043a609fd3a209f0048ea38a09edc"
  },
  {
    "url": "miniGame/resource/assets/random-events/event18.jpg",
    "revision": "a9964c8b720ba0c65bd2ca5346779db8"
  },
  {
    "url": "miniGame/resource/assets/random-events/event19.jpg",
    "revision": "d617c4fd017355387edaedd3b7a477d2"
  },
  {
    "url": "miniGame/resource/assets/random-events/event20.jpg",
    "revision": "e21eb763b6312a8326110ecef9a79693"
  },
  {
    "url": "miniGame/resource/assets/random-events/event21.jpg",
    "revision": "d9e1f53d1db6aa9f08789b7055c21199"
  },
  {
    "url": "miniGame/resource/assets/random-events/event22.jpg",
    "revision": "6daade19609ce2168c0a57add21f4b3b"
  },
  {
    "url": "miniGame/resource/assets/random-events/event23.jpg",
    "revision": "e4137d1a0d82ed95f77d69b0a1ef3ee1"
  },
  {
    "url": "miniGame/resource/assets/random-events/event24.jpg",
    "revision": "f58cd55f1324cce4ca6332241c431ca6"
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
    "url": "miniGame/resource/assets/skills/skills.json",
    "revision": "e27a98f3445a5430bcb2db2fc1aa3fd4"
  },
  {
    "url": "miniGame/resource/assets/skills/skills.png",
    "revision": "00012aed6847156d6db46c0ace865720"
  },
  {
    "url": "miniGame/resource/assets/start/logo.png",
    "revision": "367de3eb95ad5ad1db26e7c126217000"
  },
  {
    "url": "miniGame/resource/assets/start/start.json",
    "revision": "e2ebb8b32c1eadfd5889f96b793b8b0f"
  },
  {
    "url": "miniGame/resource/assets/start/start.png",
    "revision": "c377069b459098be1dae76d6d229ac5f"
  },
  {
    "url": "miniGame/resource/assets/unit/unit(001-050).jpg",
    "revision": "83023b5cf3d30f609cf4ae617b18981a"
  },
  {
    "url": "miniGame/resource/assets/unit/unit(001-050).json",
    "revision": "00b997474b3d57099b6a5ab1f07d49a6"
  },
  {
    "url": "miniGame/resource/assets/unit/unit(051-100).jpg",
    "revision": "c1e77a17d8fdfbbbb8fba69aa6bbb0dd"
  },
  {
    "url": "miniGame/resource/assets/unit/unit(051-100).json",
    "revision": "0afe401515e2de2fcc8aa307bedd3e3d"
  },
  {
    "url": "miniGame/resource/assets/unit/unit(101-150).jpg",
    "revision": "9643c775748b9ed9899f7221657ea685"
  },
  {
    "url": "miniGame/resource/assets/unit/unit(101-150).json",
    "revision": "fe6572a86672efae8a9662113b029cec"
  },
  {
    "url": "miniGame/resource/default.theme.json",
    "revision": "a47ad291eae70a03cb7227faec7d1fd7"
  },
  {
    "url": "miniGame/resource/default.thm.json",
    "revision": "e70f56d02bfd6fef6120bb22c93f7701"
  },
  {
    "url": "miniGame/resource/resource.json",
    "revision": "68fecc9b6f683348df90ad87aa8e0bbf"
  },
  {
    "url": "resource/assets/achievement-icon/achievement-icon.json",
    "revision": "8b1367bf2c7838d2f80a772e3bc047c0"
  },
  {
    "url": "resource/assets/achievement-icon/achievement-icon.png",
    "revision": "2640bc612aefd75104a40e563f949c41"
  },
  {
    "url": "resource/assets/background/chapter-bg(1)-1.jpg",
    "revision": "64dc5910f302d4ff5a68a61a7a7bfbf0"
  },
  {
    "url": "resource/assets/background/chapter-bg(1)-2.jpg",
    "revision": "f6db7b01dd490811f8c664950c6314e7"
  },
  {
    "url": "resource/assets/background/chapter-bg(2)-1.jpg",
    "revision": "08623a4ca0ef99f497cbd298d706e826"
  },
  {
    "url": "resource/assets/background/chapter-bg(2)-2.jpg",
    "revision": "69a77b77bb4e5f46eaff0d9d3064da79"
  },
  {
    "url": "resource/assets/background/chapter-bg(3)-1.jpg",
    "revision": "9ded670eea1a3fb2d7556b26ebb7e67c"
  },
  {
    "url": "resource/assets/background/chapter-bg(3)-2.jpg",
    "revision": "929d2d85908c83ec48ea63acc9f331f1"
  },
  {
    "url": "resource/assets/background/chapter-bg(4)-1.jpg",
    "revision": "74122770d16f16615b733a4dbd30444c"
  },
  {
    "url": "resource/assets/background/chapter-bg(4)-2.jpg",
    "revision": "3fe28b8ce60c769715fdc659111f429e"
  },
  {
    "url": "resource/assets/background/chapter-bg(5)-1.jpg",
    "revision": "c6fcf043cce95e81badd2f4ae5b5e06f"
  },
  {
    "url": "resource/assets/background/chapter-bg(5)-2.jpg",
    "revision": "9d3b9d56309254c2a4cc09a4e7ac0e39"
  },
  {
    "url": "resource/assets/background/scene-background.png",
    "revision": "74ab38ce4248c2d646bd4d025f679511"
  },
  {
    "url": "resource/assets/background/start-background.png",
    "revision": "b2d0b5d1c375126fcd2b18ab2e35832d"
  },
  {
    "url": "resource/assets/background/victory.png",
    "revision": "585f4206a118ee6083cc3f4961ac571e"
  },
  {
    "url": "resource/assets/battle/back.png",
    "revision": "464ae216208cf938063b25800737e2dd"
  },
  {
    "url": "resource/assets/battle/backup-hero-bg.png",
    "revision": "3a5db5b9f0b47d1ffadd500353b223d5"
  },
  {
    "url": "resource/assets/battle/blue.png",
    "revision": "bfad2d61c896e47c769d00d8e668d544"
  },
  {
    "url": "resource/assets/battle/blueTeam.png",
    "revision": "fdd2125ed6246d6214a69dfbb982c9c3"
  },
  {
    "url": "resource/assets/battle/bottom-bg.png",
    "revision": "a3f8a14b6fd20e47576644048819302b"
  },
  {
    "url": "resource/assets/battle/btn-view-heroes.png",
    "revision": "25fcdac3f4c3eba9259ea4bcdab61afc"
  },
  {
    "url": "resource/assets/battle/btn-view-prison.png",
    "revision": "e8e1ef5376b36b5cfefc748ba143200b"
  },
  {
    "url": "resource/assets/battle/btn-view.png",
    "revision": "0b12b2342706fb08b0421af17665c037"
  },
  {
    "url": "resource/assets/battle/defend-bg.png",
    "revision": "f5565bac685e96f5c32006710e4a0481"
  },
  {
    "url": "resource/assets/battle/enemy-mark.png",
    "revision": "fd7651b951e0c94a00e856a1c03dea4f"
  },
  {
    "url": "resource/assets/battle/fail-left.png",
    "revision": "51d7186d8586cd434db662bddb467273"
  },
  {
    "url": "resource/assets/battle/fail-right.png",
    "revision": "370b3c3fc6edb0ea3aafdb5dbfd4cce1"
  },
  {
    "url": "resource/assets/battle/fail-title.png",
    "revision": "051b47c16535dbf00beda302f7cee4cf"
  },
  {
    "url": "resource/assets/battle/game-over-main.png",
    "revision": "f1f0ac6819c36622f1a574ecf53a9e0e"
  },
  {
    "url": "resource/assets/battle/hero-mark.png",
    "revision": "c9c65ff58cde444facdef50b2b5bd773"
  },
  {
    "url": "resource/assets/battle/icon-new.png",
    "revision": "42e380da1d4bd4f174b8ffc554330ab8"
  },
  {
    "url": "resource/assets/battle/label-background.png",
    "revision": "2bb5321826abf0797c2595958125d845"
  },
  {
    "url": "resource/assets/battle/red-boss.png",
    "revision": "3afdb275704b52d871ba457b44946fdb"
  },
  {
    "url": "resource/assets/battle/red-elite.png",
    "revision": "81e1e4572be66a6d15a00ec1b9793fe1"
  },
  {
    "url": "resource/assets/battle/red.png",
    "revision": "78cfb785b3f76b16384b1156ba2df52e"
  },
  {
    "url": "resource/assets/battle/redTeam.png",
    "revision": "b196aa9862625641ac515a572bf2d2c6"
  },
  {
    "url": "resource/assets/battle/rest.png",
    "revision": "a1f00d2afe7d93b2e25f34dd6b0a7c72"
  },
  {
    "url": "resource/assets/battle/seperator.png",
    "revision": "3ec37132c5594897317d2dbcacb503a7"
  },
  {
    "url": "resource/assets/battle/split-line.png",
    "revision": "84a60abb4c5e2fa2b2d99a3185381690"
  },
  {
    "url": "resource/assets/battle/stone(0).png",
    "revision": "a39c0753129704e22b9fb84c2fe11453"
  },
  {
    "url": "resource/assets/battle/tile-attack(1).png",
    "revision": "c9acec152932a92fd7c43eabe307c7ea"
  },
  {
    "url": "resource/assets/battle/tile-attack(2).png",
    "revision": "3e2c20ecfe7a7e7ce8af189eac556219"
  },
  {
    "url": "resource/assets/battle/tile-defend.png",
    "revision": "041831d0fd7cf91c178e0e76ae35fcaf"
  },
  {
    "url": "resource/assets/battle/tile-hp.png",
    "revision": "acb7f32d875fdf17d74fab0c7be6052d"
  },
  {
    "url": "resource/assets/battle/title-get-achiev.png",
    "revision": "fd7e5f18f433ff9d96a10e631918b953"
  },
  {
    "url": "resource/assets/battle/title-pass-time.png",
    "revision": "06efa71fc1a5e82ed8723774e24b6442"
  },
  {
    "url": "resource/assets/battle/title-player-level.png",
    "revision": "4a6c9ad2b47d52c2bd3e25118956b451"
  },
  {
    "url": "resource/assets/battle/title-this-pass.png",
    "revision": "13ed93f819b6418094f409cab2b4fd57"
  },
  {
    "url": "resource/assets/battle/title-total-point.png",
    "revision": "9f1c91bb1b98b032188cd0200fb56e94"
  },
  {
    "url": "resource/assets/battle/title-use-cards.png",
    "revision": "844567b8a2e2ffa35b43d073e97786f7"
  },
  {
    "url": "resource/assets/battle/victory-title.png",
    "revision": "9bc58aa0bb9effe1c158d3e8ea6a3c78"
  },
  {
    "url": "resource/assets/battle/victory/btn-blue.png",
    "revision": "36ab07be8712aa4bf7950221a713a311"
  },
  {
    "url": "resource/assets/battle/victory/btn-choose.png",
    "revision": "1197c1d1ee579becaffb7734d126779e"
  },
  {
    "url": "resource/assets/battle/victory/btn-red.png",
    "revision": "d4c03ebc28bc4ac1151f0040501cce76"
  },
  {
    "url": "resource/assets/battle/victory/btn-text-back.png",
    "revision": "098e2c47c1a986af848064eafceb5069"
  },
  {
    "url": "resource/assets/battle/victory/btn-text-share.png",
    "revision": "b8c3cd85ed7b562609bd99f61f4aedbf"
  },
  {
    "url": "resource/assets/battle/victory/choose-hero-background.png",
    "revision": "a804572b5ae36b4e6f66d9aa75d79e72"
  },
  {
    "url": "resource/assets/battle/victory/chooses-hero-bg.png",
    "revision": "fd47da9b51dcbeee3be76b1f0cba9473"
  },
  {
    "url": "resource/assets/battle/victory/chooses-prisoner-bg.png",
    "revision": "eaa07a436faa2276084aba342aa225bd"
  },
  {
    "url": "resource/assets/battle/victory/random-icon.png",
    "revision": "d7c4175ad230b6ba7fc9d0563d04b67e"
  },
  {
    "url": "resource/assets/battle/victory/scroller-arrow-left.png",
    "revision": "c8123800c9cbbb1a5c3bf75f63c2bef2"
  },
  {
    "url": "resource/assets/battle/victory/scroller-arrow-right.png",
    "revision": "8298ab4f54d0ca621fcba334e3be4bac"
  },
  {
    "url": "resource/assets/battle/victory/tips-choose-hero.png",
    "revision": "ceb1f5591e27098aedf24f504aeabf65"
  },
  {
    "url": "resource/assets/battle/victory/tips-choose-prisoner.png",
    "revision": "3708b0b28d37c0c0e5826e9d5864a542"
  },
  {
    "url": "resource/assets/battle/victory/title-choose-hero.png",
    "revision": "45e9dcb8e2b3be92e0e3d9b3d8be2994"
  },
  {
    "url": "resource/assets/battle/victory/victory-background.png",
    "revision": "5a41937fa03d3eaf87cdcfa77b326422"
  },
  {
    "url": "resource/assets/battle/vistro-content-background.png",
    "revision": "d9dcf7c21ce2d0f7953456536288b024"
  },
  {
    "url": "resource/assets/button_down.png",
    "revision": "878334d13048afd6b6b061e8b156dadb"
  },
  {
    "url": "resource/assets/button_up.png",
    "revision": "a6341a65c7155a4edbbf1f39bc7932d9"
  },
  {
    "url": "resource/assets/button/btn-confirm.png",
    "revision": "3d2f410316afed5f36a83e8a47525887"
  },
  {
    "url": "resource/assets/button/btn-share.png",
    "revision": "72dd786faee14ce960a6edd43ccdd5a8"
  },
  {
    "url": "resource/assets/button/btn-text-back.png",
    "revision": "73139f89252161fb1ee21207faeaaa03"
  },
  {
    "url": "resource/assets/button/btn-text-confirm.png",
    "revision": "9aa072772632dffe6838cae003a1e501"
  },
  {
    "url": "resource/assets/config/achievement.json",
    "revision": "aa3bccb7f8aba339f4ef70534ccf89ee"
  },
  {
    "url": "resource/assets/config/battle.json",
    "revision": "40c09bbd9b50630afb088db1495376bc"
  },
  {
    "url": "resource/assets/config/camp.json",
    "revision": "f35e5e41cbe6900fa51bf02f7275da51"
  },
  {
    "url": "resource/assets/config/chapter.json",
    "revision": "52faef3a3340c369aa91d0472ec22b38"
  },
  {
    "url": "resource/assets/config/effect.json",
    "revision": "c0da84050ad9d41e43eba03f229933a0"
  },
  {
    "url": "resource/assets/config/event.json",
    "revision": "28f7e9f05fbc88ff404a7212347fb48b"
  },
  {
    "url": "resource/assets/config/hero.json",
    "revision": "e521f1193f7739b27c1794d172933ac1"
  },
  {
    "url": "resource/assets/config/init-hero.json",
    "revision": "4a400dc8059a13d038501ad4838986ce"
  },
  {
    "url": "resource/assets/config/node.json",
    "revision": "96c6b82751492659eae1c46967e20d90"
  },
  {
    "url": "resource/assets/config/novice-guidance.json",
    "revision": "0fb271ccd44a633bfc2693ba00c47377"
  },
  {
    "url": "resource/assets/config/player-level.json",
    "revision": "7534262d436092be89965bf1fe69800e"
  },
  {
    "url": "resource/assets/config/pub.json",
    "revision": "9202d553094c3d8c1a54a021dcb0db64"
  },
  {
    "url": "resource/assets/config/random-event.json",
    "revision": "eb1dc7cfd61273a7ef764cc2a22a3817"
  },
  {
    "url": "resource/assets/config/rarity.json",
    "revision": "9b6e995bd0d3234b1050caab9fbe2afd"
  },
  {
    "url": "resource/assets/config/reward.json",
    "revision": "0713410b75c83158c3eeb55be3183966"
  },
  {
    "url": "resource/assets/config/skill.json",
    "revision": "e0381219c54314328cf879b0da91806c"
  },
  {
    "url": "resource/assets/config/store.json",
    "revision": "dfef5a2168fc89f65ba50177b68c597e"
  },
  {
    "url": "resource/assets/confirm/btn-cancel.png",
    "revision": "14cb9a4deacf658b188e715a7bfe753f"
  },
  {
    "url": "resource/assets/confirm/btn-confirm.png",
    "revision": "025c37d400799008707a7c1dfefb3ed3"
  },
  {
    "url": "resource/assets/confirm/confirm-background.png",
    "revision": "399a93c557cef26488f85ead9a74b9fe"
  },
  {
    "url": "resource/assets/confirm/confirm-content.png",
    "revision": "284a2782fb32cd9f94d2e762a578ee40"
  },
  {
    "url": "resource/assets/confirm/icon-background.png",
    "revision": "c66be2e62b63e71b677825251ac6b162"
  },
  {
    "url": "resource/assets/confirm/tips-label.png",
    "revision": "7ec5aebf34d2c067735933b5ccf1ce50"
  },
  {
    "url": "resource/assets/confirm/title-background.png",
    "revision": "a5f038c45e234c75b010a3a1fe5f334b"
  },
  {
    "url": "resource/assets/dragonbones/cloud1/cloud_1_ske.json",
    "revision": "6f54071cae0950a7afec7803e5020321"
  },
  {
    "url": "resource/assets/dragonbones/cloud1/cloud_1_tex.json",
    "revision": "d7656d34d0b33a7bd69553ee9c5cd366"
  },
  {
    "url": "resource/assets/dragonbones/cloud1/cloud_1_tex.png",
    "revision": "910f624522275a29209329ab7de8eb6f"
  },
  {
    "url": "resource/assets/dragonbones/deadspell_ske.json",
    "revision": "bfc0db165739be3119d90ab7dfe2c1a5"
  },
  {
    "url": "resource/assets/dragonbones/deadspell_tex.json",
    "revision": "956a59ecfd6e61e3e2bdbe975b8e88ec"
  },
  {
    "url": "resource/assets/dragonbones/deadspell_tex.png",
    "revision": "ab2f9858d2d2d546314b9e2a62b39f29"
  },
  {
    "url": "resource/assets/dragonbones/dizzy_ske.json",
    "revision": "70cac7970e942d1571ec443f2b1c676a"
  },
  {
    "url": "resource/assets/dragonbones/dizzy_tex.json",
    "revision": "1fe189a4ad5cb142c1ac3c49116acb6b"
  },
  {
    "url": "resource/assets/dragonbones/dizzy_tex.png",
    "revision": "92a787ad4b899651d852b3e232705d16"
  },
  {
    "url": "resource/assets/dragonbones/enhance_ske.json",
    "revision": "fedba011886d7d1f69d148c86edb0bca"
  },
  {
    "url": "resource/assets/dragonbones/enhance_tex.json",
    "revision": "97381c1f54b6a69dce016c4e983f5bbe"
  },
  {
    "url": "resource/assets/dragonbones/enhance_tex.png",
    "revision": "236dc656d228237f7164724b9c495404"
  },
  {
    "url": "resource/assets/dragonbones/magic_ske.json",
    "revision": "a8673f4c2c0d36316d7e5557a2b91496"
  },
  {
    "url": "resource/assets/dragonbones/magic_tex.json",
    "revision": "f9aebb7eef684a5ce298b58998e8146f"
  },
  {
    "url": "resource/assets/dragonbones/magic_tex.png",
    "revision": "4273e44dcc3f13a5f058fcedc341979b"
  },
  {
    "url": "resource/assets/dragonbones/mark_ske.json",
    "revision": "82e27f72e31b1cc7dc66db5c880b35a2"
  },
  {
    "url": "resource/assets/dragonbones/mark_tex.json",
    "revision": "0dd2d2c29c6ba840205d9e5a47e4848f"
  },
  {
    "url": "resource/assets/dragonbones/mark_tex.png",
    "revision": "7221e65ec1fdc260de0082a5202c27bc"
  },
  {
    "url": "resource/assets/dragonbones/normal-skill_ske.json",
    "revision": "609290c44ac0abbfccba6ecc03d37cbe"
  },
  {
    "url": "resource/assets/dragonbones/normal-skill_tex.json",
    "revision": "3578e688a600131275cfa6eba30a8a4c"
  },
  {
    "url": "resource/assets/dragonbones/normal-skill_tex.png",
    "revision": "289fe7cd0c53c33e1cc3530c48324738"
  },
  {
    "url": "resource/assets/dragonbones/threekingdoms2048_ske.json",
    "revision": "31588258d30af6719329541f00abe05b"
  },
  {
    "url": "resource/assets/dragonbones/threekingdoms2048_tex.json",
    "revision": "fb967ef4f362dd3fdcf230843c1ec80b"
  },
  {
    "url": "resource/assets/dragonbones/threekingdoms2048_tex.png",
    "revision": "16c19b175f3108bacd6a6cff12b6147d"
  },
  {
    "url": "resource/assets/dragonbones/weaken_ske.json",
    "revision": "639651e6b61b4b933c66a8c7b87b25a3"
  },
  {
    "url": "resource/assets/dragonbones/weaken_tex.json",
    "revision": "6053d80907bfd63e92606fdd9f490450"
  },
  {
    "url": "resource/assets/dragonbones/weaken_tex.png",
    "revision": "233b2e66765103adf91d82c25a9a7c57"
  },
  {
    "url": "resource/assets/enemy-bg.png",
    "revision": "0ca344c73cc23ae6831c2249b0b846d3"
  },
  {
    "url": "resource/assets/hero-bg.png",
    "revision": "a17c7a6cde1b7a26dc28a816e4d3db83"
  },
  {
    "url": "resource/assets/icons/attack-number.png",
    "revision": "349cb10e4e7e04c0d13a7a79dfa59483"
  },
  {
    "url": "resource/assets/icons/attack(1).png",
    "revision": "23b68019a658e3c0bb34a966ccc181f8"
  },
  {
    "url": "resource/assets/icons/attack(2).png",
    "revision": "b8eb96bd269d3ec7e0edb35acc4eb94c"
  },
  {
    "url": "resource/assets/icons/barracks-number.png",
    "revision": "1cb49daa1afb0db3740997454f0ac176"
  },
  {
    "url": "resource/assets/icons/bootcamp.png",
    "revision": "85854fbed1cd93f44cc4b1833cc02577"
  },
  {
    "url": "resource/assets/icons/boss.png",
    "revision": "86adbe835bbcfb0e362bd8ed7e1efd15"
  },
  {
    "url": "resource/assets/icons/collect-number.png",
    "revision": "740f378b03bc127828f083488f0d2b3e"
  },
  {
    "url": "resource/assets/icons/defend-number.png",
    "revision": "7c5b76204da3b58abf803ac2d4c1ee0e"
  },
  {
    "url": "resource/assets/icons/defend.png",
    "revision": "bb5180c940676c6befd991bc1bc37534"
  },
  {
    "url": "resource/assets/icons/elite.png",
    "revision": "20bf31d9971dee1e7db5fc262240514f"
  },
  {
    "url": "resource/assets/icons/hero-attack(1).png",
    "revision": "b5866f417c263389a197135ef64ee341"
  },
  {
    "url": "resource/assets/icons/hero-attack(2).png",
    "revision": "75030d3f4fb3ea707d1db3068889be09"
  },
  {
    "url": "resource/assets/icons/hero-background(1).png",
    "revision": "e33efcb5571cb302067029cf49614551"
  },
  {
    "url": "resource/assets/icons/hero-background(2).png",
    "revision": "077fca488fff1a35adfb5f181cb889da"
  },
  {
    "url": "resource/assets/icons/hero-background(3).png",
    "revision": "b8aac9477c0dc1aa57fcb9e960442fca"
  },
  {
    "url": "resource/assets/icons/hero-background(4).png",
    "revision": "9cb2e486f96dc2b800cd9aa20cb848fc"
  },
  {
    "url": "resource/assets/icons/hero-bg-box.png",
    "revision": "bc6d476ac0ea9d0d48bbdb4b77b1f2a1"
  },
  {
    "url": "resource/assets/icons/hero-hp.png",
    "revision": "7c2ff5ae836a1451f5f99c60897b31f2"
  },
  {
    "url": "resource/assets/icons/hospital.png",
    "revision": "043f9a103d48ab6b3fc46120d51996f6"
  },
  {
    "url": "resource/assets/icons/hp-number.png",
    "revision": "c279e6fef90f8373210b156f80d297be"
  },
  {
    "url": "resource/assets/icons/hp.png",
    "revision": "df63ddbafbebc0a5e5843d5a6edbe951"
  },
  {
    "url": "resource/assets/icons/icon-camp(1).png",
    "revision": "2665601d973f531ec8ca57159f085fa4"
  },
  {
    "url": "resource/assets/icons/icon-camp(2).png",
    "revision": "52c29c6ab1936db4360d9e7e603e0f4d"
  },
  {
    "url": "resource/assets/icons/icon-camp(3).png",
    "revision": "d63f36656bb0fd7ddc4daeefbeee86a0"
  },
  {
    "url": "resource/assets/icons/icon-camp(4).png",
    "revision": "62dbc2afe9e208d90b20929fd038fe1b"
  },
  {
    "url": "resource/assets/icons/icons.json",
    "revision": "fc0baf2d461f97264e700febb77bd297"
  },
  {
    "url": "resource/assets/icons/icons.png",
    "revision": "55cad85faefc8e6880840be08c65f5bf"
  },
  {
    "url": "resource/assets/icons/Lv..png",
    "revision": "d939aef7b015ba24c8c7e44060109965"
  },
  {
    "url": "resource/assets/icons/mass.png",
    "revision": "877578c2e26a6baf41908f542b1ea7f5"
  },
  {
    "url": "resource/assets/icons/next-nodes-marker.jpg",
    "revision": "c06903d61044a0ca53beae7fba5df821"
  },
  {
    "url": "resource/assets/icons/next-nodes-marker.png",
    "revision": "330cc4b29673389a1eb008401368299d"
  },
  {
    "url": "resource/assets/icons/pub.png",
    "revision": "90fdc30096e8a95c1694cd8de8ac5a7c"
  },
  {
    "url": "resource/assets/icons/random.png",
    "revision": "2ba9d3dbdae0fe28f1c65699f9c06cc3"
  },
  {
    "url": "resource/assets/icons/start-player-bg.png",
    "revision": "14ae101bd151233ad07cf3226cd23765"
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
    "url": "resource/assets/modal/12yuan.png",
    "revision": "a0de2de617ff9f301c46d627fd5dd571"
  },
  {
    "url": "resource/assets/modal/all.png",
    "revision": "1d6dca3dab53facfd4c83fb9924054cc"
  },
  {
    "url": "resource/assets/modal/all3.png",
    "revision": "3bf4be418be33cd9def25bcf77cb5770"
  },
  {
    "url": "resource/assets/modal/ashen.png",
    "revision": "ae81e19405c4cdd52285a4a4b96523c4"
  },
  {
    "url": "resource/assets/modal/avatar-bg.png",
    "revision": "125faa35e22804715dd297682ca2d99e"
  },
  {
    "url": "resource/assets/modal/bg-heroes.png",
    "revision": "6c56958437fb607d9f4d97fbd993dae5"
  },
  {
    "url": "resource/assets/modal/bg.png",
    "revision": "799e2169bd1f308a156ee4f7415e451f"
  },
  {
    "url": "resource/assets/modal/blue.png",
    "revision": "36ab07be8712aa4bf7950221a713a311"
  },
  {
    "url": "resource/assets/modal/btn-back-main.png",
    "revision": "db815cd3d06480cc0c9ee68099285532"
  },
  {
    "url": "resource/assets/modal/btn-back.png",
    "revision": "051de3f89a7467092f6ffdb1d12d5d14"
  },
  {
    "url": "resource/assets/modal/btn-barrack.png",
    "revision": "d56b15fa04cd220db2875d5f39527154"
  },
  {
    "url": "resource/assets/modal/btn-before-train.png",
    "revision": "36d45a958871593bbe94c1c288d3e280"
  },
  {
    "url": "resource/assets/modal/btn-explain.png",
    "revision": "0675749239bca3cca47aa3a18cfdb3a7"
  },
  {
    "url": "resource/assets/modal/btn-next-train.png",
    "revision": "893679ebf5b65ce1188b58dc2659c246"
  },
  {
    "url": "resource/assets/modal/btn-prison.png",
    "revision": "f3c772a0974cd81f260237ddb64fde9b"
  },
  {
    "url": "resource/assets/modal/btn-random-events-back.png",
    "revision": "b5d7c1f660dae6687faad752e4cb9170"
  },
  {
    "url": "resource/assets/modal/btn-random-events-view-heroes.png",
    "revision": "a9526306223ef080b5b88c0801e7a0df"
  },
  {
    "url": "resource/assets/modal/btn-random-select.png",
    "revision": "4ceb69d11fd2fe249481652e7513aa4b"
  },
  {
    "url": "resource/assets/modal/btn-summon.png",
    "revision": "40a8716487ffbc96fa02f039bcee4153"
  },
  {
    "url": "resource/assets/modal/btn-text-back.png",
    "revision": "c0bf235a10f4a47bd37ab65b64d4f443"
  },
  {
    "url": "resource/assets/modal/btn-text-cure.png",
    "revision": "f2c8bedbee2642135c5e8ca885817547"
  },
  {
    "url": "resource/assets/modal/btn-text-fire.png",
    "revision": "4d17426a57449b95348aec737dde551c"
  },
  {
    "url": "resource/assets/modal/btn-text-recover.png",
    "revision": "f2c8bedbee2642135c5e8ca885817547"
  },
  {
    "url": "resource/assets/modal/btn-text-recruit.png",
    "revision": "f6cb7797ec7cb79d17eb56723e259b0e"
  },
  {
    "url": "resource/assets/modal/btn-text-release.png",
    "revision": "81a82c4c196c2b6630f3daa6a380beb3"
  },
  {
    "url": "resource/assets/modal/btn-text-share.png",
    "revision": "1117848d9b4772321babbeb1c1647474"
  },
  {
    "url": "resource/assets/modal/btn-text-summon.png",
    "revision": "e234f9f185c9dd79303b8575782ec014"
  },
  {
    "url": "resource/assets/modal/btn-text-train.png",
    "revision": "58b90aed4f0099e75114a062a50aacbc"
  },
  {
    "url": "resource/assets/modal/btn-text-view.png",
    "revision": "f0c3ee0478179029eb5405f6f2a2f3cd"
  },
  {
    "url": "resource/assets/modal/chapter-head-bg.png",
    "revision": "531e8663d71c20eab98eee2215622228"
  },
  {
    "url": "resource/assets/modal/company-logo.png",
    "revision": "57d308361f59e5946f9111c756d50d6e"
  },
  {
    "url": "resource/assets/modal/content-bg.png",
    "revision": "f3438b5b6b13695a7a56b4f010b2a1ac"
  },
  {
    "url": "resource/assets/modal/footer.png",
    "revision": "763dee1ef281d16c6b6de943c317f839"
  },
  {
    "url": "resource/assets/modal/green.png",
    "revision": "79c41753fbd65aecb60eee313a9e007b"
  },
  {
    "url": "resource/assets/modal/guidance-dialog.png",
    "revision": "e811ada31077f4ccb989fcb174e713fd"
  },
  {
    "url": "resource/assets/modal/have-money-box.png",
    "revision": "6b6762879acaaecbdf86deea0e72f265"
  },
  {
    "url": "resource/assets/modal/header.png",
    "revision": "1717af0b3a0bb95391e8324fe690d1e0"
  },
  {
    "url": "resource/assets/modal/hero-bg-box(1).png",
    "revision": "e748183414f90c2244f03926e9e06438"
  },
  {
    "url": "resource/assets/modal/hero-bg-box(2).png",
    "revision": "ebb735ba32fa234e3400048f760b02b5"
  },
  {
    "url": "resource/assets/modal/hero-bg-box(3).png",
    "revision": "42e913f05e157955c2d60f45757d8f36"
  },
  {
    "url": "resource/assets/modal/hero-bg-box(4).png",
    "revision": "d315298cc821c2e1337767a36fc8a73f"
  },
  {
    "url": "resource/assets/modal/hero-lock.png",
    "revision": "841db9cea0356b4bf829d3f9c24ca112"
  },
  {
    "url": "resource/assets/modal/hero-name-bg.png",
    "revision": "5a1ef6b0ab68b171b36aa06709cf73e6"
  },
  {
    "url": "resource/assets/modal/hero-type(1).png",
    "revision": "69fbca5fa919b77f243e07718c78baef"
  },
  {
    "url": "resource/assets/modal/hero-type(2).png",
    "revision": "0caf505d36346e8c111afe64c0f13e40"
  },
  {
    "url": "resource/assets/modal/hero-type(3).png",
    "revision": "770ba5208db8f6283d27d7086f7b0389"
  },
  {
    "url": "resource/assets/modal/heroes-1st.png",
    "revision": "b53802de34b4b9bf0929e96a483f2108"
  },
  {
    "url": "resource/assets/modal/heroes-2nd.png",
    "revision": "b4e313db458322d1b0bf7d20f98d4893"
  },
  {
    "url": "resource/assets/modal/heroes-3rd.png",
    "revision": "2b14b2451eb1886dbfff533036e12361"
  },
  {
    "url": "resource/assets/modal/heroes-4th.png",
    "revision": "aae4b6cd280de49fd373a96f204302c2"
  },
  {
    "url": "resource/assets/modal/item-bg.png",
    "revision": "b1ee272038fa376f340a433d7bcd08b7"
  },
  {
    "url": "resource/assets/modal/lock-bg.png",
    "revision": "9af4be5eb8bb8baded0cbdad5dcccb4e"
  },
  {
    "url": "resource/assets/modal/locked.png",
    "revision": "b6731dd93aa12f0d8671b1c611b8beeb"
  },
  {
    "url": "resource/assets/modal/Lv.png",
    "revision": "4721c334f45713b076b709cca4f8cd97"
  },
  {
    "url": "resource/assets/modal/modal.json",
    "revision": "9162f7a8cf394bde0ee34938a68da8f6"
  },
  {
    "url": "resource/assets/modal/modal.png",
    "revision": "3c2983241cf6db3506816a2419a811b2"
  },
  {
    "url": "resource/assets/modal/money-yb.png",
    "revision": "0847e7f991598589d56e1425abb51248"
  },
  {
    "url": "resource/assets/modal/msg-bg.png",
    "revision": "b235c5602cc439cb7e690ea6cae15101"
  },
  {
    "url": "resource/assets/modal/msg-icon.png",
    "revision": "b21ebaf58fccdc668f5e6a2c4fa15197"
  },
  {
    "url": "resource/assets/modal/name-bg.png",
    "revision": "fd750fbd0887fae1f9035dc0256e3bba"
  },
  {
    "url": "resource/assets/modal/novice-dialog.png",
    "revision": "39bbbd6fbc8e707bdac85338e223f8d4"
  },
  {
    "url": "resource/assets/modal/novice-guidance.png",
    "revision": "e2321c735b1c5a68d08b02316ef357ab"
  },
  {
    "url": "resource/assets/modal/opacity_bg.png",
    "revision": "d6350d3a921c147d78c992c04e5cf96b"
  },
  {
    "url": "resource/assets/modal/option-bg.png",
    "revision": "38abec629ddba92f21509ae1a2805854"
  },
  {
    "url": "resource/assets/modal/owned-marker.png",
    "revision": "38fc0114b0e227de0bbff3412477417a"
  },
  {
    "url": "resource/assets/modal/owned.png",
    "revision": "490f68bcfaa7f840312fc8c305328ea1"
  },
  {
    "url": "resource/assets/modal/owned3.png",
    "revision": "164e102b71d308c766f1e01fb8196aa5"
  },
  {
    "url": "resource/assets/modal/pass-camp(1).png",
    "revision": "4da2704cc8c4f5a548c883bf2e5087ca"
  },
  {
    "url": "resource/assets/modal/pass-camp(2).png",
    "revision": "e22d4ad6dc060675666b9a5acd0effb2"
  },
  {
    "url": "resource/assets/modal/pass-camp(3).png",
    "revision": "cdf2914855f540747953162489b35c84"
  },
  {
    "url": "resource/assets/modal/pass-camp(4).png",
    "revision": "3a2bbaa99b808a77a6c53b3964e4953b"
  },
  {
    "url": "resource/assets/modal/player-info-bg.png",
    "revision": "c349b3a84e909ab5e1780cd8746f97d6"
  },
  {
    "url": "resource/assets/modal/player-pass-bg.png",
    "revision": "11d6514aedb64ad27e57ab04ba0d24ba"
  },
  {
    "url": "resource/assets/modal/player-unlock.png",
    "revision": "d0b0e512a1cd0d610bd5e864183a9279"
  },
  {
    "url": "resource/assets/modal/prison-box.png",
    "revision": "deca65d5dd385695290776a5ddc2685d"
  },
  {
    "url": "resource/assets/modal/prison-btn-share.png",
    "revision": "dfa165d66dc60701e80f9dfe34b9ec1d"
  },
  {
    "url": "resource/assets/modal/prison-locked.png",
    "revision": "4d014f8fb9e5349b25f2b9f5e6e690c8"
  },
  {
    "url": "resource/assets/modal/prison.png",
    "revision": "d5eec3895e60d252d999564573364137"
  },
  {
    "url": "resource/assets/modal/rank.json",
    "revision": "05f3df8b135ccc2cadb00d2f63a8f218"
  },
  {
    "url": "resource/assets/modal/rank.png",
    "revision": "827809a0af714a5c228ccba89c7f5d3c"
  },
  {
    "url": "resource/assets/modal/rarity1.png",
    "revision": "758090fecf4adb5355089861d59f53e0"
  },
  {
    "url": "resource/assets/modal/rarity2.png",
    "revision": "521abb03299ac6f386c1878a958e9b1f"
  },
  {
    "url": "resource/assets/modal/rarity3.png",
    "revision": "1bb8b706f6fbd5128ec86cda9b79e406"
  },
  {
    "url": "resource/assets/modal/rarity4.png",
    "revision": "1e7b9757cf1d25d108a7f50654afd955"
  },
  {
    "url": "resource/assets/modal/rarity5.png",
    "revision": "57b038c27cc63bbbb92856155f1fa0e6"
  },
  {
    "url": "resource/assets/modal/red.png",
    "revision": "75d186507ef56b2390f1de19128c03a7"
  },
  {
    "url": "resource/assets/modal/scroll-bg.jpg",
    "revision": "c47cd405f2a336acd0b90831ef70f0c9"
  },
  {
    "url": "resource/assets/modal/scroll-bg.png",
    "revision": "fbf08314e90d3950a831abb462b95f10"
  },
  {
    "url": "resource/assets/modal/scroll-tail.png",
    "revision": "d4cb9d3e2127e41562afb49cd7584b7f"
  },
  {
    "url": "resource/assets/modal/scroll-title.png",
    "revision": "ffca668ab244b6273e14e37d83d46dac"
  },
  {
    "url": "resource/assets/modal/select-bg.png",
    "revision": "052b45b2704951e5422365ce806d55fa"
  },
  {
    "url": "resource/assets/modal/select-icon.png",
    "revision": "daeabcb4a39eed86f334e76065c13e8b"
  },
  {
    "url": "resource/assets/modal/select-item-bottom.png",
    "revision": "f20487fa893d80643716d606fd6d9e12"
  },
  {
    "url": "resource/assets/modal/skill-border.png",
    "revision": "32bac11f95b475380838a37228578dc8"
  },
  {
    "url": "resource/assets/modal/skip-btn.png",
    "revision": "1e0599ab0d803d5d5e95cff1fd129e5d"
  },
  {
    "url": "resource/assets/modal/store-icon.json",
    "revision": "444f31317718bdc40ca3e2e404ab7e6a"
  },
  {
    "url": "resource/assets/modal/store-icon.png",
    "revision": "d31b3177b0585643ac43c8e821d21799"
  },
  {
    "url": "resource/assets/modal/sub-title-bg.png",
    "revision": "1ebfb3c43855bfd4a1c5dc6814a4a3c4"
  },
  {
    "url": "resource/assets/modal/text-bg.png",
    "revision": "cbc498ade88bd7b6f3849cb8437566da"
  },
  {
    "url": "resource/assets/modal/title-achiev.png",
    "revision": "f7e7bd2b3f9ff5a610add36c0dc35f3f"
  },
  {
    "url": "resource/assets/modal/title-barrack-hero.png",
    "revision": "d021d6badfd2fcb75adb182231cfb2b4"
  },
  {
    "url": "resource/assets/modal/title-base.png",
    "revision": "55bdb263fe36d19c04192ba6f7db1cf7"
  },
  {
    "url": "resource/assets/modal/title-bg-active.png",
    "revision": "565e3b83cb46a1c41be1bf05b4772959"
  },
  {
    "url": "resource/assets/modal/title-bg.png",
    "revision": "7e9dc9bdeb52c789b7a6dc4736e10e12"
  },
  {
    "url": "resource/assets/modal/title-camp(1).png",
    "revision": "c8493ca6f53c723aaa76adfb8511d1df"
  },
  {
    "url": "resource/assets/modal/title-camp(2).png",
    "revision": "4499ae410d6b40d5c6b4a4accbd02a9f"
  },
  {
    "url": "resource/assets/modal/title-camp(3).png",
    "revision": "78c3171a5ba41058d2411a4734e2a871"
  },
  {
    "url": "resource/assets/modal/title-camp(4).png",
    "revision": "d32c037e5a8af72c140d3e2686193fbf"
  },
  {
    "url": "resource/assets/modal/title-developer.png",
    "revision": "8d58820fdda74b27a2d016aec5c7cb52"
  },
  {
    "url": "resource/assets/modal/title-field-hero.png",
    "revision": "a52e4b66d50e18e8937b50b3401a397a"
  },
  {
    "url": "resource/assets/modal/title-field-sub.png",
    "revision": "e025da55f00868a4bea05bfe85e1ed10"
  },
  {
    "url": "resource/assets/modal/title-field.png",
    "revision": "a93adb66373e3fe4cb5c40be5ad9101a"
  },
  {
    "url": "resource/assets/modal/title-first.png",
    "revision": "558b103474cf4ca454dcc4b3316db687"
  },
  {
    "url": "resource/assets/modal/title-hero-star.png",
    "revision": "434b07608936d0c6f188ee523be34d22"
  },
  {
    "url": "resource/assets/modal/title-hospital-hero.png",
    "revision": "85e719c8d27fb37a7508fb66380f7caa"
  },
  {
    "url": "resource/assets/modal/title-intro.png",
    "revision": "eed721aaf5890beffb43b4bf1ecf8d8d"
  },
  {
    "url": "resource/assets/modal/title-pass.png",
    "revision": "5177e9b92be732bf45b01c13444a9423"
  },
  {
    "url": "resource/assets/modal/title-player.png",
    "revision": "398db02d64ae8072ebc195547ba20d3e"
  },
  {
    "url": "resource/assets/modal/title-prison-bg.png",
    "revision": "b83d1a4dc83a501f52bbacd23514baca"
  },
  {
    "url": "resource/assets/modal/title-prison-hero.png",
    "revision": "63c888153010203157e3beacc4d4b92c"
  },
  {
    "url": "resource/assets/modal/title-prison1.png",
    "revision": "3083ea44fba84e263afc0db65522af85"
  },
  {
    "url": "resource/assets/modal/title-prison2.png",
    "revision": "2a1b455fb70879b49b96652b177c3181"
  },
  {
    "url": "resource/assets/modal/title-pub-hero.png",
    "revision": "59ae4b7894fd85727809f384ef4d44ae"
  },
  {
    "url": "resource/assets/modal/title-pub.png",
    "revision": "e6f03b069cdba6bbd3d7be749831ecfd"
  },
  {
    "url": "resource/assets/modal/title-random.png",
    "revision": "bce8c8ddd42b10eb766beebc9fa09f8c"
  },
  {
    "url": "resource/assets/modal/title-rank.png",
    "revision": "c698211d6a348f4085d12fd6181cd0b4"
  },
  {
    "url": "resource/assets/modal/title-recruit.png",
    "revision": "926ef6d8892b75fac099bbba7df8bdf7"
  },
  {
    "url": "resource/assets/modal/title-skill.png",
    "revision": "92c5a66b332b0f7767a5c7e5e66b4582"
  },
  {
    "url": "resource/assets/modal/title-store.png",
    "revision": "970e84f5531dc6eb7e1db04291ade289"
  },
  {
    "url": "resource/assets/modal/title-team-limit.png",
    "revision": "918bbb1e585f8c0d8a5041a87bc3da89"
  },
  {
    "url": "resource/assets/modal/title-team.png",
    "revision": "1c24695686e2c228835fbab3b0160524"
  },
  {
    "url": "resource/assets/modal/title-wait.png",
    "revision": "cf08f4d63297203d86a9fa06f2a2c84c"
  },
  {
    "url": "resource/assets/modal/title-wounded.png",
    "revision": "f2dd42174f875ff5aea1aedcfbec1e72"
  },
  {
    "url": "resource/assets/modal/unlock-bg.png",
    "revision": "337001db15f2905efdf40efe4c358dba"
  },
  {
    "url": "resource/assets/modal/unlock-level.png",
    "revision": "3d43c08f1abc61d3c5b58d68f402e0c2"
  },
  {
    "url": "resource/assets/modal/unselected-bg.png",
    "revision": "ae5b7f3db8aab51779456c44625de8ca"
  },
  {
    "url": "resource/assets/modal/unselected-middle.png",
    "revision": "6ec6b055a0ac847eb0ca3fdfc54ce098"
  },
  {
    "url": "resource/assets/modal/unselected-pub.png",
    "revision": "20f5e137054cbba18b50ba41d95446e7"
  },
  {
    "url": "resource/assets/modal/unselected-wounded.png",
    "revision": "99396e68ad4cb18ff1aaecba4c27ef8a"
  },
  {
    "url": "resource/assets/modal/yellow.png",
    "revision": "a014eb6f92403d73103276970fcf7eb9"
  },
  {
    "url": "resource/assets/modal/you-have.png",
    "revision": "1662ab3bf168405512803fe62ef0cd88"
  },
  {
    "url": "resource/assets/popup/btn-text-confirm.png",
    "revision": "5670826ba835c059f139d81c67362824"
  },
  {
    "url": "resource/assets/popup/btn-text-goto.png",
    "revision": "6ee7dc3dea1c2ea3fe05ec81b8e1b0e0"
  },
  {
    "url": "resource/assets/popup/camp-selected-border.png",
    "revision": "f7bafb2bc989928d3a0a61115b317308"
  },
  {
    "url": "resource/assets/popup/close.png",
    "revision": "a913091547ac61abbdd14c53948b18f1"
  },
  {
    "url": "resource/assets/popup/green-popup.png",
    "revision": "79c41753fbd65aecb60eee313a9e007b"
  },
  {
    "url": "resource/assets/popup/popup-bg.png",
    "revision": "61f3492c65423b7ac864bbd020a455d9"
  },
  {
    "url": "resource/assets/popup/shu.png",
    "revision": "aa70178b0197d98fda0b249587d4b303"
  },
  {
    "url": "resource/assets/popup/ta.png",
    "revision": "d87402f95edc0e3ee4bf925cbd7d58ef"
  },
  {
    "url": "resource/assets/popup/title-achievement.png",
    "revision": "4554fa75e6f041c4302d743b5f843b86"
  },
  {
    "url": "resource/assets/popup/title-battle.png",
    "revision": "b565ba58f96d632a055e95c51efc943b"
  },
  {
    "url": "resource/assets/popup/title-explain.png",
    "revision": "4d0c15be997ce111dd80418d232c124d"
  },
  {
    "url": "resource/assets/popup/title-field.png",
    "revision": "4dc649303f118c7d03e0b7b5847e4d5f"
  },
  {
    "url": "resource/assets/popup/title-hospital.png",
    "revision": "6301aa317267eec8c987e3bb2e6bdf55"
  },
  {
    "url": "resource/assets/popup/title-prompt.png",
    "revision": "00919463cd5b4f643ca225be17506ce4"
  },
  {
    "url": "resource/assets/popup/title-pub.png",
    "revision": "13b0e360ba73c199fbf59554d5367937"
  },
  {
    "url": "resource/assets/popup/title-random.png",
    "revision": "92e3c38c56739a933746af4a3dc5e90e"
  },
  {
    "url": "resource/assets/popup/title-select-camp.png",
    "revision": "f83591e54293e37593ab86876f423049"
  },
  {
    "url": "resource/assets/popup/wei.png",
    "revision": "385494e1fd3063138e3ba9df2c6f7df4"
  },
  {
    "url": "resource/assets/popup/wu.png",
    "revision": "23ec7b96018c3eda907e9d159b1f38b8"
  },
  {
    "url": "resource/assets/random-events/event0.jpg",
    "revision": "36a901f8897fdef4284ad1eecce9eff4"
  },
  {
    "url": "resource/assets/random-events/event01.jpg",
    "revision": "550ee94e5c060b7ec217b018ee43f3dc"
  },
  {
    "url": "resource/assets/random-events/event02.jpg",
    "revision": "66428650f179eac42fe06f16c4bd45e6"
  },
  {
    "url": "resource/assets/random-events/event03.jpg",
    "revision": "4fea5c5a09fce06cb74b32fe3f375809"
  },
  {
    "url": "resource/assets/random-events/event04.jpg",
    "revision": "7e5d85c8a7c6c42023b1b66cfd434b18"
  },
  {
    "url": "resource/assets/random-events/event05.jpg",
    "revision": "2859279906298c86c5611d1dca0035e7"
  },
  {
    "url": "resource/assets/random-events/event06.jpg",
    "revision": "25de72ae536eea1a916632b3634bead1"
  },
  {
    "url": "resource/assets/random-events/event07.jpg",
    "revision": "7be250821d29333ca3dc4c8cae904c65"
  },
  {
    "url": "resource/assets/random-events/event08.jpg",
    "revision": "7a57840c759e4afa3a99b4124e1010d8"
  },
  {
    "url": "resource/assets/random-events/event09.jpg",
    "revision": "3c0f6fdcc2b3a3856ab80c1e772410af"
  },
  {
    "url": "resource/assets/random-events/event10.jpg",
    "revision": "4fcc5ba30e70b7b6144c6416cd1000bb"
  },
  {
    "url": "resource/assets/random-events/event11.jpg",
    "revision": "797e9448bae27192c17c7e078742808e"
  },
  {
    "url": "resource/assets/random-events/event12.jpg",
    "revision": "18584654847011a0eb29027006710ee3"
  },
  {
    "url": "resource/assets/random-events/event13.jpg",
    "revision": "4d5474dccf97b197f307dac24388c2cc"
  },
  {
    "url": "resource/assets/random-events/event14.jpg",
    "revision": "60fb12020e9071924fd3b673b4a7549b"
  },
  {
    "url": "resource/assets/random-events/event15.jpg",
    "revision": "7179e7a30365b2b6a0f82b30575fcc29"
  },
  {
    "url": "resource/assets/random-events/event16.jpg",
    "revision": "333ec3edeb91ad512a714439123c1f49"
  },
  {
    "url": "resource/assets/random-events/event17.jpg",
    "revision": "fad043a609fd3a209f0048ea38a09edc"
  },
  {
    "url": "resource/assets/random-events/event18.jpg",
    "revision": "a9964c8b720ba0c65bd2ca5346779db8"
  },
  {
    "url": "resource/assets/random-events/event19.jpg",
    "revision": "d617c4fd017355387edaedd3b7a477d2"
  },
  {
    "url": "resource/assets/random-events/event20.jpg",
    "revision": "e21eb763b6312a8326110ecef9a79693"
  },
  {
    "url": "resource/assets/random-events/event21.jpg",
    "revision": "d9e1f53d1db6aa9f08789b7055c21199"
  },
  {
    "url": "resource/assets/random-events/event22.jpg",
    "revision": "6daade19609ce2168c0a57add21f4b3b"
  },
  {
    "url": "resource/assets/random-events/event23.jpg",
    "revision": "e4137d1a0d82ed95f77d69b0a1ef3ee1"
  },
  {
    "url": "resource/assets/random-events/event24.jpg",
    "revision": "f58cd55f1324cce4ca6332241c431ca6"
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
    "url": "resource/assets/skills/skills.json",
    "revision": "e27a98f3445a5430bcb2db2fc1aa3fd4"
  },
  {
    "url": "resource/assets/skills/skills.png",
    "revision": "00012aed6847156d6db46c0ace865720"
  },
  {
    "url": "resource/assets/start/logo.png",
    "revision": "367de3eb95ad5ad1db26e7c126217000"
  },
  {
    "url": "resource/assets/start/start.json",
    "revision": "e2ebb8b32c1eadfd5889f96b793b8b0f"
  },
  {
    "url": "resource/assets/start/start.png",
    "revision": "c377069b459098be1dae76d6d229ac5f"
  },
  {
    "url": "resource/assets/unit/unit(001-050).jpg",
    "revision": "83023b5cf3d30f609cf4ae617b18981a"
  },
  {
    "url": "resource/assets/unit/unit(001-050).json",
    "revision": "00b997474b3d57099b6a5ab1f07d49a6"
  },
  {
    "url": "resource/assets/unit/unit(051-100).jpg",
    "revision": "c1e77a17d8fdfbbbb8fba69aa6bbb0dd"
  },
  {
    "url": "resource/assets/unit/unit(051-100).json",
    "revision": "0afe401515e2de2fcc8aa307bedd3e3d"
  },
  {
    "url": "resource/assets/unit/unit(101-150).jpg",
    "revision": "9643c775748b9ed9899f7221657ea685"
  },
  {
    "url": "resource/assets/unit/unit(101-150).json",
    "revision": "fe6572a86672efae8a9662113b029cec"
  },
  {
    "url": "resource/default.theme.json",
    "revision": "a47ad291eae70a03cb7227faec7d1fd7"
  },
  {
    "url": "resource/default.thm.json",
    "revision": "c42ccda79b691da45d25ea7633171d22"
  },
  {
    "url": "resource/resource.json",
    "revision": "68fecc9b6f683348df90ad87aa8e0bbf"
  },
  {
    "url": "stylesheets/style.css",
    "revision": "d88b6fc51036cea4ea659b304568e088"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
