import React from "react";
import { observer } from "mobx-react-lite";
import { PieChart, Pie, Tooltip } from "recharts";
import ReceivedDataFromTheServer from "./ReceivedDataFromTheServer";

const PieChartForBord = observer(() => {

    let arrayWithCryptoCurrency = ReceivedDataFromTheServer()
    let CurrencyLessThan10AndMoreThan50 = arrayWithCryptoCurrency.filter(i => i.market_data.current_price.usd >= 10 && i.market_data.current_price.usd < 50 )
    let CurrencyLessThan50AndMoreThan100 = arrayWithCryptoCurrency.filter(i => i.market_data.current_price.usd >= 50 && i.market_data.current_price.usd < 100 )
    let CurrencyLessThan100AndMoreThan1000 = arrayWithCryptoCurrency.filter(i => i.market_data.current_price.usd >= 100 && i.market_data.current_price.usd < 1000 )
    let CurrencyOver1000 = arrayWithCryptoCurrency.filter(i => i.market_data.current_price.usd >= 1000)

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return(
                <div className="custom-tooltip">
                    <img className="img" src={payload[0].payload.image.small} alt="cryptocurrencyImg"/>
                    <p className="label">{`${payload[0].payload.name} : ${payload[0].value}$`}</p>
                </div>
            );
        };
        return null;
    };
    
    return (
        <div className="pieCharts">
            <div>
                <p className="pFromChart">Cryptocurrency costing from $10 to $50</p>
                <PieChart width={300} height={300} className="PieChart">
                    <Pie
                        dataKey="market_data.current_price.usd"
                        isAnimationActive={false}
                        data={CurrencyLessThan10AndMoreThan50}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#00ddff"
                        label
                    />
                    <Pie dataKey="market_data.current_price.usd" data={CurrencyLessThan10AndMoreThan50} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#00ddff" />
                    <Tooltip content={<CustomTooltip />}/>
                </PieChart>
            </div>
            <div>
                <p className="pFromChart">Cryptocurrency costing from $50 to $100</p>
                <PieChart width={300} height={300} className="PieChart">
                    <Pie
                        dataKey="market_data.current_price.usd"
                        isAnimationActive={false}
                        data={CurrencyLessThan50AndMoreThan100}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#00ddff"
                        label
                    />
                    <Pie dataKey="market_data.current_price.usd" data={CurrencyLessThan10AndMoreThan50} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#00ddff" />
                    <Tooltip content={<CustomTooltip />}/>
                </PieChart>
            </div>
            <div>
                <p className="pFromChart">Cryptocurrency costing from $100 to $1000</p>
                <PieChart width={300} height={300} className="PieChart">
                    <Pie
                        dataKey="market_data.current_price.usd"
                        isAnimationActive={false}
                        data={CurrencyLessThan100AndMoreThan1000}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#00ddff"
                        label
                    />
                    <Pie dataKey="market_data.current_price.usd" data={CurrencyLessThan100AndMoreThan1000} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#00ddff" />
                    <Tooltip content={<CustomTooltip />}/>
                </PieChart>
            </div>
            <div>
            <p className="pFromChart">Cryptocurrency over $1000</p>
                <PieChart width={300} height={300} className="PieChart">
                    <Pie
                        dataKey="market_data.current_price.usd"
                        isAnimationActive={false}
                        data={CurrencyOver1000}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#00ddff"
                        label
                    />
                    <Pie dataKey="market_data.current_price.usd" data={CurrencyLessThan100AndMoreThan1000} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#00ddff" />
                    <Tooltip content={<CustomTooltip />}/>
                </PieChart>
            </div>         
        </div>
    ); 
});

export default PieChartForBord;