export function generateInsights(expenses) {
  if (!expenses || expenses.length === 0) {
    return {
      summary: "No expenses recorded yet.",
      topCategory: "N/A",
      highestExpense: 0,
      advice: "Start tracking expenses to receive AI insights."
    };
  }

  let total = 0;
  let highest = 0;
  const categories = {};

  expenses.forEach((expense) => {
    const amount = Number(expense.amount) || 0;
    total += amount;

    if (amount > highest) highest = amount;

    const category = expense.category || "Other";
    categories[category] = (categories[category] || 0) + amount;
  });

  const topCategory = Object.keys(categories).reduce((a, b) =>
    categories[a] > categories[b] ? a : b
  );

  let advice = `Your highest spending category is ${topCategory}.`;

  if (categories[topCategory] > total * 0.5) {
    advice += " Consider setting a monthly budget for this category.";
  }

  return {
    summary: `You've recorded ${expenses.length} expenses totaling ${total}.`,
    topCategory,
    highestExpense: highest,
    advice
  };
}
