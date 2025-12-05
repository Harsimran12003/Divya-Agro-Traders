import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import CategoryPage from './pages/CategoryPage'
import ProductDetails from './components/ProductDetails.jsx'
import TermsAndConditions from './pages/TermsAndConditions.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Homepage />} />
      
      {/* Category pages */}
        <Route path="/products/:category" element={<CategoryPage />} />

        {/* Product details */}
        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>

    </Router>
  )
}

export default App