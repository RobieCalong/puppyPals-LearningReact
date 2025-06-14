import "./App.css";
import { puppyList } from "./data.js";
import { useState } from "react";

function App() {
  const [puppies, setPuppies] = useState(puppyList);

  console.log(puppies);

  return (
    <div>
      <h1>this is a test</h1>

      {puppies.map((puppy) => {
        return <p key={puppy.name}>{puppy.name}</p>;
      })}
    </div>
  );
}

export default App;
