import React from "react";
import { observer } from "mobx-react-lite";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import ReceivedDataFromTheServer from "./ReceivedDataFromTheServer";

const AreaChartForBord = observer(() => {
    
    let arrayWithCryptoCurrency = ReceivedDataFromTheServer()
    let arrayWithCurrencyLessThenHalfOne = arrayWithCryptoCurrency.filter(i => i.market_data.current_price.usd < 1)
    let CurrencyLessThan1AndMoreThan10 = arrayWithCryptoCurrency.filter(i => i.market_data.current_price.usd >= 1 && i.market_data.current_price.usd < 10 )
    
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <img className="img" src={payload[0].payload.image.small} alt="cryptocurrencyImg"/>
                    <p className="label">{`${payload[0].payload.name} : ${payload[0].value}$`}</p>
                </div>
            );
        };
        return null;
    };
    
    return(
        <div className="AreaChart">
            <div>
                <p className="pFromChart">Cryptocurrency worth up to $1</p>
                <AreaChart
                    width={500}
                    height={200}
                    data={arrayWithCurrencyLessThenHalfOne}
                    syncId="anyId"
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />}/>
                    <Area type="monotone" dataKey="market_data.current_price.usd" stroke="#00ddff" fill="#00ddff" />
                </AreaChart>
            </div>
            <div>
                <p className="pFromChart">Cryptocurrency costing from $1 to $10</p>
                <AreaChart
                    width={500}
                    height={200}
                    data={CurrencyLessThan1AndMoreThan10}
                    syncId="anyId"
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />}/>
                    <Area type="monotone" dataKey="market_data.current_price.usd" stroke="#00ddff" fill="#00ddff" />
                </AreaChart>
            </div>         
        </div>
    );
});

export default AreaChartForBord;