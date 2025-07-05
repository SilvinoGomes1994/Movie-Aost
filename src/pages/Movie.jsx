'use client'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill
} from "react-icons/bs"
import { Link } from "react-router-dom"

import MovieCard from "../Components/MovieCard"
import "./Movie.css"

//Utilizando as variáveis de Ambiente do VITE_API
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;


const Movie = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovie(data);
  }

  const formatCurrency = (number) => {
    //Retorna o número no formato de Dólar
    return number.toLocaleString('en-US', { style: 'currency', currency: 'USD', })
  }

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`;
    getMovie(movieUrl)
  }, [])


  return (
    <div className="movie-page" >
      {movie &&
        <>
          <div className="movie-page__imgdetails">
            <MovieCard movie={movie} showLink={false} />
            <p className="tagline">{movie.tagline}</p>
          </div>

          <div className="movie-page__details">
            <div className="details">
              <div className="info">
                <h3>
                  <BsWallet2 /> Orçamento:
                </h3>
                <p>{formatCurrency(movie.budget)}</p>
              </div>
              <div className="info">
                <h3>
                  <BsGraphUp /> Receita:
                </h3>
                <p>{formatCurrency(movie.revenue)}</p>
              </div>

              <div className="info">
                <h3>
                  <BsHourglassSplit /> Duração:
                </h3>
                <p>{movie.runtime} minutos</p>
              </div>

              <div className="info description">
                <h3>
                  <BsFillFileEarmarkTextFill /> Descrição:
                </h3>
                <p>{movie.overview}</p>
              </div>
            </div>

            <div className="container-button">
                <Link to="/">
                  <button className="button">Voltar</button>
                </Link>
              </div>


          </div>
        </>

      }
    </div>
  )
}

export default Movie