import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateTasks from './Routes/CreateTasks.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />

      <Route path='/create' element={<CreateTasks />} />
    </Routes>
  </BrowserRouter>
)
