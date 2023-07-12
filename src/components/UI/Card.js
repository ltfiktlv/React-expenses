import React from "react";
import "./Card.css";

function Card(props) {
  const classes = "container " + props.className; // bu sayede birden fazla class kullanılabilir.
  return (
    <div className={classes}>{props.children}</div> // bu sistemin çalışması icin gerekli komut.
  );
}

export default Card;
