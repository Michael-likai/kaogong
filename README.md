# 考公小助手

公务员考试备考资料站：报考指南、行测、申论与面试、资料库。

![首页预览](./screenshots/home.png)

> 当前为**模板复制后的骨架**，内容素材待补充。页面结构、导航和部署流程已经就绪。

## 内容分区

| 分区 | 目录 | 放什么 |
| --- | --- | --- |
| 报考指南 | `docs/guide/` | 公告、选岗、报名、笔试面试流程 |
| 行测 | `docs/xingce/` | 常识、言语、数量、判断、资料分析 |
| 申论与面试 | `docs/shenlun/` | 申论题型、素材、面试表达 |
| 资料库 | `docs/kb/` | 真题、笔记、经验、FAQ |

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

## 待办

- [ ] 替换首页文案和分区说明
- [ ] 补充各分区内容
- [ ] 替换 `docs/public/logo.svg`、`docs/public/og.png`
- [ ] 确定正式域名后更新 `site.config.ts` 与部署配置
- [ ] 创建 GitHub 仓库并接入部署

## 技术栈

VitePress 1.x · Vue 3 · TypeScript · Markdown

模板来源于 Folio Docs Template（MIT）。
