import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import Initializer from './initializer'
import Routes from './routes/'

import './assets/css/_styles.scss'

// Sentry.init({
//   dsn: 'https://16214a326d8f42e8b4b2217f4ec07bcc@o118952.ingest.sentry.io/5890623',
//   integrations: [new Integrations.BrowserTracing()],

//   // Set tracesSampleRate to 1.0 to capture 100%
//   // of transactions for performance monitoring.
//   // We recommend adjusting this value in production
//   tracesSampleRate: 1.0
// })

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

Initializer.init()

window.dataLayer = window.dataLayer || []
function gtag () { window.dataLayer.push(arguments) }
gtag('js', new Date())
gtag('config', 'G-N6BBCWWXYD', {
  page_title: 'Roulette',
  page_path: window.location.pathname
})
