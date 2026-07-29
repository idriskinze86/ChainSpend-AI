import fs from "fs";
import solc from "solc";

const source = fs.readFileSync("contracts/ExpenseTracker.sol", "utf8");

const input = {
  language: "Solidity",
  sources: {
    "ExpenseTracker.sol": {
      content: source,
    },
  },
  settings: {
    optimizer: {
      enabled: false,
      runs: 200,
    },
    outputSelection: {
      "*": {
        "*": ["abi", "evm.bytecode"],
      },
    },
  },
};

// Save the Standard JSON Input
fs.writeFileSync("build/standard-input.json", JSON.stringify(input, null, 2));

const output = JSON.parse(solc.compile(JSON.stringify(input)));

if (output.errors) {
  console.log(output.errors);
}

const contract = output.contracts["ExpenseTracker.sol"]["ExpenseTracker"];

if (!fs.existsSync("build")) {
  fs.mkdirSync("build", { recursive: true });
}

fs.writeFileSync(
  "build/ExpenseTracker.json",
  JSON.stringify(contract, null, 2),
);

fs.writeFileSync(
  "frontend/src/lib/abi.json",
  JSON.stringify(contract.abi, null, 2),
);

console.log("✅ Compiled successfully!");
console.log("✅ Standard JSON saved to build/standard-input.json");
