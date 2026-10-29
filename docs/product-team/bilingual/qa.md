# BI-03 独立测试记录

角色：普通子 Agent，按已读取的 pt_qa 职责执行。
基线：main 4aef02e；测试分支 feat/bilingual-interface。
当前状态：测试计划 ready，等待实现交付；未运行不视为通过。
环境：本机 Node/pnpm；项目未安装 playwright、@playwright/test、puppeteer，可尝试 CUA 浏览器。

| 用例 | 验收项 | 验证方法 | 当前结果 |
| --- | --- | --- | --- |
| QA-01 | 桌面/手机语言入口及键盘操作 | 浏览器桌面/窄屏，Tab/Enter | 未运行 |
| QA-02 | 首页/关于页双向对应切换 | 点击语言入口、检查地址与内容 | 未运行 |
| QA-03 | 文章切换保留路径/锚点且有中文提示 | 指定文章切换/刷新/直接访问 | 未运行 |
| QA-04 | 英文界面完整，正文保留中文 | 检查导航侧栏页脚搜索元信息复制/404 | 未运行 |
| QA-05 | 所选语言刷新保留 | 直接地址访问/刷新 | 未运行 |
| QA-06 | 中文/搜索/复制回归及失败反馈 | 浏览器搜索与复制，检查失败处理 | 未运行 |
| QA-07 | 构建/metadata/noindex/内部记录隔离 | 独立构建并检查HTML、sitemap、搜索和导出 | 未运行 |
| QA-08 | 响应式与异常状态 | 桌面/窄屏截图与溢出检查 | 未运行 |

## 缺陷与返工
尚未执行测试，不代表无缺陷。

## 发布建议
待实现就绪与独立验证。不得凭代码阅读判为通过。

## 最终交接（返工轮 1 后）
状态：needs-review，不能据此认定全部验收通过。
独立最终构建：PREVIEW=1 pnpm build，exit 0，5.52s（session 89885）；此前一次5.40s通过。preview localhost:4173（session45664）。HTTP /en/about 返回200。
静态执行结果：英文about标题为 About · Civil Service Exam Assistant；英文文章html lang=en；中文正文保留且出现 This exam preparation article is available in Chinese only. The interface is in English.；文章noindex存在；2468条生成HTML内部href逐一检查无缺失目标；dist无product-team目录，HTML/TXT/XML全文不含BI-03记录。
类型检查：pnpm exec tsc --noEmit 由PM执行，vite/client缺失；QA执行 pnpm exec tsc --noEmit --types node 仍失败，现存seo TransformHeadContext导出及vue依赖声明错误（含新i18n.ts同类错误）。activeMatch unknown错误已消失。类型检查不得报告通过。
UI阻碍：iab返回Browser unavailable；Chrome createBrowserTab卡354s，原生getApp卡466s，均被中断，timeout_ms=10000未生效。停止CUA重试，工具故障不记作产品缺陷。
QA-01/02/03/04/05/06/08 的实际点击、键盘、移动端视觉、刷新状态、搜索与剪贴板失败路径均未测；QA-07上述构建与静态部分通过，搜索运行时内部隔离未实测。不能将静态链接检查说成语言切换互动通过。
缺陷：BI-PM-01英文标题混中文由PM发现、前端修复，QA最终HTML确认闭环；BI-PM-03 activeMatch类型错误由PM发现、前端修复，QA确认该错误已消失。独立QA未发现额外可确认产品缺陷；不代表无缺陷。
返工：前端由PM退回1轮；QA没有自行改实现。发布建议：可提供PR预览继续人工交互验收，完整UI验收未通过前不建议声称功能全验收通过。
