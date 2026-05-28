import * as React from "react";

export default function App() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    console.log("effect");
  }, []);

  return (
    <>
      <button onClick={() => setCount(0)}>no-op update</button>
      <button onClick={() => setCount((c) => c + 1)}>real update</button>

      <Child value={count} />
    </>
  );
}

const Child = React.memo(function Child({ value }) {
  console.log("Child render", value);
  return <div>{value}</div>;
});
