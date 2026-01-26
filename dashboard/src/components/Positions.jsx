import { useState, useEffect, useContext } from "react";

// import { positions } from "../data/data";
// import axios from "axios";

import GeneralContext from "./GeneralContext";

const Positions = () => {

  // const [allPositions, setAllPositions] = useState([]);
  // const { refreshCount } = useContext(GeneralContext);

  const { positions } = useContext(GeneralContext);

  // useEffect(() => {
  //   axios.get("http://localhost:3002/allPositions", { withCredentials: true }).then((res) => {
  //     console.log(res.data);
  //     setAllPositions(res.data);
  //   }).catch((err) => {
  //     console.error("Error fetching positions:", err);
  //   });
  // }, [refreshCount]);

  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>

          <tbody>
            {positions.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.day >= 0 ? "profit" : "loss";

              return (
                <tr key={index}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={dayClass}>
                    {stock.day > 0 ? "+" : ""}{stock.day.toFixed(2)}%
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;
