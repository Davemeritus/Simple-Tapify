
// // import React from 'react';
// // import { binanceLogo, dollarCoin } from './images';
// // import Hamster from './icons/Hamster';
// // import Info from './icons/Info';
// // import Settings from './icons/Settings';
// // import { AirdropProps } from './utils/types';
// // import { formatProfitPerHour } from './utils/utils';

// // const Mine: React.FC<AirdropProps> = ({ setCurrentPage, profitPerHour }) => {
// //   return (
// //     <div className="w-full bg-[#dfe6e9] text-[#2d3436] h-screen font-bold flex flex-col">
// //       <div className="px-4 z-10">
// //         <div className="flex items-center space-x-2 pt-4">
// //           <div className="p-1 rounded-lg bg-[#74b9ff]">
// //             <Hamster size={24} className="text-[#2d3436]" />
// //           </div>
// //           <div>
// //             <p className="text-sm">David (CEO)</p>
// //           </div>
// //         </div>
// //         <div className="flex items-center justify-between space-x-4 mt-1">
// //           <div className="flex items-center w-1/3">
// //             <div className="w-full">
// //               <div className="flex justify-between">
// //                 <p className="text-sm">Legendary</p>
// //                 <p className="text-sm">7 <span className="text-[#74b9ff]">/ 10</span></p>
// //               </div>
// //               <div className="flex items-center mt-1 border-2 border-[#6c5ce7] rounded-full">
// //                 <div className="w-full h-2 bg-[#6c5ce7]/[0.6] rounded-full">
// //                   <div className="bg-[#6c5ce7] h-2 rounded-full" style={{ width: `75%` }}></div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="flex items-center w-2/3 border-2 border-[#6c5ce7] rounded-full px-4 py-[2px] bg-[#6c5ce7]/[0.6] max-w-64">
// //             <img src={binanceLogo} alt="Exchange" className="w-8 h-8" />
// //             <div className="h-[32px] w-[2px] bg-[#6c5ce7] mx-2"></div>
// //             <div className="flex-1 text-center">
// //               <p className="text-xs text-[#50e3c2] font-medium">Profit per hour</p>
// //               <div className="flex items-center justify-center space-x-1">
// //                 <img src={dollarCoin} alt="Dollar Coin" className="w-[18px] h-[18px]" />
// //                 <p className="text-sm">{formatProfitPerHour(profitPerHour)}</p>
// //                 <Info size={20} className="text-[#6c5ce7]" />
// //               </div>
// //             </div>
// //             <div className="h-[32px] w-[2px] bg-[#6c5ce7] mx-2"></div>
// //             <Settings className="text-[#2d3436]" />
// //           </div>
// //         </div>
// //       </div>
// //       <div className="flex-grow mt-4 bg-[#74b9ff] rounded-t-[48px] relative z-0 flex items-center justify-center min-h-[150px]">
// //         <div className="absolute top-[2px] left-0 right-0 bottom-0 bg-[#dfe6e9] rounded-t-[46px] flex items-center justify-center">
// //           <div className="bg-[#74b9ff] text-[#2d3436] rounded-lg shadow-lg p-4 w-full max-w-sm mx-auto">
// //             <h2 className="text-xl font-bold text-center">Coming soon!!!</h2>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Mine;


// import React from 'react';
// import { binanceLogo, dollarCoin } from './images';
// import Hamster from './icons/Hamster';
// import Info from './icons/Info';
// import Settings from './icons/Settings';
// import { MineProps } from './utils/types';
// import { formatProfitPerHour } from './utils/utils';

// const Mine: React.FC<MineProps> = ({ setCurrentPage, profitPerHour, autoComplete, toggleAutoComplete }) => {
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
//                 <img src={dollarCoin} alt="Dollar Coin" className="w-[18px] h-[18px]" />
//                 <p className="text-sm">{formatProfitPerHour(profitPerHour)}</p>
//                 <Info size={20} className="text-[#6c5ce7]" />
//               </div>
//             </div>
//             <div className="h-[32px] w-[2px] bg-[#6c5ce7] mx-2"></div>
//             <Settings className="text-[#2d3436]" />
//           </div>
//         </div>

//         {/* Toggle Button for Autocomplete Tasks */}
//         <div className="flex items-center mt-4">
//           <label htmlFor="autocomplete-toggle" className="text-sm font-bold mr-2">
//             Autocomplete Tasks
//           </label>
//           <input
//             type="checkbox"
//             id="autocomplete-toggle"
//             className="toggle-checkbox"
//             checked={autoComplete}
//             onChange={toggleAutoComplete}
//           />
//         </div>
//       </div>
//       <div className="flex-grow mt-4 bg-[#74b9ff] rounded-t-[48px] relative z-0 flex items-center justify-center min-h-[150px]">
//         <div className="absolute top-[2px] left-0 right-0 bottom-0 bg-[#dfe6e9] rounded-t-[46px] flex items-center justify-center">
//           <div className="bg-[#74b9ff] text-[#2d3436] rounded-lg shadow-lg p-4 w-full max-w-sm mx-auto">
//             <h2 className="text-xl font-bold text-center">Coming soon!!!</h2>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Mine;

import React from 'react';
import Hamster from './icons/Hamster';
import { MineProps } from './utils/types';

const Mine: React.FC<MineProps> = ({ autoComplete, toggleAutoComplete }) => {
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

          {/* Autocomplete Toggle Section */}
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

      <div className="flex-grow mt-4 bg-[#74b9ff] rounded-t-[48px] relative z-0 flex items-center justify-center min-h-[150px]">
        <div className="absolute top-[2px] left-0 right-0 bottom-0 bg-[#dfe6e9] rounded-t-[46px] flex items-center justify-center">
          <div className="bg-[#74b9ff] text-[#2d3436] rounded-lg shadow-lg p-4 w-full max-w-sm mx-auto">
            <h2 className="text-xl font-bold text-center">Coming soon!!!</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mine;
