import React from 'react';


class Search extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
       value: ''
    }
    this.handleSearchChange = this.handleSearchChange.bind(this)
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this)

  }

  handleSearchChange(event) {
    event.preventDefault()
    this.setState({value: event.target.value})
  }

  handleSearchSubmit (event) {
     event.preventDefault()
     this.props.filter(this.state.value)
  }



  render () {
    return (
      <div>
        <form>
        <input type='text' placeholder="Search..." value={this.state.value} onChange={this.handleSearchChange}/>
        <button onClick={this.handleSearchSubmit}>Go!</button>
        </form>
        </div>
    )
  }
}

// const App = (props) => (
//   <div>Hello World!</div>
// );

export default Search;