

// import React from 'react';
// import Hamster from './icons/Hamster';
// import { binanceLogo, hamsterCoin } from './images';
// import { FriendsProps } from './utils/types';
// import { formatProfitPerHour } from './utils/utils';

// const Friends: React.FC<FriendsProps> = ({
//   onInvite,
//   onInvitePremium,
//   setCurrentPage,
//   profitPerHour
// }) => {
//   const handleInviteClick = () => {
//     const shareData = {
//       title: 'Join Simple Tapify!',
//       text: 'Join Simple Tapify and earn bonuses!',
//       url: 'https://t.me/tapify_bot/simpleTapifyApp',
//     };
//     navigator.share(shareData).then(() => {
//       onInvite();
//     }).catch(console.error);
//   };

//   const handleInvitePremiumClick = () => {
//     const shareData = {
//       title: 'Join Simple Tapify with Telegram Premium!',
//       text: 'Join Simple Tapify and earn bonuses with Telegram Premium!',
//       url: 'https://t.me/tapify_bot/simpleTapifyApp',
//     };
//     navigator.share(shareData).then(() => {
//       onInvitePremium();
//     }).catch(console.error);
//   };

//   const friends = [
//     { name: 'Bernado Silva', coins: 5000 },
//     { name: 'Lionel Messi', coins: 25000 }
//   ];

//   const levelNames = [
//     "Bronze", "Silver", "Gold", "Platinum", "Diamond",
//     "Epic", "Legendary", "Master", "GrandMaster", "Lord"
//   ];

//   const levelMinPoints = [
//     0, 5000, 25000, 100000, 1000000,
//     2000000, 10000000, 50000000, 100000000, 1000000000
//   ];

//   const getLevelName = (coins: number) => {
//     for (let i = levelMinPoints.length - 1; i >= 0; i--) {
//       if (coins >= levelMinPoints[i]) {
//         return levelNames[i];
//       }
//     }
//     return levelNames[0];
//   };

//   return (
//     <div className="w-full bg-[#dfe6e9] text-[#2d3436] h-screen font-bold flex flex-col">
//       <div className="px-4 z-10">
//         <div className="flex items-center space-x-2 pt-4">
//           <div className="p-1 rounded-lg bg-[#74b9ff]">
//             <Hamster size={24} className="text-[#2d3436]" />
//           </div>
//           <div>
//             <p className="text-sm">David (CEO)</p>
//           </div>
//         </div>
//         <div className="flex items-center justify-between space-x-4 mt-1">
//           <div className="flex items-center w-1/3">
//             <div className="w-full">
//               <div className="flex justify-between">
//                 <p className="text-sm">Legendary</p>
//                 <p className="text-sm">7 <span className="text-[#74b9ff]">/ 10</span></p>
//               </div>
//               <div className="flex items-center mt-1 border-2 border-[#6c5ce7] rounded-full">
//                 <div className="w-full h-2 bg-[#6c5ce7]/[0.6] rounded-full">
//                   <div className="bg-[#6c5ce7] h-2 rounded-full" style={{ width: `75%` }}></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex items-center w-2/3 border-2 border-[#6c5ce7] rounded-full px-4 py-[2px] bg-[#6c5ce7]/[0.6] max-w-64">
//             <img src={binanceLogo} alt="Exchange" className="w-8 h-8" />
//             <div className="h-[32px] w-[2px] bg-[#6c5ce7] mx-2"></div>
//             <div className="flex-1 text-center">
//               <p className="text-xs text-[#50e3c2] font-medium">Profit per hour</p>
//               <div className="flex items-center justify-center space-x-1">
//                 <img src={hamsterCoin} alt="Dollar Coin" className="w-[18px] h-[18px]" />
//                 <p className="text-sm">{formatProfitPerHour(profitPerHour)}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex-grow mt-4 bg-[#74b9ff] rounded-t-[48px] relative z-0">
//         <div className="absolute top-[2px] left-0 right-0 bottom-0 bg-[#dfe6e9] rounded-t-[46px]">
//           <div className="px-4 mt-6 flex flex-col space-y-4 items-center">
//             <div className="bg-[#74b9ff] text-[#2d3436] rounded-lg shadow-lg p-4 flex items-center justify-between w-full max-w-sm mx-auto" style={{ borderRadius: '12px' }}>
//               <img src={hamsterCoin} alt="Hamster Coin" className="w-12 h-12" />
//               <div className="ml-4 flex-1">
//                 <p className="text-lg font-bold">Invite a friend</p>
//                 <p className="text-sm mt-1"> +5,000 coins for you and your friend</p>
//               </div>
//               <button
//                 className="bg-[#0984e3] text-white py-2 px-4 rounded-full"
//                 onClick={handleInviteClick}
//               >
//                 Invite
//               </button>
//             </div>
//             <div className="bg-[#74b9ff] text-[#2d3436] rounded-lg shadow-lg p-4 flex items-center justify-between w-full max-w-sm mx-auto" style={{ borderRadius: '12px' }}>
//               <img src={hamsterCoin} alt="Hamster Coin" className="w-12 h-12" />
//               <div className="ml-4 flex-1">
//                 <p className="text-lg font-bold">Invite a friend with Telegram Premium</p>
//                 <p className="text-sm mt-1"> +10,000 coins for you and your friend</p>
//               </div>
//               <button
//                 className="bg-[#0984e3] text-white py-2 px-4 rounded-full"
//                 onClick={handleInvitePremiumClick}
//               >
//                 Invite
//               </button>
//             </div>
//           </div>
//           <div className="px-4 mt-8">
//             <h2 className="text-xl font-bold text-center">List of friends (2)</h2>
//             <div className="mt-4 space-y-4 flex flex-col items-center">
//               {friends.map((friend, index) => (
//                 <div key={index} className="bg-[#74b9ff] text-[#2d3436] rounded-lg shadow-lg p-2 flex items-center justify-between w-full max-w-sm mx-auto" style={{ borderRadius: '12px' }}>
//                   <Hamster size={24} className="w-8 h-8" />
//                   <div className="ml-4 flex-1 flex items-center justify-between">
//                     <p className="text-lg font-bold">{friend.name}</p>
//                     <p className="text-sm ml-2 flex items-center">
//                       {getLevelName(friend.coins)} <span className="mx-1">•</span> <img src={hamsterCoin} alt="Hamster Coin" className="inline w-4 h-4" /> {friend.coins.toLocaleString()}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Friends;

import React from 'react';
import Hamster from './icons/Hamster';
import { hamsterCoin } from './images';
import { FriendsProps } from './utils/types';

const Friends: React.FC<FriendsProps> = ({
  onInvite,
  onInvitePremium,
  autoComplete,
  toggleAutoComplete,
}) => {
  const handleInviteClick = () => {
    const shareData = {
      title: 'Join Simple Tapify!',
      text: 'Join Simple Tapify and earn bonuses!',
      url: 'https://t.me/tapify_bot/simpleTapifyApp',
    };
    navigator.share(shareData).then(() => {
      onInvite();
    }).catch(console.error);
  };

  const handleInvitePremiumClick = () => {
    const shareData = {
      title: 'Join Simple Tapify with Telegram Premium!',
      text: 'Join Simple Tapify and earn bonuses with Telegram Premium!',
      url: 'https://t.me/tapify_bot/simpleTapifyApp',
    };
    navigator.share(shareData).then(() => {
      onInvitePremium();
    }).catch(console.error);
  };

  const friends = [
    { name: 'Bernado Silva', coins: 5000 },
    { name: 'Lionel Messi', coins: 25000 }
  ];

  const levelNames = [
    "Bronze", "Silver", "Gold", "Platinum", "Diamond",
    "Epic", "Legendary", "Master", "GrandMaster", "Lord"
  ];

  const levelMinPoints = [
    0, 5000, 25000, 100000, 1000000,
    2000000, 10000000, 50000000, 100000000, 1000000000
  ];

  const getLevelName = (coins: number) => {
    for (let i = levelMinPoints.length - 1; i >= 0; i--) {
      if (coins >= levelMinPoints[i]) {
        return levelNames[i];
      }
    }
    return levelNames[0];
  };

  return (
    <div className="w-full bg-[#dfe6e9] text-[#2d3436] h-screen font-bold flex flex-col">
      <div className="px-4 z-10">
        <div className="flex items-center space-x-2 pt-4">
          <div className="p-1 rounded-lg bg-[#74b9ff]">
            <Hamster size={24} className="text-[#2d3436]" />
          </div>
          <div>
            <p className="text-sm">David (CEO)</p>
          </div>
        </div>

        {/* Autocomplete Toggle Section */}
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

      <div className="flex-grow mt-4 bg-[#74b9ff] rounded-t-[48px] relative z-0">
        <div className="absolute top-[2px] left-0 right-0 bottom-0 bg-[#dfe6e9] rounded-t-[46px]">
          <div className="px-4 mt-6 flex flex-col space-y-4 items-center">
            <div className="bg-[#74b9ff] text-[#2d3436] rounded-lg shadow-lg p-4 flex items-center justify-between w-full max-w-sm mx-auto" style={{ borderRadius: '12px' }}>
              <img src={hamsterCoin} alt="Hamster Coin" className="w-12 h-12" />
              <div className="ml-4 flex-1">
                <p className="text-lg font-bold">Invite a friend</p>
                <p className="text-sm mt-1"> +5,000 coins for you and your friend</p>
              </div>
              <button
                className="bg-[#0984e3] text-white py-2 px-4 rounded-full"
                onClick={handleInviteClick}
              >
                Invite
              </button>
            </div>
            <div className="bg-[#74b9ff] text-[#2d3436] rounded-lg shadow-lg p-4 flex items-center justify-between w-full max-w-sm mx-auto" style={{ borderRadius: '12px' }}>
              <img src={hamsterCoin} alt="Hamster Coin" className="w-12 h-12" />
              <div className="ml-4 flex-1">
                <p className="text-lg font-bold">Invite a friend with Telegram Premium</p>
                <p className="text-sm mt-1"> +10,000 coins for you and your friend</p>
              </div>
              <button
                className="bg-[#0984e3] text-white py-2 px-4 rounded-full"
                onClick={handleInvitePremiumClick}
              >
                Invite
              </button>
            </div>
          </div>
          <div className="px-4 mt-8">
            <h2 className="text-xl font-bold text-center">List of friends (2)</h2>
            <div className="mt-4 space-y-4 flex flex-col items-center">
              {friends.map((friend, index) => (
                <div key={index} className="bg-[#74b9ff] text-[#2d3436] rounded-lg shadow-lg p-2 flex items-center justify-between w-full max-w-sm mx-auto" style={{ borderRadius: '12px' }}>
                  <Hamster size={24} className="w-8 h-8" />
                  <div className="ml-4 flex-1 flex items-center justify-between">
                    <p className="text-lg font-bold">{friend.name}</p>
                    <p className="text-sm ml-2 flex items-center">
                      {getLevelName(friend.coins)} <span className="mx-1">•</span> <img src={hamsterCoin} alt="Hamster Coin" className="inline w-4 h-4" /> {friend.coins.toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
