import './App.css';
import Review from './Review';
function App() {
  return (
    <main className="container">
      <section>
        <div className="title">
          <h2>our reviews</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
}
export default App;
