function Dashboard({ expenseCount, totalSpent }) {
  return (
    <div className="dashboard">
      <div className="dashboard-card">
        <h3>📊 Total Expenses</h3>
        <h1>{expenseCount}</h1>
      </div>

      <div className="dashboard-card">
        <h3>💰 Total Spent</h3>
        <h1>{totalSpent} ARC</h1>
      </div>
    </div>
  );
}

export default Dashboard;
