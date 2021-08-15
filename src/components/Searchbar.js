import React, { Component } from "react";
import Data from "../Data.json";
import Card from './Card'

class Searchbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      setsearch: "",
    };
  }

  render() {
    const { search, setsearch } = this.state;
    return (
      <div>
        <div className="searchc">
          <input
            type="text"
            placeholder="Search..."
            onChange={event => {
              setsearch(event.target.value);
            }}
          />
          <br />
          <br />
          <br />
        </div>
        <div className="crd-cont">
          {Data.filter((val) => {
            if (search == "") {
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
                  <img className="crd" src={val.image} alt="cards" />
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
}


export default Searchbar;
