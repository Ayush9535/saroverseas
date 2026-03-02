import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import About from './pages/About'
import Products from './pages/Products'
import Services from './pages/Services/Services'
import Presence from './pages/Presence'
import Career from './pages/Career/Career'
import ContactUs from './pages/ContactUs/ContactUs'
import ParentCompany from './pages/ParentCompany/ParentCompany'
import GlobalVision from './pages/GlobalVision/GlobalVision'
import Ethos from './pages/Ethos/Ethos'
import Polymers from './pages/Polymers/Polymers'
import Chemicals from './pages/Chemicals/Chemicals'
import Geography from './pages/Geography/Geography'
import ProductDetailsPage from './pages/ProductDetails/ProductDetailsPage'
import IndustriesGrid from './pages/IndustriesGrid/IndustriesGrid'

const PAGE_TITLES = {
  '/': 'SAR - Polymers & Chemicals',
  '/about/parent-company': 'Parent Company - SAR',
  '/about/global-vision': 'Global Vision - SAR',
  '/about/ethos': 'Ethos - SAR',
  '/products/polymers': 'Polymers - SAR',
  '/products/chemicals': 'Chemicals - SAR',
  '/services': 'Services - SAR',
  '/presence/geography': 'Geography - SAR',
  '/presence/industries': 'Industries - SAR',
  '/career': 'Career - SAR',
  '/contact-us': 'Contact Us - SAR',
}

function TitleUpdater() {
  const location = useLocation()
  useEffect(() => {
    const path = location.pathname
    if (!(/^\/products\/(polymers|chemicals)\//.test(path))) {
      document.title = PAGE_TITLES[path] || 'SAR Overseas'
    }
  }, [location])
  return null
}

function App() {
  return (
    <BrowserRouter>
      <TitleUpdater />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/parent-company" element={<ParentCompany />} />
        <Route path="/about/global-vision" element={<GlobalVision />} />
        <Route path="/about/ethos" element={<Ethos />} />
        <Route path="/products/polymers" element={<Polymers />} />
        <Route path="/products/polymers/:slug" element={<ProductDetailsPage />} />
        <Route path="/products/chemicals" element={<Chemicals />} />
        <Route path="/products/chemicals/:slug" element={<ProductDetailsPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/presence/geography" element={<Geography />} />
        <Route path="/presence/industries" element={<IndustriesGrid />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
