/*
Exercise for counter
*/

let store = {
  count: 0,
  upId: "add",
  downId: "substract",
  resetId: "reset",
};

//counter functions
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
      <CountTemplate />
    </div>
  );
  ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById("app");
render();
