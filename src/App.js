import "./styles.css";
import Review from "./Review";

export default function App() {
  return (
    <div className="App">
      <main>
        <section className="container">
          <div className="title">
            <h2>Review Card</h2>
            <div className="underline"></div>
          </div>
          <Review />
        </section>
      </main>
    </div>
  );
}
