import axios from "axios";
import React, { useState, useEffect } from "react";
import { CoinList } from "../../config/api";
import { CryptoState } from "../../CryptoContext";

const ListCoins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const { currency } = CryptoState();

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));

    setCoins(data);
    setLoading(false);
  };

  console.log("coins: ", coins,loading);

  useEffect(() => {
    fetchCoins();
  }, [currency]);

  return <div>coins</div>;
};

export default ListCoins;
