"use strict";

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
  render() {
    return /*#__PURE__*/React.createElement("div", null, "What should i do?");
  }

} //options


class Options extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, this.props.options.map(option => /*#__PURE__*/React.createElement(Option, {
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
  render() {
    return /*#__PURE__*/React.createElement("div", null, "add option");
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(DecisionApp, null), document.getElementById("app"));