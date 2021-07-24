import React, { useState } from 'react';

import Values from 'values.js';
import SingleColor from './SingleColor';
function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f12050").all(10));
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true)
      console.log(error)
    }

  }
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" value={color} onChange={(e) => { setColor(e.target.value) }} placeholder="#f12050" className={`${error ? "error" : null}`} />
          <button type="submit" className="btn">generate</button>
        </form>
      </section>
      <section className="colors">
        {
          list.map((color, index) => {
            return <SingleColor key={index} {...color} hexColor={color.hex} index={index} />
          })
        }
      </section>
    </>
  );
}

export default App;