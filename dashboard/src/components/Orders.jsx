import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import GeneralContext from "./GeneralContext";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const { refreshTrigger } = useContext(GeneralContext);

  useEffect(() => {
    axios.get("http://localhost:3002/allOrders", { withCredentials: true }).then((res) => {
      console.log(res.data);
      setAllOrders(res.data);
    }).catch((err) => {
      console.error("Error fetching orders:", err);
    });
  }, [refreshTrigger]);

  return (
    <div className="orders">
      {allOrders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to="/" className="btn">Get started</Link>
        </div>
      ) : (
        <>
          <h3 className="title">Orders ({allOrders.length})</h3>

          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Qty.</th>
                  <th>Price</th>
                  <th>Type</th>
                </tr>
              </thead>

              <tbody>
                {allOrders.map((stock, index) => (
                  <tr key={index}>
                    <td>{stock.name}</td>
                    <td>{stock.qty}</td>
                    <td>{stock.price?.toFixed(2)}</td>
                    <td className={stock.mode === "BUY" ? "buy" : "sell"}>{stock.mode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;
