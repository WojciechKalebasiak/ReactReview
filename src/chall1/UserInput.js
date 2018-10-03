import React from 'react'
import './style.css';
export default (props) => {
  return (
    <div className="UserInput">
      <input type="text" onChange={props.handleUsernameChange} value={props.username}/>
    </div>
  )
}
