import { MainScreen } from './pages/MainScreen/MainScreen'
import { MainLayout } from './layouts/MainLayout'
import { Routes, Route } from 'react-router'

export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<MainScreen />} />
      </Routes>
    </MainLayout>
  )
}
