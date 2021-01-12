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
  render() {
    return <div>What should i do?</div>;
  }
}

//options
class Options extends React.Component {
  render() {
    return (
      <div>
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
  render() {
    return <div>add option</div>;
  }
}

ReactDOM.render(<DecisionApp />, document.getElementById("app"));
