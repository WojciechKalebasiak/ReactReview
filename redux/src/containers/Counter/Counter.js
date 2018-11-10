import React, { Component } from "react";
import { connect } from "react-redux";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import {
  add,
  substract,
  increment,
  decrement
} from "../../store/actions/counter";
import {storeResult, removeResult} from '../../store/actions/results';
class Counter extends Component {
  state = {
    addValue: 5,
    substractValue: 5
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.counter} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl
          label="Add 5"
          clicked={() => this.props.onAddCounter(this.state.addValue)}
        />
        <CounterControl
          label="Subtract 5"
          clicked={() =>
            this.props.onSubstractCounter(this.state.substractValue)
          }
        />
        <hr />
        <button onClick={() => this.props.addResultToStore(this.props.counter)}>
          Store Result
        </button>
        <ul>
          {this.props.results.map(result => (
            <li
              key={result.id}
              onClick={() => this.props.removeResultFromStore(result.id)}>
              {result.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  counter: state.ctr.counter,
  results: state.res.results
});
const mapDispatchToProps = dispatch => ({
  onIncrementCounter: () => dispatch(increment()),
  onDecrementCounter: () => dispatch(decrement()),
  onAddCounter: value => dispatch(add(value)),
  onSubstractCounter: value => dispatch(substract(value)),
  addResultToStore: result => dispatch(storeResult(result)),
  removeResultFromStore: index => dispatch(removeResult(index))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
