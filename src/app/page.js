'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [assets, setAssets] = useState([]);
  const [amount1, setAmount1] = useState('');
  const [amount2, setAmount2] = useState('');

  const coins = ['BTC', 'BNB', 'ETH', 'USDT'];
  const [fromCoin, setFromCoin] = useState('BTC');
  const [toCoin, setToCoin] = useState('BNB');

  useEffect(() => {
    async function fetchAssets() {
      try {
        const response = await fetch('/api/assets');
        const data = await response.json();
        setAssets(data);
      } catch (error) {
        console.error('Failed to fetch assets:', error);
      }
    }
    fetchAssets();
  }, []);

  function formatPrice(price) {
    return price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  function formatChange(value, isThour) {
    if (value > 0) {
      return isThour ? `+${value.toFixed(2)}%` : `+$${value.toFixed(2)}`;
    } else if (value < 0) {
      return isThour ? `${value.toFixed(2)}%` : `-$${Math.abs(value).toFixed(2)}`;
    } else {
      return isThour ? '0.00%' : '$0.00';
    }
  }

  return (
    <div className="">
      <div className="flex items-center justify-center pt-12">
        <div className="text-center">
          <p className="font-roboto text-white font-normal text-6xl">Easy send and Request</p>
          <p className="font-roboto text-white font-normal text-6xl">Crypto</p>
        </div>
      </div>

      <div className="flex items-center justify-center pt-10">
        <div className="text-center">
          <p className="font-roboto text-white text-lg">Bring blockchain to the people. Solana supports experiences</p>
          <p className="font-roboto text-white text-lg">for power users, new consumers, and everyone in between.</p>
        </div>
      </div>

      <div className="pt-20 flex items-center justify-center">
        <div
          className="relative backdrop-blur-2xl bg-opacity-50 rounded-lg overflow-hidden border border-gray-400 w-full max-w-4xl"
          style={{ maxWidth: '1180px' }}>
          <div className="container mx-auto p-4 bg-opacity-75 pt-12">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-opacity-75 text-customZinc">
                <thead className="bg-opacity-75 text-lg font-roboto  text-customZinc border-b border-gray-600">
                  <tr>
                    <th className="py-2 px-4 text-left">ASSETS</th>
                    <th className="py-2 px-4 text-left">LAST TRADE</th>
                    <th className="py-2 px-4 text-left">24H %</th>
                    <th className="py-2 px-4 text-left">24H CHANGE</th>
                    <th className="py-2 px-4 text-left text-blue-500">MORE</th>
                  </tr>
                </thead>
                <tbody className="">
                  {assets.map((asset) => {
                    const [symbolBase, symbolQuote] = asset.symbol.split('/');
                    return (
                      <tr key={asset.id} className="bg-opacity-75">
                        <td className="py-2 px-4 flex items-center pt-5">
                          <div className="overflow-hidden w-14 h-14 mr-2 rounded-md ">
                            <img src={asset.imageUrl} alt={asset.symbol} className="w-full h-full object-cover " />
                          </div>
                          <span className="text-white text-lg">{symbolBase}/</span>
                          <span className="text-gray-500 text-lg">{symbolQuote}</span>
                        </td>
                        <td className="text-lg">${formatPrice(asset.price)}</td>
                        <td
                          className={`py-2 px-4 text-lg ${asset.thour === 0 ? 'text-gray-500' : asset.thour > 0 ? 'text-green-500' : 'text-red-500'}`}>
                          {formatChange(asset.thour, true)}
                        </td>
                        <td
                          className={`py-2 px-4 text-lg ${asset.hour === 0 ? 'text-gray-500' : asset.hour > 0 ? 'text-green-500' : 'text-red-500'}`}>
                          {formatChange(asset.hour, false)}
                        </td>
                        <td className="py-2 px-4">
                          <button className="bg-green-500 text-white py-1 px-2 rounded">Trade</button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="flex pb-20 items-center justify-center min-h-screen bg-black text-white">
  <div className="w-full max-w-[1179px] p-6 bg-black rounded-lg shadow-lg border border-ash">
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-bold">SWAP TOKENS</h1>
      <img src="/set.png" alt="set Logo" />
    </div>

    <div className="flex items-center justify-center p-4 bg-customAsh rounded-lg">
      <div className="flex  flex-col items-start space-y-2 mr-4">
        <div className="flex items-center space-x-4">
          <input
            type="number"
            className="w-24 p-2 text-xl bg-transparent border-b-2 border-gray-700 focus:outline-none"
            placeholder="0.00"
          />
          <select
            className="bg-black border-none text-white w-[94px] h-[37px]"
            value={fromCoin}
            onChange={(e) => setFromCoin(e.target.value)}
          >
            {coins.map((coin) => (
              <option key={coin} value={coin}>{coin}</option>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-between w-full">
          <p className="text-sm text-gray-500">$0.00</p>
          <p className="text-sm">Balance: <span className="text-blue-500">24,240</span></p>
        </div>
      </div>

      <img src="/icon.png" alt="Swap" className="w-6 h-6 mx-4" />

      <div className="flex flex-col items-start space-y-2 ml-4">
        <div className="flex items-center space-x-4">
          <input
            type="number"
            className="w-24 p-2 text-xl bg-transparent border-b-2 border-gray-700 focus:outline-none"
            placeholder="0.00"
          />
          <select
            className="bg-black border-none text-white w-[94px] h-[37px] ml-60"
            value={toCoin}
            onChange={(e) => setToCoin(e.target.value)}
          >
            {coins.map((coin) => (
              <option key={coin} value={coin}>{coin}</option>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-between w-full">
          <p className="text-sm text-gray-500">$0.00</p>
          <p className="text-sm">Balance: <span className="text-blue-500">63,790</span></p>
        </div>
      </div>

    </div>

    <button className="block mx-auto w-[195px] py-2 mt-6 text-lg font-semibold text-center text-white bg-purple-600 rounded-lg hover:bg-purple-500">
      SWAP TOKENS
    </button>

    <div className="flex flex-col justify-between mt-4 text-sm text-gray-500">
      <p className="mb-2">1 BTC = 32.4039 ETH</p>
      <a href="#" className="text-blue-500 hover:underline">Free exchange</a>
    </div>

    <p className="mt-2 text-right text-gray-500">Updates in 4s</p>
  </div>
     </div>


    </div>
  );
}
