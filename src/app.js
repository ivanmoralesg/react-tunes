/*
class TuneList extends React.Component {
  // public class field syntax
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

function Dialog(props) {
  return (
    <div color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
    </div>
  );
}

function WelcomeDialog() {
  return (
    <Dialog
      title="Welcome"
      message="Thank you for visiting our spacecraft!" />

  );
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
        <input type="text" name="title" onChange={this.handleChange}/>
        <input type="submit" value="Add" />
        <div>Checking for {this.state.title} ...</div>
      </form>
    )
  }
}
*/
class BulkActionButtons extends React.Component {
  deleteItems = () => {
    this.props.deleteItems();
  }
  render() {
    return (
      <div>
        <button>Download</button>
        <button>Slide Show</button>
        <button onClick={this.deleteItems}>Delete</button>
      </div>
    )
  }
}

class AddContentBox extends React.Component {
  state = {

  }
  addItem = () => {
    this.props.addItem();
    console.log(this.props.items);
  }
  render() {
    return (
      <div>
      <p>
        Add Content: <input type="text" name="contentKey"/> <button onClick={this.addItem}>Add</button>
      </p>
      </div>
    )
  }
}

class ContentListTable extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr><th></th><th>Content Key</th><th>title</th></tr>
        </thead>
        <tbody>
          {
            this.props.items.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <input type="checkbox" name="id" value={item.id} onChange={this.props.checkItem}/>
                  </td>
                  <td>{item.key}</td>
                  <td>{item.title}</td>
                 </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }
}

class ContentList extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>{this.props.items.length} items</p>
        <BulkActionButtons deleteItems={this.props.deleteItems}/>
        <AddContentBox items={this.props.items} addItem={this.props.addItem}/>
        <ContentListTable items={this.props.items} checkItem={this.props.checkItem} checkedIds={this.props.checkedIds}/>
      </div>
    )
  }
}

class App extends React.Component {
  state = {
    items: [],
    checkedIds: [],
  }
  componentDidMount() {
    fetch('contentLists.json')
      .then(response => {
        console.log(response);
        return response.json();
      }).then(json => {
        console.log(json);
        this.setState(prevState => ({
          items: json
        }));
      }
    )
  }

  addItem = () => {
    this.setState((prevState) => ({
      items: prevState.items.concat({id: 3, key: 'B8000', title: 'Fixed Income'})
    }));
  };

  checkItem = (event) => {
    const target = event.target;
    const id = parseInt(target.value);
    this.setState(prevState => {
      const {checkedIds} = this.state;
      if (target.checked) {
        checkedIds.push(id);
      } else {
        checkedIds.splice(checkedIds.indexOf(id), 1);
      }
      console.log(this.state.checkedIds);
    });
  };

  deleteItems = () => {
    console.log(this.state.checkedIds);
    this.setState((prevState) => ({
      items: prevState.items.filter(item => {
        console.log(item.id);
        return this.state.checkedIds.indexOf(item.id) < 0;
      })
    }));
  };

  render() {
    return (
      <ContentList name="Favorites" items={this.state.items}
        checkItem={this.checkItem} checkedIds={this.state.checkedIds}
        addItem={this.addItem}
        deleteItems={this.deleteItems}/>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app-root'));
