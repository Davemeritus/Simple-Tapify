import React from 'react';
import { binanceLogo, hamsterCoin } from './images';
import MineIcon from './icons/Mine';
import FriendsIcon from './icons/Friends';
import Coins from './icons/Coins';
import { NavbarProps } from './utils/types';

interface LayoutProps extends NavbarProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ currentPage, setCurrentPage, children }) => {
  return (
    <div className="bg-[#dfe6e9] flex flex-col items-center h-screen max-w-xl mx-auto">
      <div className="flex-grow w-full">
        {children}
      </div>
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl bg-[#6c5ce7] flex justify-around items-center z-50 rounded-3xl text-xs">
        <div className={`text-center w-1/5 m-1 p-2 rounded-2xl ${currentPage === 'home' ? 'active-icon' : 'inactive-icon'}`} onClick={() => setCurrentPage('home')}>
          <img src={binanceLogo} alt="Exchange" className="w-8 h-8 mx-auto" />
          <p className="mt-1">Exchange</p>
        </div>
        <div className={`text-center w-1/5 m-1 p-2 rounded-2xl ${currentPage === 'mine' ? 'active-icon' : 'inactive-icon'}`} onClick={() => setCurrentPage('mine')}>
          <MineIcon className="w-8 h-8 mx-auto" />
          <p className="mt-1">Mine</p>
        </div>
        <div className={`text-center w-1/5 m-1 p-2 rounded-2xl ${currentPage === 'friends' ? 'active-icon' : 'inactive-icon'}`} onClick={() => setCurrentPage('friends')}>
          <FriendsIcon className="w-8 h-8 mx-auto" />
          <p className="mt-1">Friends</p>
        </div>
        <div className={`text-center w-1/5 m-1 p-2 rounded-2xl ${currentPage === 'earn' ? 'active-icon' : 'inactive-icon'}`} onClick={() => setCurrentPage('earn')}>
          <Coins className="w-8 h-8 mx-auto" />
          <p className="mt-1">Earn</p>
        </div>
        <div className={`text-center w-1/5 m-1 p-2 rounded-2xl ${currentPage === 'airdrop' ? 'active-icon' : 'inactive-icon'}`} onClick={() => setCurrentPage('airdrop')}>
          <img src={hamsterCoin} alt="Airdrop" className="w-8 h-8 mx-auto" />
          <p className="mt-1">Airdrop</p>
        </div>
      </div>
    </div>
  );
};

export default Layout;
