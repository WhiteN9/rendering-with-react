import React from "react";
import "./Activity.css";

function Activity(props) {
  return (
    <tr key={props.index}>
      <td className="time">{props.time}</td>
      <td className="description">{props.description}</td>
    </tr>
  );
}

//or

// function Activity({ index, time, description }) {
//   return (
//     <tr key={index}>
//       <td className="time">{time}</td>
//       <td className="description">{description}</td>
//     </tr>
//   );
// }

export default Activity;
