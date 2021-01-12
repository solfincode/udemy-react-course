"use strict";

/*
Exercise for todo list
*/
const data = {
  name: "David",
  age: 30,
  location: "SF"
};
const contents = {
  title: "Harry Porter",
  subtitle: "Magic in the world",
  options: ["one", "two"],
  shown: false
}; //userTemplate

const UserTemplate = () => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, data.name ? data.name : "Anonymous"), getAge(), getLocation(data.location));
};

const getLocation = el => {
  if (el === "NY") {
    return /*#__PURE__*/React.createElement("p", null, "Location:Awesome ", el);
  } else {
    return /*#__PURE__*/React.createElement("p", null, "fairly good location in the ", el);
  }
};

const getAge = () => {
  return data.age > 20 ? /*#__PURE__*/React.createElement("p", null, "age: ", data.age) : /*#__PURE__*/React.createElement("p", null, "under Age");
}; //content template


const ContentTemplate = () => {
  const formSubmit = e => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if (option) {
      contents.options.push(option);
      e.target.elements.option.value = "";
      render();
    }
  };

  const removeOption = () => {
    contents.options = [];
    render();
  };

  const getRandomNum = () => {
    const number = Math.floor(Math.random() * contents.options.length);
    const option = contents.options[number];
    console.log(option);
  };

  const toggleFunc = () => {
    contents.shown = !contents.shown;
    render();
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, contents.title), /*#__PURE__*/React.createElement("p", null, contents.subtitle), contents.options.length > 0 ? /*#__PURE__*/React.createElement("p", null, "Here are options") : /*#__PURE__*/React.createElement("p", null, "none"), /*#__PURE__*/React.createElement("ol", null, contents.options.map(el => {
    return /*#__PURE__*/React.createElement("li", {
      key: el
    }, el);
  })), /*#__PURE__*/React.createElement("form", {
    onSubmit: formSubmit
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "option"
  }), /*#__PURE__*/React.createElement("button", null, "add option"), /*#__PURE__*/React.createElement("button", {
    disabled: contents.options.length === 0,
    onClick: getRandomNum
  }, "random"), /*#__PURE__*/React.createElement("button", {
    onClick: removeOption
  }, "remove")), /*#__PURE__*/React.createElement("button", {
    onClick: toggleFunc
  }, "toggle"), contents.shown ? "" : /*#__PURE__*/React.createElement("p", null, "this is toggle feature"));
}; //JSX template


const render = () => {
  const template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(UserTemplate, null), /*#__PURE__*/React.createElement(ContentTemplate, null));
  ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById("app");
render();