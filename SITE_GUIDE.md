# Nanami's Secret Base — サイト管理ガイド

このガイドでは以下の3つの操作方法を説明します。

1. **Netlifyへのデプロイ（初回のみ）**
2. **Basic認証（パスワード保護）の設定**
3. **Claude Codeでのサイト編集と反映**

---

## 1. Netlifyへのデプロイ（初回のみ）

### Step 1：Netlifyアカウントを作成する

1. **https://www.netlify.com** にアクセス
2. 右上の「**Sign up**」をクリック
3. 「**Sign up with GitHub**」を選択
4. GitHubのログイン画面が表示されたらログインして「Authorize netlify」をクリック

---

### Step 2：サイトをデプロイする

1. Netlifyのダッシュボードが開いたら「**Add new site**」をクリック
2. 「**Import an existing project**」を選択
3. 「**Deploy with GitHub**」をクリック
4. リポジトリ一覧から「**nanami-secret-base**」を選択
5. 設定はそのままで「**Deploy nanami-secret-base**」をクリック
6. 数分後にデプロイ完了。URLが発行されます（例：`https://nanami-secret-base.netlify.app`）

---

### Step 3：サイト名を変更する（任意）

1. Netlifyダッシュボードの「**Site configuration**」→「**Site details**」
2. 「**Change site name**」をクリック
3. 好きな名前を入力（例：`nanami-secret-base`）
4. 「**Save**」をクリック

---

## 2. Basic認証（パスワード保護）の設定

Netlifyのパスワード保護機能を使います。**無料プランでは「Netlify Identity」または「Site Protection」機能を使います。**

### 設定手順

1. Netlifyダッシュボードで対象サイトを開く
2. 上部メニューの「**Site configuration**」をクリック
3. 左メニューから「**Access & security**」を選択
4. 「**Visitor access**」セクションの「**Password protection**」をクリック
5. 「**Enable password protection**」をオンにする
6. パスワードを入力（現在の仮パスワード：**`Nanami2026!`**）
7. 「**Save**」をクリック

これでサイトにアクセスすると、パスワード入力画面が表示されるようになります。

---

### パスワードを変更する方法

1. Netlifyダッシュボード →「**Site configuration**」→「**Access & security**」
2. 「**Password protection**」の「**Edit**」をクリック
3. 新しいパスワードを入力して「**Save**」

---

## 3. Claude Codeでサイトを編集して反映する

### 必要なもの

- **Claude Code**（https://claude.ai/code からダウンロード）
- **Git**（https://git-scm.com からダウンロード）
- **VS Code**（推奨エディタ、https://code.visualstudio.com）

---

### Step 1：リポジトリをクローン（初回のみ）

```bash
git clone https://github.com/nobu0917/nanami-secret-base.git
cd nanami-secret-base
```

---

### Step 2：Claude Codeを起動

```bash
claude
```

---

### Step 3：編集を依頼する（例）

Claude Codeに日本語で指示を出すだけです：

**文章を変更したい場合：**
> 「`index.html` のキャッチコピー「ななみのすべてが詰まった」を「ななみの世界へようこそ」に変更して」

**新しいセクションを追加したい場合：**
> 「`index.html` にプロフィールセクションを追加して。ななみのプロフィール（名前・誕生日・趣味）を表示するカード形式で」

**デザインを変更したい場合：**
> 「ボタンの色をピンクから紫に変更して。`assets/css/style.css` の `--color-pink` を変更してください」

---

### Step 4：変更を確認してGitHubにプッシュ

```bash
# 変更したファイルをすべて追加
git add .

# 変更内容を説明するコメントをつけて保存
git commit -m "変更内容の説明（例：トップページのキャッチコピーを変更）"

# GitHubにアップロード
git push
```

---

### Step 5：Netlifyに自動反映される

GitHubにプッシュすると、**Netlifyが自動的に検知して数分以内にサイトに反映**されます。
Netlifyダッシュボードの「**Deploys**」タブでビルド状況を確認できます。

---

## 4. よくある操作まとめ

| やりたいこと | 操作 |
|------------|------|
| サイトを見る | `https://（あなたのNetlify URL）` にアクセス |
| パスワードを変更する | Netlify → Site configuration → Access & security |
| サイトの内容を編集する | Claude Codeで編集 → `git push` |
| 新しい画像を追加する | `assets/images/` フォルダに画像を入れて `git push` |
| デプロイ状況を確認する | Netlify → Deploys タブ |

---

## 5. 仮パスワード（初期設定）

> **ユーザー名：** nanami  
> **パスワード：** `Nanami2026!`  
> ※ 設定後すぐに変更することをおすすめします

---

## 6. 重要なURL一覧

| 項目 | URL |
|------|-----|
| GitHubリポジトリ | https://github.com/nobu0917/nanami-secret-base |
| Netlifyダッシュボード | https://app.netlify.com |
| GitHub Pages（旧URL） | https://nobu0917.github.io/nanami-secret-base/ |

---

*このガイドは `SITE_GUIDE.md` としてリポジトリに保存されています。*
