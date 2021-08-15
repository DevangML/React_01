import React from "react";
import { useState } from "react";
import Card from './Card'
import Data from '../Data.json'

function Search() {
  const [search, setsearch] = useState("");
  return (
    <div>
      <div className="searchc">
        <input
          type="text"
          placeholder="Search..."
          onChange={(event) => {
            setsearch(event.target.value);
          }}
        />
        <br />
        <br />
        <br />
      </div>
      <div className="crd-cont">
        {Data.filter((val) => {
          if (search === "") {
            return (
              <div className="wrapper">
                <Card
                  img={val.image}
                  title={val.name}
                  description={val.website}
                />
              </div>
            );
          } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
            return val;
          }
        }).map((val, key) => {
          return (
            <div className="user" key={key}>
              <div className="card">
                <img className="crd" src={val.image} alt="images"/>
                <p>{val.name}</p>
                <p>{val.website}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Search;
