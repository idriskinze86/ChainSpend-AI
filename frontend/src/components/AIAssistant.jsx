import { useState } from "react";
import { generateInsights } from "../ai/insights";

function AIAssistant({ expenses }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const insights = generateInsights(expenses);

  function askAI() {
    const q = question.toLowerCase();

    if (q.includes("total") || q.includes("spent")) {
      setAnswer(insights.summary);
    } else if (q.includes("highest")) {
      setAnswer(
        `Your highest expense is ${insights.highestExpense} ARC.`
      );
    } else if (q.includes("category")) {
      setAnswer(
        `Your top spending category is ${insights.topCategory}.`
      );
    } else if (q.includes("budget")) {
      setAnswer(insights.advice);
    } else if (q.includes("payment") || q.includes("approve")) {
      setAnswer(
        insights.shouldApprovePayment
          ? "✅ Based on current spending, this payment appears safe."
          : "⚠️ I recommend reviewing your spending before making another payment."
      );
    } else {
      setAnswer(
        "Try asking: 'How much have I spent?', 'What's my highest expense?', 'What's my top category?', or 'Should I make another payment?'"
      );
    }
  }

  return (
    <div className="dashboard-card">
      <h3>🤖 Ask ChainSpend AI</h3>

      <input
        type="text"
        placeholder="Ask about your expenses..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <br /><br />

      <button onClick={askAI}>Ask AI</button>

      {answer && (
        <>
          <hr />
          <p>{answer}</p>
        </>
      )}
    </div>
  );
}

export default AIAssistant;
