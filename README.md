# CryptoTracker

CryptoTracker is a web application built with React, TypeScript, and TailwindCSS. It provides real-time cryptocurrency data, including market trends, prices, and global statistics, using the CoinGecko API.

## Features

- **Global Market Data**: Displays total market cap and 24-hour market cap change.
- **Trending Coins**: Highlights trending cryptocurrencies.
- **Searchable Coin Table**: Allows users to search and filter cryptocurrencies by name or symbol.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Tech Stack

- **Frontend**: React, TypeScript
- **Styling**: TailwindCSS
- **State Management**: React Query
- **API**: CoinGecko API
- **Build Tool**: Vite

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hycienti/CryptoTracker.git
   cd CryptoTracker
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Start the development server:
   ```bash
   yarn dev
   ```

4. Open the app in your browser at `http://localhost:5173`.

## Scripts

- `yarn dev`: Start the development server.
- `yarn build`: Build the app for production.
- `yarn preview`: Preview the production build.
- `yarn lint`: Run ESLint to check for code issues.

## Folder Structure

```
crypto-tracker/
├── src/
│   ├── components/       # React components
│   ├── styles/           # TailwindCSS styles
│   ├── api.ts            # API calls
│   ├── types.ts          # TypeScript interfaces
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
├── public/               # Static assets
├── package.json          # Project metadata and dependencies
├── tailwind.config.js    # TailwindCSS configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## API Reference

This project uses the [CoinGecko API](https://www.coingecko.com/en/api) to fetch cryptocurrency data.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [CoinGecko](https://www.coingecko.com/) for providing the API.
- [Vite](https://vitejs.dev/) for the fast build tool.
- [TailwindCSS](https://tailwindcss.com/) for the utility-first CSS framework.
