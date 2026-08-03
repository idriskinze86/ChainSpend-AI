export function generateInsights(expenses) {
  if (!expenses || expenses.length === 0) {
    return {
      summary: "No expenses recorded yet.",
      topCategory: "N/A",
      highestExpense: 0,
      advice: "Start tracking expenses to unlock AI recommendations.",
      riskLevel: "Low",
      budgetStatus: "Healthy",
      shouldApprovePayment: true,
    };
  }

  let total = 0;
  let highest = 0;
  const categories = {};

  expenses.forEach((expense) => {
    const amount = Number(expense.amount || expense[0]) || 0;
    total += amount;

    if (amount > highest) highest = amount;

    const category = expense.category || expense[2] || "Other";
    categories[category] = (categories[category] || 0) + amount;
  });

  const topCategory = Object.keys(categories).reduce((a, b) =>
    categories[a] > categories[b] ? a : b
  );

  let riskLevel = "Low";
  let budgetStatus = "Healthy";
  let shouldApprovePayment = true;

  if (highest > total * 0.5) {
    riskLevel = "Medium";
  }

  if (total > 1000) {
    budgetStatus = "Warning";
  }

  if (riskLevel === "Medium" && budgetStatus === "Warning") {
    shouldApprovePayment = false;
  }

  let advice = `Your highest spending category is ${topCategory}.`;

  if (!shouldApprovePayment) {
    advice +=
      " Spending appears unusually high. Review your finances before making another large payment.";
  } else {
    advice +=
      " Your spending is currently within healthy limits.";
  }

  return {
    summary: `You've recorded ${expenses.length} expenses totaling ${total} ARC.`,
    topCategory,
    highestExpense: highest,
    advice,
    riskLevel,
    budgetStatus,
    shouldApprovePayment,
  };
}
