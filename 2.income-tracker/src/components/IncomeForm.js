import React, { useRef } from "react";

function IncomeForm({ income, setIncome }) {
  const desc = useRef(null);
  const dat = useRef(null);
  const price = useRef(null);

  const AddIncome = (e) => {
    e.preventDefault();
    let d = dat.current.value.split("-");
    let newD = new Date(d[0], d[1], d[2]);

    setIncome([
      ...income,
      {
        desc: desc.current.value,
        price: price.current.value,
        date: newD.getTime(),
      },
    ]);

    desc.current.value = "";
    price.current.value = null;
    dat.current.value = null;
  };

  return (
    <form className="income-form" onSubmit={AddIncome}>
      <div className="form-inner">
        <input
          type="text"
          name="desc"
          id="desc"
          placeholder="Income Description..."
          ref={desc}
        />
        <input
          type="number"
          name="price"
          id="price"
          placeholder="Price..."
          ref={price}
        />
        <input
          type="date"
          name="date"
          id="date"
          placeholder="Income date..."
          ref={dat}
        />
        <input type="submit" value="Add Income" />
      </div>
    </form>
  );
}

export default IncomeForm;
