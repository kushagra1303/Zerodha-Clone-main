import React,{useContext, useState} from "react";
import {Tooltip,Grow} from "@mui/material";
import { watchlist} from "../data/data";

import {BarChartOutlined, KeyboardArrowDown,KeyboardArrowUp, MoreHoriz} from "@mui/icons-material"
import GeneralContext from "./GeneralContext";
import { DoughnutChart } from "./DoughnoutChart";
import { useNavigate } from "react-router-dom";

const WatchList = () => {
  const labels = watchlist.map((subArr) => {
    return subArr.name;
  })
  const data = {
    labels,
    datasets: [
      {
        label: 'Price',
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          'rgba(255, 99, 132, 0.4)',
          'rgba(54, 162, 235, 0.4)',
          'rgba(255, 206, 86, 0.4)',
          'rgba(75, 192, 192, 0.4)',
          'rgba(153, 102, 255, 0.4)',
          'rgba(255, 159, 64, 0.4)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search   eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock,index) => {
          return <WatchListItesm stock={stock} key={index} />
        })}
      </ul>
      <DoughnutChart data={data} />
    </div>
  );
};

export default WatchList;

const WatchListItesm = ({stock}) => {
  const [showWatchListAction,setWatchListAction] = useState(false);
  const handleMouseEnter = (e) => {
    setWatchListAction(true);
  }
  const handleMouseLeave = (e) => {
    setWatchListAction(false);
  }
  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
      <div className="item">
        <p style={{width:"59%"}} className= {stock.isDown ? "down" : "up" }> {stock.name} </p>
        <div className="item-info" >
          <span className="percent">
            {stock.percent}
          </span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ):
          <KeyboardArrowUp className="up" />
          }
        </div>
        <span className="price">
            {stock.price}
          </span>
      </div>
      {showWatchListAction && <WatchListActions uid={stock.name}  />}
    </li>
  )
}

const WatchListActions = ({uid}) => {
  const navigate = useNavigate();
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };
  const handleSellClick = () => {
    generalContext.openSellWindow(uid);
  };
  return (
    <span className="actions" >
      <span style={{display:"flex"}} >
        <Tooltip onClick={handleBuyClick}
        title="Buy (B)" placement="top" arrow TransitionComponent={Grow} >
          <button className="buy" > Buy </button>
        </Tooltip>
        <Tooltip onClick={handleSellClick}
        title="Sell (S)" placement="top" arrow TransitionComponent={Grow} >
          <button className="sell" > Sell </button>
        </Tooltip>
        <Tooltip onClick={() => {
          navigate("/holdings")
        }} title="Analytics (A)" placement="top" arrow TransitionComponent={Grow} >
        <button className="action" ><BarChartOutlined className="icon" /></button>
        </Tooltip>
        <Tooltip title="More (M)" placement="top" arrow TransitionComponent={Grow} >
          <button className="action" > <MoreHoriz /> </button>
        </Tooltip>
      </span>
    </span>
  )
}
