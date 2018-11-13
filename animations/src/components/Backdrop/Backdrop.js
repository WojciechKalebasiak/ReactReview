import React from "react";
import classnames from "classnames";
import "./Backdrop.css";

const backdrop = props => (
  <div
    className={classnames("Backdrop", {
      BackdropOpened: props.show,
      BackdropClosed: !props.show
    })}
  />
);

export default backdrop;
