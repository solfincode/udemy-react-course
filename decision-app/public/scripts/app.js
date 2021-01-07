"use strict";

const data = {
  name: "David",
  age: 30,
  location: "SF"
};
const contents = {
  title: "Harry Porter",
  subtitle: "Magic in the world",
  options: ["one", "two"]
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
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, contents.title), /*#__PURE__*/React.createElement("p", null, contents.subtitle), contents.options.length > 0 ? /*#__PURE__*/React.createElement("p", null, "Here are options") : /*#__PURE__*/React.createElement("p", null, "none"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "item1"), /*#__PURE__*/React.createElement("li", null, "item2")));
}; //JSX template


const template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ContentTemplate, null), /*#__PURE__*/React.createElement(UserTemplate, null)); //es2015
// const template = React.createElement("p", null, "this is react app");

const appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);