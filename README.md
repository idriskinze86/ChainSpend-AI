# 🤖 ChainSpend AI

### Autonomous USDC Expense Agent built on Arc

ChainSpend-Arc is a decentralized Web3 expense tracker that enables users to securely record, organize, and manage crypto expenses directly on-chain.

Built on Arc Testnet, ChainSpend-Arc showcases fast, transparent, and wallet-specific expense tracking using Arc's EVM-compatible infrastructure.

---

## 🌐 Live Demo

Live Application:

https://chain-spend-arc.vercel.app/

Experience ChainSpend-Arc on Arc Testnet by connecting an EVM-compatible wallet such as Rabby Wallet.

---

## ✨ Features

- 🔐 Wallet-based authentication
- 💰 Record crypto expenses on-chain
- 📂 Categorize expenses
- 📝 Add notes to every expense
- 📊 Dashboard showing total expenses and total spending
- 🔍 Search expense history
- 🔄 Refresh on-chain expense records
- 📤 Export expenses as CSV
- ⚡ Powered by Arc Testnet

---

## 🚀 Why Arc?

Arc provides a secure and EVM-compatible environment that enables developers to build decentralized applications using familiar Ethereum tooling.

ChainSpend-Arc leverages Arc to provide:

- Transparent on-chain expense records
- Wallet-specific expense history
- Secure transaction storage
- Fast transaction confirmation on Arc Testnet
- A scalable foundation for future growth

---

## 🌍 Vision

ChainSpend-Arc is built on Arc Testnet today, with an architecture designed to support additional EVM-compatible networks in the future.

Our goal is to provide a seamless, transparent, and secure expense tracking experience that can scale across multiple blockchain ecosystems while maintaining a consistent user experience.

---

## 🛣 Roadmap

- ✅ Arc Testnet (Current)
- 🔄 Monad Testnet
- 🔄 Ethereum Sepolia
- 🔄 Additional EVM-compatible networks

---

## 📡 Live Deployment

| Network     | Contract Address                           |
| ----------- | ------------------------------------------ |
| Arc Testnet | 0x72EC997ffB25D63F430A95c69a0B93F5F2d90131 |

---

## 📁 Project Structure

ChainSpend-Arc/
├── contracts/
│ └── ExpenseTracker.sol
├── scripts/
│ ├── compile.js
│ └── deploy.js
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── lib/
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── public/
│ ├── package.json
│ └── vite.config.js
├── build/
├── .env
├── package.json
└── README.md

---

## 🛠 Tech Stack

- Solidity
- React
- Vite
- Ethers.js
- Rabby Wallet
- Arc Testnet

---

## 🌐 Clone the Repository

git clone https://github.com/idriskinze86/ChainSpend-Arc.git

## cd ChainSpend-Arc

## ⚙️ Environment Variables

Create a .env file in the project root.

RPC_URL=https://rpc.testnet.arc.network
PRIVATE_KEY=YOUR_PRIVATE_KEY

> ⚠️ Never commit your private key or any sensitive information to GitHub.

---

## 🚀 Installation

### Install project dependencies

npm install

### Install frontend dependencies

cd frontend
npm install

### Start the frontend

npm run dev

### Compile the smart contract

cd ..
node scripts/compile.js

### Deploy the smart contract

## node scripts/deploy.js

## 📜 Smart Contract

Contract Name

ExpenseTracker

### Core Functions

- addExpense() — Records a new expense on-chain.
- getExpenses() — Retrieves all expenses for the connected wallet.
- getExpenseCount() — Returns the total number of recorded expenses.

Each wallet maintains its own independent expense history, ensuring user-specific records while keeping all data transparent and verifiable on-chain.

---

## 🌐 Network Configuration

| Property        | Value       |
| --------------- | ----------- |
| Network         | Arc Testnet |
| Chain ID        | 5042002     |
| Currency Symbol | ARC         |

---

## 📖 How It Works

1. Connect your EVM-compatible wallet (Rabby Wallet recommended).
2. Switch to Arc Testnet.
3. Enter:
   - Amount
   - Token
   - Category
   - Note
4. Submit the transaction.
5. Confirm the transaction in your wallet.
6. The dashboard automatically updates.
7. View your complete on-chain expense history.
8. Search previous expenses.
9. Refresh expenses anytime to synchronize with the blockchain.
10. Export your expense history as a CSV file.

---

## 🔮 Future Improvements

- 🌐 Automatic multi-network detection
- 🔄 Seamless multi-chain support
- 💰 On-chain budgeting
- 💳 Remaining balance tracking
- 🚫 Overspending prevention
- 📈 Spending analytics and charts
- 📅 Monthly expense reports
- 🤖 AI-powered spending insights
- 🔗 Cross-chain expense synchronization

---

## 🤝 Contributing

Contributions, suggestions, and feedback are welcome.

Feel free to fork the repository, create a feature branch, and submit a pull request.

---

## 🔗 Project Links

- 🌐 Live Demo: https://chain-spend-arc.vercel.app/
- 💻 GitHub Repository: https://github.com/idriskinze86/ChainSpend-Arc
- ⛓️ Network: Arc Testnet

---

## 🙌 Acknowledgements

Built for the Arc ecosystem to demonstrate practical on-chain financial management using Solidity, React, Vite, and Ethers.js.

Special thanks to the Arc team and the developer community for providing the infrastructure and tools that made this project possible.

---

## 📄 License

This project is licensed under the MIT License.
