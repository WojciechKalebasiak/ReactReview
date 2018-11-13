import React from "react";
import Transition from "react-transition-group/CSSTransition";
import "./Modal.css";

const modal = props => (
  <Transition in={props.show} timeout={400} mountOnEnter unmountOnExit classNames={{enterActive:'ModalOpen', exitActive:"ModalClosed"}}>
    <div
      className="Modal">
      <h1>A Modal</h1>
      <button className="Button" onClick={props.closed}>
        Dismiss
      </button>
    </div>
  </Transition>
);

export default modal;
