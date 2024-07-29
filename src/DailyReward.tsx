// import React from 'react';
// import { binanceLogo, dollarCoin, hamsterCoin } from './images';
// import Hamster from './icons/Hamster';

// interface DailyRewardProps {
//   setCurrentPage: (page: string) => void;
// }

// const DailyReward: React.FC<DailyRewardProps> = ({ setCurrentPage }) => {
//   const rewards = [
//     { day: 1, amount: 500 },
//     { day: 2, amount: 1000 },
//     { day: 3, amount: 2500 },
//     { day: 4, amount: 5000 },
//     { day: 5, amount: 7500 },
//     { day: 6, amount: 15000 },
//     { day: 7, amount: 25000 },
//     { day: 8, amount: 50000 },
//     { day: 9, amount: 100000 },
//     { day: 10, amount: 250000 },
//   ];

//   return (
//     <div className="bg-[#dfe6e9] flex justify-center">
//       <div className="w-full bg-[#dfe6e9] text-[#2d3436] h-screen font-bold flex flex-col max-w-xl">
//         <div className="px-4 z-10">
//           <div className="flex items-center space-x-2 pt-4">
//             <div className="p-1 rounded-lg bg-[#74b9ff]">
//               <Hamster size={24} className="text-[#2d3436]" />
//             </div>
//             <div>
//               <p className="text-sm">David (CEO)</p>
//             </div>
//           </div>
//           <div className="flex items-center justify-between space-x-4 mt-1">
//             <div className="flex items-center w-1/3">
//               <div className="w-full">
//                 <div className="flex justify-between">
//                   <p className="text-sm">Legendary</p>
//                   <p className="text-sm">7 <span className="text-[#74b9ff]">/ 10</span></p>
//                 </div>
//                 <div className="flex items-center mt-1 border-2 border-[#6c5ce7] rounded-full">
//                   <div className="w-full h-2 bg-[#6c5ce7]/[0.6] rounded-full">
//                     <div className="bg-[#6c5ce7] h-2 rounded-full" style={{ width: `75%` }}></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex items-center w-2/3 border-2 border-[#6c5ce7] rounded-full px-4 py-[2px] bg-[#6c5ce7]/[0.6] max-w-64">
//               <img src={binanceLogo} alt="Exchange" className="w-8 h-8" />
//               <div className="h-[32px] w-[2px] bg-[#6c5ce7] mx-2"></div>
//               <div className="flex-1 text-center">
//                 <p className="text-xs text-[#50e3c2] font-medium">Profit per hour</p>
//                 <div className="flex items-center justify-center space-x-1">
//                   <img src={hamsterCoin} alt="Dollar Coin" className="w-[18px] h-[18px]" />
//                   <p className="text-sm">+126.42K</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex-grow mt-4 bg-[#74b9ff] rounded-t-[48px] relative z-0">
//           <div className="absolute top-[2px] left-0 right-0 bottom-0 bg-[#dfe6e9] rounded-t-[46px]">
//             <div className="px-4 mt-6 flex justify-center">
//               <div className="bg-[#6c5ce7] rounded-lg px-4 py-2 w-full max-w-sm">
//                 <div className="flex items-center space-x-4">
//                   <img src={dollarCoin} alt="Dollar Coin" className="w-12 h-12" />
//                   <p className="text-sm">Get coins for logging into the game daily without skipping.</p>
//                 </div>
//               </div>
//             </div>

//             <div className="px-4 mt-4">
//               <div className="grid grid-cols-4 gap-4">
//                 {rewards.map((reward, index) => (
//                   <div key={index} className="bg-[#74b9ff] rounded-lg shadow-lg p-4">
//                     <div className="bg-white rounded-lg shadow-md p-4 mb-2 flex flex-col items-center">
//                       <p className="text-sm font-bold">Day {reward.day}</p>
//                       <img src={dollarCoin} alt="Dollar Coin" className="w-6 h-6 my-2" />
//                       <p className="text-sm">{reward.amount.toLocaleString()}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl bg-[#6c5ce7] flex justify-around items-center z-50 rounded-3xl text-xs">
//               <div className="text-center text-[#50e3c2] w-1/5 bg-[#6c5ce7] m-1 p-2 rounded-2xl" onClick={() => setCurrentPage('home')}>
//                 <img src={binanceLogo} alt="Exchange" className="w-8 h-8 mx-auto" />
//                 <p className="mt-1">Exchange</p>
//               </div>
//               <div className="text-center text-[#50e3c2] w-1/5">
//                 <p className="mt-1">Mine</p>
//               </div>
//               <div className="text-center text-[#50e3c2] w-1/5" onClick={() => setCurrentPage('friends')}>
//                 <p className="mt-1">Friends</p>
//               </div>
//               <div className="text-center text-[#50e3c2] w-1/5" onClick={() => setCurrentPage('earn')}>
//                 <p className="mt-1">Earn</p>
//               </div>
//               <div className="text-center text-[#50e3c2] w-1/5">
//                 <img src={hamsterCoin} alt="Airdrop" className="w-8 h-8 mx-auto" />
//                 <p className="mt-1">Airdrop</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DailyReward;

// import React from 'react';
// import { binanceLogo, dollarCoin, hamsterCoin } from './images';
// import Hamster from './icons/Hamster';

// interface DailyRewardProps {
//   setCurrentPage: (page: string) => void;
// }

// const DailyReward: React.FC<DailyRewardProps> = ({ setCurrentPage }) => {
//   const rewards = [
//     { day: 1, amount: 500 },
//     { day: 2, amount: 1000 },
//     { day: 3, amount: 2500 },
//     { day: 4, amount: 5000 },
//     { day: 5, amount: 7500 },
//     { day: 6, amount: 15000 },
//     { day: 7, amount: 25000 },
//     { day: 8, amount: 50000 },
//     { day: 9, amount: 100000 },
//     { day: 10, amount: 250000 },
//   ];

//   return (
//     <div className="bg-[#dfe6e9] flex justify-center">
//       <div className="w-full bg-[#dfe6e9] text-[#2d3436] h-screen font-bold flex flex-col max-w-xl">
//         <div className="px-4 z-10">
//           <div className="flex items-center space-x-2 pt-4">
//             <div className="p-1 rounded-lg bg-[#74b9ff]">
//               <Hamster size={24} className="text-[#2d3436]" />
//             </div>
//             <div>
//               <p className="text-sm">David (CEO)</p>
//             </div>
//           </div>
//           <div className="flex items-center justify-between space-x-4 mt-1">
//             <div className="flex items-center w-1/3">
//               <div className="w-full">
//                 <div className="flex justify-between">
//                   <p className="text-sm">Legendary</p>
//                   <p className="text-sm">7 <span className="text-[#74b9ff]">/ 10</span></p>
//                 </div>
//                 <div className="flex items-center mt-1 border-2 border-[#6c5ce7] rounded-full">
//                   <div className="w-full h-2 bg-[#6c5ce7]/[0.6] rounded-full">
//                     <div className="bg-[#6c5ce7] h-2 rounded-full" style={{ width: `75%` }}></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex items-center w-2/3 border-2 border-[#6c5ce7] rounded-full px-4 py-[2px] bg-[#6c5ce7]/[0.6] max-w-64">
//               <img src={binanceLogo} alt="Exchange" className="w-8 h-8" />
//               <div className="h-[32px] w-[2px] bg-[#6c5ce7] mx-2"></div>
//               <div className="flex-1 text-center">
//                 <p className="text-xs text-[#50e3c2] font-medium">Profit per hour</p>
//                 <div className="flex items-center justify-center space-x-1">
//                   <img src={hamsterCoin} alt="Dollar Coin" className="w-[18px] h-[18px]" />
//                   <p className="text-sm">+126.42K</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex-grow mt-4 bg-[#74b9ff] rounded-t-[48px] relative z-0">
//           <div className="absolute top-[2px] left-0 right-0 bottom-0 bg-[#dfe6e9] rounded-t-[46px]">
//             <div className="px-4 mt-6 flex justify-center">
//               <div className="bg-[#6c5ce7] rounded-lg px-4 py-2 w-full max-w-sm">
//                 <div className="flex items-center space-x-4">
//                   <img src={dollarCoin} alt="Dollar Coin" className="w-12 h-12" />
//                   <p className="text-sm">Get coins for logging into the game daily without skipping.</p>
//                 </div>
//               </div>
//             </div>

//             <div className="px-4 mt-4">
//               <div className="grid grid-cols-4 gap-2">
//                 {rewards.slice(0, 4).map((reward, index) => (
//                   <div key={index} className="bg-[#74b9ff] rounded-lg shadow-lg p-2">
//                     <div className="bg-white rounded-lg shadow-md p-2 mb-2 flex flex-col items-center">
//                       <p className="text-xs font-bold">Day {reward.day}</p>
//                       <img src={dollarCoin} alt="Dollar Coin" className="w-4 h-4 my-1" />
//                       <p className="text-xs">{reward.amount.toLocaleString()}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="grid grid-cols-4 gap-2 mt-2">
//                 {rewards.slice(4, 8).map((reward, index) => (
//                   <div key={index} className="bg-[#74b9ff] rounded-lg shadow-lg p-2">
//                     <div className="bg-white rounded-lg shadow-md p-2 mb-2 flex flex-col items-center">
//                       <p className="text-xs font-bold">Day {reward.day}</p>
//                       <img src={dollarCoin} alt="Dollar Coin" className="w-4 h-4 my-1" />
//                       <p className="text-xs">{reward.amount.toLocaleString()}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="grid grid-cols-2 gap-2 mt-2">
//                 {rewards.slice(8).map((reward, index) => (
//                   <div key={index} className="bg-[#74b9ff] rounded-lg shadow-lg p-2">
//                     <div className="bg-white rounded-lg shadow-md p-2 mb-2 flex flex-col items-center">
//                       <p className="text-xs font-bold">Day {reward.day}</p>
//                       <img src={dollarCoin} alt="Dollar Coin" className="w-4 h-4 my-1" />
//                       <p className="text-xs">{reward.amount.toLocaleString()}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl bg-[#6c5ce7] flex justify-around items-center z-50 rounded-3xl text-xs">
//               <div className="text-center text-[#50e3c2] w-1/5 bg-[#6c5ce7] m-1 p-2 rounded-2xl" onClick={() => setCurrentPage('home')}>
//                 <img src={binanceLogo} alt="Exchange" className="w-8 h-8 mx-auto" />
//                 <p className="mt-1">Exchange</p>
//               </div>
//               <div className="text-center text-[#50e3c2] w-1/5">
//                 <p className="mt-1">Mine</p>
//               </div>
//               <div className="text-center text-[#50e3c2] w-1/5" onClick={() => setCurrentPage('friends')}>
//                 <p className="mt-1">Friends</p>
//               </div>
//               <div className="text-center text-[#50e3c2] w-1/5" onClick={() => setCurrentPage('earn')}>
//                 <p className="mt-1">Earn</p>
//               </div>
//               <div className="text-center text-[#50e3c2] w-1/5">
//                 <img src={hamsterCoin} alt="Airdrop" className="w-8 h-8 mx-auto" />
//                 <p className="mt-1">Airdrop</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DailyReward;


// import React from 'react';
// import { binanceLogo, dollarCoin, hamsterCoin } from './images';
// import Hamster from './icons/Hamster';

// interface DailyRewardProps {
//   setCurrentPage: (page: string) => void;
// }

// const DailyReward: React.FC<DailyRewardProps> = ({ setCurrentPage }) => {
//   const rewards = [
//     { day: 1, amount: 500 },
//     { day: 2, amount: 1000 },
//     { day: 3, amount: 2500 },
//     { day: 4, amount: 5000 },
//     { day: 5, amount: 7500 },
//     { day: 6, amount: 15000 },
//     { day: 7, amount: 25000 },
//     { day: 8, amount: 50000 },
//     { day: 9, amount: 100000 },
//     { day: 10, amount: 250000 },
//   ];

//   return (
//     <div className="bg-[#dfe6e9] flex justify-center">
//       <div className="w-full bg-[#dfe6e9] text-[#2d3436] h-screen font-bold flex flex-col max-w-xl">
//         <div className="px-4 z-10">
//           <div className="flex items-center space-x-2 pt-4">
//             <div className="p-1 rounded-lg bg-[#74b9ff]">
//               <Hamster size={24} className="text-[#2d3436]" />
//             </div>
//             <div>
//               <p className="text-sm">David (CEO)</p>
//             </div>
//           </div>
//           <div className="flex items-center justify-between space-x-4 mt-1">
//             <div className="flex items-center w-1/3">
//               <div className="w-full">
//                 <div className="flex justify-between">
//                   <p className="text-sm">Legendary</p>
//                   <p className="text-sm">7 <span className="text-[#74b9ff]">/ 10</span></p>
//                 </div>
//                 <div className="flex items-center mt-1 border-2 border-[#6c5ce7] rounded-full">
//                   <div className="w-full h-2 bg-[#6c5ce7]/[0.6] rounded-full">
//                     <div className="bg-[#6c5ce7] h-2 rounded-full" style={{ width: `75%` }}></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex items-center w-2/3 border-2 border-[#6c5ce7] rounded-full px-4 py-[2px] bg-[#6c5ce7]/[0.6] max-w-64">
//               <img src={binanceLogo} alt="Exchange" className="w-8 h-8" />
//               <div className="h-[32px] w-[2px] bg-[#6c5ce7] mx-2"></div>
//               <div className="flex-1 text-center">
//                 <p className="text-xs text-[#50e3c2] font-medium">Profit per hour</p>
//                 <div className="flex items-center justify-center space-x-1">
//                   <img src={hamsterCoin} alt="Dollar Coin" className="w-[18px] h-[18px]" />
//                   <p className="text-sm">+126.42K</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex-grow mt-4 bg-[#74b9ff] rounded-t-[48px] relative z-0">
//           <div className="absolute top-[2px] left-0 right-0 bottom-0 bg-[#dfe6e9] rounded-t-[46px]">
//             <div className="px-4 mt-6 flex justify-center">
//               <div className="bg-[#6c5ce7] rounded-lg px-4 py-2 w-full max-w-sm">
//                 <div className="flex items-center space-x-4">
//                   <img src={dollarCoin} alt="Dollar Coin" className="w-12 h-12" />
//                   <p className="text-sm">Get coins for logging into the game daily without skipping.</p>
//                 </div>
//               </div>
//             </div>

//             <div className="px-4 mt-4">
//               <div className="grid grid-cols-4 gap-2">
//                 {rewards.slice(0, 4).map((reward, index) => (
//                   <div key={index} className="bg-[#74b9ff] rounded-lg shadow-lg p-2">
//                     <div className="bg-white rounded-lg shadow-md p-2 mb-2 flex flex-col items-center">
//                       <p className="text-xs font-bold">Day {reward.day}</p>
//                       <img src={dollarCoin} alt="Dollar Coin" className="w-4 h-4 my-1" />
//                       <p className="text-xs">{reward.amount.toLocaleString()}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="grid grid-cols-4 gap-2 mt-2">
//                 {rewards.slice(4, 8).map((reward, index) => (
//                   <div key={index} className="bg-[#74b9ff] rounded-lg shadow-lg p-2">
//                     <div className="bg-white rounded-lg shadow-md p-2 mb-2 flex flex-col items-center">
//                       <p className="text-xs font-bold">Day {reward.day}</p>
//                       <img src={dollarCoin} alt="Dollar Coin" className="w-4 h-4 my-1" />
//                       <p className="text-xs">{reward.amount.toLocaleString()}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="grid grid-cols-2 gap-2 mt-2">
//                 {rewards.slice(8).map((reward, index) => (
//                   <div key={index} className="bg-[#74b9ff] rounded-lg shadow-lg p-2">
//                     <div className="bg-white rounded-lg shadow-md p-2 mb-2 flex flex-col items-center">
//                       <p className="text-xs font-bold">Day {reward.day}</p>
//                       <img src={dollarCoin} alt="Dollar Coin" className="w-4 h-4 my-1" />
//                       <p className="text-xs">{reward.amount.toLocaleString()}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="flex justify-center mt-4">
//               <button
//                 onClick={() => setCurrentPage('earn')}
//                 className="bg-[#6c5ce7] text-white font-bold py-2 px-4 rounded"
//               >
//                 Come back tomorrow
//               </button>
//             </div>

//             <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl bg-[#6c5ce7] flex justify-around items-center z-50 rounded-3xl text-xs">
//               <div className="text-center text-[#50e3c2] w-1/5 bg-[#6c5ce7] m-1 p-2 rounded-2xl" onClick={() => setCurrentPage('home')}>
//                 <img src={binanceLogo} alt="Exchange" className="w-8 h-8 mx-auto" />
//                 <p className="mt-1">Exchange</p>
//               </div>
//               <div className="text-center text-[#50e3c2] w-1/5">
//                 <p className="mt-1">Mine</p>
//               </div>
//               <div className="text-center text-[#50e3c2] w-1/5" onClick={() => setCurrentPage('friends')}>
//                 <p className="mt-1">Friends</p>
//               </div>
//               <div className="text-center text-[#50e3c2] w-1/5" onClick={() => setCurrentPage('earn')}>
//                 <p className="mt-1">Earn</p>
//               </div>
//               <div className="text-center text-[#50e3c2] w-1/5">
//                 <img src={hamsterCoin} alt="Airdrop" className="w-8 h-8 mx-auto" />
//                 <p className="mt-1">Airdrop</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DailyReward;

// import React, { useState, useEffect } from 'react';
// import { binanceLogo, dollarCoin, hamsterCoin } from './images';
// import Hamster from './icons/Hamster';

// interface DailyRewardProps {
//   setCurrentPage: (page: string) => void;
//   addCoins: (amount: number) => void;
// }

// const rewards = [
//   { day: 1, amount: 500 },
//   { day: 2, amount: 1000 },
//   { day: 3, amount: 2500 },
//   { day: 4, amount: 5000 },
//   { day: 5, amount: 7500 },
//   { day: 6, amount: 15000 },
//   { day: 7, amount: 25000 },
//   { day: 8, amount: 50000 },
//   { day: 9, amount: 100000 },
//   { day: 10, amount: 250000 },
// ];

// const DailyReward: React.FC<DailyRewardProps> = ({ setCurrentPage, addCoins }) => {
//   const [streak, setStreak] = useState(1);
//   const [rewardClaimed, setRewardClaimed] = useState(false);

//   useEffect(() => {
//     const lastLoginDate = localStorage.getItem('lastLoginDate');
//     const storedStreak = parseInt(localStorage.getItem('loginStreak') || '1', 10);
//     const today = new Date().toDateString();

//     if (lastLoginDate !== today) {
//       if (new Date(today).getTime() - new Date(lastLoginDate || today).getTime() > 86400000) {
//         setStreak(1);
//       } else {
//         setStreak(storedStreak <= 10 ? storedStreak : 1);
//       }
//       localStorage.setItem('lastLoginDate', today);
//       setRewardClaimed(false);
//     } else {
//       setStreak(storedStreak);
//       setRewardClaimed(localStorage.getItem('rewardClaimed') === 'true');
//     }
//   }, []);

//   const handleClaimReward = () => {
//     const reward = rewards[streak - 1];
//     addCoins(reward.amount);
//     setRewardClaimed(true);
//     localStorage.setItem('rewardClaimed', 'true');
//     localStorage.setItem('loginStreak', (streak % 10 + 1).toString());
//     alert(`${reward.amount} coins have been added to your balance`);
//   };

//   return (
//     <div className="bg-[#dfe6e9] flex justify-center">
//       <div className="w-full bg-[#dfe6e9] text-[#2d3436] h-screen font-bold flex flex-col max-w-xl">
//         <div className="px-4 z-10">
//           <div className="flex items-center space-x-2 pt-4">
//             <div className="p-1 rounded-lg bg-[#74b9ff]">
//               <Hamster size={24} className="text-[#2d3436]" />
//             </div>
//             <div>
//               <p className="text-sm">David (CEO)</p>
//             </div>
//           </div>
//           <div className="flex items-center justify-between space-x-4 mt-1">
//             <div className="flex items-center w-1/3">
//               <div className="w-full">
//                 <div className="flex justify-between">
//                   <p className="text-sm">Legendary</p>
//                   <p className="text-sm">7 <span className="text-[#74b9ff]">/ 10</span></p>
//                 </div>
//                 <div className="flex items-center mt-1 border-2 border-[#6c5ce7] rounded-full">
//                   <div className="w-full h-2 bg-[#6c5ce7]/[0.6] rounded-full">
//                     <div className="bg-[#6c5ce7] h-2 rounded-full" style={{ width: `75%` }}></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex items-center w-2/3 border-2 border-[#6c5ce7] rounded-full px-4 py-[2px] bg-[#6c5ce7]/[0.6] max-w-64">
//               <img src={binanceLogo} alt="Exchange" className="w-8 h-8" />
//               <div className="h-[32px] w-[2px] bg-[#6c5ce7] mx-2"></div>
//               <div className="flex-1 text-center">
//                 <p className="text-xs text-[#50e3c2] font-medium">Profit per hour</p>
//                 <div className="flex items-center justify-center space-x-1">
//                   <img src={hamsterCoin} alt="Dollar Coin" className="w-[18px] h-[18px]" />
//                   <p className="text-sm">+126.42K</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex-grow mt-4 bg-[#74b9ff] rounded-t-[48px] relative z-0">
//           <div className="absolute top-[2px] left-0 right-0 bottom-0 bg-[#dfe6e9] rounded-t-[46px]">
//             <div className="px-4 mt-6 flex justify-center">
//               <div className="bg-[#6c5ce7] rounded-lg px-4 py-2 w-full max-w-sm">
//                 <div className="flex items-center space-x-4">
//                   <img src={dollarCoin} alt="Dollar Coin" className="w-12 h-12" />
//                   <p className="text-sm">Get coins for logging into the game daily without skipping.</p>
//                 </div>
//               </div>
//             </div>

//             <div className="px-4 mt-4">
//               <div className="grid grid-cols-4 gap-2">
//                 {rewards.slice(0, 4).map((reward, index) => (
//                   <div
//                     key={index}
//                     className={`bg-[#74b9ff] rounded-lg shadow-lg p-2 ${index + 1 === streak && !rewardClaimed ? 'cursor-pointer' : 'opacity-50 cursor-not-allowed'}`}
//                     onClick={() => (index + 1 === streak && !rewardClaimed ? handleClaimReward() : null)}
//                   >
//                     <div className="bg-white rounded-lg shadow-md p-2 mb-2 flex flex-col items-center">
//                       <p className="text-xs font-bold">Day {reward.day}</p>
//                       <img src={dollarCoin} alt="Dollar Coin" className="w-4 h-4 my-1" />
//                       <p className="text-xs">{reward.amount.toLocaleString()}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="grid grid-cols-4 gap-2 mt-2">
//                 {rewards.slice(4, 8).map((reward, index) => (
//                   <div
//                     key={index}
//                     className={`bg-[#74b9ff] rounded-lg shadow-lg p-2 ${index + 5 === streak && !rewardClaimed ? 'cursor-pointer' : 'opacity-50 cursor-not-allowed'}`}
//                     onClick={() => (index + 5 === streak && !rewardClaimed ? handleClaimReward() : null)}
//                   >
//                     <div className="bg-white rounded-lg shadow-md p-2 mb-2 flex flex-col items-center">
//                       <p className="text-xs font-bold">Day {reward.day}</p>
//                       <img src={dollarCoin} alt="Dollar Coin" className="w-4 h-4 my-1" />
//                       <p className="text-xs">{reward.amount.toLocaleString()}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="grid grid-cols-2 gap-2 mt-2">
//                 {rewards.slice(8).map((reward, index) => (
//                   <div
//                     key={index}
//                     className={`bg-[#74b9ff] rounded-lg shadow-lg p-2 ${index + 9 === streak && !rewardClaimed ? 'cursor-pointer' : 'opacity-50 cursor-not-allowed'}`}
//                     onClick={() => (index + 9 === streak && !rewardClaimed ? handleClaimReward() : null)}
//                   >
//                     <div className="bg-white rounded-lg shadow-md p-2 mb-2 flex flex-col items-center">
//                       <p className="text-xs font-bold">Day {reward.day}</p>
//                       <img src={dollarCoin} alt="Dollar Coin" className="w-4 h-4 my-1" />
//                       <p className="text-xs">{reward.amount.toLocaleString()}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="flex justify-center mt-4">
//               <button
//                 onClick={() => setCurrentPage('earn')}
//                 className="bg-[#6c5ce7] text-white font-bold py-2 px-4 rounded"
//               >
//                 Come back tomorrow
//               </button>
//             </div>

//             <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl bg-[#6c5ce7] flex justify-around items-center z-50 rounded-3xl text-xs">
//               <div className="text-center text-[#50e3c2] w-1/5 bg-[#6c5ce7] m-1 p-2 rounded-2xl" onClick={() => setCurrentPage('home')}>
//                 <img src={binanceLogo} alt="Exchange" className="w-8 h-8 mx-auto" />
//                 <p className="mt-1">Exchange</p>
//               </div>
//               <div className="text-center text-[#50e3c2] w-1/5">
//                 <p className="mt-1">Mine</p>
//               </div>
//               <div className="text-center text-[#50e3c2] w-1/5" onClick={() => setCurrentPage('friends')}>
//                 <p className="mt-1">Friends</p>
//               </div>
//               <div className="text-center text-[#50e3c2] w-1/5" onClick={() => setCurrentPage('earn')}>
//                 <p className="mt-1">Earn</p>
//               </div>
//               <div className="text-center text-[#50e3c2] w-1/5">
//                 <img src={hamsterCoin} alt="Airdrop" className="w-8 h-8 mx-auto" />
//                 <p className="mt-1">Airdrop</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DailyReward;

import React, { useState, useEffect } from 'react';
import { binanceLogo, dollarCoin, hamsterCoin } from './images';
import Hamster from './icons/Hamster';

interface DailyRewardProps {
  setCurrentPage: (page: string) => void;
  addCoins: (amount: number) => void;
  profitPerHour: number;
}

const rewards = [
  { day: 1, amount: 500 },
  { day: 2, amount: 1000 },
  { day: 3, amount: 2500 },
  { day: 4, amount: 5000 },
  { day: 5, amount: 7500 },
  { day: 6, amount: 15000 },
  { day: 7, amount: 25000 },
  { day: 8, amount: 50000 },
  { day: 9, amount: 100000 },
  { day: 10, amount: 250000 },
];

const DailyReward: React.FC<DailyRewardProps> = ({ setCurrentPage, addCoins, profitPerHour }) => {
  const [streak, setStreak] = useState(1);
  const [rewardClaimed, setRewardClaimed] = useState(false);

  useEffect(() => {
    const lastLoginDate = localStorage.getItem('lastLoginDate');
    const storedStreak = parseInt(localStorage.getItem('loginStreak') || '1', 10);
    const today = new Date().toDateString();

    if (lastLoginDate !== today) {
      if (new Date(today).getTime() - new Date(lastLoginDate || today).getTime() > 86400000) {
        setStreak(1);
      } else {
        setStreak(storedStreak <= 10 ? storedStreak : 1);
      }
      localStorage.setItem('lastLoginDate', today);
      setRewardClaimed(false);
    } else {
      setStreak(storedStreak);
      setRewardClaimed(localStorage.getItem('rewardClaimed') === 'true');
    }
  }, []);

  const handleClaimReward = () => {
    const reward = rewards[streak - 1];
    addCoins(reward.amount);
    setRewardClaimed(true);
    localStorage.setItem('rewardClaimed', 'true');
    localStorage.setItem('loginStreak', (streak % 10 + 1).toString());
    alert(`${reward.amount} coins have been added to your balance`);
  };

  const formatProfitPerHour = (profit: number) => {
    if (profit >= 1000000000) return `+${(profit / 1000000000).toFixed(2)}B`;
    if (profit >= 1000000) return `+${(profit / 1000000).toFixed(2)}M`;
    if (profit >= 1000) return `+${(profit / 1000).toFixed(2)}K`;
    return `+${profit}`;
  };

  return (
    <div className="bg-[#dfe6e9] flex justify-center">
      <div className="w-full bg-[#dfe6e9] text-[#2d3436] h-screen font-bold flex flex-col max-w-xl">
        <div className="px-4 z-10">
          <div className="flex items-center space-x-2 pt-4">
            <div className="p-1 rounded-lg bg-[#74b9ff]">
              <Hamster size={24} className="text-[#2d3436]" />
            </div>
            <div>
              <p className="text-sm">David (CEO)</p>
            </div>
          </div>
          <div className="flex items-center justify-between space-x-4 mt-1">
            <div className="flex items-center w-1/3">
              <div className="w-full">
                <div className="flex justify-between">
                  <p className="text-sm">Legendary</p>
                  <p className="text-sm">7 <span className="text-[#74b9ff]">/ 10</span></p>
                </div>
                <div className="flex items-center mt-1 border-2 border-[#6c5ce7] rounded-full">
                  <div className="w-full h-2 bg-[#6c5ce7]/[0.6] rounded-full">
                    <div className="bg-[#6c5ce7] h-2 rounded-full" style={{ width: `75%` }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center w-2/3 border-2 border-[#6c5ce7] rounded-full px-4 py-[2px] bg-[#6c5ce7]/[0.6] max-w-64">
              <img src={binanceLogo} alt="Exchange" className="w-8 h-8" />
              <div className="h-[32px] w-[2px] bg-[#6c5ce7] mx-2"></div>
              <div className="flex-1 text-center">
                <p className="text-xs text-[#50e3c2] font-medium">Profit per hour</p>
                <div className="flex items-center justify-center space-x-1">
                  <img src={dollarCoin} alt="Dollar Coin" className="w-[18px] h-[18px]" />
                  <p className="text-sm">{formatProfitPerHour(profitPerHour)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-grow mt-4 bg-[#74b9ff] rounded-t-[48px] relative z-0">
          <div className="absolute top-[2px] left-0 right-0 bottom-0 bg-[#dfe6e9] rounded-t-[46px]">
            <div className="px-4 mt-6 flex justify-center">
              <div className="bg-[#6c5ce7] rounded-lg px-4 py-2 w-full max-w-sm">
                <div className="flex items-center space-x-4">
                  <img src={dollarCoin} alt="Dollar Coin" className="w-12 h-12" />
                  <p className="text-sm">Get coins for logging into the game daily without skipping.</p>
                </div>
              </div>
            </div>

            <div className="px-4 mt-4">
              <div className="grid grid-cols-4 gap-2">
                {rewards.slice(0, 4).map((reward, index) => (
                  <div
                    key={index}
                    className={`bg-[#74b9ff] rounded-lg shadow-lg p-2 ${index + 1 === streak && !rewardClaimed ? 'cursor-pointer' : 'opacity-50 cursor-not-allowed'}`}
                    onClick={() => (index + 1 === streak && !rewardClaimed ? handleClaimReward() : null)}
                  >
                    <div className="bg-white rounded-lg shadow-md p-2 mb-2 flex flex-col items-center">
                      <p className="text-xs font-bold">Day {reward.day}</p>
                      <img src={dollarCoin} alt="Dollar Coin" className="w-4 h-4 my-1" />
                      <p className="text-xs">{reward.amount.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-4 gap-2 mt-2">
                {rewards.slice(4, 8).map((reward, index) => (
                  <div
                    key={index}
                    className={`bg-[#74b9ff] rounded-lg shadow-lg p-2 ${index + 5 === streak && !rewardClaimed ? 'cursor-pointer' : 'opacity-50 cursor-not-allowed'}`}
                    onClick={() => (index + 5 === streak && !rewardClaimed ? handleClaimReward() : null)}
                  >
                    <div className="bg-white rounded-lg shadow-md p-2 mb-2 flex flex-col items-center">
                      <p className="text-xs font-bold">Day {reward.day}</p>
                      <img src={dollarCoin} alt="Dollar Coin" className="w-4 h-4 my-1" />
                      <p className="text-xs">{reward.amount.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {rewards.slice(8).map((reward, index) => (
                  <div
                    key={index}
                    className={`bg-[#74b9ff] rounded-lg shadow-lg p-2 ${index + 9 === streak && !rewardClaimed ? 'cursor-pointer' : 'opacity-50 cursor-not-allowed'}`}
                    onClick={() => (index + 9 === streak && !rewardClaimed ? handleClaimReward() : null)}
                  >
                    <div className="bg-white rounded-lg shadow-md p-2 mb-2 flex flex-col items-center">
                      <p className="text-xs font-bold">Day {reward.day}</p>
                      <img src={dollarCoin} alt="Dollar Coin" className="w-4 h-4 my-1" />
                      <p className="text-xs">{reward.amount.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-4">
              <button
                onClick={() => setCurrentPage('earn')}
                className="bg-[#6c5ce7] text-white font-bold py-2 px-4 rounded"
              >
                Come back tomorrow
              </button>
            </div>

            <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl bg-[#6c5ce7] flex justify-around items-center z-50 rounded-3xl text-xs">
              <div className="text-center text-[#50e3c2] w-1/5 bg-[#6c5ce7] m-1 p-2 rounded-2xl" onClick={() => setCurrentPage('home')}>
                <img src={binanceLogo} alt="Exchange" className="w-8 h-8 mx-auto" />
                <p className="mt-1">Exchange</p>
              </div>
              <div className="text-center text-[#50e3c2] w-1/5">
                <p className="mt-1">Mine</p>
              </div>
              <div className="text-center text-[#50e3c2] w-1/5" onClick={() => setCurrentPage('friends')}>
                <p className="mt-1">Friends</p>
              </div>
              <div className="text-center text-[#50e3c2] w-1/5" onClick={() => setCurrentPage('earn')}>
                <p className="mt-1">Earn</p>
              </div>
              <div className="text-center text-[#50e3c2] w-1/5">
                <img src={hamsterCoin} alt="Airdrop" className="w-8 h-8 mx-auto" />
                <p className="mt-1">Airdrop</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyReward;
