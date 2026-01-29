import axios from 'axios'
import { useState } from 'react'


function App() {
  const apiUrl = "https://lanciweb.github.io/demo/api/actors/,https://lanciweb.github.io/demo/api/actresses/,"
  //const [count, setCount] = useState(0)
  axios.get(apiUrl).then((res) => {
    console.log(res);
  })

  return (
    <div><h1>Hello React API</h1></div>
  )
}

export default App