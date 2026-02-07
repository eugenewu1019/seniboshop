<div align="right">

**語言**: [🇺🇸 English](README.md) | [🇹🇼 繁體中文](README.zh-TW.md)

</div>

<div align="center">

# 🌐 Senibo.shop | 全球物流與貿易解決方案

[![MIT 授權](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![線上展示](https://img.shields.io/badge/demo-online-green.svg)](https://eugenewu1019.github.io/seniboshop/)
[![CI/CD](https://github.com/eugenewu1019/seniboshop/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/eugenewu1019/seniboshop/actions)
[![CodeQL](https://github.com/eugenewu1019/seniboshop/actions/workflows/codeql.yml/badge.svg)](https://github.com/eugenewu1019/seniboshop/actions)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://html.spec.whatwg.org/)
[![Vanilla JS](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![歡迎 PR](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

**無縫全球物流。即時智能。**

[線上展示](https://eugenewu1019.github.io/seniboshop/) · [回報錯誤](https://github.com/eugenewu1019/seniboshop/issues) · [功能請求](https://github.com/eugenewu1019/seniboshop/issues) · [討論區](https://github.com/eugenewu1019/seniboshop/discussions)

![Project Banner](https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80)

</div>

---

## 📚 目錄

- [關於專案](#-關於專案)
- [核心功能](#-核心功能)
- [技術棧](#️-技術棧)
- [快速開始](#-快速開始)
- [專案結構](#-專案結構)
- [部署](#-部署)
- [貢獻](#-貢獻)
- [授權](#-授權)
- [聯絡方式](#-聯絡方式)

---

## 🎯 關於專案

**Senibo.shop** 是一個高端、未來感十足的物流平台設計概念，展示了現代網頁開發的精湛技術。本專案展現了從複雜 React 架構到高度優化的**純 Vanilla JavaScript + Tailwind CSS** 實作的轉變。

### 為什麼做這個專案？

- 🎨 **設計卓越**: 展示「微光」美學與「大氣模糊」效果，打造尖端 UI/UX
- ⚡ **效能優先**: 零建置工具、最少依賴，實現瞬間載入
- 🌍 **多語言**: 完整 i18n 實作（英/中/日），展示無框架的國際化
- 📊 **即時儀表板**: 模擬「任務控制中心」，提供即時指標與多時區支援
- 💡 **現代 Vanilla JS**: 證明精緻互動不需要笨重框架

---

## ✨ 核心功能

### 🌍 多語言支援（三語）
- 完整國際化支援：
  - 🇺🇸 英文
  - 🇹🇼 繁體中文
  - 🇯🇵 日文
- 即時語言切換，搭配 localStorage 持久化
- SEO 友善，包含適當的語言 meta 標籤

### 📊 營運儀表板
- **任務控制中心**: 模擬即時營運監控
- **多時區時鐘**: 主要物流樞紐的即時時間顯示
- **系統日誌**: 動態活動資訊流，提供真實的狀態更新
- **網路指標**: 波動統計模擬即時資料

### 🧠 智慧報價引擎
- 互動式貨運成本計算器
- 動態驗證與錯誤處理
- 支援海運、空運、陸運物流
- 即時成本估算

### 🎨 高級 UI/UX
- **微光效果**: 沉浸式深色模式的細膩環境光
- **動態排版**: 採用 *Outfit* 與 *Inter* 字體的編輯風格
- **玻璃擬態**: 精緻的背景模糊與浮動元素
- **響應式設計**: 從手機到 4K 顯示器完美呈現

---

## 🛠️ 技術棧

秉持效能與架構簡潔的哲學，運用現代網頁標準而無需建置工具。

### 核心技術
- **HTML5** - 語意標記與無障礙性
- **Vanilla JavaScript (ES6+)** - 無框架的現代 JS 特性
- **CSS3** - 自訂動畫與玻璃擬態效果

### 樣式
- [Tailwind CSS](https://tailwindcss.com/) (CDN) - 工具優先的 CSS 框架
- 自訂 CSS 動畫與特效

### 設計
- [Lucide Icons](https://lucide.dev/) - 精美一致的 SVG 圖示
- [Google Fonts](https://fonts.google.com/) - *Outfit* (標題) 與 *Inter* (內文)

### 架構
- **元件化思維模型**: 清晰分離的靜態檔案組織
- **資料驅動**: 集中式內容資料庫便於更新
- **事件驅動**: 無依賴的簡潔事件處理

---

## 🚀 快速開始

**無需建置步驟。無需 npm install。直接開啟即可執行。**

### 前置需求

- 現代瀏覽器（Chrome、Firefox、Safari、Edge）
- （選用）Live Server 擴充功能以啟用熱重載

### 安裝步驟

1. **複製儲存庫**
   ```bash
   git clone https://github.com/eugenewu1019/seniboshop.git
   cd seniboshop
   ```

2. **在瀏覽器開啟**
   
   **方法 A**: 直接開啟
   ```bash
   # 直接在瀏覽器開啟 index.html
   open index.html
   ```

   **方法 B**: Python HTTP 伺服器
   ```bash
   python3 -m http.server 8000
   # 前往 http://localhost:8000
   ```

   **方法 C**: VS Code Live Server
   - 安裝「Live Server」擴充功能
   - 右鍵點擊 `index.html`
   - 選擇「Open with Live Server」

---

## 📂 專案結構

```text
seniboshop/
├── index.html           # 主要 HTML 結構與 Tailwind classes
├── style.css            # 自訂動畫與玻璃擬態效果
├── script.js            # 核心應用程式邏輯
├── data.js              # i18n 內容資料庫與翻譯
├── logo.svg             # 品牌識別資源
├── README.md            # 英文版文檔
├── README.zh-TW.md      # 繁體中文版文檔
├── LICENSE              # MIT 授權
├── CONTRIBUTING.md      # 貢獻指南
├── SECURITY.md          # 安全政策
└── .github/
    ├── workflows/
    │   ├── ci-cd.yml        # CI/CD 流程
    │   └── codeql.yml       # 安全掃描
    └── pull_request_template.md
```

---

## 🚀 部署

### GitHub Pages（目前設定）

本專案配置為推送至 `main` 分支時自動部署到 GitHub Pages。

1. **啟用 GitHub Pages**
   - Settings → Pages → Source: GitHub Actions

2. **推送至 main 分支**
   ```bash
   git push origin main
   ```

3. **GitHub Actions 將自動**:
   - 驗證 HTML
   - 檢查失效連結
   - 部署到 GitHub Pages

### 其他部署選項

<details>
<summary><b>Netlify</b></summary>

1. 連接您的儲存庫
2. 建置指令：（留空）
3. 發布目錄：`/`
4. 部署！

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/eugenewu1019/seniboshop)

</details>

<details>
<summary><b>Vercel</b></summary>

1. 匯入儲存庫
2. 無需框架預設
3. 部署！

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/eugenewu1019/seniboshop)

</details>

---

## 🤝 貢獻

貢獻讓開源社群變得如此美好！我們非常感謝您的任何貢獻。

請閱讀我們的[貢獻指南](CONTRIBUTING.md)以了解：

- 行為準則
- 開發流程
- 如何提交 pull requests
- 程式碼標準
- commit 訊息規範

### 貢獻者快速開始

1. Fork 專案
2. 建立功能分支（`git checkout -b feature/AmazingFeature`）
3. 在多個瀏覽器測試您的變更
4. 提交變更（`git commit -m 'feat: add some AmazingFeature'`）
5. 推送到分支（`git push origin feature/AmazingFeature`）
6. 開啟 Pull Request

---

## 🐛 錯誤回報與功能請求

發現錯誤或有功能建議？

- **錯誤回報**: [建立 issue](https://github.com/eugenewu1019/seniboshop/issues/new?template=bug_report.md)
- **功能請求**: [建立 issue](https://github.com/eugenewu1019/seniboshop/issues/new?template=feature_request.md)
- **問題討論**: [開啟討論](https://github.com/eugenewu1019/seniboshop/discussions)

---

## 📝 授權

本專案採用 MIT 授權。詳情請見 [`LICENSE`](LICENSE) 檔案。

---

## 📬 聯絡方式

**Eugene Wu** - UI/UX 設計師與前端工程師

- LinkedIn: [@owenwuwork](https://www.linkedin.com/in/owenwuwork)
- GitHub: [@eugenewu1019](https://github.com/eugenewu1019)
- 作品集: [即將推出]

**專案連結**: [https://github.com/eugenewu1019/seniboshop](https://github.com/eugenewu1019/seniboshop)

**線上展示**: [https://eugenewu1019.github.io/seniboshop/](https://eugenewu1019.github.io/seniboshop/)

---

## 🙏 致謝

特別感謝：

- [Tailwind CSS](https://tailwindcss.com/) - 出色的工具優先框架
- [Lucide Icons](https://lucide.dev/) - 精美圖示集
- [Google Fonts](https://fonts.google.com/) - *Outfit* 與 *Inter* 字體
- [Unsplash](https://unsplash.com/) - 高品質圖片

---

<div align="center">

**[⬆️ 返回頂部](#-senibioshop--全球物流與貿易解決方案)**

Made with 🖤 by [Eugene Wu](https://github.com/eugenewu1019)

© 2026 Senibo.shop. All Rights Reserved.

</div>
