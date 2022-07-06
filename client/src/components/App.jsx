import React from 'react';
import MovieListEntry from './MovieListEntry.jsx'
import MovieList from './MovieList.jsx'
import Search from './Search.jsx'
import AddMovie from './AddMovie.jsx'

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      movies: [
        {title: 'Mean Girls', status: ''},
        {title: 'Hackers', status: ''},
        {title: 'The Grey', status: ''},
        {title: 'Sunshine', status: ''},
        {title: 'Ex Machina', status: ''},
      ],
      addedMovies: [],
      watchedMovies: [],
      toWatchMovies: []
    }
    this.filterSearch = this.filterSearch.bind(this)
    this.addMovieFunc = this.addMovieFunc.bind(this)
    this.updateToWatch = this.updateToWatch.bind(this)
    this.updateWatched = this.updateWatched.bind(this)
    this.changetoWatch = this.changetoWatch.bind(this)
    this.changewatched = this.changewatched.bind(this)
  }

  changetoWatch() {
    this.setState({movies: this.state.toWatchMovies})
  }

  changewatched() {
    this.setState({movies: this.state.watchedMovies})
  }


  filterSearch (searchedWord) {
    // debugger;
    var searchArr = []
    var copy = this.state.movies.slice();
    for(let i = 0; i < copy.length;i++) {
      let currMovie = copy[i].title;
      if((currMovie.toLowerCase()).includes(searchedWord.toLowerCase())){
        searchArr.push(copy[i])
        this.setState({movies: searchArr})
      }
    }
  }

  addMovieFunc (movieName) {
    let copy = this.state.addedMovies.slice()
    copy.push({title: movieName})
    this.setState({movies: copy, addedMovies: copy})
  }

  updateWatched (movie) {
    var watchedmov = this.state.watchedMovies.slice()
    var copy = this.state.movies.slice();
    for(let i = 0; i < copy.length;i++) {
      let currMovie = copy[i].title;
      if(currMovie === movie) {
        copy[i].status = 'Watched'
        watchedmov.push(copy[i])
        this.setState({watchedMovies: watchedmov})
      }
    }
    console.log("movies to watch", watchedmov)
  }

  updateToWatch (movie) {
    var toWatchmov = this.state.toWatchMovies.slice()
    var copy = this.state.movies.slice();
    for(let i = 0; i < copy.length;i++) {
      let currMovie = copy[i].title;
      if(currMovie === movie) {
        copy[i].status = 'To Watch'
        toWatchmov.push(copy[i])
        this.setState({toWatchMovies: toWatchmov})
      }
    }
    console.log("movies to watch", toWatchmov)
  }




  render () {

    return (
      <div>
        <h1>Movie List</h1>
        <ul>
          <AddMovie addMovie={this.addMovieFunc}/>
          <Search filter={this.filterSearch}/>
          <button onClick={this.changetoWatch}>To Watch</button>
          <button onClick={this.changewatched}>Watched</button>
          <MovieList movies={this.state.movies} updateToWatch={this.updateToWatch} updateWatched={this.updateWatched}/>
        </ul>
        </div>
    )
  }
}

// const App = (props) => (
//   <div>Hello World!</div>
// );

export default App;