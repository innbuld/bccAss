'use client';
import { useState, useEffect } from 'react';

const assets = [
  { id: 'BTC', name: 'Bitcoin', symbol: 'BTC/USD' },
  { id: 'ETH', name: 'Ethereum', symbol: 'ETH/USD' },
  { id: 'DOGE', name: 'Dogecoin', symbol: 'DOGE/USD' },
  { id: 'ALGO', name: 'Algorand', symbol: 'ALGO/USD' },
  { id: 'DOT', name: 'Polkadot', symbol: 'DOT/USD' },
  { id: 'UNI', name: 'Uniswap', symbol: 'UNI/USD' },
  { id: 'COMP', name: 'Compound', symbol: 'COMP/USD' },
];

export default function Dashboard() {
  const [prices, setPrices] = useState({});

  useEffect(() => {
    async function fetchPrices() {
      const responses = await Promise.all(
        assets.map(asset =>
          fetch(`https://api.example.com/price/${asset.id}`)
            .then(response => response.json())
        )
      );
      const newPrices = {};
      responses.forEach((data, index) => {
        newPrices[assets[index].id] = data.price;
      });
      setPrices(newPrices);
    }
    fetchPrices();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-customBlack pt-5">
          <thead className="bg-customBlack text-white border-b">
            <tr>
              <th className="py-2">Assets</th>
              <th className="py-2">Last Trade</th>
              <th className="py-2">24H %</th>
              <th className="py-2">24H Change</th>
              <th className="py-2">Trade</th>
            </tr>
          </thead>
          <tbody>
            {assets.map(asset => (
              <tr key={asset.id} className="bg-customBlack ">
                <td className="py-2 px-4">{asset.symbol}</td>
                <td className="py-2 px-4">{prices[asset.id] || 'Loading...'}</td>
                <td className="py-2 px-4">-</td>
                <td className="py-2 px-4">-</td>
                <td className="py-2 px-4">
                  <button className="bg-green-500 text-white py-1 px-2 rounded">
                    Trade
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl mb-4">Swap Tokens</h2>
        <div className="flex">
          <input className="border p-2 w-full mr-2" type="number" placeholder="0.00" />
          <select className="border p-2 mr-2">
            {assets.map(asset => (
              <option key={asset.id} value={asset.id}>{asset.id}</option>
            ))}
          </select>
          <span className="self-center">↔️</span>
          <select className="border p-2 ml-2">
            {assets.map(asset => (
              <option key={asset.id} value={asset.id}>{asset.id}</option>
            ))}
          </select>
          <input className="border p-2 w-full ml-2" type="number" placeholder="0.00" />
        </div>
        <button className="bg-purple-500 text-black py-2 px-4 rounded mt-4">Swap Tokens</button>
      </div>
    </div>
  );
}
