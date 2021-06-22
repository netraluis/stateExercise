import React from "react";

class CounterClick extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  add = () => {
    // this.state.value++;
    this.setState({value: this.state.value + 1})
  };

  render() {
    return (
      <div>
        <div>{this.props.title}</div>
        <div>{this.state.value}</div>
        <button onClick={this.add}>CLÍCAME</button>
      </div>
    );
  }
}

export default CounterClick;
