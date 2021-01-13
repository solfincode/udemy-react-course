"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class DecisionApp extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleDelete", () => {
      this.setState(() => {
        return {
          options: []
        };
      });
    });

    _defineProperty(this, "handleAddOption", option => {
      if (!option) {
        return "enter valid options";
      } else if (this.state.options.indexOf(option) > -1) {
        return "this option is already exists";
      }

      this.setState(prevState => {
        return {
          options: prevState.options.concat([option])
        };
      });
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

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
      title: this.state.title,
      subTitle: this.state.subTitle
    }), /*#__PURE__*/React.createElement(Action, {
      handlePick: this.handlePick,
      hasOptions: this.state.options.length > 0
    }), /*#__PURE__*/React.createElement(Options, {
      options: this.state.options,
      handleDelete: this.handleDelete
    }), /*#__PURE__*/React.createElement(AddOption, {
      handleAddOption: this.handleAddOption
    }), /*#__PURE__*/React.createElement(CounterApp, null), /*#__PURE__*/React.createElement(VisibilityApp, null));
  }

}

class Header extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, this.props.title), /*#__PURE__*/React.createElement("p", null, this.props.subTitle));
  }

} //action component


class Action extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      onClick: this.props.handlePick,
      disabled: !this.props.hasOptions
    }, "what should i do?"));
  }

} //options


class Options extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      onClick: this.props.handleDelete
    }, "removeAll"), this.props.options.map(option => /*#__PURE__*/React.createElement(Option, {
      key: option,
      option: option
    })));
  }

} //option component


class Option extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, this.props.option);
  }

} //option component


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

ReactDOM.render( /*#__PURE__*/React.createElement(DecisionApp, null), document.getElementById("app"));