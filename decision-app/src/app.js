const obj = {
  name: "david",
  getName() {
    return this.name;
  },
};

class DecisionApp extends React.Component {
  render() {
    const title = "hello reactjs";
    const subTitle = "this is code for reactjs";
    const options = ["one", "two", "three"];
    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action />
        <Options options={options} />
        <AddOption />
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
  handleClick() {
    alert("clicked");
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>what should i do?</button>
      </div>
    );
  }
}

//options
class Options extends React.Component {
  constructor(props) {
    super(props);
    this.removeAll = this.removeAll.bind(this);
  }
  removeAll() {
    alert("removed!!!");
  }
  render() {
    return (
      <div>
        <button onClick={this.removeAll}>removeAll</button>
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
    return <div key={this.props.key}>{this.props.option}</div>;
  }
}

//option component
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
    return (
      <div>
        <form onSubmit={this.addOption}>
          <input type="text" name="optionInput" />
          <button>submit</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<DecisionApp />, document.getElementById("app"));
