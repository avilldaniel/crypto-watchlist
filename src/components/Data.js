import React, { useState, useEffect } from "react";
import axios from "axios";

const Data = ({ coin }) => {
  // Axios fetch here
  // IDs: ethereum, loopring, bitcoin, solana
  const [data, setData] = useState(null);
  const baseURL = `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`;

  useEffect(() => {
    axios.get(baseURL)
      .then((response) => {
        setData(response.data);
        // console.log(response.data);
        // console.log(data[coin]);
      });
  }, []); // hook will render only upon initial page load

  // if data fetch is unsuccessful, return null
  if (!data) return null;
  
  // console.log(data[coin].usd);
  const usd = data[coin].usd;
  // usd.toFixed(2); // will format number to USD

  return (
    <div>
      <h1>{coin[0].toUpperCase() + coin.substr(1).toLowerCase()}</h1>
      <p>${usd.toFixed(2)}</p>
    </div>
  );
};

export default Data;
