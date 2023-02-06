import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {

  async function deleteMovieHandler(id) {
    // console.log(id);
    let result = await fetch(`https://react-http-2e904-default-rtdb.firebaseio.com/movies/${id}.json`, {
      method: 'DELETE'
    });
    console.log(result);
    props.fetchMoviesHandler();
  };

  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button onClick={() => deleteMovieHandler(props.id)} style={{border: '1px solid white'}}>Delete</button>
    </li>
  );
};

export default Movie;
