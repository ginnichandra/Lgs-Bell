import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  return (
      <div className={classes.card}>
        <div className={classes.container}>
          <div>
            <h4>
              <b>{props.title}</b>
            </h4>
            <p> {props.body}</p>
          </div>
        </div>
      </div>
  );
};

export default Card;
