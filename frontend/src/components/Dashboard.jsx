import { generateInsights } from "../ai/insights";

function Dashboard({ expenseCount, totalSpent, expenses = [] }) {
  const insights = generateInsights(expenses);

  return (
    <>
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

      <div className="dashboard-card">
        <h3>🤖 ChainSpend AI Insights</h3>

        <p><strong>Summary:</strong> {insights.summary}</p>

        <p><strong>Top Category:</strong> {insights.topCategory}</p>

        <p><strong>Highest Expense:</strong> {insights.highestExpense} ARC</p>

        <p><strong>Recommendation:</strong> {insights.advice}</p>
<p><strong>Risk Level:</strong> {insights.riskLevel}</p>

<p><strong>Budget Status:</strong> {insights.budgetStatus}</p>

<p>
  <strong>Payment Recommendation:</strong>{" "}
  {insights.shouldApprovePayment
    ? "✅ Safe to proceed"
    : "⚠️ Review before proceeding"}
</p>
      </div>
    </>
  );
}

export default Dashboard;
