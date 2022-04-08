import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
  });
  // Create add and remove functions here that changes the
  const add = (key) => {
    inv[key]++;
    let { books, notebooks, pens } = inv;
    setInv({ books, notebooks, pens });
  };

  const remove = (key) => {
    if(inv[key]-1 < 0){
      return;
    }
    inv[key]--;
    let { books, notebooks, pens } = inv;
    setInv({ books, notebooks, pens });
  };
  // state.
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={() => add("books")}>
          +
        </button>
        <button className="circlularButton" onClick={() => remove("books")}>
          -
        </button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={() => add("notebooks")}>
          +
        </button>
        <button className="circlularButton" onClick={() => remove('notebooks')}>-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={() => add("pens")}>
          +
        </button>
        <button className="circlularButton" onClick={() => remove('pens')}>-</button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton">+</button>
        <button className="circlularButton">-</button>
        <span>{inv.inkpens}</span>
      </div>
      {/*calculate total and show it*/}
      total: {inv.books + inv.notebooks + inv.pens}
    </div>
  );
};
