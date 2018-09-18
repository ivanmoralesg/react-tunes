var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
var BulkActionButtons = function (_React$Component) {
  _inherits(BulkActionButtons, _React$Component);

  function BulkActionButtons() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BulkActionButtons);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BulkActionButtons.__proto__ || Object.getPrototypeOf(BulkActionButtons)).call.apply(_ref, [this].concat(args))), _this), _this.deleteItems = function () {
      _this.props.deleteItems();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BulkActionButtons, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          null,
          "Download"
        ),
        React.createElement(
          "button",
          null,
          "Slide Show"
        ),
        React.createElement(
          "button",
          { onClick: this.deleteItems },
          "Delete"
        )
      );
    }
  }]);

  return BulkActionButtons;
}(React.Component);

var AddContentBox = function (_React$Component2) {
  _inherits(AddContentBox, _React$Component2);

  function AddContentBox() {
    var _ref2;

    var _temp2, _this2, _ret2;

    _classCallCheck(this, AddContentBox);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref2 = AddContentBox.__proto__ || Object.getPrototypeOf(AddContentBox)).call.apply(_ref2, [this].concat(args))), _this2), _this2.state = {}, _this2.addItem = function () {
      _this2.props.addItem();
      console.log(_this2.props.items);
    }, _temp2), _possibleConstructorReturn(_this2, _ret2);
  }

  _createClass(AddContentBox, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          "Add Content: ",
          React.createElement("input", { type: "text", name: "contentKey" }),
          " ",
          React.createElement(
            "button",
            { onClick: this.addItem },
            "Add"
          )
        )
      );
    }
  }]);

  return AddContentBox;
}(React.Component);

var ContentListTable = function (_React$Component3) {
  _inherits(ContentListTable, _React$Component3);

  function ContentListTable() {
    _classCallCheck(this, ContentListTable);

    return _possibleConstructorReturn(this, (ContentListTable.__proto__ || Object.getPrototypeOf(ContentListTable)).apply(this, arguments));
  }

  _createClass(ContentListTable, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      return React.createElement(
        "table",
        null,
        React.createElement(
          "thead",
          null,
          React.createElement(
            "tr",
            null,
            React.createElement("th", null),
            React.createElement(
              "th",
              null,
              "Content Key"
            ),
            React.createElement(
              "th",
              null,
              "title"
            )
          )
        ),
        React.createElement(
          "tbody",
          null,
          this.props.items.map(function (item, index) {
            return React.createElement(
              "tr",
              { key: index },
              React.createElement(
                "td",
                null,
                React.createElement("input", { type: "checkbox", name: "id", value: item.id, onChange: _this4.props.checkItem })
              ),
              React.createElement(
                "td",
                null,
                item.key
              ),
              React.createElement(
                "td",
                null,
                item.title
              )
            );
          })
        )
      );
    }
  }]);

  return ContentListTable;
}(React.Component);

var ContentList = function (_React$Component4) {
  _inherits(ContentList, _React$Component4);

  function ContentList() {
    _classCallCheck(this, ContentList);

    return _possibleConstructorReturn(this, (ContentList.__proto__ || Object.getPrototypeOf(ContentList)).apply(this, arguments));
  }

  _createClass(ContentList, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h2",
          null,
          this.props.name
        ),
        React.createElement(
          "p",
          null,
          this.props.items.length,
          " items"
        ),
        React.createElement(BulkActionButtons, { deleteItems: this.props.deleteItems }),
        React.createElement(AddContentBox, { items: this.props.items, addItem: this.props.addItem }),
        React.createElement(ContentListTable, { items: this.props.items, checkItem: this.props.checkItem, checkedIds: this.props.checkedIds })
      );
    }
  }]);

  return ContentList;
}(React.Component);

var App = function (_React$Component5) {
  _inherits(App, _React$Component5);

  function App() {
    var _ref3;

    var _temp3, _this6, _ret3;

    _classCallCheck(this, App);

    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return _ret3 = (_temp3 = (_this6 = _possibleConstructorReturn(this, (_ref3 = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref3, [this].concat(args))), _this6), _this6.state = {
      items: [],
      checkedIds: []
    }, _this6.addItem = function () {
      _this6.setState(function (prevState) {
        return {
          items: prevState.items.concat({ id: 3, key: 'B8000', title: 'Fixed Income' })
        };
      });
    }, _this6.checkItem = function (event) {
      var target = event.target;
      var id = parseInt(target.value);
      _this6.setState(function (prevState) {
        var checkedIds = _this6.state.checkedIds;

        if (target.checked) {
          checkedIds.push(id);
        } else {
          checkedIds.splice(checkedIds.indexOf(id), 1);
        }
        console.log(_this6.state.checkedIds);
      });
    }, _this6.deleteItems = function () {
      console.log(_this6.state.checkedIds);
      _this6.setState(function (prevState) {
        return {
          items: prevState.items.filter(function (item) {
            console.log(item.id);
            return _this6.state.checkedIds.indexOf(item.id) < 0;
          })
        };
      });
    }, _temp3), _possibleConstructorReturn(_this6, _ret3);
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this7 = this;

      fetch('contentLists.json').then(function (response) {
        console.log(response);
        return response.json();
      }).then(function (json) {
        console.log(json);
        _this7.setState(function (prevState) {
          return {
            items: json
          };
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(ContentList, { name: "Favorites", items: this.state.items,
        checkItem: this.checkItem, checkedIds: this.state.checkedIds,
        addItem: this.addItem,
        deleteItems: this.deleteItems });
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app-root'));