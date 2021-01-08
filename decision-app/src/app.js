const data = {
  name: "David",
  age: 30,
  location: "SF",
};

const contents = {
  title: "Harry Porter",
  subtitle: "Magic in the world",
  options: ["one", "two"],
  shown: false,
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
  const formSubmit = (e) => {
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
  return (
    <div>
      <h3>{contents.title}</h3>
      <p>{contents.subtitle}</p>
      {contents.options.length > 0 ? <p>Here are options</p> : <p>none</p>}

      <ol>
        {contents.options.map((el) => {
          return <li key={el}>{el}</li>;
        })}
      </ol>

      <form onSubmit={formSubmit}>
        <input type="text" name="option" />
        <button>add option</button>
        <button disabled={contents.options.length === 0} onClick={getRandomNum}>
          random
        </button>
        <button onClick={removeOption}>remove</button>
      </form>
      <button onClick={toggleFunc}>toggle</button>
      {contents.shown ? "" : <p>this is toggle feature</p>}
    </div>
  );
};

let store = {
  count: 0,
  upId: "add",
  downId: "substract",
  resetId: "reset",
};

//counter functions
const addOne = () => {
  store.count++;
  renderCounter();
};
const minusOne = () => {
  store.count--;
  renderCounter();
};
const resetHandler = () => {
  store.count = 0;
  renderCounter();
};

//count template
const CountTemplate = () => {
  return (
    <div>
      <h1>Count:{store.count}</h1>
      <button id={store.upId} onClick={addOne}>
        +
      </button>
      <button id={store.downId} onClick={minusOne}>
        -
      </button>
      <button id={store.resetId} onClick={resetHandler}>
        reset
      </button>
    </div>
  );
};
//JSX template
const render = () => {
  const template = (
    <div>
      <ContentTemplate />
      <UserTemplate />
      <CountTemplate />
    </div>
  );
  ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById("app");
render();
