<!-- markdownlint-disable -->

<div align="center">

<img src="./src-tauri/icons/icon.png" width="120" alt="花笺图标">

# 花笺 Floral Notepaper (Custom)

基于 [Achilng/floral-notepaper](https://github.com/Achilng/floral-notepaper) 的个人二次开发版本

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
![React 19](https://img.shields.io/badge/React-19-blue?logo=react)
![Tauri v2](https://img.shields.io/badge/Tauri-v2-%2324C8D8?logo=tauri)
![Rust Edition 2021](https://img.shields.io/badge/Rust-2021-%23000000?logo=rust)

</div>

<!-- markdownlint-restore -->

---

## 关于本仓库

本项目是 [花笺](https://github.com/Achilng/floral-notepaper) 的个人定制版，在原版基础上进行了功能增强和 UI 重设计。与上游方向不同，本版本专注于便签窗口的编辑体验和交互优化。

上游有用的功能会通过 cherry-pick 方式同步。

## 相对原版的改动

### 便签窗口全面重设计

- 多 Tab 系统：固定「新建/编辑」+「打开」Tab，可关闭的笔记预览 Tab
- 预览 Tab 使用 Milkdown 渲染 Markdown（只读）
- 磁贴模式支持 Markdown 渲染
- 8 方向 resize handle，自由调整窗口大小
- 打开面板添加搜索框
- 背景色对齐主窗口 paper 主题

### 主窗口增强

- 分类拖拽排序（修复向下移动无效的问题）
- 编辑器撤销功能
- 笔记分类移动与上下文菜单扩展

### 交互优化

- 便签窗口在鼠标光标附近打开
- 删除文件移入回收站而非永久删除
- 防止删除分类时误删真实磁盘文件

### 工程化

- 移除 GitHub workflows（个人使用无需 CI）

## 从源码构建

### 环境要求

- [Node.js](https://nodejs.org/) 18+
- [Rust](https://www.rust-lang.org/tools/install)
- [Tauri CLI 2](https://tauri.app/)

### 步骤

```bash
git clone git@github.com:mirainya/floral-notepaper-custom.git
cd floral-notepaper-custom

npm install

# 开发模式
npm run tauri dev

# 构建发布版本
npm run tauri build
```

构建产物输出到 `src-tauri/target/release/bundle/`。

## 许可证

[MIT](LICENSE)
