function ExpenseForm({
  amount,
  setAmount,
  token,
  setToken,
  category,
  setCategory,
  note,
  setNote,
  addExpense,
  loadExpenses,
  exportCSV,
  isRefreshing,
}) {
  return (
    <div className="form-card">
      <h2>Add Expense</h2>

      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter token symbol (e.g. ARC, ETH, USDC)"
        value={token}
        onChange={(e) => setToken(e.target.value)}
      />

      <input
        type="text"
        placeholder="Category (e.g. Food, Transport, Gas Fees)"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <input
        type="text"
        placeholder="Note (What was this expense for?)"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <div className="button-group">
        <button onClick={addExpense}>Add Expense</button>
        <button onClick={loadExpenses} disabled={isRefreshing}>
          {isRefreshing ? "🔄 Refreshing..." : "🔄 Refresh Expenses"}
        </button>
        <button onClick={exportCSV}>📤 Export CSV</button>
      </div>
    </div>
  );
}

export default ExpenseForm;
