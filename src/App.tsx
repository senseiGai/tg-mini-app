import { MainLayout } from './layouts/MainLayout'
import { Routes, Route } from 'react-router'

//screens
import { MainScreen } from './pages/MainScreen/MainScreen'
import { MiningModesScreen } from './pages/MiningModesScreen/MiningModesScreen'



export default function App() {

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/mining-modes" element={<MiningModesScreen />} />
      </Routes>
    </MainLayout>
  )
}
