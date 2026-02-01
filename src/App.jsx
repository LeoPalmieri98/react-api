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
    <div className="container mt-5 text-white">
      <h1 className="text-center mb-4 mt-4">Hollywood Stars</h1>
      <h2 className="ms-5">Attori:</h2>
      <div className="d-flex flex-wrap gap-3 justify-content-center mt-5">
        {actors.map((person, index) => (
          <div className="card card-size text-white bg-dark" key={index}>
            <img
              src={person.image}
              className="card-img-top img-size"
              alt={person.name}
            />
            <h5 className="card-text mt-3 ">
              {person.name}
            </h5>
            <p className="card-text ">
              {person.nationality} , {person.birth_year}
            </p>
            <p className="card-text ">
              {person.biography}
            </p>
            <ul className="card-text list-unstyled ">  Noto per:
              {person.known_for && person.known_for.map((film, i) => { return <li key={i}>{film},</li> })}
            </ul>
            <p className="card-text d-flex">
              Premi: {person.awards.join(", ")}
            </p>
          </div>
        ))}
      </div>

      <hr className='m-5' />

      <h2 className="ms-5">Attrici:</h2>
      <div className="d-flex flex-wrap gap-3 justify-content-center mt-5">
        {actresses.map((girl, index) => (
          <div className="card card-size bg-secondary" key={index}>
            <img
              src={girl.image}
              className="card-img-top img-size"
              alt={girl.name}
            />
            <h5 className="card-text mt-3">
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

