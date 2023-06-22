import "./reset.css";
import "./App.css";

import Header from "./Components/Header";
import { useState } from "react";

const App = () => {
  const [result, setResult] = useState("0.00");
  const [error, setError] = useState("");
  const handleOnSubmit = (event) => {
    event.preventDefault();
    setError("");
    const currency = event.target.chooseCurrency.value;
    const amount = event.target.amountValue.value;

    if (amount <= 0) {
      setError("Podaj poprawne dane");
      return;
    }

    fetch(`http://api.nbp.pl/api/exchangerates/rates/A/${currency}`)
      .then((response) => response.json())
      .then((data) => {
        const rates = data.rates?.[0]?.mid;
        if (rates) {
          currencyExchange(rates, amount);
        } else {
          setError("Wystąpił nieoczekiwany błąd");
        }
      })
      .catch(() => setError("Wystąpił problem z serwerem"));
  };

  function currencyExchange(currency, amount) {
    setResult((amount * currency).toFixed(2));
  }

  return (
    <>
      <Header />
      <div className="container">
        <form onSubmit={handleOnSubmit}>
          <div className="wrapper">
            <label htmlFor="amountValue">Kwota</label>
            <input
              name="amountValue"
              className="amount-value"
              id="amountValue"
              type="number"
              placeholder="Wprowadź kwotę"
            />
          </div>
          <div className="wrapper">
            <select
              name="chooseCurrency"
              id="chooseCurrency"
              className="choose-currency"
            >
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
              <option value="CHF">CHF</option>
            </select>
          </div>
          <button className="count-result-btn" id="countResultBtn">
            Przelicz
          </button>
          <span className="result-text">TO</span>
          <span className="result-text" id="amountConverted">
            &nbsp;{result}&nbsp;
          </span>
          <span className="result-text">PLN</span>
        </form>
        {error && <div className="error">{error}</div>}
      </div>
    </>
  );
};

export default App;
