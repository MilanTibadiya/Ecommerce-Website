import React, {useState, useRef, useEffect, useCallback} from 'react';

import MoviesList from './components/MoviesList';
import AddMovie from './components/add_movies/AddMovie';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const ref = useRef(true);
  // console.log(ref)

  const fetchMoviesHandler = useCallback( async () => {  
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://react-http-2e904-default-rtdb.firebaseio.com/movies.json')
    if(!response.ok){
      throw new Error('Something went wrong!  ')
    }

      const data = await response.json();

      const loadedMovies = [];

      for( const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        })
      }

        setMovies(loadedMovies);
        setIsLoading(false);
    } catch (error) {
      setError(error.message + 'Retrying in 5sec')
      if(!ref.current) setError(error.message)
      if(ref.current) setTimeout(() => fetchMoviesHandler(), 5000)
    }
    setIsLoading(false);
  }, [] );

  useEffect(() => {          
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);
  
  async function AddMovieHandler(movie) {
    const response = await fetch('https://react-http-2e904-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data =await response.json();
    console.log(data);
    fetchMoviesHandler()
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
      <AddMovie onAddMovie={AddMovieHandler}/>
      </section>
        <section>
          <button onClick={fetchMoviesHandler}>Fetch Movies</button>      
        </section>
      <section> 
        {/* {content} */}
       {!isLoading && movies.length > 0 && <MoviesList fetchMoviesHandler={fetchMoviesHandler} movies={movies} />}
       {!isLoading && movies.length === 0 && !error &&<p>Found no movies.</p>}
       {isLoading && <p>Data is Loading...</p>}
       {!isLoading && error && <p>{error}</p>}
       {!isLoading && error && ref.current &&<button onClick={() => ref.current = false}>Cancel</button>}
      </section>
    </React.Fragment>
  );
}

export default App;
