class DecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "hello reactjs",
      subTitle: "this is code for reactjs",
      options: [],
    };
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
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
  handleDeleteAll = () => {
    this.setState(() => {
      return {
        options: [],
      };
    });
  };
  handleDelete = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option),
    }));
  };
  handleAddOption = (option) => {
    if (!option) {
      return "enter valid options";
    } else if (this.state.options.indexOf(option) > -1) {
      return "this option is already exists";
    }
    this.setState((prevState) => ({
      options: prevState.options.concat([option]),
    }));
  };
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randomNum]);
  };

  render() {
    return (
      <div>
        <Header subTitle={this.state.subTitle} />
        <Action
          handlePick={this.handlePick}
          hasOptions={this.state.options.length > 0}
        />
        <Options
          options={this.state.options}
          handleDelete={this.handleDelete}
          handleDeleteAll={this.handleDeleteAll}
        />
        <AddOption handleAddOption={this.handleAddOption} />
        <CounterApp />
        <VisibilityApp />
        <User name="David" age={30} />
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.subTitle}</p>
    </div>
  );
};

Header.defaultProps = {
  title: "default props title",
};

//action component
const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={props.hasOptions}>
        what should i do?
      </button>
    </div>
  );
};

//options
const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteAll}>removeAll</button>
      {props.options.length === 0 && <p>please add an option</p>}
      {props.options.map((option) => (
        <Option
          key={option}
          option={option}
          optionText={option}
          handleDelete={props.handleDelete}
        />
      ))}
    </div>
  );
};

//option component
const Option = (props) => {
  return (
    <div>
      <div>{props.option}</div>
      <button onClick={(e) => props.handleDelete(props.optionText)}>
        delete
      </button>
    </div>
  );
};

//option component
class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined,
    };
  }
  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.optionInput.value;
    const error = this.props.handleAddOption(option);
    this.setState(() => {
      return { error };
    });
    if (!error) {
      e.target.elements.optionInput.value = "";
    }
  };
  render() {
    return (
      <div>
        {this.state.error ? <p>{this.state.error}</p> : ""}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="optionInput" />
          <button>submit</button>
        </form>
      </div>
    );
  }
}

//counter
class CounterApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    const stringCount = localStorage.getItem("count");
    const count = parseInt(stringCount, 10);
    if (!isNaN(count)) {
      this.setState(() => ({ count }));
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem("count", this.state.count);
    }
  }
  //counter functions
  addOne = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  minusOne = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  resetHandler = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div>
        <h1>
          Count:
          {this.state.count >= 0
            ? this.state.count
            : alert("number shouldn't be below zero")}
        </h1>
        <button onClick={this.addOne}>+</button>
        <button onClick={this.minusOne}>-</button>
        <button onClick={this.resetHandler}>reset</button>
      </div>
    );
  }
}

class VisibilityApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "hello world with react this is toggle",
      visibility: true,
    };
  }
  toggle = () => {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.toggle}>toggle</button>
        {this.state.visibility === true ? <h3>{this.state.text}</h3> : ""}
      </div>
    );
  }
}

const User = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};
ReactDOM.render(<DecisionApp />, document.getElementById("app"));
