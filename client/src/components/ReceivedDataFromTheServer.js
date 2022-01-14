import {useEffect, useState} from "react";

export default function ReceivedDataFromTheServer() {

    const [cryptocurrency, setCryptocurrency] = useState([])
    let arrayOfCryptocurrency = []
    
    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins`)
            .then(response => response.json())
            .then(data => {
                setCryptocurrency(data)
            })
    }, []);

    if(cryptocurrency) {
        arrayOfCryptocurrency = Array.from(cryptocurrency)
    };

    return arrayOfCryptocurrency;
};