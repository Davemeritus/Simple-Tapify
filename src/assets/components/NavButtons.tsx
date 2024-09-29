import { useEffect, useRef } from "react";

import Coins from "../../icons/Coins";
import MineIcon from "../../icons/Mine";
import FriendsIcon from "../../icons/Friends";
import { binanceLogo } from "../../images";

const Links = [
  {
    logo: <MineIcon className="mx-auto w-8 h-8" />,
    name: "Mine",
  },
  {
    logo: <Coins className="mx-auto w-8 h-8" />,
    name: "Earn",
  },
  {
    logo: <FriendsIcon className="mx-auto w-8 h-8" />,
    name: "Friends",
  },
];

function NavButtons({
  currentPage,
  setCurrentPage,
}: {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}) {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-2/5 max-w-xl bg-[#6c5ce7] flex items-center z-50 rounded-3xl justify-evenly text-xs mb-1 cursor-pointer">
      {Links.map((link, index) => (
        <div
          className={`text-center w-1/5 m-1 py-2 rounded-2xl border border-transparent hover:border-white/40 hover:border transition-all duration-200 ${
            currentPage === link.name
              ? "active-icon border-white border"
              : "inactive-icon"
          }`}
          onClick={() => setCurrentPage(link.name)}
          key={index}
        >
          {link.logo}
          <p className="mt-1">{link.name}</p>
        </div>
      ))}

      {/* <div
        className={`text-center w-1/5 m-1 p-2 rounded-2xl ${
          currentPage.current === "airdrop" ? "active-icon" : "inactive-icon"
        }`}
        onClick={() => (currentPage.current = "airdrop")}
      >
        <img src={hamsterCoin} alt="Airdrop" className="w-8 h-8 mx-auto" />
        <p className="mt-1">Airdrop</p>
      </div> */}
    </div>
  );
}

export default NavButtons;
