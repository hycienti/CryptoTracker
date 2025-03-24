import { useQuery } from 'react-query';
import { getCoins, getGlobalData, getTrendingCoins } from './api';
import { Header } from './components/Header';
import { CoinTable } from './components/CoinTable';
import { TrendingCoins } from './components/TrendingCoins';

function App() {
  const { data: globalData } = useQuery('globalData', getGlobalData, {
    refetchInterval: 60000,
  });

  const { data: coins } = useQuery('coins', getCoins, {
    refetchInterval: 30000,
  });

  const { data: trendingCoins } = useQuery('trending', getTrendingCoins, {
    refetchInterval: 300000,
  });

  if (!globalData || !coins || !trendingCoins) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-400"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header globalData={globalData} />
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <TrendingCoins trendingCoins={trendingCoins} />
          <CoinTable coins={coins} />
        </div>
      </main>
    </div>
  );
}

export default App;