import type { DefaultTheme } from 'vitepress'

/**
 * Site identity. This file is safe to import from Vue components:
 * keep secrets and `process.env` out of it (see `config.mts` for env).
 */
export interface SiteConfig {
  name: string
  title: string
  description: string
  url: string
  lang: string
  ogImage: string
  author: {
    name: string
    url?: string
    github?: string
    x?: string
  }
  editLink: DefaultTheme.EditLink | null
  socialLinks: DefaultTheme.SocialLink[]
  footer: {
    message: string
    links: { text: string; link: string }[]
  }
  features: {
    /** Emit a copy of every page as Markdown and expose a "copy Markdown" action. */
    markdownCopies: boolean
    /** Generate /llms.txt and /llms-full.txt for AI assistants. */
    llms: boolean
    /** Explicitly allow known AI crawlers in robots.txt. */
    aiCrawlers: boolean
    /** Reading-progress bar at the top of the page. */
    readingProgress: boolean
  }
}

export const siteConfig: SiteConfig = {
  name: '考公小助手',
  title: '考公小助手 · 备考资料与学习路径',
  description:
    '考公小助手：整理公务员考试报考指南、行测、申论与面试资料，提供可检索、可持续更新的备考知识库。',
  url: 'https://kaogong-assistant.pages.dev',
  lang: 'zh-CN',
  ogImage: '/og.png',
  author: {
    name: '考公小助手'
  },
  editLink: null,
  socialLinks: [],
  footer: {
    message: '把零散资料，整理成能用的备考路径。',
    links: [
      { text: '报考指南', link: '/guide/' },
      { text: '行测', link: '/xingce/' },
      { text: '申论与面试', link: '/shenlun/' },
      { text: '资料库', link: '/kb/' },
      { text: '关于', link: '/about' }
    ]
  },
  features: {
    markdownCopies: true,
    llms: true,
    aiCrawlers: true,
    readingProgress: true
  }
}
