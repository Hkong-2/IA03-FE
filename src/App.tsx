import { Outlet, Link } from 'react-router-dom'

export default function App() {
  return (
    <div className="p-4 max-w-md mx-auto">
      <nav className="flex justify-between mb-4">
        <Link to="/">Home</Link>
        <div className="space-x-3">
          <Link to="/login">Login</Link>
          <Link to="/register">Sign Up</Link>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}
