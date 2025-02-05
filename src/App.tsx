import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Home'
import RootLayout from './components/Layout/layout'
import CartPage from './pages/Cart'
import CatalogPage from './pages/Catalog'
import BrandsPage from './pages/Brand'
import GaragePage from './pages/Garage'
import ProfilePage from './pages/Profile'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/garage" element={<GaragePage />} />
          <Route path="/account" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
