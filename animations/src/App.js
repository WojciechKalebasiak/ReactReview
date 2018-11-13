import React, { Component } from "react";
import Transition from "react-transition-group/Transition";
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    isModalOpen: false,
    showBlock: false
  };
  handleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };
  handleBlock = () => {
    this.setState(prevState => ({ showBlock: !prevState.showBlock }));
  };
  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button className="Button" onClick={this.handleBlock}>
          Toggle block
        </button>
        <Transition
          in={this.state.showBlock}
          timeout={500}
          mountOnEnter
          unmountOnExit>
          {state => (
            <div
              style={{
                backgroundColor: "black",
                width: "200px",
                height: "200px",
                margin: "auto",
                transition: "opacity 1s ease-out",
                opacity: state === "exiting" ? 0 : 1
              }}>
              Trapolololo
            </div>
          )}
        </Transition>
        <Modal closed={this.handleModal} show={this.state.isModalOpen} />
        {this.state.isModalOpen ? (
          <Backdrop show={this.state.isModalOpen} />
        ) : null}
        <button className="Button" onClick={this.handleModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
