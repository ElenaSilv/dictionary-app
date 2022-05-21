import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="App-header mb-3 text-center">
          Which word are you looking for?
        </h1>
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
