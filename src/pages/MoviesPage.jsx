import { useState } from 'react'
import { movies } from '../utils/movies'

function MoviesPage() {
    const [movieList, setMovieList] = useState(movies)
    const [form, setForm] = useState({
        title: '',
        director: '',
        genre: '',
        watched: false
    })
    const [message, setMessage] = useState('')

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target

        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!form.title.trim()) {
            setMessage('Title is required')
            return
        }

        if (!form.director.trim()) {
            setMessage('Director is required')
            return
        }

        const newMovie = {
            id: Date.now(),
            title: form.title,
            director: form.director,
            genre: form.genre,
            watched: form.watched
        }

        setMovieList(prevMovies => [...prevMovies, newMovie])

        setForm({
            title: '',
            director: '',
            genre: '',
            watched: false
        })

        setMessage('')
    }

    const toggleWatched = (id) => {
        setMovieList(prevMovies =>
            prevMovies.map(movie =>
                movie.id === id ? { ...movie, watched: !movie.watched } : movie
            )
        )
    }

    const deleteMovie = (id) => {
        setMovieList(prevMovies => prevMovies.filter(movie => movie.id !== id))
    }

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Movies</h1>

            <form onSubmit={handleSubmit} className="mb-6 grid gap-3 max-w-md">
                <input
                    name="title"
                    type="text"
                    placeholder="Title"
                    value={form.title}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />

                <input
                    name="director"
                    type="text"
                    placeholder="Director"
                    value={form.director}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />

                <input
                    name="genre"
                    type="text"
                    placeholder="Genre"
                    value={form.genre}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />

                <label className="flex gap-2 items-center">
                    <input
                        name="watched"
                        type="checkbox"
                        checked={form.watched}
                        onChange={handleChange}
                    />
                    Watched
                </label>

                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Add Movie
                </button>

                {message && <p className="text-red-600">{message}</p>}
            </form>

            <div className="grid gap-4">
                {movieList.map(movie => (
                    <div key={movie.id} className="border rounded p-4 shadow">
                        <h2 className="text-xl font-bold">{movie.title}</h2>
                        <p>Director: {movie.director}</p>
                        <p>Genre: {movie.genre}</p>
                        <p>Watched: {movie.watched ? 'Yes' : 'No'}</p>

                        <div className="flex gap-3 mt-3">
                            <button
                                onClick={() => toggleWatched(movie.id)}
                                className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                            >
                                Toggle Watched
                            </button>

                            <button
                                onClick={() => deleteMovie(movie.id)}
                                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MoviesPage