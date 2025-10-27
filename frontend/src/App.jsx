import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Signin from './pages/Signin'

function App() {
  return (
    <BrowserRouter>
      <div>
        <header className="app-header">
          <nav className="app-nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/signin" className="nav-link">Sign in</Link>
            <Link to="/signup" className="signup-link">Sign up</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
