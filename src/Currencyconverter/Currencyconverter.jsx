import React, { useState } from 'react';
import './Currencyconverter.css';

const currencyRates = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.76,
  INR: 82.75,
  AUD: 1.47,
};

function Currencyconverter() {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState(null);

  // Function to handle the conversion logic
  const handleConversion = () => {
    if (amount === '') {
      alert('Please enter an amount');
      return;
    }

    const conversionRate = currencyRates[toCurrency] / currencyRates[fromCurrency];
    const result = parseFloat(amount) * conversionRate;
    setConvertedAmount(result.toFixed(2)); // Round the result to 2 decimal places
  };

  return (
    <div className="converter-container">
      <h1 id="currency">Currency Converter</h1>

      <div className="input-section">
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </label>
      </div>

      <div className="currency-selection">
        <label>
          From Currency:
          <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
            {Object.keys(currencyRates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </label>

        <label>
          To Currency:
          <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
            {Object.keys(currencyRates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </label>
      </div>

      <button onClick={handleConversion}>Convert</button>

      {convertedAmount && (
        <div className="result-section">
          <h2>Converted Amount:</h2>
          <p>
            {amount} {fromCurrency} = {convertedAmount} {toCurrency}
          </p>
        </div>
      )}
    </div>
  );
}


export default Currencyconverter;