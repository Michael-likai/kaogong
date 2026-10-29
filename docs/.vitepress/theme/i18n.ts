import { computed } from 'vue'
import { useData } from 'vitepress'
import { withPage as resolvePage } from './links'
import translations from '../translations.json'

export function useLanguage() {
  const { lang } = useData()
  const english = computed(() => lang.value === 'en')
  const t = (text: string) => english.value
    ? (translations as Record<string, string>)[text] || text
    : text
  const withPage = (link: string) => resolvePage(
    english.value && link.startsWith('/') && !link.startsWith('//') && !link.startsWith('/en/')
      ? '/en' + link
      : link
  )
  return { english, t, withPage }
}
