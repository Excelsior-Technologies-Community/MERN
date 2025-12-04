import React, { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const addExpense = (e) => {
    e.preventDefault();
    if (!title || !amount) return;

    const newItem = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
    };

    setExpenses([newItem, ...expenses]);
    setTitle("");
    setAmount("");
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((item) => item.id !== id));
  };

  const total = expenses.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.heading}>💸 Expense Tracker</h1>

        {/* Form */}
        <form onSubmit={addExpense} style={styles.form}>
          <input
            type="text"
            placeholder="Expense Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={styles.input}
          />

          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={styles.input}
          />

          <button style={styles.addBtn}>+ Add</button>
        </form>

        {/* List */}
        <h3 style={styles.listTitle}>Your Expenses</h3>

        <div style={styles.list}>
          {expenses.length === 0 && (
            <p style={{ textAlign: "center", opacity: 0.8 }}>No expenses yet.</p>
          )}

          {expenses.map((item) => (
            <div key={item.id} style={styles.item}>
              <span style={{ fontWeight: "bold" }}>{item.title}</span>
              <div style={styles.itemRight}>
                <span style={styles.amount}>₹{item.amount}</span>
                <button
                  style={styles.deleteBtn}
                  onClick={() => deleteExpense(item.id)}
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Total */}
        <div style={styles.totalBox}>
          <span>Total</span>
          <h2>₹{total}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;

// Styles
const styles = {
  page: {
    height: "100vh",
    background:
      "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial",
  },

  card: {
    width: "430px",
    padding: "25px",
    borderRadius: "20px",
    backdropFilter: "blur(12px)",
    background: "rgba(255, 255, 255, 0.35)",
    border: "1px solid rgba(255, 255, 255, 0.4)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
  },

  heading: {
    textAlign: "center",
    marginBottom: "15px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "20px",
  },

  input: {
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    fontSize: "15px",
    background: "rgba(255,255,255,0.7)",
  },

  addBtn: {
    padding: "12px",
    background: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "16px",
  },

  listTitle: {
    marginBottom: "10px",
  },

  list: {
    maxHeight: "200px",
    overflowY: "auto",
    paddingRight: "5px",
  },

  item: {
    background: "rgba(255,255,255,0.6)",
    backdropFilter: "blur(8px)",
    padding: "12px",
    borderRadius: "12px",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "space-between",
  },

  itemRight: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  amount: {
    fontWeight: "bold",
    color: "#444",
  },

  deleteBtn: {
    background: "red",
    border: "none",
    color: "#fff",
    padding: "5px 10px",
    borderRadius: "8px",
    cursor: "pointer",
  },

  totalBox: {
    marginTop: "20px",
    padding: "15px",
    background: "rgba(255,255,255,0.7)",
    borderRadius: "15px",
    textAlign: "center",
    fontWeight: "bold",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  },
};
