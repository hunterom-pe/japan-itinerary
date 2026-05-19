import { useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import "../styles/expenses.css";

type Expense = {
  id: string;
  amountJPY: number;
  desc: string;
  timestamp: number;
};

export default function ExpenseTracker() {
  const [isOpen, setIsOpen] = useState(false);
  const [expenses, setExpenses] = useLocalStorage<Expense[]>("jc:expenses", []);
  const [exchangeRate, setExchangeRate] = useLocalStorage<number>("jc:exchangeRate", 150); // Default 150 JPY = 1 USD

  const [amt, setAmt] = useState("");
  const [desc, setDesc] = useState("");

  // Prevent scrolling on body when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const totalJPY = expenses.reduce((sum, e) => sum + e.amountJPY, 0);
  const totalUSD = exchangeRate > 0 ? (totalJPY / exchangeRate).toFixed(2) : "0.00";

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const val = parseInt(amt, 10);
    if (!val || val <= 0) return;

    const newExp: Expense = {
      id: Math.random().toString(36).substring(2, 9),
      amountJPY: val,
      desc: desc.trim() || "Cash Expense",
      timestamp: Date.now(),
    };

    setExpenses([newExp, ...expenses]);
    setAmt("");
    setDesc("");
  };

  const handleDelete = (id: string) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  const formatDate = (ts: number) => {
    return new Date(ts).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  return (
    <>
      <button 
        className="exp-fab" 
        onClick={() => setIsOpen(true)}
        aria-label="Open Expense Tracker"
      >
        💴
      </button>

      <div className={`exp-overlay ${isOpen ? "is-open" : ""}`} onClick={() => setIsOpen(false)}>
        <div className="exp-panel" onClick={(e) => e.stopPropagation()}>
          <header className="exp-header">
            <h2>Expense Tracker</h2>
            <button className="exp-close" onClick={() => setIsOpen(false)} aria-label="Close Expense Tracker">
              &times;
            </button>
          </header>

          <div className="exp-summary">
            <div className="exp-summary__label">Total Spent</div>
            <div className="exp-summary__jpy">¥{totalJPY.toLocaleString()}</div>
            <div className="exp-summary__usd">≈ ${totalUSD} USD</div>
          </div>

          <div className="exp-content">
            <form className="exp-form" onSubmit={handleAdd}>
              <div className="exp-input-group">
                <span className="exp-input-prefix">¥</span>
                <input
                  type="number"
                  className="exp-input"
                  placeholder="Amount"
                  value={amt}
                  onChange={(e) => setAmt(e.target.value)}
                  min="1"
                  required
                />
              </div>
              <div className="exp-input-group">
                <input
                  type="text"
                  className="exp-input"
                  placeholder="What was it for? (optional)"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  maxLength={40}
                />
              </div>
              <button type="submit" className="exp-btn" disabled={!amt || parseInt(amt, 10) <= 0}>
                Add Expense
              </button>
            </form>

            <ul className="exp-list">
              {expenses.map((exp) => (
                <li key={exp.id} className="exp-item">
                  <div className="exp-item__info">
                    <span className="exp-item__desc">{exp.desc}</span>
                    <span className="exp-item__date">{formatDate(exp.timestamp)}</span>
                  </div>
                  <div className="exp-item__right">
                    <span className="exp-item__amt">¥{exp.amountJPY.toLocaleString()}</span>
                    <button 
                      className="exp-item__del" 
                      onClick={() => handleDelete(exp.id)}
                      aria-label="Delete expense"
                    >
                      &times;
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="exp-settings">
            <span className="exp-settings__label">Exchange Rate (JPY per USD)</span>
            <input
              type="number"
              className="exp-settings__input"
              value={exchangeRate}
              onChange={(e) => setExchangeRate(parseFloat(e.target.value) || 1)}
              min="1"
              step="0.1"
            />
          </div>
        </div>
      </div>
    </>
  );
}
