import React from "react";

function Note(props) {
  return (
    <div className="note">
      {props.id}
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

export default Note;
