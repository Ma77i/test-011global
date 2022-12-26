import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import StocksList from "../components/Stocks/StocksList";
import { UserContext } from "../contexts/UserContext";


const StocksContainer = () => {
  const [stocks, setStocks] = useState([]);
  const { userData } = useContext(UserContext);
  const navigate = useNavigate()

  const getStocks = async () => {
    try {
      const res = await API.post("/GetStockPrices", { UserToken: userData });
      setStocks(res.data.Prices);
    } catch (error) {
      console.log("Endpoint Error", error);
    }
  };

  useEffect(() => {
    getStocks();

    setTimeout(() => {
      navigate("/");
    }, 2 * 60 * 1000);

    const interval = setInterval(() => {
      getStocks();
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="container mx-auto">
      <h2 className="text-2xl text-center tracking-widest font-bold">STOCKS</h2>
      <table className="border-collapse w-full">
        <thead className="uppercase text-center bg-dark">
          <tr>
            <th className="px-4 text-white">stocks</th>
            <th className="px-4 text-white">prices</th>
          </tr>
        </thead>
        <tbody>
          <StocksList items={stocks} />
        </tbody>
      </table>
    </div>
  );
};

export default StocksContainer;
