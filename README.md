# 考公小助手

公务员考试备考资料站：报考指南、行测、申论与面试、资料库、2026 冲刺速记。

![首页预览](./screenshots/home.png)

> 内容持续整理中；部分页面来自公开资料与用户提供的 2026 冲刺一本通，具体政策以官方公告为准。

## 内容分区

| 分区 | 目录 | 放什么 |
| --- | --- | --- |
| 报考指南 | `docs/guide/` | 公告、选岗、报名、笔试面试流程 |
| 行测 | `docs/xingce/` | 常识、言语、数量、判断、资料分析 |
| 申论与面试 | `docs/shenlun/` | 申论题型、素材、面试表达 |
| 资料库 | `docs/kb/` | 真题、笔记、经验、FAQ |
| 冲刺资料 | `docs/sprint/` | 2026 时政速记、政府工作报告对照、政治理论专项 |

## 本地开发

```bash
pnpm install
pnpm dev      # http://localhost:5173
pnpm build    # 产物在 docs/.vitepress/dist
```

## 新增内容

```bash
pnpm new -- guide/xxx "页面标题"
pnpm new -- xingce/xxx "页面标题"
```

也可以直接在对应目录新建 Markdown，Frontmatter 至少写 `title`、`description`、`order`、`group`，侧边栏会自动生成。

## 目录

```text
docs/
├─ .vitepress/
│  ├─ site.config.ts      # 站名、描述、页脚
│  ├─ sections.json       # 分区与导航
│  ├─ home.ts             # 首页文案
│  └─ theme/              # 主题组件
├─ guide/                 # 报考指南
├─ xingce/                # 行测
├─ shenlun/               # 申论与面试
├─ kb/                    # 资料库
└─ public/                # logo、og.png 等
```

## 内容状态

- [x] 2027 国考报考指南
- [x] 行测、申论、面试基础内容
- [x] 2026 冲刺一本通三大板块
- [ ] 补充更多真题和本地考情
- [ ] 替换 `docs/public/logo.svg`
- [ ] 确定正式域名并接入部署

## 技术栈

VitePress 1.x · Vue 3 · TypeScript · Markdown

模板来源于 Folio Docs Template（MIT）。
