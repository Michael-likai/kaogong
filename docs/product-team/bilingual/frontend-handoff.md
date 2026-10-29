# BI-02 前端交接
角色：普通子 Agent 按 pt_frontend 职责执行；下游：主 PM / QA。
版本：feat/bilingual-interface，基于 4aef02e；未提交、推送、发布。
状态：needs-review。

## 架构与范围
使用 VitePress 原生 locales 与语言菜单，中文保持原 URL，英文 /en/。构建和开发前运行 scripts/gen-locales.mjs：由中文文章生成英文界面路由镜像，正文保持中文，附 frontmatter 标志与醒目英文提示；英文首页和关于页由源数据生成。docs/en 忽略版本控制，不维护第二套正文；每次生成清理旧页面。
自定义主题使用 useLanguage 与集中 translations.json；首页使用 home.en.ts。导航和侧栏分组翻译为英文，文章标题保留原始中文，英文关于页明确解释该策略。文章路由可直接访问/刷新，不依赖 localStorage；切换保留原生对应路径。
英文 SEO head 传入英文站点身份；保留预览 noindex。内部 product-team 记录由 srcExclude 排除，SEO 扫描和原文路由另行拒绝。

## 验证
PREVIEW=1 pnpm build 已通过两轮；最终一轮等待 PM 复核结果。node --check scripts/gen-locales.mjs 与 git diff --check 通过。浏览器交互、手机、剪贴板失败路径未执行，由独立 QA 执行。不能将未测项目视为通过。
开发中自检修复：首个临时脚本需补 UTF-8 声明（一次重跑）；随后补齐自定义主题硬编码、英文页面元信息、分组翻译与开发原文路径拒绝。未交付前的内部修正不算 QA 返工。
风险：英文文章正文和标题是中文（已约定）；404 原生路由和移动菜单、搜索的实际显示需 QA 重点检查。无后端或新增依赖；中文考试时间文案未修改。

## 返工轮 1（BI-PM-01 / BI-PM-02）
已重读最新技能和 pt_frontend 角色说明，直接用户回复采用“我是前端。”开场；个人配置未修改。
- BI-PM-01：英文 locale 显式覆盖 titleTemplate，避免英文 about/文章继承中文站名。当前以源码修正完成，产物需 QA 下一轮构建验证。
- BI-PM-02：展开 locale 配置为 englishSite / englishTheme / enSidebar 有名常量；英文导航 activeMatch 同步前缀。统一 useLanguage 的 withPage helper，移除四个组件重复包装。
- 生成器改为具名 translateLinks / markChineseContent，支持无 frontmatter、LF 与 CRLF，不再 index=-1 切坏正文；长页面字符串改可读模板文本。
验证：node --check scripts/gen-locales.mjs、git diff --check 通过；独立执行 markChineseContent 三种输入用例（无头、LF、CRLF）通过。按 PM 要求未重跑 build，避免抢占 QA 当前产物。
状态：needs-review；下游：PM 与 QA 复测。返工轮数 1，待 QA 复测，不将源码修正声明为产物验证通过。

## 返工轮 2（BI-PM-03）
修正新增 config.mts 的 TS18046：对 item.activeMatch 加 typeof === 'string' 收窄后再调用 slice；仅此一处实现变更，不调整既有 SEO 类型和 Vue 根依赖问题。
验证：pnpm exec tsc --noEmit --types node 已执行，config.mts 类型错误已消失；命令整体仍失败，余项为 seo.ts 的 TransformHeadContext 导出及 vue 模块解析问题，明确不视为全量类型检查通过。未 build，交 QA 复测。返工轮数累计 2。
