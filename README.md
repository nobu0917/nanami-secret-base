# Nanami's Secret Base — ファンクラブサイト

ななみオフィシャルファンクラブ「Nanami's Secret Base」の仮Webサイトです。

## プロジェクト構成

```
nanami-secret-base/
├── index.html          # TOPページ
├── news.html           # NEWSページ
├── member.html         # MEMBER ONLYページ（ログインゲート）
├── store.html          # STOREページ（グッズ販売）
├── join.html           # JOIN / LOGINページ
├── README.md
└── assets/
    ├── css/
    │   └── style.css   # メインスタイルシート
    ├── js/
    │   └── main.js     # メインJavaScript
    └── images/
        ├── nanami_main.jpg         # トップページ メインビジュアル
        ├── nanami_main2.jpg        # メインビジュアル（サブ）
        ├── nanami_selfie.jpg       # カジュアル自撮り風
        ├── nanami_selfie2.jpg      # 自撮り風（サブ）
        ├── nanami_invitation.jpg   # 秘密の招待（JOIN用）
        ├── nanami_invitation2.jpg  # 招待状（サブ）
        ├── nanami_goods.jpg        # グッズ紹介
        └── nanami_goods2.jpg       # グッズ紹介（サブ）
```

## デザインコンセプト

- **カラー**: スノーホワイト（ベース）＋ パステルピンク（アクセント）＋ ダークブルー（テキスト・リンク）
- **トーン**: 清潔感・暖かさ・親しみやすさ・少し秘密基地
- **フォント**: Noto Sans JP（本文）＋ Playfair Display（見出し・ロゴ）

## ページ一覧

| ページ | ファイル | 説明 |
|--------|----------|------|
| TOP | `index.html` | メインビジュアル・ニュース・会員プレビュー・ストアプレビュー・CTA |
| NEWS | `news.html` | 活動情報・メディア出演・グッズ発売・イベント情報 |
| MEMBER ONLY | `member.html` | ログインゲート・会員限定コンテンツ一覧 |
| STORE | `store.html` | グッズ販売ページ |
| JOIN / LOGIN | `join.html` | 会員登録・ログインフォーム |

## Claude Codeでの編集方法

詳細は `CLAUDE_CODE_GUIDE.md` を参照してください。

## 技術スタック

- HTML5 / CSS3 / Vanilla JavaScript
- Google Fonts（Noto Sans JP, Playfair Display）
- 外部依存なし（フレームワーク不使用）
