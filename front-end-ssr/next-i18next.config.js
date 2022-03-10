module.exports = {
  i18n: {
    defaultLocale: 'pt',
    locales: ['en', 'es', 'pt'],
  },
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
  serializeConfig: false,
  use: [
    require('i18next-http-backend'),
  ],
}
