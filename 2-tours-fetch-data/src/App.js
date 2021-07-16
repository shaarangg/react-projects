import './App.css';
import { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';


function App() {
  const url = 'https://course-api.com/react-tours-project';
  const [loading, setLoading] = useState(true);

  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  const fetchTours = async () => {
    setLoading(true);
    try {
      const reponse = await fetch(url);
      const tours = await reponse.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if (tours.length === 0) {
    return (
      <main>
        <h2>no tours left</h2>
        <button className="btn" onClick={fetchTours}>Refresh</button>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default App;