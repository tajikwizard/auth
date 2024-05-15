import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="wrapper">
      <Card>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </Card>
    </div>
  );
}

export default App;
