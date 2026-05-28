import * as React from "react";

//断点：dispatchSetState
//enqueueConcurrentHookUpdate
//scheduleUpdateOnFiber

export default function App() {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState("测试");
  if (count < 1) {
    setCount((c) => c + 1);
  }
  return (
    <button
      onClick={() => {
        setCount((c) => c + 1);
      }}
    >
      测试{count}
    </button>
  );
}
