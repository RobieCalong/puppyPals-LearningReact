import "./App.css";
import { puppyList } from "./data.js";
import { useState } from "react";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  console.log(puppies);

  function handleClick(id) {
    console.log(id);
    setFeatPupId(id);
  }

  const featuredPup = puppies.find((puppy) => puppy.id === featPupId);
  console.log(featuredPup);

  return (
    <div>
      <h1 style={{ color: "green" }}>List of Puppies: </h1>
      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
      {puppies.map((puppy) => {
        return (
          <p
            className="puppyParagraph"
            onClick={() => handleClick(puppy.id)}
            key={puppy.id}
          >
            {puppy.name}
          </p>
        );
      })}
    </div>
  );
}

export default App;
