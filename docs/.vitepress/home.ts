/**
 * Home page copy. Edit this file to change the landing page without touching
 * the Vue component.
 */
export interface HomeMode {
  tag: string
  title: string
  desc: string
  link: string
  cta: string
}

export interface HomeFeature {
  icon: string
  title: string
  desc: string
}

export const home = {
  eyebrow: '考公小助手 · 备考资料站',
  title: '考公小助手\n你的备考资料库',
  lead: '从报考流程、行测题型到申论面试，把分散的笔记和资料整理成可检索、可更新的备考知识库。',
  primary: { text: '开始备考', link: '/guide/' },
  secondary: { text: '浏览资料库', link: '/kb/' },
  notice: { text: '内容持续整理中，欢迎补充', link: '/about' },
  modes: [
    {
      tag: '01 · 报考指南',
      title: '从公告到上岸',
      desc: '公告解读、选岗思路、报名流程与时间节点，先把方向选对。',
      link: '/guide/',
      cta: '查看指南'
    },
    {
      tag: '02 · 行测',
      title: '题型与刷题方法',
      desc: '按模块整理高频题型、解题技巧和复盘方法，少走弯路。',
      link: '/xingce/',
      cta: '进入行测'
    },
    {
      tag: '03 · 申论与面试',
      title: '写作与表达',
      desc: '申论结构、素材积累、面试答题框架与练习记录。',
      link: '/shenlun/',
      cta: '查看专题'
    },
    {
      tag: '04 · 资料库',
      title: '真题与经验',
      desc: '真题、笔记、常见问题和备考经验，统一归档方便检索。',
      link: '/kb/',
      cta: '打开资料库'
    }
  ] satisfies HomeMode[],
  features: [
    {
      icon: 'layout',
      title: '按阶段整理',
      desc: '报考、笔试、面试分阶段归档，不再到处翻聊天记录和收藏夹。'
    },
    {
      icon: 'list',
      title: '清晰索引',
      desc: '每一节都有标题、摘要和目录，搜索和跳转都更快。'
    },
    {
      icon: 'sparkles',
      title: 'AI 友好',
      desc: '构建时生成 llms.txt 与逐页 Markdown，方便用 AI 总结和问答。'
    },
    {
      icon: 'search',
      title: '本地搜索',
      desc: '内置全文搜索，不用登录，也不需要外部服务。'
    },
    {
      icon: 'rocket',
      title: '持续更新',
      desc: '资料以 Markdown 维护，改完推送即可发布新版本。'
    },
    {
      icon: 'code',
      title: '轻量开源',
      desc: 'VitePress 静态站，部署简单，长期维护成本低。'
    }
  ] satisfies HomeFeature[],
  steps: [
    { k: '看指南', v: '先了解报考流程、岗位选择和时间安排' },
    { k: '定计划', v: '按行测、申论拆分每周学习任务' },
    { k: '刷题复盘', v: '记录错题和解题思路，定期回看' },
    { k: '准备面试', v: '整理答题框架，持续开口练习' }
  ]
}
