import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const URL = `https://api.thedogapi.com/v1/images/search?api_key=live_dTInATzYCb1o75sVugm74LblSYxSjr0WaspyPa4lgX2zKma5C9MLev1pDxKSCYLs?has_breeds?include_breeds=true`;

  const [currentImage, setCurrentImage] = useState([]);
  const [currentWeight, setCurrentWeight] = useState([]);
  const [currentHeight, setCurrentHeight] = useState([]);
  const [currentName, setCurrentName] = useState([]);

  function apiCall() {
    fetch(URL).then((response) => response.json())
    .then((data) => {
      setCurrentImage(data[0]);
      setCurrentWeight(data[0].breeds.weight);
      setCurrentHeight(data[0].breeds.height);
      setCurrentName(data[0].breeds.name);
      console.log(currentImage);
    })
  }

  return (
    <div className="whole-page">
      <h1>Veni Vici!</h1>
      <h2>Weight: {currentWeight} Height: {currentHeight} Name: {currentName}</h2>
        <img className="screenshot" src={currentImage ? currentImage.url : ''} alt="No current image!" />
        <br></br>
        <button onClick={apiCall}>🔄Find a new dog!🔄</button>
    </div>
  )
}

export default App