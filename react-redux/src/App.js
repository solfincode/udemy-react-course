import "./App.css";
import React from "react";

import ExpenseList from "./components/ExpenseList";
import CountPage from "./components/CountPage";
function App() {
  return (
    <div>
      <h2>app</h2>
      <ExpenseList />
      <CountPage />
    </div>
  );
}

export default App;
