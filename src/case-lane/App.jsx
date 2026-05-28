import React from "react";

//requestUpdateLane
//markRootUpdated
//root.pendingLanes

//👉 同步事件 vs 定时器 lane 不同
export default function App() {
  const [a, setA] = React.useState(0);
  const [b, setB] = React.useState(0);

  const click = () => {
    setA((v) => v + 1);
    setTimeout(() => setB((v) => v + 1));
  };

  return (
    <>
      <div>A: {a}</div>
      <div>B: {b}</div>
      <button onClick={click}>Update</button>
    </>
  );
}
