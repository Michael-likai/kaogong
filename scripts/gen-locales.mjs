import { readFileSync, writeFileSync, mkdirSync, readdirSync, rmSync } from 'node:fs'
import { join } from 'node:path'

const out = 'docs/en'
const sections = ['guide', 'xingce', 'shenlun', 'kb', 'shandong', 'sprint']

// Rewrite only known content routes; assets and external URLs retain their paths.
function translateLinks(source) {
  return source.replace(
    /\]\(\/(guide|xingce|shenlun|kb|shandong|sprint|about)([\/#?][^)]*|)\)/g,
    '](/en/$1$2)'
  )
}

export function markChineseContent(source) {
  const normalized = source.replace(/\r\n/g, '\n')
  const frontmatter = /^---\n([\s\S]*?)\n---(?:\n|$)/.exec(normalized)
  if (!frontmatter) return '---\nchineseContent: true\n---\n\n' + normalized
  const metadata = frontmatter[1].replace(/^chineseContent:.*\n?/gm, '')
  return '---\n' + metadata + '\nchineseContent: true\n---\n' + normalized.slice(frontmatter[0].length)
}

rmSync(out, { recursive: true, force: true })
mkdirSync(out, { recursive: true })
for (const dir of sections) {
  mkdirSync(join(out, dir), { recursive: true })
  for (const file of readdirSync(join('docs', dir)).filter(file => file.endsWith('.md'))) {
    const source = readFileSync(join('docs', dir, file), 'utf8')
    writeFileSync(join(out, dir, file), markChineseContent(translateLinks(source)))
  }
}

writeFileSync(join(out, 'index.md'), `---
layout: page
title: Civil Service Exam Assistant
titleTemplate: false
description: Application guides and study resources for civil service exams.
---

<Home />
`)
writeFileSync(join(out, 'about.md'), `---
title: About
description: About this resource library and its sources.
---

# About Civil Service Exam Assistant

A personal collection of application guides, aptitude test notes, essay and interview resources.

## Content and sources

The library covers national and provincial exams, including Shandong, and draws on official announcements, examination outlines, public media and general study methods. Some revision materials were supplied by users.

## Language coverage

The interface, home page and this page are available in English. Exam preparation articles remain in Chinese and are clearly marked. Article titles are retained in Chinese to match the source materials.

## Disclaimer

This is an independent, unofficial study resource. Always check the latest official announcements for policies, eligibility, dates and scores.

## Updates

Materials are maintained in Markdown and updated over time. Errors and outdated content can be reported through the project repository.
`)
