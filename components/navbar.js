import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-2  bg-opacity-70">
      <div className="text-xl font-bold text-white">BLOCKCHAIN</div>
      <div className="flex-1 flex justify-center space-x-8 text-white">
        <a href="#" className="hover:text-gray-400">Exchange</a>
        <a href="#" className="hover:text-gray-400">Last Transactions</a>
        <a href="#" className="hover:text-gray-400">Invite Friend</a>
        <a href="#" className="hover:text-gray-400">Notifications</a>
      </div>
      <div className="flex space-x-4">
        <button className="bg-black border-2 border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black">LOG IN</button>
        <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">SIGN UP</button>
      </div>
    </nav>
  );
};

export default Navbar;
