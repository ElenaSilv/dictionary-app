import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header mt-3 mb-3 text-center">
          What are you looking for?
        </header>
        <main>
          <Dictionary defaultKeyword="book" />
        </main>
        <footer className="text-center">
          <a href="https://github.com/ElenaSilv/dictionary-app">
            Open-source code
          </a>{" "}
          by Elena Silvestri Cecinelli
        </footer>
      </div>
    </div>
  );
}
