import { MainLayout } from './layouts/MainLayout'
import { Routes, Route } from 'react-router'

//screens
import { MainScreen } from './pages/main-screen/main-screen'
import { MiningModesScreen } from './pages/mining-modes-screen/mining-modes-screen'
import { TopScreen } from './pages/top-screen/top-screen'
import { DonatesScreen } from './pages/donates-screen/donates-screen'




export default function App() {

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/mining-modes" element={<MiningModesScreen />} />
        <Route path="/statistics" element={<TopScreen />} />
        <Route path="/donate" element={<DonatesScreen />} />
      </Routes>
    </MainLayout>
  )
}
