import React, {useState, useRef} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const ref = useRef(true);

  async function fetchMoviesHandler() {  
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://swapi.dev/api/film/')
    if(!response.ok){
      throw new Error('Something went wrong!  ')
    }

      const data = await response.json();

        const transforemedMovies = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });
        setMovies(transforemedMovies);
        setIsLoading(false);
    } catch (error) {
      setError(error.message + 'Retrying in 5sec')
      if(!ref.current) setError(error.message)
      if(ref.current) setTimeout(() => fetchMoviesHandler(), 5000)
    }
    setIsLoading(false);
  }

  // let content = <p>Found no movies.</p>;

  // if(movies.length > 0) {
  //   content = <MoviesList movies={movies} />;
  // }

  // if(error) {
  //   content = <p>{error}</p>
  //   set
  // }

  // if(isLoading) {
  //   content = <p>Data is Loading...</p>;
  // }
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>      </section>
      <section> 
        {/* {content} */}
       {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
       {!isLoading && movies.length === 0 && !error &&<p>Found no movies.</p>}
       {isLoading && <p>Data is Loading...</p>}
       {!isLoading && error && <p>{error}</p>}
       {!isLoading && error && ref.current &&<button onClick={() => ref.current = false}>Cancel</button>}
      </section>
    </React.Fragment>
  );
}

export default App;
