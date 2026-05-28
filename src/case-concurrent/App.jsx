import React from "react";
// performConcurrentWorkOnRoot
// shouldYield()
// performUnitOfWork
//你会看到 render 被打断
function SlowList({ value }) {
  const list = [];
  for (let i = 0; i < 5000; i++) {
    list.push(<div key={i}>{value}</div>);
  }
  return list;
}

export default function App() {
  const [text, setText] = React.useState("");

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <SlowList value={text} />
    </>
  );
}
