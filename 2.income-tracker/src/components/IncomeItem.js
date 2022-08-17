import React from "react";

function IncomeItem({ income, index, removeIncome }) {
  let dat = new Date(income.date);
  let day = dat.getDate();
  let month = dat.getMonth() + 1;
  let year = dat.getFullYear();

  const removeHandle = (i) => {
    removeIncome(i);
  };
  return (
    <div className="income-item">
      <button className="remove-item" onClick={() => removeHandle(index)}>
        X
      </button>
      <div className="desc">{income.desc}</div>
      <div className="price">{income.price}</div>
      <div className="date">{day + "/" + month + "/" + year}</div>
    </div>
  );
}

export default IncomeItem;
