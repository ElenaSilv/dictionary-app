import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary />
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
