import React from "react";
import "./ActivityList.css";
import Activity from "./Activity.js";

function ActivityList({ activities }) {
  if (!activities.length) return null;
  return (
    <table>
      <tbody>
        {activities.map(({ time, description }, index) => (
          <Activity key={index} time={time} description={description} />
        ))}
      </tbody>
    </table>
  );
}

export default ActivityList;
