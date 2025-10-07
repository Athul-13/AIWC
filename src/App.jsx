import HomePage from './Home'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductDetailsPage from './Page'
import ClientLayout from './components/ClientLayout'

function App() {
  return (
    <ClientLayout>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
      </Routes>
    </BrowserRouter>
    </ClientLayout>
  )
}


export default App
