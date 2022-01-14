import { observer } from "mobx-react-lite";
import React from "react";
import ReceivedDataFromTheServer from "./ReceivedDataFromTheServer";
import { Tooltip, BarChart, XAxis, YAxis, Legend, CartesianGrid, Bar } from "recharts";

const CryptocurrencyValueChart = observer(() => {

    let arrayWithCryptocurrency = ReceivedDataFromTheServer()

    setTimeout(() => {
        document.querySelector(".recharts-legend-wrapper").style.visibility = "hidden"
    }, 0)

    const lastUpdate = (dob) => {
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let d = new Date(dob);
        let year = d.getUTCFullYear();
        let month = months[d.getUTCMonth()];
        let day = d.getUTCDate();
        let time = " " + day + " " + month + ", " + year + " year";
        return time;
    };

    const CustomTooltip = ({ active, payload }) => {
        if(active && payload && payload.length) {
            return(
                <div className="custom-tooltip">
                    <img className="img" src={payload[0].payload.image.small} alt="cryptocurrencyImg"/>
                    <p className="label">{`${payload[0].payload.name} : ${payload[0].value}$`}</p>
                    <p className="desc">Last update:</p>
                    <p className="desc">{`${lastUpdate(payload[0].payload.last_updated)}`}</p>
                </div>
            );
        };
        return null;
    };

    return(
        <div className="ValueChart">
            <p className="pFromChart">Cryptocurrency prices</p>
            <BarChart
                width={1000}
                height={650}
                data={arrayWithCryptocurrency}
                margin={{
                    top: 5,
                    right: 30,
                    left: 30,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="symbol" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar dataKey="market_data.current_price.usd" barSize={15} fill="#00ddff" />
            </BarChart>
            <div className="usdDiv">
                <p className="usdPoint"></p>
                <p className="usd" >USD</p>
            </div>
        </div>
    );
});

export default CryptocurrencyValueChart;