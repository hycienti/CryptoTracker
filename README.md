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

## Hosting the Project

Follow these steps to host the project on your servers and set up a load balancer:

### Server Setup (Web Servers)
1. **Access the server**:
   ```bash
   ssh root@<SERVER_IP>
   ```

2. **Install and configure Nginx**:
   ```bash
   sudo apt update
   sudo apt install nginx -y
   sudo systemctl start nginx
   sudo systemctl enable nginx
   ```

3. **Set permissions for the web directory**:
   ```bash
   sudo chown -R "$USER":"$USER" /var/www/html
   sudo chmod -R 755 /var/www
   ```

4. **Transfer and deploy the application**:
   - Zip your build files locally:
     ```bash
     zip -r dist.zip dist/
     ```
   - Transfer the zip file to the server:
     ```bash
     scp -i ~/.ssh/id_ed25519 dist.zip ubuntu@<SERVER_IP>:/var/www/html/
     ```
   - Unzip and move files:
     ```bash
     sudo apt-get install unzip
     unzip dist.zip
     sudo mv /var/www/html/dist/* /var/www/html/
     ```

5. **Allow HTTP traffic through the firewall**:
   ```bash
   sudo apt install ufw
   sudo ufw allow 'Nginx HTTP'
   ```

### Load Balancer Setup
1. **Access the load balancer server**:
   ```bash
   ssh root@<LOAD_BALANCER_IP>
   ```

2. **Install a text editor (if not installed)**:
   ```bash
   sudo apt-get install nano
   ```

3. **Configure Nginx for load balancing**:
   - Open the configuration file:
     ```bash
     sudo nano /etc/nginx/conf.d/load-balancer.conf
     ```
   - Add the following configuration:
     ```nginx
     upstream webservers {
         server <WEB_SERVER_1_IP>;
         server <WEB_SERVER_2_IP>;
     }

     server {
         listen 80;
         server_name <LOAD_BALANCER_IP>;

         location / {
             proxy_pass http://webservers;
             proxy_set_header Host $host;
             proxy_set_header X-Real-IP $remote_addr;
             proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
         }
     }
     ```

4. **Test and restart Nginx**:
   ```bash
   sudo nginx -t
   sudo systemctl restart nginx
   ```

5. **Verify the setup**:
   Visit `http://<LOAD_BALANCER_IP>` in your browser to confirm the application is live.