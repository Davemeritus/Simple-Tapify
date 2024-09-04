


// import React, { useMemo, useCallback } from 'react';
// import Hamster from './icons/Hamster';
// import { binanceLogo, mainCharacter, hamsterCoin } from './images';
// import { EarnProps } from './utils/types';

// const Earn: React.FC<EarnProps> = ({
//   onCompleteTask,
//   setCurrentPage,
//   profitPerHour,
// }) => {
//   const tasks = useMemo(() => [
//     {
//       title: 'Crypto Security',
//       url: 'https://youtu.be/hxOApe1P9dM?si=WoY2uK1lL0fwuXtD',
//       reward: 100000,
//     },
//     {
//       title: 'Blockchain 101',
//       url: 'https://youtu.be/dQw4w9WgXcQ',
//       reward: 100000,
//     },
//     {
//       title: 'Understanding NFTs',
//       url: 'https://youtu.be/aLZ9z1g9TCc',
//       reward: 100000,
//     },
//     {
//       title: 'DeFi Explained',
//       url: 'https://youtu.be/4Jkd7Gh6f9E',
//       reward: 100000,
//     },
//     {
//       title: 'Crypto Wallets Setup',
//       url: 'https://youtu.be/s8HlpESpNgA',
//       reward: 100000,
//     },
//     {
//       title: 'Earning with Staking',
//       url: 'https://youtu.be/VdqS97ZcMfY',
//       reward: 500000,
//     },
//   ], []);

//   const handleTaskClick = useCallback((task: { url?: string; reward: number }) => {
//     if (task.url) {
//       window.open(task.url, '_blank');
//     }
//     onCompleteTask(task.reward, profitPerHour);
//   }, [onCompleteTask, profitPerHour]);

//   return (
//     <div className="w-full bg-[#f0f4f8] text-[#2d3436] h-screen font-bold flex flex-col">
//       {/* Header Section */}
//       <div className="px-6 z-10">
//         <div className="flex items-center space-x-2 pt-4">
//           <div className="p-2 rounded-lg bg-[#74b9ff]">
//             <Hamster size={28} className="text-[#2d3436]" />
//           </div>
//           <div>
//             <p className="text-base font-semibold">David (CEO)</p>
//           </div>
//         </div>
//         <div className="flex items-center justify-between space-x-4 mt-2">
//           <div className="flex items-center w-1/3">
//             <div className="w-full">
//               <div className="flex justify-between text-sm">
//                 <p>Legendary</p>
//                 <p>7 <span className="text-[#74b9ff]">/ 10</span></p>
//               </div>
//               <div className="mt-1 bg-[#dfe6e9] rounded-full h-2 relative overflow-hidden">
//                 <div className="bg-[#6c5ce7] h-full" style={{ width: '75%' }}></div>
//               </div>
//             </div>
//           </div>
//           <div className="flex items-center w-2/3 border-2 border-[#6c5ce7] rounded-full px-5 py-[2px] bg-[#6c5ce7]/[0.6] max-w-64">
//             <img src={binanceLogo} alt="Exchange" className="w-8 h-8" />
//             <div className="h-[32px] w-[2px] bg-[#6c5ce7] mx-2"></div>
//             <div className="flex-1 text-center">
//               <p className="text-sm text-[#50e3c2] font-medium">Profit per hour</p>
//               <div className="flex items-center justify-center space-x-1">
//                 <img src={hamsterCoin} alt="Hamster Coin" className="w-[20px] h-[20px]" />
//                 <p className="text-base font-semibold">+{(profitPerHour / 1000).toFixed(2)}K</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Task Section */}
//       <div className="flex-grow mt-6 bg-[#ffffff] rounded-t-[48px] relative z-0 shadow-md">
//         <div className="absolute top-[2px] left-0 right-0 bottom-0 bg-[#f0f4f8] rounded-t-[46px]">
//           <div className="px-6 space-y-6 h-full max-h-[80vh] overflow-y-auto">
//             {/* Populate Tasks */}
//             {tasks.map((task, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-md shadow-sm p-4 mb-2 flex flex-col"
//               >
//                 <div className="flex items-center mb-4">
//                   <img src={mainCharacter} alt="Main Character" className="w-14 h-14" />
//                   <div className="ml-4 flex-1">
//                     <p className="font-bold text-lg">{task.title}</p>
//                   </div>
//                 </div>

//                 {/* Reward and buttons in the same row */}
//                 <div className="flex items-center justify-between space-x-6">
//                   <div className="flex items-center">
//                     <img src={hamsterCoin} alt="Hamster Coin" className="w-[20px] h-[20px]" />
//                     <p className="ml-2 text-lg font-bold">+{task.reward.toLocaleString()}</p>
//                   </div>
//                   <div className="flex space-x-3">
//                     <button
//                       className="bg-[#0984e3] text-white py-2 px-5 rounded-lg hover:bg-[#0077b6] transition-all"
//                       onClick={() => window.open(task.url, '_blank')}
//                     >
//                       Verify
//                     </button>
//                     <button
//                       className="bg-[#00cec9] text-white py-2 px-5 rounded-lg hover:bg-[#00a19d] transition-all"
//                       onClick={() => handleTaskClick(task)}
//                     >
//                       Tap
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Earn;

import React, { useMemo, useCallback } from 'react';
import Hamster from './icons/Hamster';
import { binanceLogo, mainCharacter, hamsterCoin } from './images';
import { EarnProps } from './utils/types';

const Earn: React.FC<EarnProps> = ({
  onCompleteTask,
  autoComplete,
  toggleAutoComplete,
}) => {
  const tasks = useMemo(() => [
    {
      title: 'Crypto Security',
      url: 'https://youtu.be/hxOApe1P9dM?si=WoY2uK1lL0fwuXtD',
      reward: 100000,
    },
    {
      title: 'Blockchain 101',
      url: 'https://youtu.be/dQw4w9WgXcQ',
      reward: 100000,
    },
    {
      title: 'Understanding NFTs',
      url: 'https://youtu.be/aLZ9z1g9TCc',
      reward: 100000,
    },
    {
      title: 'DeFi Explained',
      url: 'https://youtu.be/4Jkd7Gh6f9E',
      reward: 100000,
    },
    {
      title: 'Crypto Wallets Setup',
      url: 'https://youtu.be/s8HlpESpNgA',
      reward: 100000,
    },
    {
      title: 'Earning with Staking',
      url: 'https://youtu.be/VdqS97ZcMfY',
      reward: 500000,
    },
  ], []);

  const handleTaskClick = useCallback((task: { url?: string; reward: number }) => {
    if (task.url) {
      window.open(task.url, '_blank');
    }
    onCompleteTask(task.reward, 0);  // Adjusted since profitPerHour is removed
  }, [onCompleteTask]);

  return (
    <div className="w-full bg-[#f0f4f8] text-[#2d3436] h-screen font-bold flex flex-col">
      <div className="px-6 z-10">
        <div className="flex items-center space-x-2 pt-4">
          <div className="p-2 rounded-lg bg-[#74b9ff]">
            <Hamster size={28} className="text-[#2d3436]" />
          </div>
          <div>
            <p className="text-base font-semibold">David (CEO)</p>
          </div>
        </div>

        {/* Autocomplete Toggle Section */}
        <div className="flex items-center justify-between space-x-4 mt-2">
          <div className="flex items-center w-1/3">
            <div className="w-full">
              <div className="flex justify-between text-sm">
                <p>Legendary</p>
                <p>7 <span className="text-[#74b9ff]">/ 10</span></p>
              </div>
              <div className="mt-1 bg-[#dfe6e9] rounded-full h-2 relative overflow-hidden">
                <div className="bg-[#6c5ce7] h-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <label htmlFor="autocomplete-toggle" className="text-sm font-bold mr-2">
              Autocomplete Tasks
            </label>
            <div className="relative">
              <input
                type="checkbox"
                id="autocomplete-toggle"
                className="toggle-checkbox"
                checked={autoComplete}
                onChange={toggleAutoComplete}
              />
              <span className="slider"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-grow mt-6 bg-[#ffffff] rounded-t-[48px] relative z-0 shadow-md">
        <div className="absolute top-[2px] left-0 right-0 bottom-0 bg-[#f0f4f8] rounded-t-[46px]">
          <div className="px-6 space-y-6 h-full max-h-[80vh] overflow-y-auto">
            {tasks.map((task, index) => (
              <div
                key={index}
                className="bg-white rounded-md shadow-sm p-4 mb-2 flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <img src={mainCharacter} alt="Main Character" className="w-14 h-14" />
                  <div className="ml-4 flex-1">
                    <p className="font-bold text-lg">{task.title}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between space-x-6">
                  <div className="flex items-center">
                    <img src={hamsterCoin} alt="Hamster Coin" className="w-[20px] h-[20px]" />
                    <p className="ml-2 text-lg font-bold">+{task.reward.toLocaleString()}</p>
                  </div>
                  <div className="flex space-x-3">
                    <button
                      className="bg-[#0984e3] text-white py-2 px-5 rounded-lg hover:bg-[#0077b6] transition-all"
                      onClick={() => window.open(task.url, '_blank')}
                    >
                      Verify
                    </button>
                    <button
                      className="bg-[#00cec9] text-white py-2 px-5 rounded-lg hover:bg-[#00a19d] transition-all"
                      onClick={() => handleTaskClick(task)}
                    >
                      Tap
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earn;
