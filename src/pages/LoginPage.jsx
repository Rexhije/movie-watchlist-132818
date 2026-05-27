import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

function LoginPage() {
    const { login } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin = () => {
        login()
        navigate('/movies')
    }

    return (
        <div className="p-8 max-w-sm mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Login</h1>
            <button
                onClick={handleLogin}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Login
            </button>
        </div>
    )
}

export default LoginPage