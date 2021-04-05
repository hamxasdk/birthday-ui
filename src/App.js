import React, { useState } from "react";
import data from "./Data";
import List from "./List";
function App() {
  const [people, setpeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>Birthdays Today</h3>
        <List people={people}></List>
      </section>
    </main>
  );
}
export default App;
