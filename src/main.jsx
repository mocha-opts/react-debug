import * as React from "react";
import { createRoot } from "react-dom/client";
import CaseSetState from "./case-setState/App.jsx";
import CaseSetStateNoopRender from "./case-setState2/App.jsx";

const root = createRoot(document.getElementById("root"));
const App = () => {
  return <CaseSetStateNoopRender />;
};
root.render(<App />);
