import React from "react";
import { read } from "./resource";
// throwException
// getSuspenseHandler
// attachPingListener
function Data() {
  const text = read();
  return <div>{text}</div>;
}

export default function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Data />
    </React.Suspense>
  );
}
