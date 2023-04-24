import data from "./data.js";
import { useState } from "react";
const App = () => {
  const [people, setPeople] = useState(data);

  const clearAll = () => {
    setPeople([]);
  };

  return (
    <>
      <section className="container">
        <h2>{people.length} Birthdays Today</h2>
        {people.map((person) => {
          return (
            <article className="person" key={person.id}>
              <img className="img" src={person.image} alt="" />
              <div>
                <h3>{person.name}</h3>
                <p>{person.age} years</p>
              </div>
            </article>
          );
        })}
        <button className="btn btn-block" onClick={clearAll}>
          clear all
        </button>
      </section>
    </>
  );
};
export default App;
