# 考公小助手

公务员考试备考资料站：报考指南、行测、申论与面试、资料库、山东省考信息、2026 冲刺速记。

仓库：<https://github.com/Michael-likai/kaogong>

**在线预览：<https://kaogong-assistant.pages.dev/>**

![首页预览](./screenshots/home.png)

> 内容持续整理中；部分页面来自公开资料与用户提供的 2026 冲刺一本通，具体政策以官方公告为准。

## 内容分区

| 分区 | 目录 | 放什么 |
| --- | --- | --- |
| 报考指南 | `docs/guide/` | 公告、选岗、报名、笔试面试流程 |
| 行测 | `docs/xingce/` | 常识、言语、数量、判断、资料分析 |
| 申论与面试 | `docs/shenlun/` | 申论题型、素材、面试表达 |
| 资料库 | `docs/kb/` | 真题、笔记、经验、FAQ |
| 山东省考信息 | `docs/shandong/` | 2027 山东省考时间、报名、笔试面试、选岗与省情 |
| 冲刺资料 | `docs/sprint/` | 2026 时政速记、政府工作报告对照、政治理论专项 |

## 自动部署

### 修改、审核与发布

1. 每项任务使用 `feat/`、`fix/` 或 `chore/` 分支开发。
2. 本地构建通过后提交并推送任务分支，创建指向 `main` 的 PR。
3. PR 工作流执行 `Build site`；同仓库 PR 通过后部署到独立预览地址，地址见 Actions 的任务摘要。外部 fork PR 仅构建。
4. 用户检查预览并明确确认上线后，再合并到 `main`。
5. 检查正式部署任务成功，并验收线上页面。推送任务分支不会覆盖主站。

GitHub 分支保护需在仓库 Settings → Branches 中单独启用：保护 `main`，要求通过 PR 合并、要求分支保持最新、要求 `Build site` 状态检查通过，并禁止强制推送和删除。单人维护无需设置必须由另一位成员批准，否则可能无法合并。对话中的上线确认仍须保留。

首次使用需要本机 GitHub 登录授权；Git 提交姓名和邮箱仅用于署名，不提供推送权限。预览部署需要已有 Cloudflare Secrets 仍然有效。

如果上线后发现问题，创建回退 PR 撤销对应变更，验证并确认后合并；不要通过强制推送改写 `main` 历史。

push 到 `main` 后，GitHub Actions 会自动构建并部署到 Cloudflare Pages，约 1—2 分钟。

- 线上预览：<https://kaogong-assistant.pages.dev/>
- 工作流：`.github/workflows/deploy-cloudflare.yml`
- 当前 `PREVIEW=1`，站点带 `noindex`；正式公开时把该变量改为 `0` 或删除。

## 本地开发

```bash
pnpm install
pnpm dev      # http://localhost:5173
pnpm build    # 产物在 docs/.vitepress/dist
```

## 新增内容

### 语言版本

中文使用原有地址，英文界面使用 `/en/`。导航、首页、关于页和界面提示提供英文；备考正文与文章标题保留中文，并在英文界面提示语言范围。

`pnpm dev` 和 `pnpm build` 会先运行 `scripts/gen-locales.mjs`，从中文资料生成英文界面的页面，因此不要直接编辑 `docs/en/`。新增或修改中文资料后重新运行生成命令或重启开发服务。首页英文文案位于 `docs/.vitepress/home.en.ts`，界面词条位于 `docs/.vitepress/translations.json`，英文关于页源文案位于生成脚本中。

团队验收与复盘记录放在 `docs/product-team/`，排除站点页面、搜索及正文导出。

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
- [x] 山东省考信息专区
- [ ] 补充更多真题和本地考情
- [ ] 替换 `docs/public/logo.svg`
- [ ] 确定正式域名并接入部署

## 技术栈

VitePress 1.x · Vue 3 · TypeScript · Markdown

模板来源于 Folio Docs Template（MIT）。
