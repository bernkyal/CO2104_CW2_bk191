import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from '@/components/ui/provider.tsx'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <HashRouter basename="/CO2104_CW2_bk191">
    <App />
    </HashRouter>
    </Provider>
  </StrictMode>
)

