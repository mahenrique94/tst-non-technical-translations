import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { I18nextProvider } from 'react-i18next'

import App from './App'
import { i18n } from './translate'

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<h1>Loading...</h1>}>
        <App />
      </Suspense>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
