import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import AuthCallback from './pages/AuthCallback'
import PropertyListing from './pages/PropertyListing'
import UploadProperty from './pages/UploadProperty'
import HomeLoans from './pages/HomeLoans'
import Contact from './pages/Contact'
import Profile from './pages/Profile'
import ScheduleViewing from './pages/ScheduleViewing'
import MakeOffer from './pages/MakeOffer'
import PropertyDetails from './pages/PropertyDetails'
import useAuth from './hooks/useAuth'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const auth = useAuth()
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div>
        <header className="app-header">
          <nav className="app-nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/properties" className="nav-link">Properties</Link>
            <Link to="/home-loans" className="nav-link">Loans</Link>
            {auth.user && (
              <Link to="/upload" className="nav-link">List Property</Link>
            )}
            {!auth.user ? (
              <>
                <Link to="/signin" className="nav-link">Sign in</Link>
                <Link to="/signup" className="signup-link">Sign up</Link>
              </>
            ) : (
              <>
                <Link to="/profile" className="nav-link">Hi, {auth.user.username || auth.user.firstName || auth.user.email}</Link>
                <button className="signup-link" onClick={() => auth.logout()}>Logout</button>
              </>
            )}
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/properties" element={<PropertyListing />} />
            <Route path="/home-loans" element={<HomeLoans />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/upload" element={<UploadProperty />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/schedule-viewing" element={<ScheduleViewing />} />
            <Route path="/make-offer" element={<MakeOffer />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/auth/callback" element={<AuthCallback />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
