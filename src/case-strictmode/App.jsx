import React from "react";
// renderWithHooksAgain
// invokeEffectsInDev
export default function App() {
  console.log("render");

  React.useEffect(() => {
    console.log("effect mount");
    return () => console.log("effect cleanup");
  }, []);

  return <div>Strict Mode</div>;
}
// 用
// <React.StrictMode>
//   <App />
//   </React.StrictMode>
