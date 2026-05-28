import React from "react";
import { getState, setState, subscribe } from "./store";

export default function App() {
  const [_, force] = React.useState(0);

  React.useEffect(() => {
    return subscribe(() => force((v) => v + 1));
  }, []);

  const value = getState();

  return (
    <>
      <div>{value}</div>
      <button onClick={() => setState(value + 1)}>+</button>
    </>
  );
}
