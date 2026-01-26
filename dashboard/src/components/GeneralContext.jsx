import { useState, createContext, useEffect } from "react";
import axios from "axios";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  openSellWindow: (uid) => {},
  closeSellWindow: () => {},
  refreshCount: 0,
  triggerRefresh: () => {},
  user: null,
  holdings: [],
  orders: [],
  positions: [],
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [refreshCount, setRefreshCount] = useState(0);

  // Centralized Data State
  const [user, setUser] = useState(null);
  const [holdings, setHoldings] = useState([]);
  const [orders, setOrders] = useState([]);
  const [positions, setPositions] = useState([]);

  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  const handleOpenSellWindow = (uid) => {
    setSelectedStockUID(uid);
    setIsSellWindowOpen(true);
  };

  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
  };

  // --- DATA FETCHING LOGIC ---
  const fetchAllData = async () => {
    try {
      // Fetch everything in parallel for speed
      const [userRes, holdingsRes, ordersRes, positionsRes] = await Promise.all([
        axios.get("http://localhost:3002/auth/me", { withCredentials: true }),
        axios.get("http://localhost:3002/allHoldings", { withCredentials: true }),
        axios.get("http://localhost:3002/allOrders", { withCredentials: true }),
        axios.get("http://localhost:3002/allPositions", { withCredentials: true }),
      ]);

      if (userRes.data.success) {
        setUser(userRes.data.user);
      }
      setHoldings(holdingsRes.data);
      setOrders(ordersRes.data);
      setPositions(positionsRes.data);
      
    } catch (err) {
      console.error("Error fetching data in Context:", err);
    }
  };

  // Load data ONCE when app starts or when 'refreshCount' changes (e.g. after a trade)
  useEffect(() => {
    fetchAllData();
  }, [refreshCount]);

  const triggerRefresh = () => {
    console.log("1. Context: triggerRefresh called!");
    setRefreshCount(prev => prev + 1);
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,
        refreshCount,
        triggerRefresh,
        // Passing data down
        user,
        holdings,
        orders,
        positions,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
