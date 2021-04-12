import './App.css';
import React,{useState} from "react"

function Rajeev() {
  const [blah, setBlah] = useState({
    name: "Rohan",
    age: 4
  });

const [numberOfSeconds,setNumberOfSeconds] = useState(0)
const [rajeev, setRajeev] = useState('Rajeev')

  async function wait(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }  

  async function getData () {
    await wait(2000);
    return {
      name: 'Rahul',
      age: 25
    };
  }

  async function doAThing() {
    if (rajeev === 'Rajeev') {
      setRajeev('Aaron');
    } else {
      setRajeev('Rajeev');
    }

    setNumberOfSeconds(1+numberOfSeconds)
    let data = await getData()

    setBlah(data)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{rajeev}</h1>
        <h2>{numberOfSeconds}</h2>
        <h1>{blah.name} is {blah.age} years old</h1>
        <p>
          Modify <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => doAThing()}>Do a thing</button>
      </header>
    </div>
  );
}

export default Rajeev;
