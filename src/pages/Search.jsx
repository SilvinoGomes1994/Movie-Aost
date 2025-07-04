import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import MovieCard from "../Components/MovieCard"

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

import "./MoviesGrid.css";


{/* A funcao */}
const Search = () => {
  const [searchParams] = useSearchParams()
  const [movies, setMovies] = useState([])
  const query = searchParams.get("q")

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    console.log(res);
    const data = await res.json();

    setMovies(data.results);
    console.log("Ola..." + data.results);
  };
{/*https://api.themoviedb.org/3/search/movie?api_key=SUA_API_KEY&query=termo_da_busca
https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}
https://api.themoviedb.org/3/search/movie/?api_key=f0908e874817877400f1f963a289f682&query=Batman
*/}
  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
    console.log(searchURL);
    getSearchedMovies(searchWithQueryURL);
  }, [query]);

  return (
    <div className='container'>
      <h2 className='title'>
        Resultados para: <span className="query-text">{query} </span>
      </h2>

      <div className='movies-container'>
        {movies.length > 0 ? (
          movies.map((movie) =>
            <MovieCard key={movie.id} movie={movie} />
          )
        ) : (<p>Impossível carregar os filmes, tente conectar-se a internet...🙄 {movies.length}</p>)
        }

      </div>
    </div>
  )
}

export default Search