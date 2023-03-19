import { useState } from 'react'
import './App.css'

function App() {

  const makeQuery = () => {
    let wait_until = "network_idle";
    let response_type = "json";
    let fail_on_status = "400%2C404%2C500-511";
    let url_starter = "https://";
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
    }
    let random = getRandomIntInclusive(0, 10000);
    let fullURL = url_starter + inputs.url;
    let access  ="live_dTInATzYCb1o75sVugm74LblSYxSjr0WaspyPa4lgX2zKma5C9MLev1pDxKSCYLs";

    let query = `https://api.thedogapi.com/v1/images/search`;

    callAPI(query).catch(console.error);
  }

  const [currentImage, setCurrentImage] = useState(null);

  const callAPI = async (query) => {
    const response = await fetch(query);
    const json = await response.json();
    if (json.url == null)
      alert("Oops! Something went wrong with that query, let's try again!")
    else {
      setCurrentImage(json.url);
      setPrevImages((images) => [...images, json.url]);
      reset();
    }
  }

  return (
    <div className="whole-page">
      <h1>Veni Vici!</h1>
    </div>
  )
}

export default App
