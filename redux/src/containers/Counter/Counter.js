import React, { Component } from 'react';
import {connect} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        addValue:5,
        substractValue:5
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.counter} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={() => this.props.onAddCounter(this.state.addValue)}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubstractCounter(this.state.substractValue)}  />
            </div>
        );
    }
}
const mapStateToProps = state => ({
    counter:state.counter
});
const mapDispatchToProps = dispatch =>({
    onIncrementCounter:()=>dispatch({type:'INCREMENT'}),
    onDecrementCounter:()=>dispatch({type:'DECREMENT'}),
    onAddCounter:(value)=>dispatch({type:'ADD', value}),
    onSubstractCounter:(value)=>dispatch({type:'SUBSTRACT', value})
})
export default connect(mapStateToProps, mapDispatchToProps)(Counter);