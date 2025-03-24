import { TrendingCoin } from '../types';
import { Flame } from 'lucide-react';

interface TrendingCoinsProps {
  trendingCoins: TrendingCoin[];
}

export function TrendingCoins({ trendingCoins }: TrendingCoinsProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <div className="flex items-center space-x-2 mb-4">
        <Flame className="h-5 w-5 text-orange-400" />
        <h2 className="text-lg font-semibold">Trending</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {trendingCoins.map((coin) => (
          <div key={coin.item.id} className="bg-gray-700 rounded-lg p-4 flex items-center space-x-3">
            <img src={coin.item.thumb} alt={coin.item.name} className="w-8 h-8" />
            <div>
              <p className="font-medium">{coin.item.name}</p>
              <p className="text-sm text-gray-400">{coin.item.price_btc.toFixed(8)} BTC</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}