/**
 * ChainSpend AI - Expense Intelligence Engine (MVP)
 * Built for the Arc Agentic Economy Hackathon
 */

function analyzeExpenses(expenses) {
  if (!expenses || expenses.length === 0) {
    return {
      totalSpent: 0,
      totalExpenses: 0,
      highestExpense: null,
      recommendations: [
        "No expenses recorded yet. Start tracking your spending."
      ]
    };
  }

  let totalSpent = 0;
  let highestExpense = expenses[0];
  let categories = {};

  for (const expense of expenses) {
    totalSpent += Number(expense.amount);

    if (Number(expense.amount) > Number(highestExpense.amount)) {
      highestExpense = expense;
    }

    const category = expense.category || "Other";

    if (!categories[category]) {
      categories[category] = 0;
    }

    categories[category] += Number(expense.amount);
  }

  let topCategory = Object.keys(categories).reduce((a, b) =>
    categories[a] > categories[b] ? a : b
  );

  const recommendations = [];

  recommendations.push(
    `You spent the most on ${topCategory}.`
  );

  recommendations.push(
    "Consider setting a monthly spending limit."
  );

  if (Number(highestExpense.amount) > totalSpent * 0.4) {
    recommendations.push(
      "One expense represents more than 40% of your spending. Review it."
    );
  }

  return {
    totalSpent,
    totalExpenses: expenses.length,
    highestExpense,
    topCategory,
    recommendations
  };
}

module.exports = {
  analyzeExpenses
};
