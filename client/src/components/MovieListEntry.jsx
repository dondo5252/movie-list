import React from 'react';
import MovieList from './MovieList.jsx'

class MovieListEntry extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      watched: 'To Watch'
    }
    this.handleWatchedClick = this.handleWatchedClick.bind(this)
    this.handleToWatchClick = this.handleToWatchClick.bind(this)
  }

  handleWatchedClick(event) {
    this.setState({watched: 'To Watch'});
    console.log("clicked to  wathced")
    this.props.updateToWatch(this.props.value.title)
  }

  handleToWatchClick() {
    this.setState({watched: 'Watched'});
    console.log("clicked")
    this.props.updateWatched(this.props.value.title)
  }

  render () {
    var watchState = this.state.watched
    var button;

    if (watchState === 'To Watch') {
      button = <button onClick={this.handleToWatchClick}>To Watch</button>
    } else if(watchState === 'Watched') {
      button = <button onClick={this.handleWatchedClick}>Watched</button>
    }


    return (
      <ul>
        <li>{this.props.value.title}</li>
        {button}
        </ul>
    )
  }
}

// const App = (props) => (
//   <div>Hello World!</div>
// );

export default MovieListEntry;