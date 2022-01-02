import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeYear = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredexpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeYear}
        />
        <ExpensesChart expenses={filteredexpenses} />
        <ExpensesList items={filteredexpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
