import React, { useState } from 'react';

const currencies = [
  { code: 'USD', symbol: '$' },
  { code: 'EUR', symbol: '€' },
  { code: 'GBP', symbol: '£' },
];

const presetAmounts = [10, 25, 50, 100];

export default function DonationForm() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [amount, setAmount] = useState('25');
  const [customAmount, setCustomAmount] = useState(false);

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Make a Donation</h3>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Currency
        </label>
        <select 
          className="w-full p-3 border border-gray-300 rounded-lg"
          value={currency.code}
          onChange={(e) => setCurrency(currencies.find(c => c.code === e.target.value) || currencies[0])}
        >
          {currencies.map((c) => (
            <option key={c.code} value={c.code}>{c.code} ({c.symbol})</option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Amount
        </label>
        <div className="grid grid-cols-2 gap-3 mb-3">
          {presetAmounts.map((preset) => (
            <button
              key={preset}
              className={`p-3 rounded-lg border ${
                !customAmount && amount === preset.toString()
                  ? 'border-green-600 bg-green-50 text-green-600'
                  : 'border-gray-300 hover:border-green-600'
              }`}
              onClick={() => {
                setAmount(preset.toString());
                setCustomAmount(false);
              }}
            >
              {currency.symbol}{preset}
            </button>
          ))}
        </div>
        <div className="relative">
          <input
            type="number"
            className={`w-full p-3 border rounded-lg ${
              customAmount ? 'border-green-600' : 'border-gray-300'
            }`}
            placeholder="Custom amount"
            value={customAmount ? amount : ''}
            onChange={(e) => {
              setAmount(e.target.value);
              setCustomAmount(true);
            }}
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
            {currency.symbol}
          </span>
        </div>
      </div>

      <button className="w-full bg-green-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors">
        Donate {currency.symbol}{amount}
      </button>
    </div>
  );
}