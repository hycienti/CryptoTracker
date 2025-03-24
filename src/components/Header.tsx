import { TrendingUp as TrendUp, DollarSign, BarChart3 } from 'lucide-react';
import { GlobalData } from '../types';

interface HeaderProps {
  globalData: GlobalData;
}

export function Header({ globalData }: HeaderProps) {
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 2,
    }).format(num);
  };

  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <TrendUp className="h-8 w-8 text-blue-400" />
            <h1 className="text-2xl font-bold">CryptoTracker</h1>
          </div>
          <div className="flex space-x-6">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-5 w-5 text-green-400" />
              <div>
                <p className="text-sm text-gray-400">Market Cap</p>
                <p className="font-semibold">{formatNumber(globalData.total_market_cap.usd)}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5 text-purple-400" />
              <div>
                <p className="text-sm text-gray-400">24h Change</p>
                <p className={`font-semibold ${globalData.market_cap_change_percentage_24h_usd >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {globalData.market_cap_change_percentage_24h_usd.toFixed(2)}%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}