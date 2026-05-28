import React from "react";

// startTransition
// requestTransitionLane
// ensureRootIsScheduled

function SlowList({ value }) {
  const list = [];
  for (let i = 0; i < 3000; i++) {
    list.push(<div key={i}>{value}</div>);
  }
  return list;
}

export default function App() {
  const [text, setText] = React.useState("");
  const [list, setList] = React.useState("");

  const onChange = (e) => {
    const v = e.target.value;
    setText(v);
    React.startTransition(() => {
      setList(v);
    });
  };

  return (
    <>
      <input value={text} onChange={onChange} />
      <SlowList value={list} />
    </>
  );
}
