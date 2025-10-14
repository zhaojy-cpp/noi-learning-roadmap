# NOI学习路线图 / NOI Learning Roadmap

🚀 A bilingual, structured learning roadmap for NOI preparation.

## 简介（中文）
NOI学习路线图是一个基于《NOI大纲2025修订版》的分等级学习网站示例。支持中英文切换、学习进度统计、以及通过 `src/data/syllabus.json` 维护知识点内容。

## Introduction (English)
NOI Learning Roadmap is a structured, bilingual learning website based on the NOI Syllabus 2025. It supports language switching, learning progress tracking, and content maintenance via `src/data/syllabus.json`.

## 📦 Quick start

```bash
npm install
npm run dev
```

然后在浏览器打开 http://localhost:5173

## 🔧 Deployment (GitHub Pages)

This project includes a GitHub Actions workflow to build and publish to the `gh-pages` branch automatically.

1. Create a repo at: https://github.com/zhaojy-cpp/noi-learning-roadmap
2. Push this project to `main`
3. GitHub Actions will build and publish to `gh-pages`
4. Go to Settings → Pages and ensure the site is served from `gh-pages`

## 📝 How to add new knowledge points / 如何添加知识点

Edit `src/data/syllabus.json` and add or modify items under each level. Example entry:

```json
{
  "id": "1-2",
  "title_zh": "顺序结构",
  "title_en": "Sequential Structure",
  "description_zh": "了解程序的基本执行顺序。",
  "description_en": "Understand the basic sequential flow of a program.",
  "links": [
    {"name": "Luogu", "url": "https://www.luogu.com.cn"}
  ]
}
```

保存并 `git push` 即可触发自动部署（如果已启用 Actions）。

## ⭐ If this project helps you, please Star!

© 2025 by zhaojy | Hosted on GitHub Pages
