# 🤖 ChainSpend-AI

### AI-Powered Web3 Financial Management on Arc Testnet

ChainSpend-AI is an AI-powered Web3 expense management platform built on Arc Testnet.

It enables users to securely record expenses on-chain while providing intelligent spending insights, financial summaries, searchable expense history, CSV export, and AI-assisted recommendations.

By combining blockchain transparency with AI-powered financial analysis, ChainSpend-AI helps users better understand, organize, and manage their Web3 finances while laying the foundation for autonomous payment workflows.

---

## 🌐 Live Demo

Live Application

https://chain-spend-ai.vercel.app

Experience ChainSpend-AI by connecting any EVM-compatible wallet on Arc Testnet.

Supported wallets include:

- Rabby Wallet
- MetaMask
- OKX Wallet
- Zerion Wallet

---

## ✨ Features

### ⛓️ On-Chain Expense Management

- 🔐 Connect any EVM-compatible wallet
- 💰 Record expenses securely on-chain
- 📂 Organize expenses by category
- 📝 Add notes to every transaction
- 📊 View total spending and expense history
- 🔍 Search previous expenses
- 🔄 Refresh on-chain records
- 📤 Export expense history as CSV

### 🤖 AI Features

- 🧠 AI-generated spending insights
- 📈 Spending summaries
- 💡 Budget recommendations
- 🚨 Spending risk assessment
- 🤖 AI-powered financial assistant

## Product Preview

### Home

![Home](./home.png)

### Dashboard

![Dashboard](./dashboard.png)

### AI Spending Analysis

![AI Spending](./AI_spending.png)

### Search

![Search](./search.png)

### Wallet Connection

![Wallet Connected](./wallet.connected.png)

### CSV Export

![CSV Export](./csv-export.png)

### ⚡ Platform

- ⚡ Built on Arc Testnet
- 🔒 Wallet-specific on-chain records
- 🌐 Responsive Web3 interface

---

## 🚀 Why Arc?

Arc provides a fast, secure, and EVM-compatible environment that enables developers to build next-generation decentralized applications using familiar Ethereum tooling.

ChainSpend-AI leverages Arc to deliver:

- ⚡ Fast and low-friction on-chain transactions
- 🔒 Secure, wallet-specific expense records
- 📖 Transparent and verifiable financial history
- 🤖 A reliable foundation for AI-powered financial intelligence
- 🚀 Scalable infrastructure for future autonomous payment workflows

---

## 🌍 Vision

ChainSpend-AI aims to become an intelligent financial companion for Web3 users.

Beyond simply recording expenses, the platform is designed to help users understand their spending habits through AI-powered analysis, actionable recommendations, and future autonomous payment workflows.

Our long-term vision is to combine blockchain transparency with artificial intelligence to create a secure, intelligent, and user-owned financial management experience that works seamlessly across multiple EVM-compatible networks.

---

## 🛣 Roadmap

### Current

- ✅ On-chain expense tracking
- ✅ Wallet integration
- ✅ AI spending insights
- ✅ Searchable expense history
- ✅ CSV export
- ✅ Responsive dashboard

### Next Phase

- 🤖 Smarter AI financial recommendations
- 💳 Autonomous recurring payment workflows
- 📈 Predictive spending analysis
- 🌐 Multi-chain expense management
- 📅 AI-generated financial reports
- 🚨 AI anomaly and fraud detection

---

## 📡 Smart Contract Deployment

| Network     | Contract Address                           |
| ----------- | ------------------------------------------ |
| Arc Testnet | 0x72EC997ffB25D63F430A95c69a0B93F5F2d90131 |

---

## 📁 Project Structure

ChainSpend-AI/
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

### Frontend

- React
- Vite

### Blockchain

- Solidity
- Ethers.js
- Arc Testnet

### Wallet Integration

- MetaMask
- Rabby Wallet
- OKX Wallet
- Zerion Wallet

### Deployment

- Vercel

### AI Features

- AI-powered spending insights
- Intelligent financial recommendations
- Spending analysis

---

## 🌐 Clone the Repository

git clone https://github.com/idriskinze86/ChainSpend-AI.git

## cd ChainSpend-AI

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

### Contract Name

ExpenseTracker

The ExpenseTracker smart contract is the core of ChainSpend-AI. It securely records expense transactions on Arc Testnet, ensuring every user's financial records remain transparent, immutable, and wallet-specific.

Each connected wallet maintains its own independent expense history, allowing users to securely track, retrieve, search, and analyze their on-chain spending without exposing or mixing records with other users.

### Core Functions

| Function          | Description                                                            |
| ----------------- | ---------------------------------------------------------------------- |
| addExpense()      | Records a new expense on-chain.                                        |
| getExpenses()     | Retrieves all expenses belonging to the connected wallet.              |
| getExpenseCount() | Returns the total number of expenses recorded by the connected wallet. |

## The smart contract is designed to provide a reliable on-chain data layer that powers the AI-driven financial insights and expense management features of ChainSpend-AI.

## 🌐 Network Configuration

| Property        | Value       |
| --------------- | ----------- |
| Network         | Arc Testnet |
| Chain ID        | 5042002     |
| Currency Symbol | ARC         |

---

## 📖 How It Works

1. Connect an EVM-compatible wallet (MetaMask, Rabby, OKX, or Zerion).
2. Switch to Arc Testnet.
3. Record an expense by entering:
   - Amount
   - Token
   - Category
   - Note
4. Confirm the transaction in your wallet.
5. The expense is securely stored on-chain.
6. View your wallet-specific expense history.
7. Search and filter previous expenses.
8. Export your records as a CSV file.
9. Review AI-generated spending insights and recommendations.

---

## 🔮 Future Roadmap

ChainSpend-AI is designed to evolve into an autonomous financial assistant for Web3 users.

### Planned Features

- 🤖 Smarter AI financial recommendations
- 📊 Advanced spending analytics and visualizations
- 📅 AI-generated monthly financial reports
- 💳 Autonomous recurring payment workflows
- 🌐 Multi-chain expense management
- 🔗 Cross-chain expense synchronization
- 🚨 AI-powered anomaly and fraud detection
- 📈 Predictive budgeting and spending forecasts
- 🔍 Natural language expense search

---

## 🤝 Contributing

Contributions, suggestions, and feedback are welcome.

Feel free to fork the repository, create a feature branch, and submit a pull request.

---

## 🔗 Project Links

- 🌐 Live Demo: https://chain-spend-ai.vercel.app/
- 💻 GitHub Repository: https://github.com/idriskinze86/ChainSpend-AI
- ⛓️ Network: Arc Testnet

---

## 🙌 Acknowledgements

ChainSpend-AI was built for the Arc ecosystem to demonstrate how blockchain and AI can work together to simplify on-chain financial management.

Special thanks to the Arc team for providing the infrastructure and developer tools that made this project possible, and to the Web3 open-source community for the libraries and resources that accelerated development.

## Built with ❤️ using Solidity, React, Vite, Ethers.js, and Arc Testnet.

## 📄 License

This project is licensed under the MIT License.

You are free to use, modify, and distribute this software in accordance with the terms of the MIT License.
