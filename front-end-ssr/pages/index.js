import Head from 'next/head'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'

const App = ({ locale }) => {
  const [language, updateLanguage] = useState(locale)
  const { i18n } = useTranslation()
  const router = useRouter()

  const handleChangeLanguage = event => {
    updateLanguage(event.target.value)
    i18n.changeLanguage(event.target.value)
    router.push('/', '/', { locale: event.target.value })
  }

  return (
    <>
      <Head>
        <title>Tst Translations</title>
      </Head>
      <select onChange={handleChangeLanguage} value={language}>
        <option value="pt">{i18n.t('labels.portuguese')}</option>
        <option value="en">{i18n.t('labels.english')}</option>
        <option value="es">{i18n.t('labels.spanish')}</option>
      </select>
      <h1>{i18n.t('titles.welcome')}</h1>
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['translations']),
    locale,
  }
})

export default App
