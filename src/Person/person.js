import React from "react";
import styles from './Person.module.css';
const person = props => {
  return (
    <div className={styles.Person}>
      <p>
        I'm a {props.person.name} and I'am {props.person.age}
      </p>
      <span>{props.children}</span>
      <button onClick={props.deletePerson}>X</button>
      <input type="text" onChange={e=>props.changeName(e.target.value)} />
    </div>
  );
};
export default person;
