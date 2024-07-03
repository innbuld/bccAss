'use client';
import Image from 'next/image';
import next from 'next';
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

export default function Home() {
  const [prices, setPrices] = useState({});

  useEffect(() => {
    async function fetchPrices() {
      const responses = await Promise.all(
        assets.map((asset) => fetch(`https://api.example.com/price/${asset.id}`).then((response) => response.json())),
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
    <div className="">
      <div className="flex items-center justify-center pt-12 ">
        <div className=" text-center">
          <p className=" font-roboto text-white font-normal text-6xl"> Easy send and Request</p>
          <p className="font-roboto text-white font-normal text-6xl">Crypto</p>
        </div>
      </div>

      <div className="flex items-center justify-center pt-10">
        <div className="text-center">
          <p
            className=" font-roboto text-white text-lg
          ">
            {' '}
            Bring blockchain to the people. Solana supports experiences{' '}
          </p>
          <p className="font-roboto text-white text-lg"> for power users, new consumers, and everyone in between.</p>
        </div>
      </div>

      <div className="relative bg-customBlack bg-opacity-100 backdrop-blur-md rounded-lg overflow-hidden border border-gray-400">
        <div className="container mx-auto p-4">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-customBlack bg-opacity-100 ">
              <thead className=" bg-opacity-100 text-white border-b border-gray-600">
                <tr>
                  <th className="py-2">Asset</th>
                  <th className="py-2">Last Trade</th>
                  <th className="py-2">24H %</th>
                  <th className="py-2">24H Change</th>
                  <th className="py-2">Trade</th>
                </tr>
              </thead>
              <tbody>
                {assets.map((asset) => (
                  <tr key={asset.id} className="bg-customBlack bg-opacity-50 border-b border-gray-600">
                    <td className="py-2 px-4">{asset.name}</td>
                    <td className="py-2 px-4">{prices[asset.id] || 'Loading...'}</td>
                    <td className="py-2 px-4">-</td>
                    <td className="py-2 px-4">-</td>
                    <td className="py-2 px-4">
                      <button className="bg-green-500 text-white py-1 px-2 rounded">Trade</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
        </div>
      </div>
    </div>
  );
}
