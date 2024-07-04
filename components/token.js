import React from 'react';

const TokenSwap = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="w-full max-w-[1179px] p-6 bg-gray-800 rounded-lg shadow-lg border border-ash">
        <h1 className="mb-6 text-2xl font-bold text-center">SWAP TOKENS</h1>
        <div className="flex items-center justify-between p-4 bg-gray-900 rounded-lg">
          <div className="flex items-center space-x-4">
            <div>
              <input 
                type="number"
                className="w-24 p-2 text-xl bg-transparent border-b-2 border-gray-700 focus:outline-none"
                placeholder="0.00"
              />
              <p className="text-sm text-gray-500">$0.00</p>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/btc-icon.png" alt="BTC" className="w-6 h-6" />
              <span>BTC</span>
            </div>
            <div>
              <p className="text-sm">Balance: <span className="text-blue-500">24,240</span></p>
            </div>
          </div>
          <div className="flex items-center justify-center p-2 bg-gray-700 rounded-full">
            <img src="/swap-icon.png" alt="Swap" className="w-6 h-6" />
          </div>
          <div className="flex items-center space-x-4">
            <div>
              <input 
                type="number"
                className="w-24 p-2 text-xl bg-transparent border-b-2 border-gray-700 focus:outline-none"
                placeholder="0.00"
              />
              <p className="text-sm text-gray-500">$0.00</p>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/bnb-icon.png" alt="BNB" className="w-6 h-6" />
              <span>BNB</span>
            </div>
            <div>
              <p className="text-sm">Balance: <span className="text-blue-500">63,790</span></p>
            </div>
          </div>
        </div>
        <button className="w-full py-2 mt-6 text-lg font-semibold text-center text-black bg-purple-600 rounded-lg hover:bg-purple-500">SWAP TOKENS</button>
        <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
          <p>1 BTC = 32.4039 ETH</p>
          <a href="#" className="text-blue-500 hover:underline">Free exchange</a>
        </div>
        <p className="mt-2 text-right text-gray-500">Updates in 4s</p>
      </div>
    </div>
  );
};

export default TokenSwap;
