import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import MoviesPage from './pages/MoviesPage'
import NotFoundPage from './pages/NotFoundPage'
import { AuthProvider } from './context/AuthContext'

function App() {
    return (
        <AuthProvider>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/movies" element={<MoviesPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </AuthProvider>
    )
}

export default App