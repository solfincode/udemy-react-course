import React from "react";
import { connect } from "react-redux";

const ExpenseList = (props) => {
  return (
    <div>
      <h2>expense list</h2>
      <p>{props.filters.text}</p>
      <p>{props.expenses.length}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(ExpenseList);
