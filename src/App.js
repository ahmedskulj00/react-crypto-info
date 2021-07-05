import "./App.css";
import { React, useEffect, useState } from "react";
const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false";

function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCoins(data);
        console.log(data);
      });
  }, []);
  return <div className="App"></div>;
}

export default App;
