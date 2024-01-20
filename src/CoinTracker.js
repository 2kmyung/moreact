import { useEffect, useState } from "react";

function CoinTracker() {

    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [money, setMoney] = useState(0);
    const [selection, setSelection] = useState({});

    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
            })
    }, []);

    return (
        <div>
            <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
            {loading ? (
                <strong>Loading...</strong>
            ) : (
                <div>
                    <select
                        onChange={(event) => (console.log(event.target.value))}
                    >
                        {coins.map((coin) => (
                            <option value={coin}>
                                {coin.name} ({coin.symbol})
                            </option>
                        ))}
                    </select>
                    <input
                        type="text"
                        placeholder="ShutUpAndGiveMeMoney"
                        onChange={(event) => (setMoney(event.target.value))}
                        value={money}
                    />
                    <h2>{money} USD for 10({selection === null ? "a" : selection.name})</h2>
                </div>
            )
            }

        </div>
    )
};

export default CoinTracker;
