import React from "react";

// reconcileChildrenArray
// mapRemainingChildren
// placeChild

export default function App() {
  const [items, setItems] = React.useState([
    { id: "a", text: "A" },
    { id: "b", text: "B" },
    { id: "c", text: "C" },
  ]);

  return (
    <>
      <button onClick={() => setItems([{ id: "x", text: "X" }, ...items])}>
        Insert
      </button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </>
  );
}
