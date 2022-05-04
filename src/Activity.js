import React from "react";
import "./Activity.css";

// function Activity(props) {
//   return (
//     <tr key={props.key}>
//       <td className="time">{props.time}</td>
//       <td className="description">{props.description}</td>
//     </tr>
//   );
// }

//or

function Activity({ key, time, description }) {
  return (
    <tr key={key}>
      <td className="time">{time}</td>
      <td className="description">{description}</td>
    </tr>
  );
}

export default Activity;
