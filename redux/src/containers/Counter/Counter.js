import React, { Component } from "react";
import { connect } from "react-redux";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionTypes from '../../store/actions';
class Counter extends Component {
  state = {
    addValue: 5,
    substractValue: 5
  };

  render() {
    // const results = this.props.results.map(result => <li>{result}</li>);
    console.log(this.props.results);

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
          {this.props.results.map((result) => (
            <li key={result.id} onClick={()=>this.props.removeResultFromStore(result.id)}>{result.value}</li>
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
  onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
  onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
  onAddCounter: value => dispatch({ type: actionTypes.ADD, value }),
  onSubstractCounter: value => dispatch({ type: actionTypes.SUBSTRACT, value }),
  addResultToStore: (result) => dispatch({ type: actionTypes.STORE_RESULT, result }),
  removeResultFromStore: (index) => dispatch({type: actionTypes.REMOVE_RESULT, id:index})
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
