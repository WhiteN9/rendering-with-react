import React from "react";
import "./Header.css";

function Header({ name, imageSrc, birthday }) {
  return (
    <header className="container">
      <div className="item">
        <img src={imageSrc} alt="small cat with blue eyes" />
      </div>
      <div className="item">
        <h1>{name}</h1>
        <h2>Birth: {birthday}</h2>
      </div>
    </header>
  );
}

export default Header;
