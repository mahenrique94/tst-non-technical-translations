import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const App = () => {
  const browserLanguage = localStorage.getItem('i18nextLng') || 'pt'

  const [language, updateLanguage] = useState(browserLanguage.substring(0, 2))
  const { i18n } = useTranslation()

  const handleChangeLanguage = event => {
    updateLanguage(event.target.value)
    i18n.changeLanguage(event.target.value)
  }

  return (
    <>
      <select onChange={handleChangeLanguage} value={language}>
        <option value="pt">{i18n.t('labels.portuguese')}</option>
        <option value="en">{i18n.t('labels.english')}</option>
        <option value="es">{i18n.t('labels.spanish')}</option>
      </select>
      <h1>{i18n.t('titles.welcome')}</h1>
    </>
  )
}

export default App
