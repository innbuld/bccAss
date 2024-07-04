import { useState } from 'react';

const coins = [
  { name: 'BTC', logo: '/btc.png' },
  { name: 'BNB', logo: '/bnb.png' },
  { name: 'ETH', logo: '/eth.png' },
  { name: 'USDT', logo: '/usdt.png' },
];

export default function SwapTokens() {
  const [fromCoin, setFromCoin] = useState('BTC');
  const [toCoin, setToCoin] = useState('BNB');

  return (
    <div className="flex pb-20 items-center justify-center min-h-screen bg-black text-white">
      <div className="w-full max-w-[1179px] p-6 bg-black rounded-lg shadow-lg border border-ash">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">SWAP TOKENS</h1>
          <img src="/set.png" alt="set Logo" />
        </div>

        <div className="flex items-center justify-between p-4 bg-customAsh rounded-lg">
          <div className="flex items-center w-full space-x-4">
            <div className="flex flex-col items-start w-1/3">
              <input
                type="number"
                className="w-full p-2 text-xl bg-transparent border-b-2 border-gray-700 focus:outline-none"
                placeholder="0.00"
              />
              <p className="text-sm text-gray-500">$0.00</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="flex items-center space-x-2">
                <select
                  className="bg-black border-none text-white"
                  value={fromCoin}
                  onChange={(e) => setFromCoin(e.target.value)}
                >
                  {coins.map((coin) => (
                    <option key={coin.name} value={coin.name}>
                      <div className="flex items-center space-x-2">
                        <img src={coin.logo} alt={coin.name} className="w-4 h-4" />
                        <span>{coin.name}</span>
                      </div>
                    </option>
                  ))}
                </select>
              </div>
              <p className="text-sm">Balance: <span className="text-blue-500">24,240</span></p>
            </div>
          </div>
          <div className="flex items-center justify-center p-2 bg-customAsh rounded-full">
            <img src="/icon.png" alt="Swap" className="w-6 h-6" />
          </div>
          <div className="flex items-center w-full space-x-4">
            <div className="flex flex-col items-start w-1/3">
              <input
                type="number"
                className="w-full p-2 text-xl bg-transparent border-b-2 border-gray-700 focus:outline-none"
                placeholder="0.00"
              />
              <p className="text-sm text-gray-500">$0.00</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="flex items-center space-x-2">
                <select
                  className="bg-black border-none text-white"
                  value={toCoin}
                  onChange={(e) => setToCoin(e.target.value)}
                >
                  {coins.map((coin) => (
                    <option key={coin.name} value={coin.name}>
                      <div className="flex items-center space-x-2">
                        <img src={coin.logo} alt={coin.name} className="w-4 h-4" />
                        <span>{coin.name}</span>
                      </div>
                    </option>
                  ))}
                </select>
              </div>
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
  );
}
