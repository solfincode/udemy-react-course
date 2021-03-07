import React from "react";

const ExpenseItem = (props) => {
  return (
    <div>
      <h3>{props.description}</h3>
      <p>
        {props.amount} | {props.createdAt}
      </p>
    </div>
  );
};

export default ExpenseItem;
