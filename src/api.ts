import axios from 'axios';
import { CoinData, GlobalData, TrendingCoin } from './types';

const api = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
});

export const getCoins = async (): Promise<CoinData[]> => {
  const { data } = await api.get('/coins/markets', {
    params: {
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: 100,
      sparkline: true,
      price_change_percentage: '24h',
    },
  });
  return data;
};

export const getGlobalData = async (): Promise<GlobalData> => {
  const { data } = await api.get('/global');
  return data.data;
};

export const getTrendingCoins = async (): Promise<TrendingCoin[]> => {
  const { data } = await api.get('/search/trending');
  return data.coins;
};