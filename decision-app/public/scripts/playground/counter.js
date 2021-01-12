"use strict";

/*
Exercise for counter
*/
let store = {
  count: 0,
  upId: "add",
  downId: "substract",
  resetId: "reset"
}; //counter functions

const addOne = () => {
  store.count++;
  render();
};

const minusOne = () => {
  store.count--;
  render();
};

const resetHandler = () => {
  store.count = 0;
  render();
}; //count template


const CountTemplate = () => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Count:", store.count), /*#__PURE__*/React.createElement("button", {
    id: store.upId,
    onClick: addOne
  }, "+"), /*#__PURE__*/React.createElement("button", {
    id: store.downId,
    onClick: minusOne
  }, "-"), /*#__PURE__*/React.createElement("button", {
    id: store.resetId,
    onClick: resetHandler
  }, "reset"));
}; //JSX template


const render = () => {
  const template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CountTemplate, null));
  ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById("app");
render();