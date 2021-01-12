"use strict";

const obj = {
  name: "david",

  getName() {
    return this.name;
  }

};

class DecisionApp extends React.Component {
  render() {
    const title = "hello reactjs";
    const subTitle = "this is code for reactjs";
    const options = ["one", "two", "three"];
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
      title: title,
      subTitle: subTitle
    }), /*#__PURE__*/React.createElement(Action, null), /*#__PURE__*/React.createElement(Options, {
      options: options
    }), /*#__PURE__*/React.createElement(AddOption, null));
  }

}

class Header extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, this.props.title), /*#__PURE__*/React.createElement("p", null, this.props.subTitle));
  }

} //action component


class Action extends React.Component {
  handleClick() {
    alert("clicked");
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      onClick: this.handleClick
    }, "what should i do?"));
  }

} //options


class Options extends React.Component {
  constructor(props) {
    super(props);
    this.removeAll = this.removeAll.bind(this);
  }

  removeAll() {
    alert("removed!!!");
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      onClick: this.removeAll
    }, "removeAll"), this.props.options.map(option => /*#__PURE__*/React.createElement(Option, {
      key: option,
      option: option
    })));
  }

} //option component


class Option extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      key: this.props.key
    }, this.props.option);
  }

} //option component


class AddOption extends React.Component {
  addOption(e) {
    e.preventDefault();
    const option = e.target.elements.optionInput.value;

    if (option) {
      alert(option);
    } else {
      alert("type options");
    }
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", {
      onSubmit: this.addOption
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "optionInput"
    }), /*#__PURE__*/React.createElement("button", null, "submit")));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(DecisionApp, null), document.getElementById("app"));