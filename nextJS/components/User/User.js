import React from "react";
const user = props => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <style jsx>
        {`
          div {
            background-color: black;
            text-align: center;
            color: white;
          }
        `}
      </style>
    </div>
  );
};
export default user;
