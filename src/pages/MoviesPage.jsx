import { useState } from 'react'
import { movies } from '../utils/movies'

function MoviesPage() {
    const [movieList, setMovieList] = useState(movies)

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Movies</h1>

            <div className="grid gap-4">
                {movieList.map(movie => (
                    <div key={movie.id} className="border rounded p-4 shadow">
                        <h2 className="text-xl font-bold">{movie.title}</h2>
                        <p>Director: {movie.director}</p>
                        <p>Genre: {movie.genre}</p>
                        <p>Watched: {movie.watched ? 'Yes' : 'No'}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MoviesPage