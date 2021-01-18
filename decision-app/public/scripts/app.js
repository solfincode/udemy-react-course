"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class DecisionApp extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleDeleteAll", () => {
      this.setState(() => {
        return {
          options: []
        };
      });
    });

    _defineProperty(this, "handleDelete", optionToRemove => {
      this.setState(prevState => ({
        options: prevState.options.filter(option => optionToRemove !== option)
      }));
    });

    _defineProperty(this, "handleAddOption", option => {
      if (!option) {
        return "enter valid options";
      } else if (this.state.options.indexOf(option) > -1) {
        return "this option is already exists";
      }

      this.setState(prevState => ({
        options: prevState.options.concat([option])
      }));
    });

    _defineProperty(this, "handlePick", () => {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      alert(this.state.options[randomNum]);
    });

    this.state = {
      title: "hello reactjs",
      subTitle: "this is code for reactjs",
      options: []
    };
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({
          options
        }));
      }
    } catch (e) {
      console.log("error");
    }
  }

  componentDidUpdate(preProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
      console.log("saving data");
    }
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
      subTitle: this.state.subTitle
    }), /*#__PURE__*/React.createElement(Action, {
      handlePick: this.handlePick,
      hasOptions: this.state.options.length > 0
    }), /*#__PURE__*/React.createElement(Options, {
      options: this.state.options,
      handleDelete: this.handleDelete,
      handleDeleteAll: this.handleDeleteAll
    }), /*#__PURE__*/React.createElement(AddOption, {
      handleAddOption: this.handleAddOption
    }), /*#__PURE__*/React.createElement(CounterApp, null), /*#__PURE__*/React.createElement(VisibilityApp, null), /*#__PURE__*/React.createElement(User, {
      name: "David",
      age: 30
    }));
  }

}

const Header = props => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, props.title), /*#__PURE__*/React.createElement("p", null, props.subTitle));
};

Header.defaultProps = {
  title: "default props title"
}; //action component

const Action = props => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: props.handlePick,
    disabled: props.hasOptions
  }, "what should i do?"));
}; //options


const Options = props => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: props.handleDeleteAll
  }, "removeAll"), props.options.length === 0 && /*#__PURE__*/React.createElement("p", null, "please add an option"), props.options.map(option => /*#__PURE__*/React.createElement(Option, {
    key: option,
    option: option,
    optionText: option,
    handleDelete: props.handleDelete
  })));
}; //option component


const Option = props => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, props.option), /*#__PURE__*/React.createElement("button", {
    onClick: e => props.handleDelete(props.optionText)
  }, "delete"));
}; //option component


class AddOption extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleAddOption", e => {
      e.preventDefault();
      const option = e.target.elements.optionInput.value;
      const error = this.props.handleAddOption(option);
      this.setState(() => {
        return {
          error
        };
      });

      if (!error) {
        e.target.elements.optionInput.value = "";
      }
    });

    this.state = {
      error: undefined
    };
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, this.state.error ? /*#__PURE__*/React.createElement("p", null, this.state.error) : "", /*#__PURE__*/React.createElement("form", {
      onSubmit: this.handleAddOption
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "optionInput"
    }), /*#__PURE__*/React.createElement("button", null, "submit")));
  }

} //counter


class CounterApp extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "addOne", () => {
      this.setState({
        count: this.state.count + 1
      });
    });

    _defineProperty(this, "minusOne", () => {
      this.setState({
        count: this.state.count - 1
      });
    });

    _defineProperty(this, "resetHandler", () => {
      this.setState({
        count: 0
      });
    });

    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    const stringCount = localStorage.getItem("count");
    const count = parseInt(stringCount, 10);

    if (!isNaN(count)) {
      this.setState(() => ({
        count
      }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem("count", this.state.count);
    }
  } //counter functions


  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Count:", this.state.count >= 0 ? this.state.count : alert("number shouldn't be below zero")), /*#__PURE__*/React.createElement("button", {
      onClick: this.addOne
    }, "+"), /*#__PURE__*/React.createElement("button", {
      onClick: this.minusOne
    }, "-"), /*#__PURE__*/React.createElement("button", {
      onClick: this.resetHandler
    }, "reset"));
  }

}

class VisibilityApp extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "toggle", () => {
      this.setState(prevState => {
        return {
          visibility: !prevState.visibility
        };
      });
    });

    this.state = {
      text: "hello world with react this is toggle",
      visibility: true
    };
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      onClick: this.toggle
    }, "toggle"), this.state.visibility === true ? /*#__PURE__*/React.createElement("h3", null, this.state.text) : "");
  }

}

const User = props => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Name: ", props.name), /*#__PURE__*/React.createElement("p", null, "Age: ", props.age));
};

ReactDOM.render( /*#__PURE__*/React.createElement(DecisionApp, null), document.getElementById("app"));