import axios from 'axios'
import { useState, useEffect } from 'react'


function App() {

  const [actors, setActors] = useState([]);
  const [actresses, setActresses] = useState([]);
  function mounted() {
    const apiUrl = "https://lanciweb.github.io/demo/api/";
    const apiUrlactors = "actors/";
    const apiUrlactresses = "actresses/";

    axios.get(`${apiUrl}${apiUrlactors}`).then((res) => {

      setActors(res.data);
      console.log(res.data);

    }).catch(error => {
      console.log("Ops,abbiamo un problema:", error.message);
    })

    axios.get(`${apiUrl}${apiUrlactresses}`).then((res) => {

      setActresses(res.data);
      console.log(res.data);

    }).catch(error => {
      console.log("Ops,abbiamo un problema:", error.message);
    })


  }

  useEffect(mounted, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Hollywood Stars</h1>
      <h2>Attori:</h2>
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        {actors.map((person, index) => (
          <div className="card card-size" key={index}>
            <img
              src={person.image}
              className="card-img-top"
              alt={person.name}
            />
            <h5 className="card-text">
              {person.name}
            </h5>
            <p className="card-text">
              {person.nationality} , {person.birth_year}
            </p>
            <p className="card-text">
              {person.biography}
            </p>
            <ul className="card-text list-unstyled">  Noto per:
              {person.known_for && person.known_for.map((film, i) => { return <li key={i}>{film},</li> })}
            </ul>
            <p className="card-text d-flex">
              Premi: {person.awards.join(", ")}
            </p>
          </div>
        ))}
      </div>

      <hr />

      <h2>Attrici:</h2>
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        {actresses.map((girl, index) => (
          <div className="card card-size" key={index}>
            <img
              src={girl.image}
              className="card-img-top"
              alt={girl.name}
            />
            <h5 className="card-text">
              {girl.name}
            </h5>
            <p className="card-text">
              {girl.nationality} , {girl.birth_year}
            </p>
            <p className="card-text">
              {girl.biography}
            </p>
            <ul className="card-text list-unstyled">
              Noto per:
              {girl.most_famous_movies && girl.most_famous_movies.map((cine, i) => { return <li key={i}>{cine},</li> })}
            </ul>
            <p className="card-text">
              Premi: {girl.awards}
            </p>
          </div>
        ))}
      </div>


    </div>
  )
}

export default App
