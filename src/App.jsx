import { Routes, Route } from 'react-router-dom'
import AuthLayout from './components/AuthLayout.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Forgetpassword from './pages/Forgetpassword.jsx'

function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgetpassword" element={<Forgetpassword />} />
      </Route>
    </Routes>
  )
}

export default App