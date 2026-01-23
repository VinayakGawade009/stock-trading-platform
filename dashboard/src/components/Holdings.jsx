import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

// import { holdings } from "../data/data";

import GeneralContext from "./GeneralContext";

const Holdings = () => {
    const [allHoldings, setAllHoldings] = useState([]);
    const [portfolioSummary, setPortfolioSummary] = useState({
        totalInvestment: 0,
        currentValue: 0,
        totalPL: 0,
        pnlPercent: 0
    });

    const { refreshCount } = useContext(GeneralContext);

    useEffect(() => {
        axios.get("http://localhost:3002/allHoldings", { withCredentials: true }).then((res) => {
            console.log(res.data);
            setAllHoldings(res.data);

            // Calculate totals dynamically from the fetched data
            let investment = 0;
            let currVal = 0;

            res.data.forEach(stock => {
                investment += stock.avg * stock.qty;
                currVal += stock.price * stock.qty;
            });

            setPortfolioSummary({
                totalInvestment: investment,
                currentValue: currVal,
                totalPL: currVal - investment,
                pnlPercent: investment === 0 ? 0 : ((currVal - investment) / investment) * 100
            });

        }).catch((err) => {
            console.error("Error fetching holdings:", err);
        });
    }, [refreshCount]); // refreshCount added to dependency array


    const labels = allHoldings.map((subArray) => subArray["name"]);

    const data = {
        labels,
        datasets: [
            {
                label: "Stock Price",
                data: allHoldings.map((stock) => stock.price),
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
        ],
    };

    return (
        <>
            {/* dynamic length */}
            <h3 className="title">Holdings ({allHoldings.length})</h3>

            <div className="order-table">
                <table>
                    <thead>
                        <tr>
                            <th>Instrument</th>
                            <th>Qty.</th>
                            <th>Avg. cost</th>
                            <th>LTP</th>
                            <th>Cur. val</th>
                            <th>P&L</th>
                            <th>Net chg.</th>
                            <th>Day chg.</th>
                        </tr>
                    </thead>

                    <tbody>
                        {allHoldings.map((stock, index) => {
                            const curValue = stock.price * stock.qty;
                            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
                            const profClass = isProfit ? "profit" : "loss";
                            const dayClass = stock.day >= 0 ? "profit" : "loss";

                            return (
                                <tr key={index}>
                                    <td>{stock.name}</td>
                                    <td>{stock.qty}</td>
                                    <td>{stock.avg.toFixed(2)}</td>
                                    <td>{stock.price.toFixed(2)}</td>
                                    <td>{curValue.toFixed(2)}</td>
                                    <td className={profClass}>
                                        {(curValue - stock.avg * stock.qty).toFixed(2)}
                                    </td>
                                    <td className={profClass}>
                                        {stock.net > 0 ? "+": ""}{stock.net.toFixed(2)}%
                                    </td>
                                    <td className={dayClass}>
                                        {stock.day > 0 ? "+" : ""}{stock.day.toFixed(2)}%
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <div className="row">
                <div className="col">
                    <h5>
                        {portfolioSummary.totalInvestment.toFixed(2)}
                    </h5>
                    <p>Total investment</p>
                </div>
                <div className="col">
                    <h5>
                        {portfolioSummary.currentValue.toFixed(2)}
                    </h5>
                    <p>Current value</p>
                </div>
                <div className="col">
                    <h5 className={portfolioSummary.totalPL >= 0 ? "profit" : "loss"}>
                        {portfolioSummary.totalPL.toFixed(2)} ({portfolioSummary.pnlPercent.toFixed(2)}%)
                    </h5>
                    <p>P&L</p>
                </div>
            </div>
            <VerticalGraph data={data} />
        </>
    );
};

export default Holdings;
