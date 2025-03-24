import { CoinData } from '../types';
import { Search } from 'lucide-react';
import { useState } from 'react';

interface CoinTableProps {
  coins: CoinData[];
}

export function CoinTable({ coins }: CoinTableProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 2,
    }).format(num);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search by name or symbol..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-400 uppercase bg-gray-800">
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Price</th>
              <th className="px-6 py-3">24h %</th>
              <th className="px-6 py-3">Market Cap</th>
              <th className="px-6 py-3">Volume(24h)</th>
              <th className="px-6 py-3">Circulating Supply</th>
            </tr>
          </thead>
          <tbody>
            {filteredCoins.map((coin) => (
              <tr key={coin.id} className="border-b border-gray-700 hover:bg-gray-800">
                <td className="px-6 py-4">{coin.market_cap_rank}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <img src={coin.image} alt={coin.name} className="w-6 h-6" />
                    <span className="font-medium">{coin.name}</span>
                    <span className="text-gray-400 uppercase">{coin.symbol}</span>
                  </div>
                </td>
                <td className="px-6 py-4">{formatNumber(coin.current_price)}</td>
                <td className={`px-6 py-4 ${coin.price_change_percentage_24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </td>
                <td className="px-6 py-4">{formatNumber(coin.market_cap)}</td>
                <td className="px-6 py-4">{formatNumber(coin.total_volume)}</td>
                <td className="px-6 py-4">
                  {new Intl.NumberFormat('en-US').format(coin.circulating_supply)} {coin.symbol.toUpperCase()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}