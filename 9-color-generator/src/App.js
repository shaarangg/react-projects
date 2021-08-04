import React, { useState } from 'react';

import Values from 'values.js';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hello")
  }
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" value={color} onChange={(e) => { setColor(e.target.value) }} />
          <button type="submit" className="btn">submit</button>
        </form>
      </section>
      <section className="colors">
        Here color list goes
      </section>
    </>
  );
}

export default App;
