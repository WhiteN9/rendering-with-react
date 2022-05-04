import React from "react";
import "./HobbyList.css";

function MakeHobbyListItem(props) {
  return <li>{props.hobby}</li>;
}

function HobbyList({ hobbies }) {
  if (hobbies.length === 0) return null;
  return (
    <div className="hobbies">
      <h4>Hobbies</h4>
      <ul>
        {hobbies.map((hobby, index) => (
          <MakeHobbyListItem key={index} hobby={hobby} />
        ))}
      </ul>
    </div>
  );
  // You must use this heading for this component
}

export default HobbyList;
