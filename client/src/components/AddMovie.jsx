import React from 'react';


class AddMovie extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
       value: ''
    }
    this.handleAddChange = this.handleAddChange.bind(this)
    this.handleAddSubmit = this.handleAddSubmit.bind(this)

  }

  handleAddChange(event) {
    event.preventDefault()
    this.setState({value: event.target.value})
  }

  handleAddSubmit (event) {
     event.preventDefault()
     this.props.addMovie(this.state.value)
  }



  render () {
    return (
      <div>
        <form>
        <input type='text' placeholder="Add Movies..." value={this.state.value} onChange={this.handleAddChange}/>
        <button onClick={this.handleAddSubmit}>Add</button>
        </form>
        </div>
    )
  }
}

// const App = (props) => (
//   <div>Hello World!</div>
// );

export default AddMovie;