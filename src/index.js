import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

class TuneList extends React.Component {
  state = {
    tunes: [
      { id: 1, artist: 'Jay Z', title: 'Young Forever' },
      { id: 2, artist: 'Alphaville', title: 'Forever Young' }
    ]
  }

  addTune = (title, artist) => {
    let tune = {
      id: this.state.tunes.length + 1,
      artist: artist,
      title: title
    };
    this.setState((state) => ({
      tunes: this.state.tunes.concat([tune])
    }));

  }

  removeTune = (id) => {
    if (confirm("Are you sure you want to remove this?")) {
      this.setState((state) => ({
        tunes: this.state.tunes.filter(tune => {
          return tune.id != id;
        })
      }))
    }
  }

  render() {
    return (
      <div>
      There are a total of {this.state.tunes.length} tune{this.state.tunes.length != 1 ? 's' : ''}.
      <table className="table">
        <thead>
          <tr><th>Tune</th><th>Artist</th><th></th></tr>
        </thead>
        <tbody>
        {
          this.state.tunes.map(tune => {
            return (
              <Tune key={tune.id} id={tune.id} title={tune.title} artist={tune.artist} handleRemove={this.removeTune}/>
            )
          })
        }
        </tbody>
      </table>
      <h2>Add Tune</h2>
      <AddTuneForm onSubmit={this.addTune} />
      </div>
    )
  }
}

class RemoveButton extends React.Component {
  handleClick = () => {
    this.props.handleRemove(this.props.id);
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
      <tr>
        <td>{this.props.title}</td>
        <td>{this.props.artist}</td>
        <td><RemoveButton id={this.props.id} handleRemove={this.props.handleRemove} /></td>
      </tr>
    )
  }
}

class AddTuneForm extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault()
    let text = event.target.text.value;
    let titleArtistPair = text.split(' by ');
    this.props.onSubmit(titleArtistPair[0], titleArtistPair[1])
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Song by Artist" name="text" />
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
