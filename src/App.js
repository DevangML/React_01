import './App.css';
import Data from '../src/Data.json'
import { useState } from 'react'

function App() {
  const [search, setsearch] = useState('');
  return (
    <div className="App">
      <div className="searchc">
        <input type="text" placeholder="Search..." onChange={event => { setsearch(event.target.value) }} />
        <br />
        <br/>
        <br/>
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
        }
        else if (val.name.toLowerCase().includes(search.toLowerCase())) {
          return val
        }
      }).map((val, key) => {
        return (
          <div className="user" key={key}>
            <div className="card">
              <img className="crd" src= {val.image} />
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

function Card(props) {
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} className="iimage" />
        <h2 className="ttitle">{props.title}</h2>
        <p className="ddescription">{props.description}</p>
      </div>
      <button className="bbtn">View Recipe</button>
    </div>
  );
}


export default App;
