import React from 'react';
import MovieListEntry from './MovieListEntry.jsx'

var MovieList = (props) => {

  return (
    <div>
      {props.movies.map((movie, index) =>
        <MovieListEntry key={index} value={movie} updateToWatch={props.updateToWatch} updateWatched={props.updateWatched}/>
      )}
    </div>
  )
}

export default MovieList;