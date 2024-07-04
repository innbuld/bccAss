'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [assets, setAssets] = useState([]);
  const [amount1, setAmount1] = useState('');
  const [amount2, setAmount2] = useState('');

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

      <div className=" pt-20 flex items-center justify-center">
        <div
          className="relative  backdrop-blur-2xl bg-opacity-50 rounded-lg overflow-hidden border border-gray-400 w-full max-w-4xl"
          style={{ maxWidth: '1180px' }}>
          <div className="container mx-auto p-4   bg-opacity-75 pt-12">
            <div className="overflow-x-auto">
              <table className="min-w-full  bg-opacity-75 text-customZinc">
                <thead className="  bg-opacity-75 font-roboto text-base text-customZinc border-b border-gray-600 ">
                  <tr>
                    <th className="py-2 px-4 text-left">ASSETS</th>

                    <th className="py-2 px-4 text-left">LAST TRADE</th>
                    <th className="py-2 px-4 text-left">24H %</th>
                    <th className="py-2 px-4 text-left">24H CHANGE</th>
                    <th className="py-2 px-4 text-left">MORE</th>
                  </tr>
                </thead>
                <tbody className="">
                  {assets.map((asset) => (
                    <tr key={asset.id} className="  bg-opacity-75">
                      <td className="py-2 px-4 flex items-center pt-6 ">
                        <div className="overflow-hidden w-12 h-12 mr-2 rounded-md">
                          <img src={asset.imageUrl} alt={asset.symbol} className="w-full h-full object-cover" />
                        </div>
                        {asset.symbol}
                      </td>
                      <td className="py-2 px-4">${asset.price}</td>
                      <td className="py-2 px-4">{asset.hour}</td>
                      <td className="py-2 px-4">{asset.thour}</td>
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
    </div>
  );
}
