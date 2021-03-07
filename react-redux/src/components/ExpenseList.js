import React from "react";
import { connect } from "react-redux";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  return (
    <div>
      <h2>expense list</h2>
      <div>
        {props.expenses.map((el) => (
          <ExpenseItem key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    expenses: store.expenses,
    filters: store.filters,
  };
};

export default connect(mapStateToProps)(ExpenseList);
