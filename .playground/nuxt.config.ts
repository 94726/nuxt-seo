import { defineNuxtConfig } from 'nuxt/config'
import NuxtSeoKit from '../module/src/module'

export default defineNuxtConfig({
  modules: [
    NuxtSeoKit,
    '@nuxthq/ui',
    'nuxt-icon'
  ],

  devtools: {
    enabled: true,
  },

  i18n: {
    locales: ['en', 'it']
  },

  site: {
    titleSeparator: '·',
    defaultLocale: 'en',
    // TODO play with i18n support
    locales: {
      en: {
        url: 'nuxtseo.dev',
        name: 'Nuxt SEO',
        description: 'Nuxt SEO Playground description.',
      },
      it: {
        url: 'it.nuxtseo.dev',
        name: 'Nuxt SEO It',
        description: 'Nuxt SEO Playground itality description.',
      }
    },
  },

  routeRules: {
    '/about': { sitemap: { changefreq: 'daily', priority: 0.3 } },
    '/secret': { index: false },
  }
})
