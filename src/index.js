import React from 'react'
import ReactDOM from 'react-dom'

class TuneList extends React.Component {
  state = {
    tunes: [
      { id: 1, author: 'Jay Z', title: 'Young Forever' },
      { id: 2, author: 'Alphaville', title: 'Forever Young' }
    ]
  }

  removeTune = (id) => {
    this.setState((state) => ({
      tunes: this.state.tunes.filter(tune => {
        return tune.id != id;
      })
    }))
  }

  render() {
    return (
      <div>
      {this.state.tunes.length} tune{this.state.tunes.length != 1 ? 's' : ''}
      <NewTuneForm/>
      <ul>
      {
        this.state.tunes.map(tune => {
          return (
            <li key={tune.id}>
            <Tune title={tune.title} author={tune.author}/>
            <RemoveButton id={tune.id} onClick={this.removeTune}/>
            </li>
          )
        })
      }
      </ul>
      </div>
    )
  }
}

class RemoveButton extends React.Component {
  handleClick = () => {
    this.props.onClick(this.props.id);
  }

  render() {
    return (
      <button onClick={this.handleClick} id={0}>Remove</button>
    )
  }
}

class Tune extends React.Component {
  render () {
    return (
      <span className="tune">
      {this.props.title} by {this.props.author}
      </span>
    )
  }
}

class NewTuneForm extends React.Component {
  state = {
    title: ''
  }

  handleChange = (event) => {
    this.setState({ title: event.target.value });
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Song by Artist" name="title" onChange={this.handleChange}/>
        <input type="submit" value="Add" />
      </form>
    )
  }
}

function App(props) {
    return (
      <TuneList/>
    )
}

ReactDOM.render(<App/>, document.getElementById('app-root'));
