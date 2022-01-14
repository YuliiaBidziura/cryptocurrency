import "./App.css";
import CryptocurrencyValueСhart from "./components/CryptocurrencyValueChart";
import NavbarForApp from "./components/NavbarForApp";
import AreaChartForBord from "./components/AreaChartForBord";
import PieChartForBord from "./components/PieChartForBord";

const App = () => {
    return (
        <div className="App">
            <NavbarForApp />
            <div className="dashBoard">
                <CryptocurrencyValueСhart />
                <AreaChartForBord />
            </div>
            <div>
                <PieChartForBord />
            </div>
        </div>
    );
};

export default App;
