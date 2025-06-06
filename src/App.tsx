import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { routes } from './routes';

function App() {
  return (
    <Router>
    <div className="flex min-h-screen bg-[#E6EFFA]">
      <nav className="w-1/5 p-4 bg-white shadow">
        <ul className="space-y-2">
          {routes.map((route, index) => (
            <li key={index}>
              <Link to={route.path} className="text-blue-500 hover:underline">
                {route.path === '/' ? 'Home' : route.path.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main className="flex-1 p-4">
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </main>
    </div>
  </Router>
  );
}

export default App;
