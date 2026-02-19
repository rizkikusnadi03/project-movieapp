import { HashRouter, Routes, Route } from "react-router-dom";

import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </HashRouter>
  );
};

export default App
