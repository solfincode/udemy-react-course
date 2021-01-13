class DecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "hello reactjs",
      subTitle: "this is code for reactjs",
      options: [],
    };
  }
  handleDelete = () => {
    this.setState(() => {
      return {
        options: [],
      };
    });
  };
  handleAddOption = (option) => {
    if (!option) {
      return "enter valid options";
    } else if (this.state.options.indexOf(option) > -1) {
      return "this option is already exists";
    }
    this.setState((prevState) => {
      return {
        options: prevState.options.concat([option]),
      };
    });
  };
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randomNum]);
  };
  render() {
    return (
      <div>
        <Header title={this.state.title} subTitle={this.state.subTitle} />
        <Action
          handlePick={this.handlePick}
          hasOptions={this.state.options.length > 0}
        />
        <Options
          options={this.state.options}
          handleDelete={this.handleDelete}
        />
        <AddOption handleAddOption={this.handleAddOption} />
        <CounterApp />
        <VisibilityApp />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.subTitle}</p>
      </div>
    );
  }
}

//action component
class Action extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          what should i do?
        </button>
      </div>
    );
  }
}

//options
class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDelete}>removeAll</button>
        {this.props.options.map((option) => (
          <Option key={option} option={option} />
        ))}
      </div>
    );
  }
}

//option component
class Option extends React.Component {
  render() {
    return <div>{this.props.option}</div>;
  }
}

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
ReactDOM.render(<DecisionApp />, document.getElementById("app"));
