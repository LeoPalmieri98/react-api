import axios from 'axios'
import { useState, useEffect } from 'react'


function App() {

  const [actors, setActors] = useState([]);

  function mounted() {
    const apiUrl = "https://lanciweb.github.io/demo/api/actors/";
    axios.get(apiUrl).then((res) => {

      setActors(res.data);
      console.log(res.data);

    }).catch(error => {
      console.log("Ops,abbiamo un problema:", error.message);
    })
  }
  useEffect(mounted, []);
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Hollywood Stars</h1>

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
              {person.birth_year}
            </p>
            <p className="card-text">
              {person.nationality}
            </p>
            <p className="card-text">
              {person.biography
              }
            </p>
            <p className="card-text">
              {person.known_for

              }
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App

