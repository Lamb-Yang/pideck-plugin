# pideck-plugin

自用的 PiDeck 宿主插件与主题集合。宿主插件是挂在 PiDeck 桌面壳上的本地 HTML/CSS/JS 面板，只能通过 `window.pideck` 访问受限能力——全部插件不联网、不上传会话数据、无网络权限。

## 插件

### session-records · 会话记录管理 `v2.0.0`

跨项目管理会话的**长期归属标记**：把不同项目的会话放进固定分组，行内显示所属目录，点击跳转打开（自动切项目）。

- 工作区范围（`sessions.read.workspace`），不同项目的会话可放同一个组
- 分组只在面板内展示，**不影响 PiDeck 侧栏**——与官方「会话分组」分工：本插件做长期归属标记，官方做临时任务集合
- 星标过滤、拖拽归组、ⓘ 详情悬浮卡片、零闪主题引导
- 一个会话只属一个组；数据存插件私有 storage（单键 `rec.data.v1`）

### session-groups · 会话分组 `v3.1.0`

基于 PiDeck 内置 v3.0.0 的本地增强分支：保留工作区建组、目录驱动入组、分组实时同步到侧栏、多组归属、分页等全部官方能力，在其上移植：

- ★ 星标 + 只看星标过滤
- ⓘ 详情悬浮卡片（悬停触发 / 100ms 意图延迟 / 滚动即收 / 微动画）
- theme-boot 零闪主题引导

> 与内置插件同 id：放入 PiDeck 插件目录会覆盖内置副本（手改过的副本不受升级影响）。两个插件可同时启用、互不干扰。

## 主题

### theme-Diagrammo Slate Plus

PiDeck 主题（JSON 清单格式）：移植自 Obsidian 主题 Diagrammo Slate Plus——冷灰石板底色 + 企业蓝主色 + 青绿强调，浅暗双档。

## 安装

PiDeck → 设置 → PiDeck 插件：

1. **从 GitHub 安装…**：填本仓库地址，选择对应插件子目录（`session-records/` 或 `session-groups/`）
2. 或 **从文件夹安装…**：clone 本仓库后选择对应子目录

装完默认禁用，需**授权并启用**；插件内容变更后需重新授权（授权绑定整包文件指纹）。

## 目录结构

```
├── session-records/          # 会话记录管理（全局归属标记，不进侧栏）
│   ├── pideck-plugin.json
│   ├── app.html / app.js / styles.css
│   ├── theme-boot.js         # 首帧主题引导
│   └── README.md
├── session-groups/           # 会话分组（官方 v3.0.0 增强分支，同步侧栏）
│   └── …
├── theme-Diagrammo Slate Plus.css
└── README.md
```
