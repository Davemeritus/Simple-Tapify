
  
// export type IconProps = {
//     size?: number;
//     className?: string;
//   };
  
//   export interface NavbarProps {
//     currentPage: string;
//     setCurrentPage: (page: string) => void;
//   }
  
//   export interface AirdropProps extends NavbarProps {
//     profitPerHour: number;
//   }
  
//   export interface FriendsProps extends NavbarProps {
//     onInvite: () => void;
//     onInvitePremium: () => void;
//     profitPerHour: number;
    
//   }
  
//   export interface EarnProps extends NavbarProps {
//     onCompleteTask: (reward: number, pph: number) => void;
//     onCompleteTelegramTask: () => void;
//     setProfitPerHour: (profit: number) => void;
//     profitPerHour: number;
//   }
  
//   export interface DailyRewardProps extends NavbarProps {
//     addCoins: (amount: number) => void;
//     profitPerHour: number;
//   }
  
//   export interface CautionProps {
//     isVisible: boolean;
//   }
  
//   export interface MineProps {
//     setCurrentPage: (page: string) => void;
//     profitPerHour: number;
//     autoComplete: boolean;
//     toggleAutoComplete: () => void;
//   }

export type IconProps = {
  size?: number;
  className?: string;
};

export interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export interface AirdropProps extends NavbarProps {
  autoComplete: boolean;
  toggleAutoComplete: () => void;
}

export interface FriendsProps extends NavbarProps {
  onInvite: () => void;
  onInvitePremium: () => void;
  autoComplete: boolean;
  toggleAutoComplete: () => void;
}

export interface EarnProps extends NavbarProps {
  onCompleteTask: (reward: number, pph: number) => void;
  autoComplete: boolean;
  toggleAutoComplete: () => void;
}

export interface DailyRewardProps extends NavbarProps {
  addCoins: (amount: number) => void;
  profitPerHour: number;
}

export interface CautionProps {
  isVisible: boolean;
}

export interface MineProps {
  setCurrentPage: (page: string) => void;
  autoComplete: boolean;
  toggleAutoComplete: () => void;
}
