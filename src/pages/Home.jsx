import { useState, useEffect } from 'react'
import MovieCard from '../Components/MovieCard';

import './MoviesGrid.css'

/*useState pra poder gerenciar os estados dos filmes */
/*useEffect pra poder fazer a chamada da API quando a página carregar.*/

//Utilizando as variáveis de Ambiente do VITE_API
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;



const Home = () => {
  const [topMovies, setTopMovies] = useState([]); /*Gerenciando os estados dos nossos melhoresFilmes */

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    getTopRatedMovies(topRatedUrl);
  }, []);


  return (
    <div className='container'>
      <h2 className='title'>Melhores Filmes:</h2>
      <div className='movies-container'>

        {topMovies.length > 0 ? (
          topMovies.map((movie) =>
            <MovieCard key={movie.id} movie={movie} />)
        ) : (<p>Impossível carregar os filmes, tente conectar-se a internet...🙄</p>)
        }

      </div>
    </div>
  );
};

export default Home
