import React from "react";
import { connect } from "react-redux";

const CountPage = (props) => {
  return (
    <div>
      <ul>
        {props.expenses.map((el) => {
          return <li key={el.id}>{el.description}</li>;
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    expenses: store.expenses,
  };
};
export default connect(mapStateToProps)(CountPage);
