import { useState, useEffect } from 'react'
/*useState pra poder gerenciar os estados dos filmes */
/*useEffect pra gente poder fazer a chamada da API quando a página carregar.*/

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;



const Home = () => {
    const [topMovies, setTopMovies] = useState([]); /*Gerenciando os estados dos nossos melhoresFilmes */

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        console.log(data);
    };

    useEffect(() => {

        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;

        getTopRatedMovies(topRatedUrl);
    }, []);


  return (
    <div>Home</div>
  )
};

export default Home
