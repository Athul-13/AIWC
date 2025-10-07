import HomePage from './Home'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductDetailsPage from './Page'
import ClientLayout from './components/ClientLayout'
import ShopPage from './pages/Shop'
import AboutPage from './pages/About'
import ServicesPage from './pages/Services'
import ContactPage from './pages/Contact'
import CartPage from './pages/Cart'

function App() {
  return (
    <ClientLayout>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
      </Routes>
    </BrowserRouter>
    </ClientLayout>
  )
}


export default App
