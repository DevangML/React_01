import './App.css';
import Data from '../src/Data.json'
import { useState } from 'react'

function App() {
  const [search, setsearch] = useState('')
  return (
    <div className="App">
      <div className="searchc">
        <input type="text" placeholder="Search..." onChange={event => { setsearch(event.target.value) }} />
        <br />
      </div>
      <div className="crd-cont">
      {Data.filter((val) => {
        if (search == "") {
          return (
            <div className="wrapper">
              <Card
                img="https://source.unsplash.com/random"
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
              <img className="crd" src="https://source.unsplash.com/random" />
              <p>{val.name}</p>
              <p>{val.email}</p>
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
        <img src={props.img} class="card__image" />
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
      </div>
      <button className="card__btn">View Recipe</button>
    </div>
  );
}

export default App;
