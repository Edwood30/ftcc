import './index.css'
import { Outlet } from 'react-router-dom'

function App() {
  return (
      <div>
      <header className="navbar">
        <div className="container navbar-inner">
          <div className="brand">
            <div className="brand-badge" />
            <span>FTCC Solutions Inc.</span>
          </div>
          <nav className="nav-links">
            <a href="/">Home</a>
            <a href="/divisions">Divisions</a>
            <a href="/contact">Contact</a>
            <a href="/admin">Admin</a>
          </nav>
        </div>
      </header>

      <Outlet />

      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} FTCC Solutions Inc. · info@ftcc.com · +1 (000) 000-0000
      </div>
      </footer>
      </div>
  )
}

export default App
