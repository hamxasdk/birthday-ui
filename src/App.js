import React, { useState } from "react";
import data from "./Data";
import List from "./List";
function App() {
  const [people, setpeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays Today</h3>
        <List people={people}></List>
        <button onClick={() => setpeople([])}>clear All</button>
      </section>
    </main>
  );
}
export default App;
