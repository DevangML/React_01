import React from "react";

function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="card__body">
          <img src={props.img} className="iimage" />
          <h2 className="ttitle">{props.title}</h2>
          <p className="ddescription">{props.description}</p>
        </div>
        <button className="bbtn">View Recipe</button>
      </div>
    </div>
  );
}

export default Card;
