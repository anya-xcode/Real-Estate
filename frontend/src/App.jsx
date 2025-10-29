import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import AuthCallback from './pages/AuthCallback'
import useAuth from './hooks/useAuth'

function App() {
  const auth = useAuth()
  return (
    <BrowserRouter>
      <div>
        <header className="app-header">
          <nav className="app-nav">
            <Link to="/" className="nav-link">Home</Link>
            {!auth.user ? (
              <>
                <Link to="/signin" className="nav-link">Sign in</Link>
                <Link to="/signup" className="signup-link">Sign up</Link>
              </>
            ) : (
              <>
                <span className="nav-link">Hi, {auth.user.username || auth.user.firstName || auth.user.email}</span>
                <button className="signup-link" onClick={() => auth.logout()}>Logout</button>
              </>
            )}
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
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
