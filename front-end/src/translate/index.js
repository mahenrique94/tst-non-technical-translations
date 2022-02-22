import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: 'http://localhost:1337/api/translations/',
      parse(response, language, namespace) {
        const { data } = JSON.parse(response)
        const messages = data.reduce((acc, registry) => {
          acc[registry.attributes.language] = {
            [namespace]: registry.attributes.data,
          }
          return acc
        }, {})
        return messages[language][namespace]
      },
    },
    debug: true,
    defaultNS: 'translations',
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    },
    ns: ['translations'],
  })

export { i18n }
