const data = {
  name: "David",
  age: 30,
  location: "SF",
};

const contents = {
  title: "Harry Porter",
  subtitle: "Magic in the world",
  options: ["one", "two"],
};

//userTemplate
const UserTemplate = () => {
  return (
    <div>
      <h1>{data.name ? data.name : "Anonymous"}</h1>
      {getAge()}
      {getLocation(data.location)}
    </div>
  );
};
const getLocation = (el) => {
  if (el === "NY") {
    return <p>Location:Awesome {el}</p>;
  } else {
    return <p>fairly good location in the {el}</p>;
  }
};

const getAge = () => {
  return data.age > 20 ? <p>age: {data.age}</p> : <p>under Age</p>;
};

//content template
const ContentTemplate = () => {
  return (
    <div>
      <h3>{contents.title}</h3>
      <p>{contents.subtitle}</p>
      {contents.options.length > 0 ? <p>Here are options</p> : <p>none</p>}
      <ol>
        <li>item1</li>
        <li>item2</li>
      </ol>
    </div>
  );
};
//JSX template
const template = (
  <div>
    <ContentTemplate />
    <UserTemplate />
  </div>
);

//es2015
// const template = React.createElement("p", null, "this is react app");
const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
